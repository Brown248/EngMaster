import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Sparkles, Star, Heart } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects (พื้นหลังขยับช้าๆ เวลาเลื่อนจอ)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      className="space-y-10 relative"
    >
      {/* Background Decor (Parallax) */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -z-10" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl -z-10" />

      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <motion.div variants={item} className="flex-1">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4 shadow-sm"
          >
            <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
            <span>Welcome to EngMaster!</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Unlock your potential<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">with EngMaster.</span>
          </h1>
          <p className="text-lg text-slate-500 mt-4 font-medium max-w-lg">
            เรียนอังกฤษแบบไม่เครียด สนุกไปกับทุกบทเรียน เก่งขึ้นได้ทุกวัน!
          </p>
        </motion.div>
        
        {/* Interactive Mascot */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative group cursor-pointer"
        >
          {/* Aura Effect */}
          <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full scale-110 group-hover:bg-yellow-200/50 transition-colors duration-500" />
          
          <div className="relative text-[150px] leading-none filter drop-shadow-2xl z-10">🦉</div>
          
          {/* Chat Bubble */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -top-4 -right-12 bg-white px-5 py-3 rounded-2xl rounded-bl-none shadow-xl border-2 border-slate-100 transform origin-bottom-left z-20"
          >
            <p className="text-sm font-bold text-slate-700 whitespace-nowrap flex items-center gap-2">
              Hoot! Let's go! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: 'vocab', title: 'Vocabulary', sub: 'คลังศัพท์ A-Z', icon: '📚', color: 'orange', path: '/vocabulary' },
          { id: 'slang', title: 'Slang', sub: 'ศัพท์วัยรุ่น', icon: '🔥', color: 'pink', path: '/slang' },
          { id: 'grammar', title: '12 Tenses', sub: 'ไวยากรณ์', icon: '🧠', color: 'purple', path: '/grammar' },
          { id: 'toeic', title: 'TOEIC Exam', sub: 'ข้อสอบจำลอง', icon: '🎓', color: 'blue', path: '/toeic' },
        ].map((card) => (
          <motion.div
            key={card.id}
            variants={item}
            onClick={() => navigate(card.path)}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="soft-card p-6 cursor-pointer group relative overflow-hidden h-72 flex flex-col justify-between"
          >
            {/* Background Blob */}
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${card.color}-100 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-[2.5]`} />
            
            <div className="relative z-10">
              <div className={`w-16 h-16 bg-${card.color}-100 text-${card.color}-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:rotate-12 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className={`text-2xl font-black text-slate-800 group-hover:text-${card.color}-600 transition-colors`}>
                {card.title}
              </h3>
              <p className="text-slate-500 font-medium mt-1 group-hover:text-slate-600">
                {card.sub}
              </p>
            </div>

            <div className={`relative z-10 flex items-center justify-between mt-4`}>
              <span className={`text-xs font-bold uppercase tracking-wider text-${card.color}-400 group-hover:text-${card.color}-600`}>
                Start Learning
              </span>
              <div className={`w-10 h-10 rounded-full bg-${card.color}-50 flex items-center justify-center text-${card.color}-500 group-hover:bg-${card.color}-500 group-hover:text-white transition-all duration-300`}>
                <ChevronRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Encouragement Banner (New!) */}
      <motion.div 
        variants={item}
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] p-10 text-white shadow-xl shadow-emerald-200"
      >
        {/* Decor Star */}
        <div className="absolute -right-10 -bottom-20 opacity-20">
          <Star size={200} fill="white" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 opacity-90">
              <Heart size={20} className="fill-white text-white animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">กำลังใจสำหรับคุณ</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-3">
              "Mistakes are proof that you are trying."
            </h3>
            <p className="text-emerald-50 text-lg font-medium leading-relaxed">
              ความผิดพลาด คือหลักฐานว่าคุณกำลังพยายาม... <br/>
              <span className="text-yellow-300 underline decoration-2 underline-offset-4 font-bold">
                สู้ต่อไปนะ เก่งขึ้นวันละนิดก็พอแล้ว! ✌️
              </span>
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="hidden md:flex bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-lg"
          >
            <span className="text-6xl">💪</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}