import { motion } from 'framer-motion';
import { PlayCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function Toeic() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="space-y-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden text-center md:text-left group"
      >
        <div className="relative z-10 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20"
          >
            Simulation Mode 🚀
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-black mt-6 mb-4 tracking-tight"
          >
            TOEIC Practice Arena
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-100 text-xl font-medium mb-8 leading-relaxed"
          >
            พร้อมลงสนามจริงรึยัง? ฝึกฝนด้วยข้อสอบเสมือนจริง จับเวลาจริง ครบทุกพาร์ท!
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl flex items-center gap-3 mx-auto md:mx-0 group-hover:text-indigo-700 transition-colors"
          >
            <PlayCircle size={24} className="fill-current" />
            Start Full Test
          </motion.button>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
           <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.1C93.5,9,82.2,22.3,71.1,34.2C60,46.1,49.1,56.6,36.5,64.2C23.9,71.8,9.6,76.5,-3.4,82.4C-16.4,88.3,-28.1,95.4,-39.2,90.3C-50.3,85.2,-60.8,67.9,-68.6,51.1C-76.4,34.3,-81.5,18,-79.8,2.7C-78.1,-12.6,-69.6,-26.9,-59.5,-38.7C-49.4,-50.5,-37.7,-59.8,-25.2,-68.2C-12.7,-76.6,-0.6,-84.1,13.2,-86.3L27,-88.5L44.7,-76.4Z" transform="translate(100 100)" />
           </svg>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Listening Card */}
        <motion.div variants={item} className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-blue-100/50 border-2 border-slate-50 hover:border-blue-200 transition-colors h-full group">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              🎧
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800">Listening</h3>
              <p className="text-slate-400 font-bold flex items-center gap-2">
                <Clock size={16} /> 45 นาที • 100 ข้อ
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {['Photographs', 'Question-Response', 'Conversations', 'Short Talks'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 cursor-pointer group/item transition-colors border border-slate-100 hover:border-blue-100">
                <span className="font-bold text-slate-600 group-hover/item:text-blue-600 text-lg">Part {i + 1}: {item}</span>
                <span className="bg-white px-4 py-1.5 rounded-xl text-xs text-slate-400 font-bold border border-slate-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                  Start
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reading Card */}
        <motion.div variants={item} className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-emerald-100/50 border-2 border-slate-50 hover:border-emerald-200 transition-colors h-full group">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              📖
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800">Reading</h3>
              <p className="text-slate-400 font-bold flex items-center gap-2">
                <Clock size={16} /> 75 นาที • 100 ข้อ
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {['Incomplete Sentences', 'Text Completion', 'Reading Comprehension'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 cursor-pointer group/item transition-colors border border-slate-100 hover:border-emerald-100">
                <span className="font-bold text-slate-600 group-hover/item:text-emerald-600 text-lg">Part {i + 5}: {item}</span>
                <span className="bg-white px-4 py-1.5 rounded-xl text-xs text-slate-400 font-bold border border-slate-100 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all shadow-sm">
                  Start
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}