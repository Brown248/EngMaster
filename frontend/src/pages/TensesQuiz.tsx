import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// ✅ แก้ไข: Import ข้อมูลให้ถูกไฟล์
import { tensesQuizData } from '../data/tensesQuizData';
import AdBanner from '../components/AdBanner';

// ✅ แก้ไข: เปลี่ยนชื่อ Component เป็น TensesQuiz
export default function TensesQuiz() {
  const navigate = useNavigate();
  
  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize array based on data length
  useEffect(() => {
    // ✅ แก้ไข: ใช้ tensesQuizData
    if (tensesQuizData) {
        setUserAnswers(new Array(tensesQuizData.length).fill(null));
    }
  }, []);

  // Helper to parse bold text
  const parseQuestionText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-indigo-700">$1</span>');
  };

  // Handle Answer Selection
  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // Handle Navigation
  const handleNext = () => {
    // ✅ แก้ไข: ใช้ tensesQuizData
    if (currentQuestionIndex < tensesQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    window.scrollTo(0, 0);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    // ✅ แก้ไข: ใช้ tensesQuizData
    setUserAnswers(new Array(tensesQuizData.length).fill(null));
    setIsFinished(false);
    window.scrollTo(0, 0);
  };

  // ป้องกัน error กรณีโหลดข้อมูลไม่ทัน
  if (!tensesQuizData) {
      return <div className="p-10 text-center text-slate-500">Loading quiz data...</div>;
  }

  // --- Result Screen ---
  if (isFinished) {
    const score = userAnswers.reduce((acc, ans, index) => {
      // ✅ แก้ไข: ใช้ tensesQuizData
      return (ans === tensesQuizData[index].correctAnswer) ? (acc || 0) + 1 : (acc || 0);
    }, 0) || 0;

    // ✅ แก้ไข: ใช้ tensesQuizData
    const percentage = Math.round((score / tensesQuizData.length) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Score Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl text-center border border-slate-100 relative overflow-hidden"
          >
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-sm">
              🏆
            </div>
            
            <h2 className="text-3xl font-black text-slate-800 mb-2">Quiz Completed!</h2>
            <p className="text-slate-500 mb-8 font-medium">ทดสอบ Tenses 12 ข้อ เรียบร้อย!</p>
            
            <div className="flex justify-center items-end gap-2 mb-8">
              <span className="text-6xl font-black text-indigo-600">{score}</span>
              {/* ✅ แก้ไข: ใช้ tensesQuizData */}
              <span className="text-2xl font-bold text-slate-400 mb-2">/ {tensesQuizData.length}</span>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden max-w-md mx-auto">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className={`h-full rounded-full ${
                  percentage >= 80 ? 'bg-green-500' : 
                  percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={restartQuiz}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg"
              >
                <RefreshCw size={20} /> ทำอีกครั้ง
              </button>
              <button 
                onClick={() => navigate('/grammar')}
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft size={20} /> กลับบทเรียน
              </button>
            </div>
          </motion.div>

          <AdBanner />

          {/* Solution List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 ml-2">เฉลยละเอียด:</h3>
            {/* ✅ แก้ไข: ใช้ tensesQuizData */}
            {tensesQuizData.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-2xl p-6 border-2 ${isCorrect ? 'border-green-100' : 'border-red-100'} shadow-sm`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0
                        ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                      `}>
                        {index + 1}
                      </div>
                      <h4 
                        className="font-bold text-slate-800 text-lg" 
                        dangerouslySetInnerHTML={{ __html: parseQuestionText(question.question) }} 
                      />
                    </div>
                    {isCorrect ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                  </div>

                  <div className="space-y-2 pl-11">
                    <div className={`p-3 rounded-lg flex justify-between items-center text-sm font-medium
                      ${isCorrect 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'}
                    `}>
                      <span>
                        <span className="font-bold mr-2">คำตอบของคุณ:</span> 
                        {userAnswer !== null ? question.options[userAnswer] : '(ไม่ได้ตอบ)'}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="p-3 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm font-medium">
                        <span className="font-bold mr-2">คำตอบที่ถูก:</span> 
                        {question.options[question.correctAnswer]}
                      </div>
                    )}

                    <div className="mt-3 pt-3 border-t border-slate-100 flex gap-3 text-slate-600 text-sm">
                      <AlertCircle size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                      <p>{question.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- Quiz Screen ---
  // ✅ แก้ไข: ใช้ tensesQuizData
  const questionData = tensesQuizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / tensesQuizData.length) * 100;
  const isLastQuestion = currentQuestionIndex === tensesQuizData.length - 1;
  const hasAnsweredCurrent = userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex] !== undefined;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button 
          onClick={() => navigate('/grammar')} 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> ออกจากแบบทดสอบ
        </button>
        <div className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">
          {/* ✅ แก้ไข: ใช้ tensesQuizData */}
          ข้อที่ {currentQuestionIndex + 1} / {tensesQuizData.length}
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden relative min-h-[400px] flex flex-col">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-100">
            <motion.div 
              className="h-full bg-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-10 flex-1 flex flex-col">
            <h2 
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-snug" 
              dangerouslySetInnerHTML={{ __html: parseQuestionText(questionData.question) }} 
            />

            <div className="space-y-3 flex-1">
              {questionData.options.map((option, index) => {
                const isSelected = userAnswers[currentQuestionIndex] === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-4 rounded-xl text-left font-semibold text-lg transition-all flex items-center justify-between border-2
                      ${isSelected 
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' 
                        : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-600'
                      }`}
                  >
                    <span>{option}</span>
                    {isSelected && <div className="w-4 h-4 rounded-full bg-indigo-500" />}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-50">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`text-slate-500 font-bold hover:text-slate-800 transition-colors ${currentQuestionIndex === 0 ? 'invisible' : ''}`}
              >
                ข้อก่อนหน้า
              </button>

              <button
                onClick={handleNext}
                disabled={!hasAnsweredCurrent}
                className={`px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg flex items-center gap-2
                  ${!hasAnsweredCurrent 
                    ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                    : 'bg-slate-800 hover:bg-slate-900 hover:scale-105'
                  }`}
              >
                {isLastQuestion ? 'ส่งคำตอบ' : 'ถัดไป'}
                {!isLastQuestion && <ArrowLeft size={20} className="rotate-180" />}
              </button>
            </div>
          </div>
        </div>
        
        <AdBanner className="mt-8" />
      </div>
    </div>
  );
}