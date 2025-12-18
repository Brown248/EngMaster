import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Vocabulary() {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // Stagger animation for letters
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
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
          <p className="text-slate-500 text-lg font-medium">เลือกตัวอักษรเพื่อเริ่มเรียนรู้คำศัพท์</p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-orange-100/50 border border-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

        {/* Search Bar */}
        <div className="relative mb-10 group">
          <input 
            type="text" 
            placeholder="🔍 ค้นหาคำศัพท์ที่ต้องการ..." 
            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-orange-400 focus:bg-white focus:shadow-lg focus:shadow-orange-100/50 transition-all text-lg font-medium text-slate-700 placeholder:text-slate-400 group-hover:border-orange-200"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
            <Search size={20} className="text-orange-400" />
          </div>
        </div>

        {/* Keyboard Style Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-9 gap-3 md:gap-4"
        >
          {letters.map((letter) => (
            <motion.button 
              key={letter}
              variants={item}
              whileHover={{ y: -5, backgroundColor: "#F97316", color: "#ffffff", borderColor: "#C2410C" }}
              whileTap={{ scale: 0.9, y: 0 }}
              className="aspect-square bg-white text-slate-600 rounded-2xl border-b-[6px] border-slate-200 active:border-b-0 active:translate-y-[6px] transition-all flex flex-col items-center justify-center group shadow-sm hover:shadow-orange-200"
            >
              <span className="text-2xl font-black">{letter}</span>
            </motion.button>
          ))}
          
          <motion.button 
            variants={item}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 md:col-span-3 bg-blue-50 text-blue-600 rounded-2xl border-b-[6px] border-blue-100 hover:bg-blue-500 hover:text-white hover:border-blue-700 active:border-b-0 active:translate-y-[6px] transition-all flex items-center justify-center font-bold shadow-sm h-full min-h-[60px]"
          >
            ดูทั้งหมด (A-Z)
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}