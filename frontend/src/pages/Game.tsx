// src/pages/Game.tsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Heart, Zap, Brain, 
  RefreshCcw, CheckCircle2, XCircle, Home, Lightbulb 
} from 'lucide-react'; 
// import confetti from 'canvas-confetti'; // เปิดใช้ถ้าติดตั้งแล้ว
import { vocabularyCategories } from '../data/vocab_parts/vocabularyData';
import { MainCategory, SubCategory, VocabWord } from '../types';

// --- Types ---
type GameMode = 'menu' | 'quiz' | 'scramble' | 'gameover';

// --- Helper Functions ---
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getRandomDistractors = (correctWord: VocabWord, allWords: VocabWord[], count: number) => {
  const others = allWords.filter(w => w.id !== correctWord.id);
  return shuffleArray(others).slice(0, count).map(w => w.meaning);
};

export default function Game() {
  const [allWords, setAllWords] = useState<VocabWord[]>([]);
  const [mode, setMode] = useState<GameMode>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);

  // Load Data & High Score
  useEffect(() => {
    const words: VocabWord[] = [];
    vocabularyCategories.forEach((cat: MainCategory) => {
      cat.subCategories.forEach((sub: SubCategory) => {
        words.push(...sub.words);
      });
    });
    setAllWords(words);

    const savedScore = localStorage.getItem('engmaster-highscore');
    if (savedScore) setHighScore(parseInt(savedScore));
  }, []);

  // Update High Score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('engmaster-highscore', score.toString());
    }
  }, [score, highScore]);

  const startGame = (selectedMode: GameMode) => {
    setMode(selectedMode);
    setScore(0);
    setLives(3);
    setStreak(0);
  };

  const handleGameOver = () => {
    setMode('gameover');
    // if (score > 100) confetti(); // เรียกใช้เอฟเฟกต์พลุถ้ามี
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 font-sans text-slate-800">
      <div className="max-w-xl mx-auto">
        
        {/* Header */}
        {mode !== 'menu' && (
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setMode('menu')} className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <Home size={20} className="text-slate-500" />
              </button>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-800">{score}</span>
                  {streak > 1 && (
                    <span className="text-xs font-bold text-orange-500 animate-pulse">
                      🔥 x{Math.min(streak, 5)} Combo
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  size={24} 
                  className={`transition-all duration-300 ${i < lives ? 'fill-red-500 text-red-500' : 'fill-slate-200 text-slate-200'}`} 
                />
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {mode === 'menu' && (
            <MenuScreen 
              highScore={highScore} 
              onSelectMode={startGame} 
              totalWords={allWords.length} 
            />
          )}

          {mode === 'quiz' && (
            <QuizGame 
              words={allWords} 
              setScore={setScore} 
              setLives={setLives} 
              setStreak={setStreak} 
              streak={streak}
              onGameOver={handleGameOver} 
            />
          )}

          {mode === 'scramble' && (
            <ScrambleGame 
              words={allWords} 
              setScore={setScore} 
              setLives={setLives}
              setStreak={setStreak}
              streak={streak}
              onGameOver={handleGameOver} 
            />
          )}

          {mode === 'gameover' && (
            <GameOverScreen 
              score={score} 
              highScore={highScore} 
              onRestart={() => setMode('menu')} 
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Components
// ----------------------------------------------------------------------

const MenuScreen = ({ highScore, onSelectMode, totalWords }: { highScore: number, onSelectMode: (m: GameMode) => void, totalWords: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
    className="space-y-6 text-center pt-8"
  >
    <div className="mb-8">
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-200 mb-4">
        <Trophy size={40} className="text-white" />
      </div>
      <h1 className="text-4xl font-black text-slate-800 mb-2">Game Arena</h1>
      <p className="text-slate-500 font-medium">ท้าทายความรู้คำศัพท์ {totalWords} คำ</p>
      
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-bold border border-yellow-100">
        <Trophy size={14} /> High Score: {highScore}
      </div>
    </div>

    <div className="grid gap-4">
      <button 
        onClick={() => onSelectMode('quiz')}
        className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:shadow-xl transition-all text-left"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Zap size={80} />
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Speed Quiz</h3>
            <p className="text-slate-500 text-sm">ทายความหมาย 4 ตัวเลือก (เน้นความไว)</p>
          </div>
        </div>
      </button>

      <button 
        onClick={() => onSelectMode('scramble')}
        className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-purple-500 hover:shadow-xl transition-all text-left"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Brain size={80} />
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Word Scramble</h3>
            <p className="text-slate-500 text-sm">เรียงตัวอักษรให้ถูกต้อง (เน้นการสะกด)</p>
          </div>
        </div>
      </button>
    </div>
  </motion.div>
);

const QuizGame = ({ words, setScore, setLives, setStreak, streak, onGameOver }: any) => {
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [answered, setAnswered] = useState<number | null>(null);

  const nextQuestion = useCallback(() => {
    if (words.length < 4) return;
    const word = words[Math.floor(Math.random() * words.length)];
    const distractors = getRandomDistractors(word, words, 3);
    const allOptions = shuffleArray([word.meaning, ...distractors]);
    
    setCurrentWord(word);
    setOptions(allOptions);
    setAnswered(null);
  }, [words]);

  useEffect(() => { nextQuestion(); }, []);

  const handleAnswer = (index: number) => {
    if (answered !== null || !currentWord) return;
    setAnswered(index);

    const isCorrect = options[index] === currentWord.meaning;
    if (isCorrect) {
      const bonus = Math.min(streak, 5) * 2;
      setScore((s: number) => s + 10 + bonus);
      setStreak((s: number) => s + 1);
      setTimeout(nextQuestion, 1000);
    } else {
      setLives((l: number) => {
        if (l - 1 <= 0) setTimeout(onGameOver, 1000);
        return l - 1;
      });
      setStreak(0);
      setTimeout(nextQuestion, 1500);
    }
  };

  if (!currentWord) return <div>Loading...</div>;

  return (
    <motion.div 
      key="quiz"
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-slate-100 text-center"
    >
      <div className="mb-8">
        <p className="text-slate-400 font-bold uppercase text-xs mb-2">What does this mean?</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">{currentWord.word}</h2>
        {currentWord.partOfSpeech && (
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">
            {currentWord.partOfSpeech}
          </span>
        )}
      </div>

      <div className="grid gap-3">
        {options.map((option, idx) => {
          let stateStyles = "bg-white border-slate-200 text-slate-600 hover:border-indigo-400 hover:bg-indigo-50";
          
          if (answered !== null) {
            if (option === currentWord.meaning) {
              stateStyles = "bg-green-500 border-green-500 text-white shadow-lg shadow-green-200"; 
            } else if (idx === answered) {
              stateStyles = "bg-red-500 border-red-500 text-white shadow-lg shadow-red-200"; 
            } else {
              stateStyles = "bg-slate-50 border-slate-100 text-slate-300 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={answered !== null}
              className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${stateStyles}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

const ScrambleGame = ({ words, setScore, setLives, setStreak, streak, onGameOver }: any) => {
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [scrambled, setScrambled] = useState('');
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<'none'|'correct'|'wrong'>('none');

  // แก้ไข: เพิ่ม : string เพื่อบอกว่าฟังก์ชันนี้คืนค่าเป็น string เสมอ
  const scramble = (word: string): string => {
    const arr = word.toLowerCase().split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const res = arr.join('');
    return (res === word.toLowerCase() && word.length > 1) ? scramble(word) : res;
  };

  const nextWord = useCallback(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambled(scramble(word.word));
    setInput('');
    setShowHint(false);
    setFeedback('none');
  }, [words]);

  useEffect(() => { nextWord(); }, []);

  const checkAnswer = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!currentWord) return;

    if (input.trim().toLowerCase() === currentWord.word.toLowerCase()) {
      setFeedback('correct');
      const bonus = Math.min(streak, 5) * 2;
      setScore((s: number) => s + 20 + bonus);
      setStreak((s: number) => s + 1);
      setTimeout(nextWord, 1000);
    } else {
      setFeedback('wrong');
      setLives((l: number) => {
        if (l - 1 <= 0) setTimeout(onGameOver, 1000);
        return l - 1;
      });
      setStreak(0);
      setInput(''); 
    }
  };

  // ✅ แก้ไข: ฟังก์ชันนี้จะทำการลบคะแนนและเปิดคำใบ้
  const useHint = () => {
    if (!showHint) {
      setShowHint(true);
      setScore((s: number) => Math.max(0, s - 5)); // หัก 5 คะแนน และไม่ให้ต่ำกว่า 0
    }
  };

  if (!currentWord) return <div>Loading...</div>;

  return (
    <motion.div 
      key="scramble"
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
      className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-2 transition-colors duration-300 ${feedback === 'correct' ? 'bg-green-500' : feedback === 'wrong' ? 'bg-red-500' : 'bg-purple-500'}`} />

      <div className="mb-8">
        <p className="text-slate-400 font-bold uppercase text-xs mb-4 tracking-widest">Unscramble the word</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {scrambled.split('').map((char, i) => (
            <motion.div 
              key={`${currentWord.word}-${i}`}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}
              className="w-10 h-12 md:w-14 md:h-16 bg-slate-100 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black text-slate-700 shadow-sm border-b-4 border-slate-200"
            >
              {char}
            </motion.div>
          ))}
        </div>

        <div className="h-12 flex items-center justify-center">
          {!showHint ? (
            <button onClick={useHint} className="flex items-center gap-1 text-xs font-bold text-purple-500 bg-purple-50 px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors">
              <Lightbulb size={14} /> Show Hint (-5 pts)
            </button>
          ) : (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-slate-600 font-medium bg-slate-50 px-4 py-2 rounded-lg">
              💡 {currentWord.meaning}
            </motion.div>
          )}
        </div>
      </div>

      <form onSubmit={checkAnswer} className="relative max-w-sm mx-auto">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          autoFocus
          className={`w-full text-center text-2xl font-bold py-4 rounded-xl border-2 outline-none transition-all
            ${feedback === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : 
              feedback === 'wrong' ? 'border-red-500 bg-red-50 text-red-700 animate-shake' : 
              'border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100'}`}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {feedback === 'correct' && <CheckCircle2 className="text-green-500" size={24} />}
          {feedback === 'wrong' && <XCircle className="text-red-500" size={24} />}
        </div>
      </form>

      <div className="mt-8 flex justify-center gap-3">
        <button onClick={() => nextWord()} className="px-5 py-3 rounded-xl font-bold text-slate-400 hover:bg-slate-50 transition-colors">Skip</button>
        <button 
          onClick={checkAnswer} 
          disabled={!input}
          className="px-8 py-3 rounded-xl font-bold bg-slate-900 text-white shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0"
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
};

const GameOverScreen = ({ score, highScore, onRestart }: { score: number, highScore: number, onRestart: () => void }) => (
  <motion.div 
    key="gameover"
    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
    className="text-center bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-md mx-auto"
  >
    <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <Heart size={40} className="fill-red-500" />
    </div>
    
    <h2 className="text-3xl font-black text-slate-800 mb-2">Game Over!</h2>
    <p className="text-slate-500 mb-8">คุณใช้หัวใจหมดแล้ว</p>

    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-slate-50 p-4 rounded-2xl">
        <p className="text-xs font-bold text-slate-400 uppercase">Score</p>
        <p className="text-3xl font-black text-slate-800">{score}</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-2xl">
        <p className="text-xs font-bold text-yellow-600 uppercase">Best</p>
        <p className="text-3xl font-black text-yellow-600">{highScore}</p>
      </div>
    </div>

    <button 
      onClick={onRestart}
      className="w-full py-4 rounded-xl font-bold bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
    >
      <RefreshCcw size={20} /> Play Again
    </button>
  </motion.div>
);