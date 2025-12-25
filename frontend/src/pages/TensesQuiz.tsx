import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle, MoveRight, Layers, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { separateTensesData } from '../data/separateTensesData';
import { mixedTensesQuizData } from '../data/mixedTensesQuizData';
import { shuffleArray } from '../utils/quizUtils';
import { QuizQuestion } from '../types';
import AdBanner from '../components/AdBanner';

export default function TensesQuiz() {
  const navigate = useNavigate();
  
  // State
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | number | string[] | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Start Quiz Function
  const startQuiz = (topicId: string) => {
    let rawQuestions: QuizQuestion[] = [];

    if (topicId === 'mixed') {
      rawQuestions = [...mixedTensesQuizData];
    } else {
      const topic = separateTensesData.find(t => t.id === topicId);
      if (topic) {
        rawQuestions = [...topic.questions];
      }
    }

    if (rawQuestions.length === 0) {
      alert("Coming soon! โจทย์สำหรับหัวข้อนียังไม่พร้อมใช้งานครับ");
      return;
    }

    // Shuffle only questions, NOT options for Choice/TF (unless we track answers by string)
    // For Reorder, we MUST shuffle options.
    const shuffledQ = shuffleArray(rawQuestions).map(q => {
      if (q.options && q.type === 'reorder') {
          return { ...q, options: shuffleArray(q.options) };
      }
      return q;
    });

    setQuestions(shuffledQ);
    setUserAnswers(new Array(shuffledQ.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setSelectedTopicId(topicId);
    window.scrollTo(0, 0);
  };

  const handleBackToMenu = () => {
    setSelectedTopicId(null);
    setQuestions([]);
    setIsFinished(false);
  };

  // --- Input Handlers ---
  const handleChoiceSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleTextChange = (text: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = text;
    setUserAnswers(newAnswers);
  };

  const handleReorderSelect = (word: string) => {
    const currentAns = (userAnswers[currentQuestionIndex] as string[]) || [];
    const newAns = [...currentAns, word];
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = newAns;
    setUserAnswers(newAnswers);
  };

  const handleReorderRemove = (indexToRemove: number) => {
    const currentAns = (userAnswers[currentQuestionIndex] as string[]) || [];
    const newAns = currentAns.filter((_, i) => i !== indexToRemove);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = newAns;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      window.scrollTo(0, 0);
    }
  };

  const checkAnswer = (q: QuizQuestion, ans: any): boolean => {
    if (ans === null || ans === undefined) return false;
    
    if (q.type === 'reorder') {
      const correct = q.correctAnswer as string[];
      const user = ans as string[];
      if (!user || user.length !== correct.length) return false;
      return user.every((val, i) => val === correct[i]);
    } 
    else if (q.type === 'fill-blank') {
      const userStr = String(ans).toLowerCase().replace(/\s+/g, ' ').trim();
      const correctStr = String(q.correctAnswer).toLowerCase().replace(/\s+/g, ' ').trim();
      return userStr === correctStr; 
    } 
    else {
      return ans === q.correctAnswer;
    }
  };

  // --- RENDER: MENU ---
  if (!selectedTopicId) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <button onClick={() => navigate('/grammar')} className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-800 shadow-sm border border-slate-100"><ArrowLeft size={24} /></button>
            <div>
              <h1 className="text-3xl font-black text-slate-800">Tenses Master Quiz</h1>
              <p className="text-slate-500">เลือก Tense ที่ต้องการฝึกฝน หรือทำแบบทดสอบรวม</p>
            </div>
          </div>

          <div onClick={() => startQuiz('mixed')} className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl cursor-pointer hover:scale-[1.01] transition-transform mb-10 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Mixed Tenses Challenge 🏆</h2>
                <p className="text-indigo-100 text-lg">รวมมิตร 12 Tense (30 ข้อ) สุ่มโจทย์ท้าทาย!</p>
              </div>
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold flex items-center gap-2 group-hover:bg-indigo-50 transition-colors shadow-sm">เริ่มทดสอบรวม <Play size={20} fill="currentColor" /></button>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2"><Layers size={24} className="text-indigo-500"/> ฝึกแยกราย Tense (ชุดละ 20 ข้อ)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {separateTensesData.map((topic) => (
              <button key={topic.id} onClick={() => startQuiz(topic.id)} className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-400 hover:shadow-md text-left transition-all group relative overflow-hidden flex flex-col h-full">
                 <div className="flex justify-between items-start mb-3 w-full">
                   <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{topic.name}</h3>
                   <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">พร้อมสอบ</span>
                 </div>
                 <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{topic.description}</p>
                 <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider w-full">
                    <span>20 ข้อ</span> <span className="group-hover:translate-x-1 transition-transform text-indigo-300 group-hover:text-indigo-500"><MoveRight size={16}/></span>
                 </div>
              </button>
            ))}
          </div>
          <AdBanner className="mt-10"/>
        </div>
      </div>
    );
  }

  // --- RENDER: SCORE / QUIZ ---
  if (isFinished) {
    const score = questions.reduce((acc, q, index) => checkAnswer(q, userAnswers[index]) ? acc + 1 : acc, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 relative">
            <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg text-white">🏆</div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">Topic: <span className="text-indigo-600 font-bold">{selectedTopicId === 'mixed' ? 'Mixed Tenses' : separateTensesData.find(t => t.id === selectedTopicId)?.name}</span></p>
            <div className="flex justify-center items-end gap-2 mb-8">
              <span className="text-6xl font-black text-indigo-600">{score}</span>
              <span className="text-2xl font-bold text-slate-400 mb-2">/ {questions.length}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => startQuiz(selectedTopicId!)} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg"><RefreshCw size={20} /> ทำอีกครั้ง</button>
              <button onClick={handleBackToMenu} className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"><ArrowLeft size={20} /> กลับเมนูหลัก</button>
            </div>
          </motion.div>
          {/* Solutions */}
          <div className="space-y-4">
             <h3 className="text-2xl font-bold text-slate-800 ml-2">เฉลย:</h3>
             {questions.map((q, index) => {
               const isCorrect = checkAnswer(q, userAnswers[index]);
               return (
                 <div key={index} className={`bg-white rounded-xl p-4 border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} shadow-sm`}>
                    <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-800 flex-1">{index + 1}. {q.question}</span>
                        {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0 ml-2" size={20} /> : <XCircle className="text-red-500 shrink-0 ml-2" size={20} />}
                    </div>
                    {!isCorrect && <div className="text-sm text-red-500 mt-2 font-medium">ตอบถูก: {q.type === 'reorder' ? (q.correctAnswer as string[]).join(' ') : q.type === 'fill-blank' ? q.correctAnswer : q.options![q.correctAnswer as number]}</div>}
                    
                    {/* ใช้ AlertCircle ตรงนี้แล้วครับ */}
                    <div className="text-xs text-slate-500 mt-2 flex gap-1.5 items-start">
                      <AlertCircle size={14} className="shrink-0 mt-0.5 text-indigo-400" />
                      <span>{q.explanation}</span>
                    </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    );
  }

  // Quiz Card
  const q = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const userAnswer = userAnswers[currentQuestionIndex];
  const isAnswered = userAnswer !== null && userAnswer !== '' && (!Array.isArray(userAnswer) || userAnswer.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
       <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button onClick={handleBackToMenu} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"><ArrowLeft size={20} /> ออก</button>
        <div className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">ข้อที่ {currentQuestionIndex + 1} / {questions.length}</div>
      </div>
      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden min-h-[400px] flex flex-col">
          <div className="w-full h-1.5 bg-slate-100"><motion.div className="h-full bg-indigo-500" animate={{ width: `${progress}%` }} /></div>
          <div className="p-8 md:p-10 flex-1 flex flex-col">
             <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">{q.type}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">{q.question}</h2>
             </div>
             <div className="flex-1">
                {(q.type === 'choice' || q.type === 'true-false') && q.options && (
                    <div className="grid gap-3">{q.options.map((opt, idx) => (
                        <button key={idx} onClick={() => handleChoiceSelect(idx)} className={`p-4 rounded-xl text-left font-semibold border-2 transition-all flex justify-between items-center ${userAnswer === idx ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-100 hover:border-indigo-200'}`}>{opt} {userAnswer === idx && <div className="w-4 h-4 bg-indigo-500 rounded-full" />}</button>
                    ))}</div>
                )}
                {q.type === 'fill-blank' && <input type="text" value={userAnswer as string || ''} onChange={(e) => handleTextChange(e.target.value)} placeholder="Type answer..." className="w-full p-5 text-xl border-2 border-slate-200 rounded-xl focus:border-indigo-500 outline-none" autoFocus />}
                {q.type === 'reorder' && q.options && (
                    <div className="space-y-6">
                        <div className="min-h-[60px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2">{(userAnswer as string[] || []).map((word, idx) => (<button key={idx} onClick={() => handleReorderRemove(idx)} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg font-bold hover:bg-red-100">{word}</button>))}</div>
                        <div className="flex flex-wrap gap-2">{q.options.map((word, idx) => {
                             const usedCount = (userAnswer as string[] || []).filter(w => w === word).length;
                             const totalCount = q.options!.filter(w => w === word).length;
                             return <button key={idx} onClick={() => usedCount < totalCount && handleReorderSelect(word)} disabled={usedCount >= totalCount} className={`px-4 py-2 rounded-lg font-bold border-2 ${usedCount >= totalCount ? 'opacity-30' : 'hover:border-indigo-400'}`}>{word}</button>
                        })}</div>
                    </div>
                )}
             </div>
             <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <button onClick={handleNext} disabled={!isAnswered} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 transition-all">{currentQuestionIndex === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'} <MoveRight size={20} /></button>
             </div>
          </div>
      </div>
    </div>
  );
}