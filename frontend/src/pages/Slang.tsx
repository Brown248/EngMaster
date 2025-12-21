import { motion } from 'framer-motion';
import { Volume2, Sparkles, Search } from 'lucide-react';
import { useState } from 'react';
import { slangs } from '../data/slangData'; // เรียกใช้ข้อมูลจากไฟล์ Data

export default function Slang() {
  const [searchTerm, setSearchTerm] = useState('');

  // ฟังก์ชันกรองคำศัพท์
  const filteredSlangs = slangs.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-tr from-pink-100 to-rose-100 text-pink-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-lg shadow-pink-100"
          >
            🔥
          </motion.div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">Teen Slang</h2>
            <p className="text-slate-500 text-lg font-medium mt-1">คลังศัพท์วัยรุ่น 2025 รู้ไว้ไม่ตกเทรนด์!</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 group">
          <input 
            type="text" 
            placeholder="🔍 หาคำไหนอยู่จ๊ะ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder:text-slate-400 shadow-sm group-hover:border-pink-200"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-pink-400 transition-colors">
            <Search size={20} />
          </div>
        </div>
      </div>
      
      {/* Cards Grid */}
      {filteredSlangs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSlangs.map((item, index) => (
            <motion.div 
              key={index}
              layout // ช่วยให้ Animation ตอนกรองคำดูลื่นไหล
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white p-6 rounded-[2rem] border-2 ${item.border} shadow-lg shadow-slate-100 hover:shadow-xl transition-all cursor-default relative overflow-hidden group h-full flex flex-col justify-between`}
            >
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className={`absolute -right-6 -top-6 w-32 h-32 ${item.bg} rounded-full blur-3xl opacity-50`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-3xl font-black ${item.color} tracking-tight`}>{item.word}</h3>
                        {/* ปุ่มฟังเสียง (จำลอง) */}
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-300 hover:text-slate-500 transition-colors active:scale-90">
                           <Volume2 size={20} />
                        </button>
                     </div>
                     {/* Badge หมวดหมู่ (สมมติว่าเป็น Popular) */}
                     {index < 5 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase tracking-wide">
                           <Sparkles size={10} /> Trending
                        </span>
                     )}
                  </div>
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center text-4xl shadow-sm transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    {item.emoji}
                  </div>
                </div>

                <div className="bg-slate-50/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 group-hover:bg-white/90 transition-colors">
                  <p className="text-slate-600 text-lg font-bold leading-relaxed">
                    "{item.meaning}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // กรณีไม่เจอคำค้นหา
        <div className="text-center py-20 opacity-50">
          <div className="text-6xl mb-4">👻</div>
          <p className="text-xl font-bold text-slate-400">หาไม่เจออ่ะแม่... ลองคำอื่นดูนะ!</p>
        </div>
      )}
    </motion.div>
  );
}