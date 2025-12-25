// frontend/src/pages/TensesQuiz.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle, MoveRight, Layers, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { separateTensesData } from '../data/separateTensesData'; // ต้องมีไฟล์นี้ (ตามที่ให้ไปก่อนหน้า)
import { mixedTensesQuizData } from '../data/mixedTensesQuizData'; // ต้องมีไฟล์นี้
import { shuffleArray } from '../utils/quizUtils';
import { QuizQuestion } from '../types';
import AdBanner from '../components/AdBanner';

export default function TensesQuiz() {
  const navigate = useNavigate();
  
  // State สำหรับหน้าเลือกหัวข้อ
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  
  // State สำหรับการทำ Quiz
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // เก็บคำตอบรองรับหลายรูปแบบ: index(number), text(string), array(string[])
  const [userAnswers, setUserAnswers] = useState<(string | number | string[] | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // ฟังก์ชันเริ่มทำแบบทดสอบ
  const startQuiz = (topicId: string) => {
    let rawQuestions: QuizQuestion[] = [];

    // 1. เลือกชุดคำถาม
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

    // 2. สุ่มลำดับคำถาม และตัวเลือก (เฉพาะ Reorder)
    const shuffledQ = shuffleArray(rawQuestions).map(q => {
      // Reorder: ต้องสุ่ม Options เสมอเพื่อให้ผู้เล่นเรียงใหม่
      if (q.options && q.type === 'reorder') {
          return { ...q, options: shuffleArray(q.options) };
      }
      // Choice/TF: ปกติไม่สุ่ม Options เพราะ correctAnswer เก็บเป็น Index (0,1,..) ถ้าสุ่ม Index จะเคลื่อน
      // (ถ้าต้องการสุ่ม Choice ต้องแก้ระบบเก็บคำตอบเป็น String matching แทน Index)
      return q;
    });

    // 3. เซ็ตค่าเริ่มต้น
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

  // --- Handlers: การตอบคำถามรูปแบบต่างๆ ---

  // 1. Choice & True/False (เก็บ Index)
  const handleChoiceSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // 2. Fill in the blank (เก็บ Text)
  const handleTextChange = (text: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = text;
    setUserAnswers(newAnswers);
  };

  // 3. Reorder Sentence (เก็บ Array ของคำ)
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

  // Navigation
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      window.scrollTo(0, 0);
    }
  };

  // Logic ตรวจคำตอบ
  const checkAnswer = (q: QuizQuestion, ans: any): boolean => {
    if (ans === null || ans === undefined) return false;
    
    if (q.type === 'reorder') {
      // เทียบ Array (เรียงคำ)
      const correct = q.correctAnswer as string[];
      const user = ans as string[];
      if (!user || user.length !== correct.length) return false;
      return user.every((val, i) => val === correct[i]);
    } 
    else if (q.type === 'fill-blank') {
      // เทียบ String (ไม่สนตัวพิมพ์เล็กใหญ่ และช่องว่างส่วนเกิน)
      const userStr = String(ans).toLowerCase().replace(/\s+/g, ' ').trim();
      const correctStr = String(q.correctAnswer).toLowerCase().replace(/\s+/g, ' ').trim();
      return userStr === correctStr; 
    } 
    else {
      // Choice, TF, Matching (เทียบค่าตรงๆ เช่น Index)
      return ans === q.correctAnswer;
    }
  };

  // ----------------------------------------------------
  // VIEW 1: MENU SELECTION (หน้าเลือก Tense)
  // ----------------------------------------------------
  if (!selectedTopicId) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <button onClick={() => navigate('/grammar')} className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-800 shadow-sm border border-slate-100 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-black text-slate-800">Tenses Master Quiz</h1>
              <p className="text-slate-500">เลือก Tense ที่ต้องการฝึกฝน หรือทำแบบทดสอบรวม</p>
            </div>
          </div>

          {/* Mixed Quiz Card (Highlight) */}
          <div onClick={() => startQuiz('mixed')} className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl cursor-pointer hover:scale-[1.01] transition-transform mb-10 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Mixed Tenses Challenge 🏆</h2>
                <p className="text-indigo-100 text-lg">ทดสอบรวม 12 Tense (30 ข้อ) สุ่มโจทย์ท้าทายความจำ!</p>
              </div>
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold flex items-center gap-2 group-hover:bg-indigo-50 transition-colors shadow-sm">
                เริ่มทดสอบรวม <Play size={20} fill="currentColor" />
              </button>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          </div>

          {/* Grid: Separate Tenses */}
          <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
            <Layers size={24} className="text-indigo-500"/> ฝึกแยกราย Tense (ชุดละ 20 ข้อ)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {separateTensesData.map((topic) => (
              <button 
                key={topic.id}
                onClick={() => startQuiz(topic.id)}
                className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-400 hover:shadow-md text-left transition-all group relative overflow-hidden flex flex-col h-full"
              >
                 <div className="flex justify-between items-start mb-3 w-full">
                   <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{topic.name}</h3>
                   {topic.questions.length > 0 ? (
                      <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">พร้อมสอบ</span>
                   ) : (
                      <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-400 rounded-full">เร็วๆ นี้</span>
                   )}
                 </div>
                 <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{topic.description}</p>
                 
                 <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider w-full">
                    <span>20 ข้อ</span> 
                    <span className="group-hover:translate-x-1 transition-transform text-indigo-300 group-hover:text-indigo-500"><MoveRight size={16}/></span>
                 </div>
              </button>
            ))}
          </div>
          
          <AdBanner className="mt-10"/>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW 2: QUIZ INTERFACE (หน้าทำข้อสอบ)
  // ----------------------------------------------------
  
  // A. หน้าสรุปผล (Score)
  if (isFinished) {
    const score = questions.reduce((acc, q, index) => {
      return checkAnswer(q, userAnswers[index]) ? acc + 1 : acc;
    }, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 overflow-hidden relative"
          >
            <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg text-white">🏆</div>
            
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">
              Topic: <span className="text-indigo-600 font-bold">{selectedTopicId === 'mixed' ? 'Mixed Tenses Challenge' : separateTensesData.find(t => t.id === selectedTopicId)?.name}</span>
            </p>
            
            <div className="flex justify-center items-end gap-2 mb-8">
              <span className="text-6xl font-black text-indigo-600">{score}</span>
              <span className="text-2xl font-bold text-slate-400 mb-2">/ {questions.length}</span>
            </div>
            
            {/* Progress Bar Result */}
            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${percentage}%` }} 
                className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => startQuiz(selectedTopicId!)} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg">
                <RefreshCw size={20} /> ทำอีกครั้ง
              </button>
              <button onClick={handleBackToMenu} className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                <ArrowLeft size={20} /> กลับเมนูหลัก
              </button>
            </div>
          </motion.div>

          {/* Solution List */}
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-slate-800 ml-2">เฉลยละเอียด:</h3>
             {questions.map((q, index) => {
               const userAnswer = userAnswers[index];
               const isCorrect = checkAnswer(q, userAnswer);
               
               return (
                 <div key={index} className={`bg-white rounded-2xl p-6 border-2 ${isCorrect ? 'border-green-100' : 'border-red-100'} shadow-sm`}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {index + 1}
                            </span>
                            <div>
                                <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                                    {q.type}
                                </span>
                                <h4 className="font-bold text-slate-800 text-lg">{q.question}</h4>
                            </div>
                        </div>
                        {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                    </div>

                    <div className="pl-11 space-y-2">
                        {/* User Answer */}
                        <div className={`p-3 rounded-lg text-sm font-medium ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            <span className="font-bold mr-2">ตอบ:</span>
                            {q.type === 'reorder' 
                                ? (Array.isArray(userAnswer) ? userAnswer.join(' ') : '-') 
                                : (q.type === 'choice' || q.type === 'true-false')
                                    ? (q.options && userAnswer !== null ? q.options[userAnswer as number] : '-')
                                    : (userAnswer !== null ? userAnswer : '-')}
                        </div>

                        {/* Correct Answer (Show if wrong) */}
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
                        
                        {/* Explanation */}
                        <p className="text-sm text-slate-500 mt-2 flex gap-2 items-start">
                            <AlertCircle size={16} className="shrink-0 mt-0.5 text-indigo-400" />
                            {q.explanation}
                        </p>
                    </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    );
  }

  // B. หน้าโจทย์ (Question Card)
  const q = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const userAnswer = userAnswers[currentQuestionIndex];

  // ตรวจสอบสถานะปุ่ม Next (ต้องตอบก่อนถึงไปต่อได้)
  const isAnswered = 
    userAnswer !== null && 
    userAnswer !== '' && 
    (!Array.isArray(userAnswer) || userAnswer.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
       {/* Header Quiz */}
       <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button onClick={handleBackToMenu} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors">
            <ArrowLeft size={20} /> ออก
        </button>
        <div className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">
            ข้อที่ {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden min-h-[400px] flex flex-col">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-100">
            <motion.div className="h-full bg-indigo-500" animate={{ width: `${progress}%` }} />
          </div>

          <div className="p-8 md:p-10 flex-1 flex flex-col">
             <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                    {q.type === 'true-false' ? 'True / False' : q.type === 'fill-blank' ? 'Fill in the blank' : q.type === 'reorder' ? 'Rearrange Sentence' : 'Multiple Choice'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">{q.question}</h2>
             </div>

             <div className="flex-1">
                {/* 1. Choice / TF */}
                {(q.type === 'choice' || q.type === 'true-false') && q.options && (
                    <div className="grid gap-3">
                        {q.options.map((opt, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => handleChoiceSelect(idx)}
                                className={`p-4 rounded-xl text-left font-semibold border-2 transition-all flex justify-between items-center 
                                    ${userAnswer === idx ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm' : 'border-slate-100 hover:border-indigo-200 text-slate-600 hover:bg-slate-50'}
                                `}
                            >
                                {opt} 
                                {userAnswer === idx && <div className="w-4 h-4 bg-indigo-500 rounded-full" />}
                            </button>
                        ))}
                    </div>
                )}

                {/* 2. Fill Blank */}
                {q.type === 'fill-blank' && (
                    <div>
                        <input 
                            type="text" 
                            value={userAnswer as string || ''} 
                            onChange={(e) => handleTextChange(e.target.value)} 
                            placeholder="Type your answer here..." 
                            className="w-full p-5 text-xl font-medium border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none placeholder:text-slate-300 transition-colors" 
                            autoFocus 
                        />
                        <p className="mt-3 text-sm text-slate-400">* พิมพ์คำตอบที่ถูกต้องแล้วกดส่ง</p>
                    </div>
                )}

                {/* 3. Reorder */}
                {q.type === 'reorder' && q.options && (
                    <div className="space-y-6">
                        {/* Drop Zone */}
                        <div className="min-h-[80px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2 items-center">
                            {(userAnswer as string[] || []).length === 0 && <span className="text-slate-400 select-none text-sm">แตะที่คำด้านล่างเพื่อเรียงประโยค...</span>}
                            {(userAnswer as string[] || []).map((word, idx) => (
                                <button key={idx} onClick={() => handleReorderRemove(idx)} className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg font-bold hover:bg-red-100 hover:text-red-600 transition-colors animate-in zoom-in duration-200">
                                    {word}
                                </button>
                            ))}
                        </div>
                        
                        {/* Word Bank */}
                        <div className="flex flex-wrap gap-2">
                             {q.options.map((word, idx) => {
                                 const usedCount = (userAnswer as string[] || []).filter(w => w === word).length;
                                 const totalCount = q.options!.filter(w => w === word).length;
                                 const isDisabled = usedCount >= totalCount;
                                 
                                 return (
                                     <button 
                                        key={idx} 
                                        onClick={() => !isDisabled && handleReorderSelect(word)} 
                                        disabled={isDisabled} 
                                        className={`px-4 py-2 rounded-lg font-bold border-2 transition-all 
                                            ${isDisabled ? 'opacity-30 bg-slate-100 border-transparent cursor-default' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-sm active:scale-95'}
                                        `}
                                     >
                                         {word}
                                     </button>
                                 );
                             })}
                        </div>
                    </div>
                )}
             </div>

             <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <button 
                    onClick={handleNext} 
                    disabled={!isAnswered} 
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                    {currentQuestionIndex === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'} <MoveRight size={20} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}