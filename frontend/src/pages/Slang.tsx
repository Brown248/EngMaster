import { motion } from 'framer-motion';
import { Volume2, Sparkles } from 'lucide-react';

const slangs = [
  { word: "Tea", meaning: "เรื่องซุบซิบ (Gossip)", emoji: "☕", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { word: "Slay", meaning: "ทำได้ปังมากแม่!", emoji: "💅", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
  { word: "Ghost", meaning: "เท, หายเงียบ", emoji: "👻", color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
  { word: "Salty", meaning: "งอน, ขมขื่น", emoji: "🧂", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Flex", meaning: "อวด (ความรวย, ของใหม่)", emoji: "💪", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { word: "Simp", meaning: "คนที่ยอมทำทุกอย่างเพื่อคนที่ชอบ", emoji: "🥺", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
];

export default function Slang() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-5">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-pink-100 text-pink-500 rounded-3xl flex items-center justify-center text-4xl shadow-md"
        >
          🔥
        </motion.div>
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">Slang of the Day</h2>
          <p className="text-slate-500 text-lg font-medium">ศัพท์วัยรุ่นต้องรู้ ไม่งั้นคุยไม่รู้เรื่อง!</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slangs.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.03, rotate: 1, y: -5 }}
            className={`bg-white p-8 rounded-[2rem] border-2 ${item.border} shadow-lg shadow-slate-100 hover:shadow-xl transition-all cursor-default relative overflow-hidden group`}
          >
            {/* Hover Glow Background */}
            <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`text-3xl font-black ${item.color}`}>{item.word}</h3>
                  <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                    <Volume2 size={20} />
                  </button>
                </div>
                <p className="text-slate-600 text-lg font-bold bg-white/50 backdrop-blur-sm px-3 py-1 rounded-lg inline-block border border-slate-100">
                  {item.meaning}
                </p>
              </div>
              <div className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center text-5xl shadow-inner transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                {item.emoji}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Sparkles size={14} /> Popular Now
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}