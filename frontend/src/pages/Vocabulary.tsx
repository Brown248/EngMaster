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
      <div className="space-y-4">
        {lines.map((line, index) => {
          let html = line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded border border-violet-100 mx-1">$1</span>');
          const tenseLabelRegex = /^(Present:|Past:|Perfect:|Future:)/;
          const match = line.match(tenseLabelRegex);
          
          if (match) {
            html = html.replace(tenseLabelRegex, '').trim();
            const label = match[0].replace(':', '');
            return (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 bg-slate-50/50 p-3 rounded-xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
                <span className={`shrink-0 px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider w-fit ${label === 'Present' ? 'bg-blue-100 text-blue-700' : ''} ${label === 'Past' ? 'bg-orange-100 text-orange-700' : ''} ${label === 'Perfect' ? 'bg-purple-100 text-purple-700' : ''} ${label === 'Future' ? 'bg-emerald-100 text-emerald-700' : ''}`}>
                  {label}
                </span>
                <span className="text-slate-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            );
          }
          return <div key={index} className="leading-relaxed text-slate-700 text-lg pl-1" dangerouslySetInnerHTML={{ __html: html }} />;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Vocabulary Bank</h1>
          <p className="text-violet-100 text-lg md:text-xl font-medium max-w-2xl">
            คลังคำศัพท์คุณภาพสูง เรียนรู้ผ่านบริบทและการใช้งานจริง
          </p>
          <div className="mt-8 relative max-w-xl">
            <input 
              type="text" 
              placeholder="ค้นหาคำศัพท์..." 
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

      {/* ✅ เพิ่มช่องใส่โฆษณาด้านบนสุดของหน้า Vocabulary */}
      <AdBanner className="mb-4" />

      {/* Content */}
      <div className="min-h-[600px]">
        {searchQuery ? (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2">
               <Search size={20}/> ผลการค้นหา: {filteredWords.length} คำ
             </h3>
             {filteredWords.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {filteredWords.map((word) => (
                   <WordCard key={word.id} word={word} onSpeak={() => speak(word.word)} onClick={() => setSelectedWord(word)} />
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
            <div className="lg:col-span-1 space-y-3">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">หมวดหมู่คำศัพท์</h3>
              {vocabularyCategories.map((cat: MainCategory) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveGroup(cat.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all font-bold text-left group border-2 ${activeGroup === cat.id ? `bg-${cat.color}-50 border-${cat.color}-200 text-${cat.color}-700 shadow-sm` : 'bg-white border-transparent hover:bg-slate-50 text-slate-600'}`}
                >
                  <span className={`text-2xl group-hover:scale-110 transition-transform`}>{cat.icon}</span>
                  <span className="flex-1">{cat.title}</span>
                  {activeGroup === cat.id && <ChevronRight size={18} className={`text-${cat.color}-500`} />}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div key={activeGroup} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                   {vocabularyCategories.find((c: MainCategory) => c.id === activeGroup)?.subCategories.map((sub: SubCategory) => (
                     <div key={sub.id} className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-8 w-1.5 bg-slate-800 rounded-full"></div>
                          <h2 className="text-2xl font-black text-slate-800">{sub.title}</h2>
                          <span className="text-sm font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{sub.words.length} คำ</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedWord(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
              <div className="text-center mb-8">
                <h2 className="text-5xl font-black text-slate-800 mb-3 tracking-tight">{selectedWord.word}</h2>
                <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                  {selectedWord.partOfSpeech && <span className="italic px-2 py-0.5 bg-slate-100 rounded-md">{selectedWord.partOfSpeech}</span>}
                  <span className="text-xl text-slate-600">{selectedWord.meaning}</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-0 mb-8">
                <div className="flex gap-4 items-start">
                   <div className="flex-1">
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Example Usage</p>
                     {selectedWord.example ? renderHighlightedText(selectedWord.example) : <p className="text-slate-400 italic text-center py-4">No examples available.</p>}
                   </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => speak(selectedWord.word)} className="w-full py-3.5 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-violet-200">
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
    <motion.div whileHover={{ y: -5 }} onClick={onClick} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-violet-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-2xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors">{word.word}</h4>
        <div className="flex gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <button onClick={(e) => { e.stopPropagation(); onSpeak(e); }} className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all">
            <Volume2 size={20} />
          </button>
        </div>
      </div>
      <p className="text-slate-600 font-medium mb-4 text-lg">{word.meaning.split('(')[0]}</p>
      {word.example && <div className="mt-auto pt-4 border-t border-slate-50 text-sm text-slate-500 italic line-clamp-2 leading-relaxed">"{formatExample(word.example)}"</div>}
    </motion.div>
  );
}