// frontend/src/pages/Vocabulary.tsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, XCircle, Layers } from 'lucide-react';
// ✅ แก้ไข Path ให้ตรงกับโฟลเดอร์จริง (vocab_parts)
import { vocabularyData, VOCAB_CATEGORIES } from '../data/vocab_parts/vocabularyData';
import AdBanner from '../components/AdBanner';

export default function Vocabulary() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [activeGroup, setActiveGroup] = useState<string>('All'); 
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  const filteredVocab = useMemo(() => {
    return vocabularyData.filter((item) => {
      let matchesCategory = true;
      if (activeGroup !== 'All' && activeSubCategory) {
        if (activeGroup === 'Topic') matchesCategory = item.topic === activeSubCategory;
        else if (activeGroup === 'POS') matchesCategory = item.partOfSpeech === activeSubCategory;
        else if (activeGroup === 'Usage') matchesCategory = item.usage === activeSubCategory;
        else if (activeGroup === 'Level') matchesCategory = item.level === activeSubCategory;
        else if (activeGroup === 'Special') matchesCategory = item.special === activeSubCategory;
      }

      const matchesLetter = selectedLetter ? item.word.charAt(0).toUpperCase() === selectedLetter : true;
      
      const matchesSearch = searchTerm
        ? item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesCategory && matchesLetter && matchesSearch;
    });
  }, [selectedLetter, searchTerm, activeGroup, activeSubCategory]);

  const clearFilters = () => {
    setSelectedLetter(null);
    setSearchTerm('');
    setActiveGroup('All');
    setActiveSubCategory(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.03 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-12"
    >
      <div className="flex items-center gap-5">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 bg-orange-100 text-orange-500 rounded-3xl flex items-center justify-center text-4xl shadow-md rotate-3"
        >
          📚
        </motion.div>
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">Vocabulary Bank</h2>
          <p className="text-slate-500 text-lg font-medium">
            คลังคำศัพท์แบ่งตามหมวดหมู่ เรียนรู้ง่าย จำแม่น
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg shadow-orange-100/50 border border-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

        <div className="space-y-6 mb-8">
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => { setActiveGroup('All'); setActiveSubCategory(null); setSelectedLetter(null); }}
                    className={`px-5 py-2.5 rounded-xl font-bold transition-all border
                        ${activeGroup === 'All' 
                            ? 'bg-orange-500 text-white border-orange-600 shadow-orange-200 shadow-md' 
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}`}
                >
                    <Layers size={18} className="inline mr-2 -mt-1" />
                    รวมทั้งหมด
                </button>
                {VOCAB_CATEGORIES.map((cat) => {
                    const isActive = activeGroup === cat.id;
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveGroup(cat.id); setActiveSubCategory(null); setSelectedLetter(null); }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all border
                                ${isActive 
                                    ? 'bg-white text-orange-600 border-orange-200 ring-2 ring-orange-100' 
                                    : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-white hover:border-slate-300'
                                }`}
                        >
                            <Icon size={18} />
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            <AnimatePresence>
                {activeGroup !== 'All' && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mr-2 py-1.5">เลือกหัวข้อย่อย:</span>
                            {VOCAB_CATEGORIES.find(c => c.id === activeGroup)?.subCategories.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => setActiveSubCategory(sub.id === activeSubCategory ? null : sub.id)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all border
                                        ${activeSubCategory === sub.id
                                            ? 'bg-orange-500 text-white border-orange-600 shadow-sm'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
                                        }`}
                                >
                                    {sub.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            if(e.target.value) {
                                setSelectedLetter(null);
                            }
                        }}
                        placeholder="🔍 ค้นหาคำศัพท์ (เช่น abundant, ผลลัพธ์)..." 
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-orange-400 focus:bg-white focus:shadow-lg transition-all text-lg font-medium text-slate-700 placeholder:text-slate-400"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
                        <Search size={20} className="text-orange-400" />
                    </div>
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                            <XCircle size={20} />
                        </button>
                    )}
                </div>
                
                {(selectedLetter || searchTerm || activeGroup !== 'All') && (
                    <button 
                        onClick={clearFilters}
                        className="px-6 py-3 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-colors border-2 border-transparent hover:border-slate-200"
                    >
                        ล้างค่าทั้งหมด
                    </button>
                )}
            </div>
        </div>

        <AdBanner className="mb-8" />

        {!searchTerm && (
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-9 gap-2 md:gap-3 mb-10"
            >
            {letters.map((letter) => {
                const isSelected = selectedLetter === letter;
                const hasWords = vocabularyData.some(item => {
                    let matchesCategory = true;
                    if (activeGroup !== 'All' && activeSubCategory) {
                        if (activeGroup === 'Topic') matchesCategory = item.topic === activeSubCategory;
                        else if (activeGroup === 'POS') matchesCategory = item.partOfSpeech === activeSubCategory;
                        else if (activeGroup === 'Usage') matchesCategory = item.usage === activeSubCategory;
                        else if (activeGroup === 'Level') matchesCategory = item.level === activeSubCategory;
                        else if (activeGroup === 'Special') matchesCategory = item.special === activeSubCategory;
                    }
                    return matchesCategory && item.word.charAt(0).toUpperCase() === letter;
                });

                return (
                    <motion.button 
                        key={letter}
                        variants={itemAnim}
                        disabled={!hasWords}
                        onClick={() => setSelectedLetter(isSelected ? null : letter)}
                        whileHover={hasWords ? { y: -3 } : {}}
                        whileTap={hasWords ? { scale: 0.9 } : {}}
                        className={`aspect-square rounded-xl border-b-[4px] active:border-b-0 active:translate-y-[4px] transition-all flex items-center justify-center text-xl font-black shadow-sm
                            ${isSelected 
                                ? 'bg-orange-500 text-white border-orange-700 shadow-orange-200' 
                                : hasWords
                                    ? 'bg-white text-slate-600 border-slate-200 hover:border-orange-200 hover:text-orange-500'
                                    : 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                            }`}
                    >
                        {letter}
                    </motion.button>
                );
            })}
            </motion.div>
        )}

        <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2 mb-4">
                {selectedLetter ? `หมวดอักษร "${selectedLetter}"` : searchTerm ? 'ผลการค้นหา' : activeSubCategory ? `รายการ: ${activeSubCategory}` : 'รายการคำศัพท์ทั้งหมด'}
                <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-sm">{filteredVocab.length} คำ</span>
            </h3>

            {filteredVocab.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredVocab.map((item, idx) => {
                        return (
                            <motion.div 
                                key={`${item.word}-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.01 }}
                                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:bg-white hover:shadow-md hover:border-orange-100 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                
                                <div className="flex justify-between items-start mb-2 relative z-10">
                                    <div className="flex items-baseline gap-2">
                                        <h4 className="text-2xl font-black text-slate-800">{item.word}</h4>
                                        <span className="text-sm font-bold text-orange-500 italic">{item.partOfSpeech}</span>
                                    </div>
                                </div>
                                
                                <div className="relative z-10">
                                    <p className="text-lg font-bold text-slate-600 mb-2">{item.meaning}</p>
                                    <div className="bg-white/60 p-3 rounded-xl border border-slate-200/50 mb-3">
                                        <p className="text-slate-500 text-sm italic">"{item.example}"</p>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {item.topic && <span className="text-[10px] uppercase font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">{item.topic}</span>}
                                        {item.level && <span className="text-[10px] uppercase font-bold px-2 py-1 bg-purple-50 text-purple-600 rounded-md border border-purple-100">{item.level}</span>}
                                        {item.usage && <span className="text-[10px] uppercase font-bold px-2 py-1 bg-green-50 text-green-600 rounded-md border border-green-100">{item.usage}</span>}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-lg font-medium">
                        ไม่พบคำศัพท์ในเงื่อนไขที่เลือก
                    </p>
                    <button onClick={clearFilters} className="text-orange-500 font-bold hover:underline mt-2">ล้างตัวกรองทั้งหมด</button>
                </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}