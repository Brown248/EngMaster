// frontend/src/pages/Vocabulary.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, Bookmark, BookmarkCheck, ChevronRight, X } from 'lucide-react';
// [Fix] Import Types ที่เพิ่มเข้ามา
import { VOCAB_CATEGORIES } from '../data/vocab_parts/vocabularyData';
import { MainCategory, SubCategory, VocabWord } from '../types'; 

export default function Vocabulary() {
  const [activeGroup, setActiveGroup] = useState<string>(VOCAB_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedWords, setSavedWords] = useState<number[]>([]);
  const [selectedWord, setSelectedWord] = useState<VocabWord | null>(null);

  // Load saved words
  useEffect(() => {
    const saved = localStorage.getItem('engmaster_saved_vocab');
    if (saved) {
      setSavedWords(JSON.parse(saved));
    }
  }, []);

  const toggleSave = (id: number | string) => {
    // Convert id to number if possible for consistent storage
    const numId = Number(id);
    let newSaved;
    if (savedWords.includes(numId)) {
      newSaved = savedWords.filter(wId => wId !== numId);
    } else {
      newSaved = [...savedWords, numId];
    }
    setSavedWords(newSaved);
    localStorage.setItem('engmaster_saved_vocab', JSON.stringify(newSaved));
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // Helper to flatten words for searching
  const getAllWords = () => {
    let all: VocabWord[] = [];
    VOCAB_CATEGORIES.forEach(cat => {
      cat.subCategories.forEach(sub => {
        all = [...all, ...sub.words];
      });
    });
    return all;
  };

  const filteredWords = searchQuery 
    ? getAllWords().filter(w => w.word.toLowerCase().includes(searchQuery.toLowerCase()) || w.meaning.includes(searchQuery))
    : [];

  return (
    <div className="space-y-8 pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Vocabulary Bank</h1>
          <p className="text-violet-100 text-lg md:text-xl font-medium max-w-2xl">
            คลังคำศัพท์ที่จัดหมวดหมู่ไว้อย่างดี ช่วยให้คุณจำศัพท์ได้ง่ายและนำไปใช้ได้จริง
          </p>
          
          <div className="mt-8 relative max-w-xl">
            <input 
              type="text" 
              placeholder="ค้นหาคำศัพท์ (เช่น business, เดินทาง...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white focus:text-violet-900 focus:placeholder-violet-400 transition-all text-lg shadow-lg"
            />
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${searchQuery ? 'text-violet-500' : 'text-white/70'}`} size={24} />
            {searchQuery && (
               <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-600">
                 <X size={20}/>
               </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[600px]">
        {searchQuery ? (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2">
               <Search size={20}/> ผลการค้นหา: {filteredWords.length} คำ
             </h3>
             {filteredWords.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {filteredWords.map((word) => (
                   <WordCard key={word.id} word={word} isSaved={savedWords.includes(Number(word.id))} onSave={() => toggleSave(word.id)} onSpeak={() => speak(word.word)} onClick={() => setSelectedWord(word)} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-20 text-slate-400">
                 <p className="text-xl">ไม่พบคำศัพท์ที่คุณค้นหา</p>
               </div>
             )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Categories */}
            <div className="lg:col-span-1 space-y-3">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Categories</h3>
              {VOCAB_CATEGORIES.map((cat: MainCategory) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveGroup(cat.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all font-bold text-left group border-2
                    ${activeGroup === cat.id 
                      ? `bg-${cat.color}-50 border-${cat.color}-200 text-${cat.color}-700 shadow-sm` 
                      : 'bg-white border-transparent hover:bg-slate-50 text-slate-600'
                    }`}
                >
                  <span className={`text-2xl group-hover:scale-110 transition-transform`}>{cat.icon}</span>
                  <span className="flex-1">{cat.title}</span>
                  {activeGroup === cat.id && <ChevronRight size={18} className={`text-${cat.color}-500`} />}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                   {/* [Fix] ใส่ Type ให้ sub: SubCategory */}
                   {VOCAB_CATEGORIES.find((c: MainCategory) => c.id === activeGroup)?.subCategories.map((sub: SubCategory) => (
                     <div key={sub.id} className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-8 w-1.5 bg-slate-800 rounded-full"></div>
                          <h2 className="text-2xl font-black text-slate-800">{sub.title}</h2>
                          <span className="text-sm font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{sub.words.length} words</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sub.words.map((word) => (
                            <WordCard 
                              key={word.id} 
                              word={word} 
                              isSaved={savedWords.includes(Number(word.id))} 
                              onSave={() => toggleSave(word.id)} 
                              onSpeak={() => speak(word.word)}
                              onClick={() => setSelectedWord(word)}
                            />
                          ))}
                        </div>
                     </div>
                   ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Word Detail Modal */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWord(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedWord(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-4xl font-black text-slate-800 mb-2">{selectedWord.word}</h2>
                <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                  {selectedWord.partOfSpeech && <span className="italic">{selectedWord.partOfSpeech}</span>}
                  <span>•</span>
                  <span className="text-lg">{selectedWord.meaning}</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <div className="flex gap-4">
                   <span className="text-4xl">💡</span>
                   <div>
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Example</p>
                     <p className="text-slate-700 text-lg leading-relaxed italic">"{selectedWord.example}"</p>
                   </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => speak(selectedWord.word)}
                  className="flex-1 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Volume2 size={20} /> ฟังเสียง
                </button>
                <button 
                  onClick={() => toggleSave(selectedWord.id)}
                  className={`flex-1 py-3 border-2 rounded-xl font-bold transition-colors flex items-center justify-center gap-2
                    ${savedWords.includes(Number(selectedWord.id)) 
                      ? 'border-green-500 text-green-600 bg-green-50' 
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                >
                  {savedWords.includes(Number(selectedWord.id)) ? <><BookmarkCheck size={20}/> Saved</> : <><Bookmark size={20}/> Save</>}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-component for clean code
function WordCard({ word, isSaved, onSave, onSpeak, onClick }: { word: VocabWord; isSaved: boolean; onSave: (e: any) => void; onSpeak: (e: any) => void; onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-violet-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group relative"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors">{word.word}</h4>
        <div className="flex gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); onSpeak(e); }} 
            className="p-2 text-slate-300 hover:text-violet-500 hover:bg-violet-50 rounded-full transition-all"
          >
            <Volume2 size={18} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onSave(e); }} 
            className={`p-2 rounded-full transition-all ${isSaved ? 'text-green-500 bg-green-50' : 'text-slate-300 hover:text-slate-500 hover:bg-slate-50'}`}
          >
            {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </button>
        </div>
      </div>
      <p className="text-slate-500 font-medium mb-1">{word.meaning}</p>
      {word.example && (
        <p className="text-xs text-slate-400 line-clamp-1 italic mt-2 border-t border-slate-50 pt-2">
          "{word.example}"
        </p>
      )}
    </motion.div>
  );
}