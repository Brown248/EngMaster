// frontend/src/pages/TensesQuiz.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mixedTensesQuizData } from '../data/mixedTensesQuizData'; // ใช้ชุด 30 ข้อ
import { shuffleArray } from '../utils/quizUtils'; // เรียกใช้ฟังก์ชันสุ่ม
import { QuizQuestion } from '../types';
import AdBanner from '../components/AdBanner';

export default function TensesQuiz() {
  const navigate = useNavigate();
  
  // State
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // เก็บคำตอบ: รองรับทั้ง number (choice/TF), string (fill-blank), string[] (reorder)
  const [userAnswers, setUserAnswers] = useState<(string | number | string[] | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize & Randomize
  useEffect(() => {
    restartQuiz();
  }, []);

  const restartQuiz = () => {
    // 1. สุ่มลำดับข้อคำถาม
    const shuffledQ = shuffleArray(mixedTensesQuizData).map(q => {
      // 2. ถ้าเป็น Choice หรือ Matching ให้สุ่มตัวเลือกด้วย
      if (q.options && (q.type === 'choice' || q.type === 'matching' || q.type === 'reorder')) {
         // สำหรับ Choice/Matching ปกติ correctAnswer เป็น index ซึ่งจะเพี้ยนถ้าสุ่ม options
         // ในที่นี้เราจะคง options ไว้ตามเดิมใน mixedTensesData ถ้าอยากสุ่ม options ต้องแก้ logic ตรวจคำตอบให้เป็น string matching
         // *เพื่อความง่ายและกันบั๊กในโค้ดตัวอย่างนี้ จะขอสุ่มเฉพาะลำดับข้อคำถาม (Questions) ก่อนครับ*
         // แต่ถ้าเป็น Reorder ต้องสุ่ม Options เสมอเพื่อให้ผู้เล่นเรียงใหม่
         if(q.type === 'reorder') {
            return { ...q, options: shuffleArray(q.options) };
         }
      }
      return q;
    });

    setQuestions(shuffledQ);
    setUserAnswers(new Array(shuffledQ.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    window.scrollTo(0, 0);
  };

  // --- Handlers ---

  // 1. Choice / True-False / Matching
  const handleChoiceSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // 2. Fill in Blank
  const handleTextChange = (text: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = text;
    setUserAnswers(newAnswers);
  };

  // 3. Reorder
  const handleReorderSelect = (word: string) => {
    // Logic: คลิกคำจาก options เพื่อย้ายไป list คำตอบ, คลิกที่คำตอบเพื่อย้ายกลับ
    const currentAns = (userAnswers[currentQuestionIndex] as string[]) || [];
    
    // เช็คว่าคำนี้ถูกเลือกไปหรือยัง (ในที่นี้สมมติคำไม่ซ้ำกัน หรือจัดการด้วย index)
    // แบบง่าย: เพิ่มคำต่อท้าย
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

  // Navigation
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    window.scrollTo(0, 0);
  };

  // Helper to check answer correctness
  const checkAnswer = (q: QuizQuestion, ans: any): boolean => {
    if (ans === null) return false;

    if (q.type === 'reorder') {
      // เทียบ Array string
      const correct = q.correctAnswer as string[];
      const user = ans as string[];
      if (user.length !== correct.length) return false;
      return user.every((val, i) => val === correct[i]);
    } 
    else if (q.type === 'fill-blank') {
      // เทียบ String (Case insensitive)
      return String(ans).toLowerCase().trim() === String(q.correctAnswer).toLowerCase().trim();
    } 
    else {
      // Choice, TF, Matching (เทียบ Index หรือ Value)
      return ans === q.correctAnswer;
    }
  };

  if (questions.length === 0) return <div className="p-10 text-center text-slate-500">Loading quiz...</div>;

  // --- Result Screen ---
  if (isFinished) {
    const score = questions.reduce((acc, q, index) => {
      return checkAnswer(q, userAnswers[index]) ? acc + 1 : acc;
    }, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Score Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 relative overflow-hidden"
          >
             <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg text-white">
              🏆
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">ทดสอบ Mixed Tenses {questions.length} ข้อ</p>
            <div className="flex justify-center items-end gap-2 mb-8">
              <span className="text-6xl font-black text-indigo-600">{score}</span>
              <span className="text-2xl font-bold text-slate-400 mb-2">/ {questions.length}</span>
            </div>
             <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={restartQuiz} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg"><RefreshCw size={20} /> ทำอีกครั้ง</button>
              <button onClick={() => navigate('/grammar')} className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"><ArrowLeft size={20} /> กลับบทเรียน</button>
            </div>
          </motion.div>

          {/* Solutions */}
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-slate-800 ml-2">เฉลยละเอียด:</h3>
             {questions.map((q, index) => {
               const userAnswer = userAnswers[index];
               const isCorrect = checkAnswer(q, userAnswer);
               return (
                 <div key={index} className={`bg-white rounded-2xl p-6 border-2 ${isCorrect ? 'border-green-100' : 'border-red-100'} shadow-sm`}>
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-3">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{index + 1}</span>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">{q.type} • {q.tenseTopic}</span>
                                <h4 className="font-bold text-slate-800 text-lg">{q.question}</h4>
                            </div>
                        </div>
                        {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                    </div>
                    
                    <div className="pl-11 space-y-2">
                        <div className={`p-3 rounded-lg text-sm font-medium ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            <span className="font-bold mr-2">ตอบ:</span>
                            {/* Display logic based on type */}
                            {q.type === 'reorder' 
                                ? (userAnswer as string[] || []).join(' ') 
                                : q.type === 'choice' || q.type === 'true-false' || q.type === 'matching'
                                    ? (q.options ? q.options[userAnswer as number] : '-')
                                    : userAnswer}
                        </div>
                        {!isCorrect && (
                            <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm font-medium">
                                <span className="font-bold mr-2">เฉลย:</span>
                                {q.type === 'reorder' 
                                    ? (q.correctAnswer as string[]).join(' ')
                                    : q.type === 'fill-blank'
                                        ? q.correctAnswer
                                        : (q.options ? q.options[q.correctAnswer as number] : '')}
                            </div>
                        )}
                        <p className="text-sm text-slate-500 mt-2 flex gap-2"><AlertCircle size={16} className="shrink-0 mt-0.5" />{q.explanation}</p>
                    </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    );
  }

  // --- Quiz Screen ---
  const q = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const userAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
       {/* Header */}
       <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button onClick={() => navigate('/grammar')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold"><ArrowLeft size={20} /> ออก</button>
        <div className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">ข้อที่ {currentQuestionIndex + 1} / {questions.length}</div>
      </div>

      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden min-h-[400px] flex flex-col">
          {/* Progress */}
          <div className="w-full h-1.5 bg-slate-100"><motion.div className="h-full bg-indigo-500" animate={{ width: `${progress}%` }} /></div>
          
          <div className="p-8 md:p-10 flex-1 flex flex-col">
             <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                    {q.type === 'true-false' ? 'True / False' : q.type === 'fill-blank' ? 'Fill in the blank' : q.type === 'reorder' ? 'Rearrange Sentence' : q.type === 'matching' ? 'Identify Tense' : 'Multiple Choice'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">{q.question}</h2>
             </div>

             {/* --- Render Question Body based on Type --- */}
             <div className="flex-1">
                
                {/* 1. Choice / Matching / True-False */}
                {(q.type === 'choice' || q.type === 'true-false' || q.type === 'matching') && q.options && (
                    <div className="grid gap-3">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleChoiceSelect(idx)}
                                className={`p-4 rounded-xl text-left font-semibold border-2 transition-all flex justify-between items-center
                                    ${userAnswer === idx ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-100 hover:border-indigo-200 text-slate-600'}
                                `}
                            >
                                {opt}
                                {userAnswer === idx && <div className="w-4 h-4 bg-indigo-500 rounded-full" />}
                            </button>
                        ))}
                    </div>
                )}

                {/* 2. Fill in Blank */}
                {q.type === 'fill-blank' && (
                    <div>
                        <input 
                            type="text" 
                            value={userAnswer as string || ''}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder="Type your answer here..."
                            className="w-full p-4 text-xl font-medium border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none placeholder:text-slate-300"
                            autoFocus
                        />
                        <p className="mt-3 text-slate-400 text-sm">* พิมพ์คำตอบที่ถูกต้องลงในช่องว่าง</p>
                    </div>
                )}

                {/* 3. Reorder */}
                {q.type === 'reorder' && q.options && (
                    <div className="space-y-6">
                        {/* Area แสดงคำตอบที่เรียงแล้ว */}
                        <div className="min-h-[80px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2 items-center">
                            {(userAnswer as string[] || []).length === 0 && <span className="text-slate-400 select-none">Tap words below to arrange...</span>}
                            {(userAnswer as string[] || []).map((word, idx) => (
                                <button key={idx} onClick={() => handleReorderRemove(idx)} className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg font-bold hover:bg-red-100 hover:text-red-600 transition-colors">
                                    {word}
                                </button>
                            ))}
                        </div>
                        {/* ตัวเลือกคำ (Chip) */}
                        <div className="flex flex-wrap gap-2">
                             {q.options.map((word, idx) => {
                                 // เช็คว่าคำนี้ถูกใช้ไปครบหรือยัง (นับจำนวนคำใน options เทียบกับใน answer)
                                 const usedCount = (userAnswer as string[] || []).filter(w => w === word).length;
                                 const totalCount = q.options!.filter(w => w === word).length;
                                 const isDisabled = usedCount >= totalCount;

                                 return (
                                     <button 
                                        key={idx} 
                                        onClick={() => !isDisabled && handleReorderSelect(word)}
                                        disabled={isDisabled}
                                        className={`px-4 py-2 rounded-lg font-bold border-2 transition-all
                                            ${isDisabled ? 'opacity-30 bg-slate-100 border-transparent cursor-default' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-sm'}
                                        `}
                                     >
                                         {word}
                                     </button>
                                 )
                             })}
                        </div>
                    </div>
                )}

             </div>

             {/* Navigation */}
             <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <button 
                    onClick={handleNext}
                    disabled={userAnswer === null || userAnswer === '' || (Array.isArray(userAnswer) && userAnswer.length === 0)}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {currentQuestionIndex === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'} <MoveRight size={20} />
                </button>
             </div>
          </div>
        </div>
        <AdBanner className="mt-8" />
      </div>
    </div>
  );
}