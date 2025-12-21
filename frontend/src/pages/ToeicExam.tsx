import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle, RotateCcw, Home, ArrowRight, BarChart2, Eye, ArrowLeft } from 'lucide-react';
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
  answers: Record<number, number>; // เพิ่ม: เก็บคำตอบเพื่อใช้ Review ทีหลัง
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

  // State สำหรับโหมด Review ในหน้า Full Test Summary
  const [reviewPartId, setReviewPartId] = useState<string | null>(null);

  // Timer
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
    
    // บันทึกผล Part ปัจจุบัน พร้อม Answers
    const currentResult: PartResult = {
      partId: examData.id,
      title: examData.title,
      score: currentScore,
      total: examData.questions.length,
      timeUsed: timeUsed,
      answers: answers // เก็บคำตอบไว้
    };

    const updatedResults = [...previousResults, currentResult];
    const currentIndex = FULL_TEST_ORDER.indexOf(partId || '');
    
    if (currentIndex !== -1 && currentIndex < FULL_TEST_ORDER.length - 1) {
      // ไป Part ต่อไป
      const nextPartId = FULL_TEST_ORDER[currentIndex + 1];
      navigate(`/toeic/exam/${nextPartId}`, {
        state: {
          isFullTest: true,
          results: updatedResults
        }
      });
      window.scrollTo(0, 0); 
    } else {
      // จบการสอบ (Logic จะไปจัดการในส่วน render)
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- SUB-COMPONENT: REVIEW VIEW (เฉลยละเอียด) ---
  const ReviewView = ({ data, userAnswers, onBack }: { data: any, userAnswers: Record<number, number>, onBack?: () => void }) => {
    return (
      <div className="space-y-6">
        {onBack && (
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-4 transition-colors">
            <ArrowLeft size={20} /> Back to Summary
          </button>
        )}
        
        <h3 className="text-2xl font-black text-slate-700 border-b pb-4">
          Review: {data.title}
        </h3>

        <div className="space-y-6">
          {data.questions.map((q: any, idx: number) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                key={q.id} 
                className={cn(
                  "bg-white p-6 rounded-2xl border-l-8 shadow-sm text-left",
                  isCorrect ? "border-emerald-400" : "border-red-400"
                )}
              >
                <div className="flex gap-3 mb-3">
                  <span className="font-black text-slate-400 min-w-[30px]">Q{idx + 1}.</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-lg mb-2">{q.text}</p>
                    {q.image && (
                      <img src={q.image} alt="Question" className="mb-4 rounded-xl max-h-60 object-cover border border-slate-100" />
                    )}
                  </div>
                </div>
                
                <div className="ml-10 space-y-2">
                  {q.choices.map((choice: string, cIdx: number) => (
                    <div key={cIdx} className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium",
                      cIdx === q.correctAnswer ? "bg-emerald-100 text-emerald-700" :
                      (cIdx === userAnswers[idx] && !isCorrect) ? "bg-red-100 text-red-700 line-through" : "text-slate-500"
                    )}>
                      {cIdx === q.correctAnswer ? <CheckCircle size={16} /> : 
                       (cIdx === userAnswers[idx] && !isCorrect) ? <XCircle size={16} /> : 
                       <div className="w-4" />}
                      {choice}
                    </div>
                  ))}
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm font-medium flex gap-2 items-start">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold">Explanation:</span> {q.explanation}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {onBack && (
          <div className="flex justify-center pt-8">
             <button onClick={onBack} className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all">
                Back to Summary
             </button>
          </div>
        )}
      </div>
    );
  };

  // --- RESULT / DASHBOARD VIEW ---
  if (isSubmitted) {
    const score = calculateScore();
    const timeUsed = examData.timeLimit - timeLeft;
    const currentIndex = FULL_TEST_ORDER.indexOf(partId || '');
    const isLastPart = currentIndex === FULL_TEST_ORDER.length - 1;

    // ==========================================
    // CASE 1: FULL TEST SUMMARY (DASHBOARD)
    // ==========================================
    if (isFullTest && isLastPart) {
      // รวมผลลัพธ์ทั้งหมดรวมถึง Part นี้ (ถ้ายังไม่มีใน previousResults)
      const allResults = [...previousResults];
      // เช็คเพื่อไม่ให้ push ซ้ำถ้ารีเรนเดอร์
      if (!allResults.find(r => r.partId === examData.id)) {
         allResults.push({
            partId: examData.id,
            title: examData.title,
            score,
            total: examData.questions.length,
            timeUsed,
            answers: answers
         });
      }

      // ถ้ากำลังดู Review ของ Part ไหนอยู่ ให้แสดงหน้านั้นแทน Dashboard
      if (reviewPartId) {
        const reviewData = allResults.find(r => r.partId === reviewPartId);
        const mockDataForReview = mockExamData[reviewPartId];
        
        if (reviewData && mockDataForReview) {
          return (
            <div className="max-w-4xl mx-auto pb-10 pt-4">
              <ReviewView 
                data={mockDataForReview} 
                userAnswers={reviewData.answers} 
                onBack={() => setReviewPartId(null)} 
              />
            </div>
          );
        }
      }

      // คำนวณคะแนนรวม
      const totalScore = allResults.reduce((acc, curr) => acc + curr.score, 0);
      const totalQuestions = allResults.reduce((acc, curr) => acc + curr.total, 0);
      
      const listeningScore = allResults.filter(r => r.partId.includes('listening')).reduce((acc, curr) => acc + curr.score, 0);
      const readingScore = allResults.filter(r => r.partId.includes('reading')).reduce((acc, curr) => acc + curr.score, 0);

      return (
        <div className="max-w-4xl mx-auto pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-slate-100">
            <h2 className="text-4xl font-black text-slate-800 mb-6 text-center">Full Test Complete! 🎉</h2>
            
            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-50 p-6 rounded-3xl text-center border border-blue-100">
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Total Score</p>
                <p className="text-5xl font-black text-blue-700">{totalScore} <span className="text-2xl text-blue-400">/ {totalQuestions}</span></p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl text-center border border-emerald-100">
                <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Listening</p>
                <p className="text-5xl font-black text-emerald-700">{listeningScore}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-3xl text-center border border-amber-100">
                <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Reading</p>
                <p className="text-5xl font-black text-amber-700">{readingScore}</p>
              </div>
            </div>

            {/* Performance Breakdown List */}
            <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2">
              <BarChart2 /> Performance Breakdown
            </h3>
            <p className="text-slate-500 mb-4 text-sm">Click on any part to review your answers.</p>
            
            <div className="space-y-3 mb-10">
              {allResults.map((r, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.01, x: 5 }}
                  onClick={() => setReviewPartId(r.partId)} // กดเพื่อดู Review
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 font-bold border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{r.title}</p>
                      <p className="text-xs text-slate-400 font-bold flex items-center gap-1">
                        <Clock size={12} /> {formatTime(r.timeUsed)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className={cn("font-black text-lg", r.score === r.total ? "text-emerald-600" : "text-slate-800")}>
                        {r.score}
                      </span>
                      <span className="text-slate-400 text-sm"> / {r.total}</span>
                    </div>
                    <Eye size={20} className="text-slate-300 group-hover:text-blue-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button onClick={() => navigate('/toeic')} className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all flex items-center gap-2">
                <Home size={18} /> Back to Menu
              </button>
            </div>
          </motion.div>
        </div>
      );
    }

    // ==========================================
    // CASE 2: SINGLE PART SUMMARY (or Mid-Test Result)
    // ==========================================
    const percentage = Math.round((score / examData.questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto space-y-8 pb-10">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[2.5rem] p-10 text-center shadow-xl border-2 border-slate-100">
          <h2 className="text-4xl font-black text-slate-800 mb-2">{isFullTest ? "Part Completed!" : "Result Summary"}</h2>
          <p className="text-slate-500 font-medium mb-4">Part: {examData.title}</p>
          <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg text-slate-500 font-bold text-sm mb-8">
            Time Used: {formatTime(timeUsed)}
          </div>
          
          <div className="flex justify-center mb-8">
            <div className={cn(
              "w-48 h-48 rounded-full flex flex-col items-center justify-center border-[8px]",
              percentage >= 80 ? "border-emerald-400 bg-emerald-50 text-emerald-600" :
              percentage >= 50 ? "border-amber-400 bg-amber-50 text-amber-600" : "border-red-400 bg-red-50 text-red-600"
            )}>
              <span className="text-6xl font-black">{score}</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-70">of {examData.questions.length}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {isFullTest ? (
              <button onClick={handleNextPart} className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-colors shadow-lg shadow-blue-200 animate-bounce">
                Go to Next Part <ArrowRight size={24} />
              </button>
            ) : (
              <>
                <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors">
                  <RotateCcw size={20} /> Try Again
                </button>
                <button onClick={() => navigate('/toeic')} className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-colors shadow-lg">
                  <Home size={20} /> Back to Menu
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Answer Key (Show only if NOT full test, because full test reviews at the end) */}
        {!isFullTest && (
          <ReviewView data={examData} userAnswers={answers} />
        )}
      </div>
    );
  }

  // --- EXAM VIEW (ขณะทำข้อสอบ) ---
  return (
    <div className="max-w-3xl mx-auto pb-20">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between mb-6 sticky top-20 z-20">
        <div>
          <h2 className="font-black text-slate-700">{examData.title}</h2>
          <p className="text-xs text-slate-400 font-bold">
             Question {currentQ + 1} of {examData.questions.length} 
             {isFullTest && <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full">Full Test Mode</span>}
          </p>
        </div>
        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg",
          timeLeft < 60 ? "bg-red-100 text-red-600 animate-pulse" : "bg-blue-50 text-blue-600"
        )}>
          <Clock size={20} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Card */}
      <motion.div 
        key={currentQ}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 min-h-[400px] flex flex-col"
      >
        <div className="flex-1">
          {examData.questions[currentQ].image && (
             <div className="mb-6 rounded-xl overflow-hidden border border-slate-100">
               <img src={examData.questions[currentQ].image} alt="Test Question" className="w-full h-auto object-cover max-h-80" />
             </div>
          )}
          <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed whitespace-pre-line">
            {examData.questions[currentQ].text}
          </h3>
          <div className="space-y-3">
            {examData.questions[currentQ].choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group",
                  answers[currentQ] === idx 
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md scale-[1.01]" 
                    : "border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors flex-shrink-0",
                  answers[currentQ] === idx ? "bg-blue-500 border-blue-500 text-white" : "border-slate-200 text-slate-400 group-hover:border-blue-300"
                )}>
                  {['A', 'B', 'C', 'D'][idx]}
                </div>
                <span className="font-medium text-lg">{choice}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-100">
          <button 
            disabled={currentQ === 0}
            onClick={() => setCurrentQ(prev => prev - 1)}
            className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          {currentQ === examData.questions.length - 1 ? (
            <button 
              onClick={submitExam}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2"
            >
              Finish Part <CheckCircle size={18} />
            </button>
          ) : (
            <button 
              onClick={() => setCurrentQ(prev => prev + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2"
            >
              Next Question <ChevronRight size={20} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}