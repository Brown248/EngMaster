import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle, Play } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { separatePartsOfSpeechData } from '../data/separatePartsOfSpeechData';
import { partsOfSpeechQuizData as mixedData } from '../data/partsOfSpeechQuizData'; // เผื่อกรณีเลือกแบบรวม
import { shuffleArray } from '../utils/quizUtils';
import { QuizQuestion } from '../types';
import AdBanner from '../components/AdBanner';

export default function PartsOfSpeechQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // รับ state ว่ามาจากหัวข้อไหน (ชื่อต้องตรงกับ id ใน grammarData/separatePartsOfSpeechData)
  // ตัวอย่าง subTopicName: "Noun (คำนาม)" -> เราจะตัดเอาแค่ "noun"
  const rawSubTopic = location.state?.subTopic as string | undefined;
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | string | string[] | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [currentTopicId, setCurrentTopicId] = useState<string>('');

  useEffect(() => {
    let selectedQuestions: QuizQuestion[] = [];
    let topicId = 'mixed';

    if (rawSubTopic) {
        // แปลงชื่อเช่น "Noun (คำนาม)" -> "noun"
        const keyword = rawSubTopic.split(' ')[0].toLowerCase();
        const foundTopic = separatePartsOfSpeechData.find(t => t.id === keyword);
        
        if (foundTopic) {
            selectedQuestions = [...foundTopic.questions];
            topicId = keyword;
        } else {
            // กรณีหาไม่เจอ ให้ใช้แบบรวม หรือ Adjective เดิม
            selectedQuestions = [...mixedData];
        }
    } else {
        selectedQuestions = [...mixedData];
    }

    setCurrentTopicId(topicId);

    // สุ่มโจทย์ และสุ่มช้อยส์ (เฉพาะ Reorder)
    const shuffledQ = shuffleArray(selectedQuestions).map(q => {
        if (q.type === 'reorder' && q.options) {
            return { ...q, options: shuffleArray([...q.options]) };
        }
        return q;
    });

    setQuestions(shuffledQ);
    setUserAnswers(new Array(shuffledQ.length).fill(null));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  }, [rawSubTopic]);

  // Helper: Parse Bold Text
  const parseQuestionText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-indigo-700">$1</span>');
  };

  const handleOptionSelect = (ans: any) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = ans;
    setUserAnswers(newAnswers);
  };

  const handleReorderSelect = (word: string) => {
    const currentAns = (userAnswers[currentQuestionIndex] as string[]) || [];
    handleOptionSelect([...currentAns, word]);
  };
  
  const handleReorderRemove = (idxToRemove: number) => {
    const currentAns = (userAnswers[currentQuestionIndex] as string[]) || [];
    handleOptionSelect(currentAns.filter((_, i) => i !== idxToRemove));
  };

  const handleTextChange = (text: string) => {
      handleOptionSelect(text);
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
      if (!ans) return false;
      if (q.type === 'reorder') {
          return JSON.stringify(ans) === JSON.stringify(q.correctAnswer);
      }
      if (q.type === 'fill-blank') {
          return String(ans).toLowerCase().trim() === String(q.correctAnswer).toLowerCase().trim();
      }
      return ans === q.correctAnswer;
  };

  if (questions.length === 0) return <div className="p-10 text-center font-bold text-slate-500">Loading Quiz Data...</div>;

  if (isFinished) {
    const score = questions.reduce((acc, q, index) => checkAnswer(q, userAnswers[index]) ? acc + 1 : acc, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 relative">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">🏆</div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">Topic: <span className="capitalize font-bold text-indigo-600">{currentTopicId}</span></p>
            <div className="text-6xl font-black text-indigo-600 mb-6">{score} <span className="text-2xl text-slate-400">/ {questions.length}</span></div>
            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <div className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${percentage}%` }} />
            </div>
            <div className="flex justify-center gap-4">
               <button onClick={() => window.location.reload()} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex gap-2 hover:bg-indigo-700 transition-colors shadow-lg"><RefreshCw size={20}/> ทำอีกครั้ง</button>
               <button onClick={() => navigate('/grammar')} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold flex gap-2 hover:bg-slate-200 transition-colors"><ArrowLeft size={20}/> กลับบทเรียน</button>
            </div>
          </motion.div>

          <AdBanner />

          <div className="space-y-4">
             {questions.map((q, i) => {
                 const isCorrect = checkAnswer(q, userAnswers[i]);
                 return (
                     <div key={i} className={`bg-white p-5 rounded-2xl border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} shadow-sm`}>
                         <div className="flex justify-between items-start mb-2">
                             <h4 className="font-bold text-slate-800 text-lg pr-4" dangerouslySetInnerHTML={{ __html: parseQuestionText(q.question) }} />
                             {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                         </div>
                         {!isCorrect && (
                             <div className="text-sm text-red-500 font-bold mb-2 bg-red-50 p-2 rounded-lg inline-block">
                                 เฉลย: {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(' ') : q.type === 'choice' && q.options ? q.options[q.correctAnswer as number] : q.correctAnswer}
                             </div>
                         )}
                         <div className="flex gap-2 items-start mt-2 pt-2 border-t border-slate-100">
                             <AlertCircle size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                             <p className="text-sm text-slate-500">{q.explanation}</p>
                         </div>
                     </div>
                 )
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
  const hasAnswered = userAnswer !== null && userAnswer !== '' && (!Array.isArray(userAnswer) || userAnswer.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-between items-center mb-6">
         <button onClick={() => navigate('/grammar')} className="text-slate-500 font-bold flex gap-2 hover:text-slate-800 transition-colors"><ArrowLeft /> ออก</button>
         <div className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full font-bold text-sm">{currentQuestionIndex + 1} / {questions.length}</div>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden flex flex-col min-h-[400px]">
          <div className="h-1.5 bg-slate-100 w-full"><motion.div className="h-full bg-indigo-500" animate={{ width: `${progress}%` }} /></div>
          
          <div className="p-8 md:p-10 flex-1 flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider flex items-center gap-2">
                {q.type === 'reorder' ? 'เรียงประโยค' : q.type === 'fill-blank' ? 'เติมคำในช่องว่าง' : q.type === 'true-false' ? 'ถูก หรือ ผิด' : 'เลือกคำตอบที่ถูก'}
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseQuestionText(q.question) }} />

              <div className="flex-1 space-y-3">
                  {(q.type === 'choice' || q.type === 'true-false') && q.options?.map((opt, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full p-4 rounded-xl text-left font-semibold border-2 transition-all flex justify-between items-center group
                            ${userAnswer === idx ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-600'}`}
                      >
                          {opt} {userAnswer === idx && <div className="w-3 h-3 bg-indigo-500 rounded-full" />}
                      </button>
                  ))}

                  {q.type === 'fill-blank' && (
                      <input 
                        type="text" 
                        value={userAnswer as string || ''}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder="พิมพ์คำตอบที่นี่..."
                        className="w-full p-4 text-xl border-2 border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-700 font-medium bg-slate-50"
                        autoFocus
                      />
                  )}

                  {q.type === 'reorder' && (
                      <div className="space-y-6">
                          <div className="min-h-[60px] p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2 items-center">
                              {(userAnswer as string[] || []).length === 0 && <span className="text-slate-400 text-sm italic">แตะคำด้านล่างเพื่อเรียงประโยค</span>}
                              {(userAnswer as string[] || []).map((word, idx) => (
                                  <button key={idx} onClick={() => handleReorderRemove(idx)} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg font-bold hover:bg-red-100 transition-colors">{word}</button>
                              ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                              {q.options?.map((word, idx) => {
                                  const usedCount = (userAnswer as string[] || []).filter(w => w === word).length;
                                  const totalCount = q.options!.filter(w => w === word).length;
                                  return (
                                      <button 
                                        key={idx} 
                                        onClick={() => usedCount < totalCount && handleReorderSelect(word)}
                                        disabled={usedCount >= totalCount}
                                        className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${usedCount >= totalCount ? 'opacity-30 cursor-default border-slate-100' : 'border-slate-200 hover:border-indigo-400 hover:text-indigo-600 text-slate-600'}`}
                                      >
                                          {word}
                                      </button>
                                  )
                              })}
                          </div>
                      </div>
                  )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                  <button onClick={handleNext} disabled={!hasAnswered} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 hover:scale-105 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all flex gap-2 items-center">
                      {currentQuestionIndex === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'} <Play size={20} className="fill-current"/>
                  </button>
              </div>
          </div>
      </div>
      
      <AdBanner className="mt-8" />
    </div>
  );
}