import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle, RotateCcw, Home, ArrowRight, BarChart2, Eye, ArrowLeft, BookOpen } from 'lucide-react';
import { mockExamData } from '../data/mockExamData';
import { cn } from '../utils/cn';

const FULL_TEST_ORDER = [
  'listening-part1', 'listening-part2', 'listening-part3', 'listening-part4',
  'reading-part5', 'reading-part6', 'reading-part7'
];

interface PartResult {
  partId: string;
  title: string;
  score: number;
  total: number;
  timeUsed: number;
  answers: Record<number, number>;
}

export default function ToeicExam() {
  const { partId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isFullTest = location.state?.isFullTest || false;
  const previousResults: PartResult[] = location.state?.results || [];

  const examData = mockExamData[partId || ''] || mockExamData['listening-part1'];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(examData.timeLimit);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewPartId, setReviewPartId] = useState<string | null>(null);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  useEffect(() => {
    if (timeLeft === 0 && !isSubmitted) submitExam();
  }, [timeLeft]);

  const handleAnswer = (choiceIndex: number) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [currentQ]: choiceIndex });
  };

  const submitExam = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateScore = () => {
    let score = 0;
    examData.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleNextPart = () => {
    const currentScore = calculateScore();
    const timeUsed = examData.timeLimit - timeLeft;
    
    const currentResult: PartResult = {
      partId: examData.id,
      title: examData.title,
      score: currentScore,
      total: examData.questions.length,
      timeUsed: timeUsed,
      answers: answers
    };

    const updatedResults = [...previousResults, currentResult];
    const currentIndex = FULL_TEST_ORDER.indexOf(partId || '');
    
    if (currentIndex !== -1 && currentIndex < FULL_TEST_ORDER.length - 1) {
      const nextPartId = FULL_TEST_ORDER[currentIndex + 1];
      navigate(`/toeic/exam/${nextPartId}`, {
        state: { isFullTest: true, results: updatedResults }
      });
      window.scrollTo(0, 0); 
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- REVIEW VIEW ---
  const ReviewView = ({ data, userAnswers, onBack }: { data: any, userAnswers: Record<number, number>, onBack?: () => void }) => {
    return (
      <div className="space-y-6">
        {onBack && (
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-4 transition-colors">
            <ArrowLeft size={20} /> Back to Summary
          </button>
        )}
        <h3 className="text-2xl font-black text-slate-700 border-b pb-4">Review: {data.title}</h3>
        <div className="space-y-6">
          {data.questions.map((q: any, idx: number) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div key={q.id} className={cn("bg-white p-6 rounded-2xl border-l-8 shadow-sm", isCorrect ? "border-emerald-400" : "border-red-400")}>
                {q.passage && (
                  <div className="mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm font-mono whitespace-pre-wrap text-slate-600 max-h-60 overflow-y-auto">
                    {q.passage}
                  </div>
                )}
                <div className="flex gap-3 mb-3">
                  <span className="font-black text-slate-400 min-w-[30px]">Q{idx + 1}.</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-lg mb-2">{q.text}</p>
                    {q.image && <img src={q.image} alt="Question" className="mb-4 rounded-xl max-h-60 object-cover border border-slate-100" />}
                  </div>
                </div>
                <div className="ml-10 space-y-2">
                  {q.choices.map((choice: string, cIdx: number) => (
                    <div key={cIdx} className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium", cIdx === q.correctAnswer ? "bg-emerald-100 text-emerald-700" : (cIdx === userAnswers[idx] && !isCorrect) ? "bg-red-100 text-red-700 line-through" : "text-slate-500")}>
                      {choice}
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm font-medium flex gap-2 items-start">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold">Explanation:</span> {q.explanation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- RESULT DASHBOARD ---
  if (isSubmitted) {
    const score = calculateScore();
    const timeUsed = examData.timeLimit - timeLeft;
    const currentIndex = FULL_TEST_ORDER.indexOf(partId || '');
    const isLastPart = currentIndex === FULL_TEST_ORDER.length - 1;

    if (isFullTest && isLastPart) {
      const allResults = [...previousResults];
      if (!allResults.find(r => r.partId === examData.id)) {
         allResults.push({ partId: examData.id, title: examData.title, score, total: examData.questions.length, timeUsed, answers });
      }

      if (reviewPartId) {
        const reviewData = allResults.find(r => r.partId === reviewPartId);
        const mockDataForReview = mockExamData[reviewPartId];
        if (reviewData && mockDataForReview) return <div className="max-w-4xl mx-auto pb-10 pt-4"><ReviewView data={mockDataForReview} userAnswers={reviewData.answers} onBack={() => setReviewPartId(null)} /></div>;
      }

      const totalScore = allResults.reduce((acc, curr) => acc + curr.score, 0);
      const totalQuestions = allResults.reduce((acc, curr) => acc + curr.total, 0);
      
      return (
        <div className="max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-slate-100">
            <h2 className="text-4xl font-black text-slate-800 mb-6 text-center">Full Test Complete! 🎉</h2>
            <div className="bg-blue-50 p-6 rounded-3xl text-center border border-blue-100 mb-10">
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Total Score</p>
                <p className="text-6xl font-black text-blue-700">{totalScore} <span className="text-2xl text-blue-400">/ {totalQuestions}</span></p>
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2"><BarChart2 /> Performance Breakdown</h3>
            <div className="space-y-3 mb-10">
              {allResults.map((r, idx) => (
                <div key={idx} onClick={() => setReviewPartId(r.partId)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold border border-slate-200">{idx + 1}</div>
                    <p className="font-bold text-slate-700 group-hover:text-blue-700">{r.title}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-black text-lg">{r.score}/{r.total}</span>
                    <Eye size={20} className="text-slate-300 group-hover:text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center"><button onClick={() => navigate('/toeic')} className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all">Back to Menu</button></div>
          </motion.div>
        </div>
      );
    }

    const percentage = Math.round((score / examData.questions.length) * 100);
    return (
      <div className="max-w-4xl mx-auto space-y-8 pb-10">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[2.5rem] p-10 text-center shadow-xl border-2 border-slate-100">
          <h2 className="text-4xl font-black text-slate-800 mb-2">{isFullTest ? "Part Completed!" : "Result Summary"}</h2>
          <p className="text-slate-500 font-medium mb-4">Part: {examData.title}</p>
          <div className="flex justify-center mb-8">
            <div className={cn("w-48 h-48 rounded-full flex flex-col items-center justify-center border-[8px]", percentage >= 80 ? "border-emerald-400 bg-emerald-50 text-emerald-600" : percentage >= 50 ? "border-amber-400 bg-amber-50 text-amber-600" : "border-red-400 bg-red-50 text-red-600")}>
              <span className="text-6xl font-black">{score}</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-70">of {examData.questions.length}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            {isFullTest ? (
              <button onClick={handleNextPart} className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-colors shadow-lg shadow-blue-200 animate-bounce">Go to Next Part <ArrowRight size={24} /></button>
            ) : (
              <button onClick={() => navigate('/toeic')} className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-colors shadow-lg">Back to Menu</button>
            )}
          </div>
        </motion.div>
        {!isFullTest && <ReviewView data={examData} userAnswers={answers} />}
      </div>
    );
  }

  // --- EXAM VIEW (SPLIT SCREEN FOR PASSAGE) ---
  const currentQuestion = examData.questions[currentQ];
  const hasPassage = !!currentQuestion.passage;

  return (
    <div className={cn("mx-auto pb-20", hasPassage ? "max-w-7xl px-4" : "max-w-3xl")}>
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between mb-6 sticky top-2 z-20">
        <div>
          <h2 className="font-black text-slate-700">{examData.title}</h2>
          <p className="text-xs text-slate-400 font-bold">Question {currentQ + 1} of {examData.questions.length}</p>
        </div>
        <div className={cn("flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg", timeLeft < 60 ? "bg-red-100 text-red-600 animate-pulse" : "bg-blue-50 text-blue-600")}>
          <Clock size={20} />{formatTime(timeLeft)}
        </div>
      </div>

      <div className={cn("gap-6", hasPassage ? "grid grid-cols-1 lg:grid-cols-2 items-start" : "")}>
        
        {/* LEFT COLUMN: PASSAGE (Sticky on Desktop) */}
        {hasPassage && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] p-8 shadow-md border border-slate-100 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold border-b border-blue-100 pb-2">
              <BookOpen size={20} /> Reading Passage
            </div>
            <div className="prose prose-slate max-w-none font-medium text-slate-600 whitespace-pre-wrap leading-relaxed">
              {currentQuestion.passage}
            </div>
          </motion.div>
        )}

        {/* RIGHT COLUMN: QUESTION */}
        <motion.div 
          key={currentQ}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 min-h-[400px] flex flex-col"
        >
          <div className="flex-1">
            {currentQuestion.image && (
               <div className="mb-6 rounded-xl overflow-hidden border border-slate-100">
                 <img src={currentQuestion.image} alt="Question" className="w-full h-auto object-cover max-h-80" />
               </div>
            )}
            <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed whitespace-pre-line">
              {currentQuestion.text}
            </h3>
            <div className="space-y-3">
              {currentQuestion.choices.map((choice, idx) => (
                <button key={idx} onClick={() => handleAnswer(idx)} className={cn("w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group", answers[currentQ] === idx ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md scale-[1.01]" : "border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors flex-shrink-0", answers[currentQ] === idx ? "bg-blue-500 border-blue-500 text-white" : "border-slate-200 text-slate-400 group-hover:border-blue-300")}>{['A', 'B', 'C', 'D'][idx]}</div>
                  <span className="font-medium text-lg">{choice}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-100">
            <button disabled={currentQ === 0} onClick={() => setCurrentQ(prev => prev - 1)} className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"><ChevronLeft size={20} /> Previous</button>
            {currentQ === examData.questions.length - 1 ? (
              <button onClick={submitExam} className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">Finish Part <CheckCircle size={18} /></button>
            ) : (
              <button onClick={() => setCurrentQ(prev => prev + 1)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2">Next Question <ChevronRight size={20} /></button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}