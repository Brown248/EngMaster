// src/pages/Game.tsx
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion'; // 👈 ลบ AnimatePresence ออก
import { Lightbulb, Trophy, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'; // 👈 ลบ Shuffle, RotateCcw ออก
// import confetti from 'canvas-confetti'; // ถ้าไม่ได้ใช้ให้ comment ไว้
import { vocabularyCategories } from '../data/vocab_parts/vocabularyData';
import { MainCategory, SubCategory, VocabWord } from '../types';

export default function Game() {
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [scrambled, setScrambled] = useState<string>('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');

  useEffect(() => {
    const allWords: VocabWord[] = [];
    vocabularyCategories.forEach((cat: MainCategory) => {
      cat.subCategories.forEach((sub: SubCategory) => {
        allWords.push(...sub.words);
      });
    });
    setWords(allWords);
    nextWord(allWords);
  }, []);

  // 👇 เพิ่ม : string เพื่อระบุ return type ให้ชัดเจน
  const scrambleWord = (word: string): string => {
    const arr = word.split('');
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    const result = arr.join('');
    return result === word && word.length > 1 ? scrambleWord(word) : result;
  };

  const nextWord = useCallback((wordList: VocabWord[] = words) => {
    if (wordList.length === 0) return;
    const random = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(random);
    setScrambled(scrambleWord(random.word.toLowerCase()));
    setUserInput('');
    setShowHint(false);
    setGameState('playing');
  }, [words]);

  // ... (ส่วนที่เหลือเหมือนเดิม) ...
  
  const checkAnswer = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!currentWord) return;

    if (userInput.toLowerCase().trim() === currentWord.word.toLowerCase()) {
      setGameState('won');
      setScore(s => s + 10 + (streak * 2));
      setStreak(s => s + 1);
      // confetti({...}); // ถ้ามี
    } else {
      setGameState('lost');
      setStreak(0);
    }
  };

  const handleSkip = () => {
    setGameState('lost');
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                    <Trophy size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Score</p>
                    <p className="text-2xl font-black text-slate-800">{score}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${streak > 0 ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                    <div className="font-bold">🔥 {streak}</div>
                </div>
            </div>
        </div>

        {/* Game Card */}
        <motion.div 
            layout
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <div className="mb-8">
                <p className="text-slate-400 font-medium mb-4 uppercase tracking-widest text-sm">
                    Unscramble this word
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {scrambled.split('').map((char, index) => (
                        <motion.div
                            key={`${currentWord?.word}-${index}`}
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.05, type: "spring" }}
                            className="w-12 h-14 md:w-16 md:h-20 bg-slate-100 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-black text-slate-700 shadow-sm border-b-4 border-slate-200"
                        >
                            {char}
                        </motion.div>
                    ))}
                </div>

                <div className="h-16 flex items-center justify-center">
                    {!showHint && gameState === 'playing' ? (
                        <button 
                            onClick={() => setShowHint(true)}
                            className="text-sm font-bold text-violet-500 hover:text-violet-700 flex items-center gap-1 transition-colors bg-violet-50 px-3 py-1.5 rounded-full"
                        >
                            <Lightbulb size={16} /> Show Hint (-5 pts)
                        </button>
                    ) : (
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-slate-500 font-medium bg-slate-50 px-4 py-2 rounded-lg inline-block"
                        >
                            💡 {currentWord?.meaning}
                        </motion.p>
                    )}
                </div>
            </div>

            <form onSubmit={checkAnswer} className="max-w-md mx-auto relative">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={gameState !== 'playing'}
                    placeholder="Type your answer..."
                    className={`w-full text-center text-2xl font-bold py-4 rounded-xl border-2 outline-none transition-all
                        ${gameState === 'won' ? 'border-green-500 bg-green-50 text-green-700' : 
                          gameState === 'lost' ? 'border-red-500 bg-red-50 text-red-700' : 
                          'border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10'}`}
                    autoFocus
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    {gameState === 'won' && <CheckCircle2 className="text-green-500" size={28} />}
                    {gameState === 'lost' && <XCircle className="text-red-500" size={28} />}
                </div>
            </form>

            <div className="mt-8 flex justify-center gap-4">
                {gameState === 'playing' ? (
                    <>
                        <button 
                            type="button" 
                            onClick={handleSkip}
                            className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors"
                        >
                            Skip
                        </button>
                        <button 
                            onClick={checkAnswer}
                            disabled={!userInput}
                            className="px-8 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 shadow-lg shadow-slate-200 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
                        >
                            Submit
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={() => nextWord()}
                        className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all flex items-center gap-2
                            ${gameState === 'won' ? 'bg-green-500 hover:bg-green-600 shadow-green-200' : 'bg-slate-900 hover:bg-slate-800 shadow-slate-200'}`}
                    >
                        {gameState === 'won' ? 'Next Word' : 'Try Another'} <ArrowRight size={20} />
                    </button>
                )}
            </div>
            
            {gameState === 'lost' && (
                <div className="mt-6 text-red-500 font-bold">
                    Answer: <span className="text-slate-800 text-xl">{currentWord?.word}</span>
                </div>
            )}
        </motion.div>
      </div>
    </div>
  );
}