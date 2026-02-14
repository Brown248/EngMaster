// frontend/src/pages/Vocabulary.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, ChevronRight, X } from 'lucide-react';
import { vocabularyCategories } from '../data/vocab_parts/vocabularyData';
import { MainCategory, SubCategory, VocabWord } from '../types'; 
import AdBanner from '../components/AdBanner';

export default function Vocabulary() {
  const [activeGroup, setActiveGroup] = useState<string>(vocabularyCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState<VocabWord | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const getAllWords = () => {
    let all: VocabWord[] = [];
    vocabularyCategories.forEach((cat: MainCategory) => {
      cat.subCategories.forEach((sub: SubCategory) => {
        all = [...all, ...sub.words];
      });
    });
    return all;
  };

  const filteredWords = searchQuery 
    ? getAllWords().filter(w => w.word.toLowerCase().includes(searchQuery.toLowerCase()) || w.meaning.includes(searchQuery))
    : [];

  const renderHighlightedText = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n');

    return (
      <div className="space-y-3 md:space-y-4">
        {lines.map((line, index) => {
          let html = line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded border border-violet-100 mx-1">$1</span>');
          const tenseLabelRegex = /^(Present:|Past:|Perfect:|Future:)/;
          const match = line.match(tenseLabelRegex);
          
          if (match) {
            html = html.replace(tenseLabelRegex, '').trim();
            const label = match[0].replace(':', '');
            return (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 bg-slate-50/50 p-3 rounded-xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
                <span className={`shrink-0 px-2 py-0.5 md:py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit ${label === 'Present' ? 'bg-blue-100 text-blue-700' : ''} ${label === 'Past' ? 'bg-orange-100 text-orange-700' : ''} ${label === 'Perfect' ? 'bg-purple-100 text-purple-700' : ''} ${label === 'Future' ? 'bg-emerald-100 text-emerald-700' : ''}`}>
                  {label}
                </span>
                <span className="text-slate-700 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            );
          }
          return <div key={index} className="leading-relaxed text-slate-700 text-base md:text-lg pl-1" dangerouslySetInnerHTML={{ __html: html }} />;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6 md:space-y-8 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tight">Vocabulary Bank</h1>
          <p className="text-violet-100 text-base md:text-xl font-medium max-w-2xl opacity-90">
            คลังคำศัพท์คุณภาพสูง เรียนรู้ผ่านบริบทและการใช้งานจริง
          </p>
          <div className="mt-6 md:mt-8 relative max-w-xl">
            <input 
              type="text" 
              placeholder="ค้นหาคำศัพท์..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white focus:text-violet-900 focus:placeholder-violet-400 transition-all text-base md:text-lg shadow-lg"
            />
            <Search className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 ${searchQuery ? 'text-violet-500' : 'text-white/70'}`} size={20} />
            {searchQuery && (
               <button onClick={() => setSearchQuery('')} className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-600">
                 <X size={18}/>
               </button>
            )}
          </div>
        </div>
      </div>

      <AdBanner className="mb-2" />

      {/* Content */}
      <div className="min-h-[400px]">
        {searchQuery ? (
          <div className="space-y-6">
             <h3 className="text-lg md:text-xl font-bold text-slate-700 flex items-center gap-2 px-1">
               <Search size={18}/> ผลการค้นหา: {filteredWords.length} คำ
             </h3>
             {filteredWords.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                 {filteredWords.map((word) => (
                   <WordCard key={word.id} word={word} onSpeak={() => speak(word.word)} onClick={() => setSelectedWord(word)} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-20 text-slate-400">
                 <p className="text-lg md:text-xl">ไม่พบคำศัพท์ที่คุณค้นหา</p>
               </div>
             )}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Sidebar Categories - Scrollable on Mobile */}
            <div className="lg:w-1/4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 md:mb-4 px-1">หมวดหมู่คำศัพท์</h3>
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 no-scrollbar scroll-smooth">
                {vocabularyCategories.map((cat: MainCategory) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveGroup(cat.id)}
                    className={`shrink-0 lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl transition-all font-bold text-left border-2 whitespace-nowrap lg:whitespace-normal
                      ${activeGroup === cat.id 
                        ? `bg-${cat.color}-50 border-${cat.color}-200 text-${cat.color}-700 shadow-sm` 
                        : 'bg-white border-transparent hover:bg-slate-50 text-slate-600'
                      }`}
                  >
                    <span className="text-xl md:text-2xl">{cat.icon}</span>
                    <span className="text-sm md:text-base flex-1">{cat.title}</span>
                    {activeGroup === cat.id && <ChevronRight size={16} className={`hidden lg:block text-${cat.color}-500`} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Word List */}
            <div className="lg:w-3/4 space-y-6 md:space-y-8">
              <AnimatePresence mode="wait">
                <motion.div key={activeGroup} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                   {vocabularyCategories.find((c: MainCategory) => c.id === activeGroup)?.subCategories.map((sub: SubCategory) => (
                     <div key={sub.id} className="mb-8 md:mb-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                          <div className="h-6 md:h-8 w-1 bg-slate-800 rounded-full"></div>
                          <h2 className="text-xl md:text-2xl font-black text-slate-800">{sub.title}</h2>
                          <span className="text-[10px] md:text-sm font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">{sub.words.length}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {sub.words.map((word) => (
                            <WordCard key={word.id} word={word} onSpeak={() => speak(word.word)} onClick={() => setSelectedWord(word)} />
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedWord(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedWord(null)} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={24} />
              </button>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-2 md:mb-3 tracking-tight">{selectedWord.word}</h2>
                <div className="flex flex-wrap items-center justify-center gap-2 text-slate-500 font-medium">
                  {selectedWord.partOfSpeech && <span className="italic px-2 py-0.5 bg-slate-100 rounded-md text-sm">{selectedWord.partOfSpeech}</span>}
                  <span className="text-lg md:text-xl text-slate-600">{selectedWord.meaning}</span>
                </div>
              </div>
              <div className="bg-white mb-6 md:mb-8">
                 <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4 border-b border-slate-100 pb-2">Example Usage</p>
                 {selectedWord.example ? renderHighlightedText(selectedWord.example) : <p className="text-slate-400 italic text-center py-4">No examples available.</p>}
              </div>
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => speak(selectedWord.word)} className="w-full py-3 md:py-3.5 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-violet-200">
                  <Volume2 size={20} /> ฟังเสียง
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WordCard({ word, onSpeak, onClick }: { word: VocabWord; onSpeak: (e: any) => void; onClick: () => void }) {
  const formatExample = (text: string) => {
      const firstLine = text.split('\n')[0].replace(/^(Present:|Past:|Perfect:|Future:)/, '').trim(); 
      const html = firstLine.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-violet-700">$1</span>');
      return <span dangerouslySetInnerHTML={{__html: html}} />;
  };
  return (
    <motion.div whileHover={{ y: -3 }} onClick={onClick} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 hover:border-violet-200 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col h-full">
      <div className="flex justify-between items-start mb-2 md:mb-3">
        <h4 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors">{word.word}</h4>
        <button onClick={(e) => { e.stopPropagation(); onSpeak(e); }} className="p-1.5 md:p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all">
          <Volume2 size={18} />
        </button>
      </div>
      <p className="text-slate-600 font-medium mb-3 md:mb-4 text-base md:text-lg">{word.meaning.split('(')[0]}</p>
      {word.example && <div className="mt-auto pt-3 md:pt-4 border-t border-slate-50 text-xs md:text-sm text-slate-500 italic line-clamp-1 md:line-clamp-2 leading-relaxed">"{formatExample(word.example)}"</div>}
    </motion.div>
  );
}