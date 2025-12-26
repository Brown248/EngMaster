// frontend/src/components/QuizEngine.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle, MoveRight, Layers, Play, Save, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuizQuestion } from '../types';
import { shuffleArray } from '../utils/quizUtils';
import AdBanner from './AdBanner';

// --- Types & Constants ---
const STORAGE_PREFIX = 'engmaster_quiz_';
const HISTORY_KEY = 'engmaster_quiz_history';
const SUPPORT_EMAIL = 'support@engmaster.com'; // เปลี่ยนเป็นอีเมลจริงของคุณ

export interface QuizTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

interface QuizSession {
  topicId: string;
  questions: QuizQuestion[];
  userAnswers: (string | number | string[] | null)[];
  currentQIndex: number;
  isFinished: boolean;
  timestamp: number;
}

interface QuizEngineProps {
  title: string;
  description?: string;
  backPath: string;
  themeColor?: 'indigo' | 'blue' | 'purple' | 'orange';
  topics?: QuizTopic[];
  mixedQuestions?: QuizQuestion[];
  directQuestions?: QuizQuestion[];
  initialTopicId?: string | null;
}

export default function QuizEngine({
  title,
  description,
  backPath,
  themeColor = 'indigo',
  topics = [],
  mixedQuestions = [],
  directQuestions,
  initialTopicId
}: QuizEngineProps) {
  const navigate = useNavigate();

  // --- Theme Helpers ---
  const theme = {
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-500', hover: 'hover:bg-indigo-700', ring: 'focus:ring-indigo-200' },
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-500', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-200' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-500', hover: 'hover:bg-purple-700', ring: 'focus:ring-purple-200' },
    orange: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-500', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-200' },
  }[themeColor];

  // --- State ---
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | number | string[] | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [history, setHistory] = useState<Record<string, number | null>>({});

  // --- Load History & Resume ---
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    if (savedHistory) {
      try { setHistory(JSON.parse(savedHistory)); } catch (e) { /* ignore */ }
    }

    const lastTopicId = localStorage.getItem(`${STORAGE_PREFIX}current_topic`);
    if (directQuestions && directQuestions.length > 0) {
       startQuizLogic('direct', directQuestions);
    } else if (initialTopicId) {
       handleStartTopic(initialTopicId);
    } else if (lastTopicId) {
       const savedSessionStr = localStorage.getItem(`${STORAGE_PREFIX}session_${lastTopicId}`);
       if (savedSessionStr) {
         try {
           const session: QuizSession = JSON.parse(savedSessionStr);
           resumeSession(session);
         } catch(e) { 
           localStorage.removeItem(`${STORAGE_PREFIX}session_${lastTopicId}`);
         }
       }
    }
  }, [directQuestions, initialTopicId]);

  // --- Save Progress ---
  useEffect(() => {
    if (activeTopicId && questions.length > 0) {
      const sessionData: QuizSession = {
        topicId: activeTopicId,
        questions, 
        userAnswers,
        currentQIndex,
        isFinished,
        timestamp: Date.now()
      };
      
      localStorage.setItem(`${STORAGE_PREFIX}session_${activeTopicId}`, JSON.stringify(sessionData));
      localStorage.setItem(`${STORAGE_PREFIX}current_topic`, activeTopicId);

      if (isFinished) {
        const score = questions.reduce((acc, q, idx) => checkAnswer(q, userAnswers[idx]) ? acc + 1 : acc, 0);
        const newHistory = { ...history, [activeTopicId]: score };
        setHistory(newHistory);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      }
    }
  }, [activeTopicId, questions, userAnswers, currentQIndex, isFinished]);

  // --- Logic Functions ---

  const resumeSession = (session: QuizSession) => {
    setActiveTopicId(session.topicId);
    setQuestions(session.questions);
    setUserAnswers(session.userAnswers);
    setCurrentQIndex(session.currentQIndex);
    setIsFinished(session.isFinished);
  };

  const handleStartTopic = (id: string) => {
    const savedSessionStr = localStorage.getItem(`${STORAGE_PREFIX}session_${id}`);
    if (savedSessionStr) {
        const session: QuizSession = JSON.parse(savedSessionStr);
        if (!session.isFinished) {
             if (confirm(`คุณมีแบบทดสอบ ${id} ที่ยังทำไม่เสร็จ ต้องการทำต่อหรือไม่?`)) {
                 resumeSession(session);
                 return;
             }
        }
    }

    let selectedQs: QuizQuestion[] = [];
    if (id === 'mixed') {
        selectedQs = [...mixedQuestions];
    } else if (id === 'direct') {
        selectedQs = [...(directQuestions || [])];
    } else {
        const topic = topics.find(t => t.id === id);
        if (topic) selectedQs = [...topic.questions];
    }

    if (selectedQs.length === 0) {
        alert("Coming soon! โจทย์ยังไม่พร้อมใช้งาน");
        return;
    }
    startQuizLogic(id, selectedQs);
  };

  const startQuizLogic = (id: string, rawQs: QuizQuestion[]) => {
    localStorage.removeItem(`${STORAGE_PREFIX}session_${id}`);

    const shuffled = shuffleArray(rawQs).map(q => {
        if (q.options && q.type === 'reorder') {
            return { ...q, options: shuffleArray(q.options) };
        }
        return q;
    });

    setQuestions(shuffled);
    setUserAnswers(new Array(shuffled.length).fill(null));
    setCurrentQIndex(0);
    setIsFinished(false);
    setActiveTopicId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
      localStorage.removeItem(`${STORAGE_PREFIX}current_topic`);
      if (directQuestions || activeTopicId === 'direct' || !activeTopicId) {
          navigate(backPath);
      } else {
          setActiveTopicId(null);
          setQuestions([]);
          setIsFinished(false);
      }
  };

  const checkAnswer = (q: QuizQuestion, ans: any): boolean => {
    if (ans === null || ans === undefined) return false;
    if (q.type === 'reorder') {
      const correct = q.correctAnswer as string[];
      const user = ans as string[];
      if (!user || user.length !== correct.length) return false;
      return user.every((val, i) => val === correct[i]);
    } else if (q.type === 'fill-blank') {
      const userStr = String(ans).toLowerCase().replace(/\s+/g, ' ').trim();
      const correctStr = String(q.correctAnswer).toLowerCase().replace(/\s+/g, ' ').trim();
      return userStr === correctStr; 
    } else {
      return ans === q.correctAnswer;
    }
  };

  const handleAnswerChange = (val: any) => {
      const newAns = [...userAnswers];
      newAns[currentQIndex] = val;
      setUserAnswers(newAns);
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
    } else {
        setIsFinished(true);
        window.scrollTo(0, 0);
    }
  };

  const handleRestart = () => {
     localStorage.removeItem(`${STORAGE_PREFIX}session_${activeTopicId}`);
     handleStartTopic(activeTopicId!); 
  };

  const handleReportIssue = (q: QuizQuestion) => {
      const subject = `Report Issue: Quiz ID ${q.id} (${activeTopicId})`;
      const body = `Found an issue with question ID: ${q.id}%0AQuestion: ${q.question}%0A%0AProblem detail: `;
      window.open(`mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  // --- Render: Menu Mode ---
  if (!activeTopicId && !directQuestions) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <button onClick={() => navigate(backPath)} className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-800 shadow-sm border border-slate-100" aria-label="Back">
                <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-black text-slate-800">{title}</h1>
              <p className="text-slate-500">{description || 'เลือกหัวข้อที่ต้องการฝึกฝน'}</p>
            </div>
          </div>

          {mixedQuestions.length > 0 && (
              <div onClick={() => handleStartTopic('mixed')} className={`bg-gradient-to-r from-${themeColor}-500 to-${themeColor}-600 rounded-3xl p-8 text-white shadow-xl cursor-pointer hover:scale-[1.01] transition-transform mb-10 relative overflow-hidden group`}>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Mixed Challenge 🏆</h2>
                    <p className="text-white/90 text-lg">รวมมิตรทุกหัวข้อ ({mixedQuestions.length} ข้อ) สุ่มโจทย์ท้าทาย!</p>
                </div>
                <div className="text-right">
                    <button className={`px-8 py-3 bg-white ${theme.text} rounded-xl font-bold flex items-center gap-2 shadow-sm mb-2`}>
                        เริ่มทดสอบรวม <Play size={20} fill="currentColor" />
                    </button>
                    {history['mixed'] !== undefined && (
                        <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                            คะแนนล่าสุด: {history['mixed']} / {mixedQuestions.length}
                        </span>
                    )}
                </div>
                </div>
            </div>
          )}

          <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
            <Layers size={24} className={theme.text}/> ฝึกแยกรายหัวข้อ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => {
              const lastScore = history[topic.id];
              const hasSession = localStorage.getItem(`${STORAGE_PREFIX}session_${topic.id}`);
              
              return (
              <button key={topic.id} onClick={() => handleStartTopic(topic.id)} className={`bg-white p-6 rounded-2xl border-2 border-slate-100 hover:${theme.border} hover:shadow-md text-left transition-all group relative overflow-hidden flex flex-col h-full`}>
                 <div className="flex justify-between items-start mb-3 w-full">
                   <h3 className={`font-bold text-lg text-slate-800 group-hover:${theme.text} transition-colors capitalize`}>{topic.name}</h3>
                   {hasSession && !lastScore && <span className="text-[10px] font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full flex items-center gap-1"><Save size={10}/> ทำค้างไว้</span>}
                   {lastScore !== undefined && <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Score: {lastScore}</span>}
                 </div>
                 <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{topic.description || `แบบทดสอบเรื่อง ${topic.name}`}</p>
                 <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider w-full">
                    <span>{topic.questions.length} ข้อ</span> 
                    <span className={`group-hover:translate-x-1 transition-transform ${theme.text}`}><MoveRight size={16}/></span>
                 </div>
              </button>
            )})}
          </div>
          <AdBanner className="mt-10"/>
        </div>
      </div>
    );
  }

  // --- Render: Finished ---
  if (isFinished) {
    const score = questions.reduce((acc, q, index) => checkAnswer(q, userAnswers[index]) ? acc + 1 : acc, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 relative">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg text-white ${theme.bg}`}>🏆</div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">Topic: <span className={`${theme.text} font-bold capitalize`}>{activeTopicId === 'mixed' ? 'Mixed Challenge' : activeTopicId === 'direct' ? title : topics.find(t => t.id === activeTopicId)?.name || activeTopicId}</span></p>
            <div className="flex justify-center items-end gap-2 mb-8">
              <span className={`text-6xl font-black ${theme.text}`}>{score}</span>
              <span className="text-2xl font-bold text-slate-400 mb-2">/ {questions.length}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={handleRestart} className={`flex items-center gap-2 px-6 py-3 text-white rounded-xl font-bold transition-colors shadow-lg ${theme.bg} ${theme.hover}`}>
                  <RefreshCw size={20} /> ทำอีกครั้ง
              </button>
              <button onClick={handleBack} className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                  <ArrowLeft size={20} /> กลับเมนูหลัก
              </button>
            </div>
          </motion.div>

          <div className="space-y-4">
             <h3 className="text-2xl font-bold text-slate-800 ml-2">เฉลยละเอียด:</h3>
             {questions.map((q, index) => {
               const isCorrect = checkAnswer(q, userAnswers[index]);
               return (
                 <div key={index} className={`bg-white rounded-xl p-6 border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} shadow-sm relative group`}>
                    <div className="flex justify-between items-start mb-2 pr-8">
                        <span className="font-bold text-slate-800 text-lg flex-1">{index + 1}. {q.question}</span>
                        {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0 ml-2" /> : <XCircle className="text-red-500 shrink-0 ml-2" />}
                    </div>
                    
                    {!isCorrect && (
                        <div className="text-red-600 bg-red-50 p-2 rounded-lg text-sm font-bold mb-2 inline-block">
                             คำตอบที่ถูก: {q.type === 'reorder' ? (q.correctAnswer as string[]).join(' ') : q.type === 'fill-blank' ? q.correctAnswer : q.options![q.correctAnswer as number]}
                        </div>
                    )}

                    <div className="text-sm text-slate-500 mt-2 flex gap-2 items-start bg-slate-50 p-3 rounded-lg">
                      <AlertCircle size={16} className={`shrink-0 mt-0.5 ${theme.text}`} />
                      <span>{q.explanation}</span>
                    </div>

                     {/* Report Issue Button (Small) */}
                    <button 
                        onClick={() => handleReportIssue(q)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-400 p-1 transition-colors"
                        title="แจ้งปัญหาโจทย์ผิด"
                        aria-label="Report issue"
                    >
                        <Flag size={16} />
                    </button>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    );
  }

  // --- Render: Playing Mode ---
  const q = questions[currentQIndex];
  const progress = ((currentQIndex + 1) / questions.length) * 100;
  const userAnswer = userAnswers[currentQIndex];
  const isAnswered = userAnswer !== null && userAnswer !== '' && (!Array.isArray(userAnswer) || userAnswer.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
       <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button onClick={() => {
            if(confirm('ต้องการกลับเมนูหลักใช่ไหม? (ระบบบันทึกความคืบหน้าให้อัตโนมัติ)')) handleBack();
        }} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors" aria-label="Exit Quiz">
            <ArrowLeft size={20} /> ออก
        </button>
        <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${theme.light} ${theme.text}`}>
            ข้อที่ {currentQIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden min-h-[400px] flex flex-col relative">
          <div className="w-full h-1.5 bg-slate-100"><motion.div className={`h-full ${theme.bg}`} animate={{ width: `${progress}%` }} /></div>
          
          {/* Report Button */}
          <button 
             onClick={() => handleReportIssue(q)}
             className="absolute top-4 right-4 text-slate-300 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all z-10"
             title="แจ้งปัญหาโจทย์"
             aria-label="Report issue with this question"
          >
             <Flag size={18} />
          </button>

          <div className="p-8 md:p-10 flex-1 flex flex-col">
             <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">{q.type}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug pr-8">{q.question}</h2>
             </div>
             
             <div className="flex-1 space-y-4">
                {(q.type === 'choice' || q.type === 'true-false') && q.options && (
                    <div className="grid gap-3">
                        {q.options.map((opt, idx) => (
                        <button key={idx} onClick={() => handleAnswerChange(idx)} 
                            className={`p-4 rounded-xl text-left font-semibold border-2 transition-all flex justify-between items-center outline-none ${theme.ring}
                                ${userAnswer === idx ? `${theme.border} ${theme.light} ${theme.text}` : 'border-slate-100 hover:border-indigo-200'}`
                            }>
                            {opt} 
                            {userAnswer === idx && <div className={`w-4 h-4 rounded-full ${theme.bg}`} />}
                        </button>
                    ))}</div>
                )}

                {q.type === 'fill-blank' && (
                    <input 
                        type="text" 
                        value={userAnswer as string || ''} 
                        onChange={(e) => handleAnswerChange(e.target.value)} 
                        placeholder="Type your answer here..." 
                        className={`w-full p-5 text-xl border-2 border-slate-200 rounded-xl focus:${theme.border} outline-none transition-all ${theme.ring}`} 
                        autoFocus 
                    />
                )}

                {q.type === 'reorder' && q.options && (
                    <div className="space-y-6">
                        <div className="min-h-[60px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2">
                            {(userAnswer as string[] || []).map((word, idx) => (
                                <button key={idx} onClick={() => {
                                    const curr = (userAnswer as string[]) || [];
                                    handleAnswerChange(curr.filter((_, i) => i !== idx));
                                }} className={`px-3 py-1 rounded-lg font-bold hover:bg-red-100 ${theme.light} ${theme.text}`}>
                                    {word}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {q.options.map((word, idx) => {
                                const usedCount = (userAnswer as string[] || []).filter(w => w === word).length;
                                const totalCount = q.options!.filter(w => w === word).length;
                                const disabled = usedCount >= totalCount;
                                return (
                                    <button key={idx} 
                                        onClick={() => !disabled && handleAnswerChange([...((userAnswer as string[]) || []), word])} 
                                        disabled={disabled} 
                                        className={`px-4 py-2 rounded-lg font-bold border-2 ${disabled ? 'opacity-30' : `hover:${theme.border}`}`}
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
                <button onClick={handleNext} disabled={!isAnswered} className={`px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 transition-all`} aria-label="Next Question">
                    {currentQIndex === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'} <MoveRight size={20} />
                </button>
             </div>
          </div>
      </div>
    </div>
  );
}