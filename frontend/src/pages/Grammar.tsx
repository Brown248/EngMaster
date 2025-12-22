import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, BookOpen, Clock, Lightbulb, MessageCircle } from 'lucide-react';
// Changed to relative path which should now work as the file exists
import { tenseData, grammarCategories } from '../data/grammarData';
import { GrammarTopic } from '../types';

export default function Grammar() {
  const [selectedCategory, setSelectedCategory] = useState<GrammarTopic | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Helper for dynamic Tailwind classes
  const getColorClasses = (color: string) => {
    const map: Record<string, any> = {
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', hover: 'hover:bg-emerald-50', ring: 'ring-emerald-200' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', hover: 'hover:bg-amber-50', ring: 'ring-amber-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', hover: 'hover:bg-indigo-50', ring: 'ring-indigo-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', hover: 'hover:bg-blue-50', ring: 'ring-blue-200' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', hover: 'hover:bg-rose-50', ring: 'ring-rose-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', hover: 'hover:bg-purple-50', ring: 'ring-purple-200' },
    };
    return map[color] || map.emerald;
  };

  // --- VIEW 1: CATEGORY SELECTION (Main Menu) ---
  const CategoryView = () => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-5">
        <motion.div 
          whileHover={{ rotate: 15 }}
          className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-violet-200"
        >
          🧠
        </motion.div>
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">Grammar Lab</h2>
          <p className="text-slate-500 text-lg font-medium">เลือกหมวดหมู่ที่ต้องการเรียนรู้</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grammarCategories.map((cat, idx) => {
          const colors = getColorClasses(cat.color);
          return (
            <motion.button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`p-8 rounded-[2rem] bg-white border-2 border-slate-50 shadow-lg shadow-slate-100 flex flex-col items-center gap-4 text-center hover:shadow-xl transition-all group ${colors.hover}`}
            >
              <div className={`w-20 h-20 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-4xl mb-2 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-700 group-hover:text-slate-900">{cat.title}</h3>
              <span className={`text-sm font-bold px-3 py-1 rounded-full bg-white border ${colors.border} ${colors.text}`}>
                {cat.items.length} Topics
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );

  // --- VIEW 2: TOPIC SELECTION (Sub Menu) ---
  const TopicView = () => {
    if (!selectedCategory) return null;
    const colors = getColorClasses(selectedCategory.color);

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="max-w-4xl mx-auto"
      >
        <button 
          onClick={() => setSelectedCategory(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-6 transition-colors px-4 py-2 rounded-xl hover:bg-white"
        >
          <ArrowLeft size={20} /> กลับไปหน้าหมวดหมู่
        </button>

        <div className={`bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 ${colors.border} relative overflow-hidden`}>
          {/* Header BG Decor */}
          <div className={`absolute top-0 left-0 w-full h-32 ${colors.bg} opacity-50`} />
          <div className="relative z-10 mb-10 text-center">
            <div className={`w-20 h-20 mx-auto rounded-3xl ${colors.bg} ${colors.text} flex items-center justify-center text-5xl shadow-sm mb-4`}>
              {selectedCategory.icon}
            </div>
            <h2 className="text-4xl font-black text-slate-800">{selectedCategory.title}</h2>
            <p className="text-slate-500 font-medium mt-2">เลือกหัวข้อเพื่อดูรายละเอียด</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {selectedCategory.items.map((topic, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedTopic(topic)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all group text-left"
              >
                <span className="text-lg font-bold text-slate-700 group-hover:text-blue-600">{topic}</span>
                <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <ChevronRight size={20} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // --- VIEW 3: DETAIL CONTENT ---
  const DetailView = () => {
    if (!selectedTopic) return null;
    const data = tenseData[selectedTopic];
    
    // Find color from parent category or default
    const parentCat = grammarCategories.find(c => c.items.includes(selectedTopic));
    const colors = getColorClasses(parentCat?.color || 'emerald');

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-4xl mx-auto"
      >
        <button 
          onClick={() => setSelectedTopic(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-6 transition-colors px-4 py-2 rounded-xl hover:bg-white"
        >
          <ArrowLeft size={20} /> กลับไปหน้าหัวข้อ
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden">
          {/* Header */}
          <div className={`p-10 ${colors.bg} relative overflow-hidden`}>
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white opacity-20 rounded-full blur-3xl" />
            <h2 className={`text-4xl md:text-5xl font-black ${colors.text} relative z-10 mb-2`}>{selectedTopic}</h2>
            <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-sm font-bold ${colors.text}`}>
              <BookOpen size={14} /> Grammar Card
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Structure */}
            <div className="relative pl-6 border-l-4 border-slate-200">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
                <Clock size={14} /> Structure
              </h3>
              <p className={`text-3xl md:text-4xl font-mono font-black ${colors.text} tracking-tight`}>
                {data.structure}
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Concept */}
            <div>
              <h3 className="text-slate-800 font-black text-xl mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-yellow-100 text-yellow-600 rounded-lg"><Lightbulb size={20} /></div>
                หลักการใช้
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium bg-slate-50 p-5 rounded-2xl border border-slate-100">
                {data.concept}
              </p>
            </div>

            {/* Examples */}
            <div>
              <h3 className="text-slate-800 font-black text-xl mb-4 flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><MessageCircle size={20} /></div>
                ตัวอย่างประโยค
              </h3>
              <ul className="space-y-3">
                {data.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-sm mt-0.5 group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </span>
                    <span className="text-lg text-slate-700 font-medium pt-0.5 group-hover:text-slate-900 transition-colors">
                      {/* Highlight keywords logic could be added here */}
                      {ex}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-[80vh]">
      <AnimatePresence mode='wait'>
        {!selectedCategory && <CategoryView key="categories" />}
        {selectedCategory && !selectedTopic && <TopicView key="topics" />}
        {selectedTopic && <DetailView key="detail" />}
      </AnimatePresence>
    </div>
  );
}