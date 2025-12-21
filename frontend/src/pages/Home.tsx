import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Star, Heart, Book, Flame, Brain, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCourse = (id: string) => {
    navigate(`/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // แก้ไข: เปลี่ยนการเก็บ icon จาก JSX Element (<Book />) เป็น Component (Book) 
  // เพื่อป้องกัน Error: Objects are not valid as a React child และเพื่อให้ React จัดการ render ได้ถูกต้อง
  const courses = [
    { id: 'vocabulary', title: 'Vocabulary', sub: 'คลังศัพท์ A-Z', icon: Book, color: 'orange' },
    { id: 'slang', title: 'Slang', sub: 'ศัพท์วัยรุ่น', icon: Flame, color: 'pink' },
    { id: 'grammar', title: 'Grammar', sub: '12 Tenses', icon: Brain, color: 'purple' },
    { id: 'toeic', title: 'TOEIC Exam', sub: 'ข้อสอบจำลอง', icon: GraduationCap, color: 'blue' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div 
            key="home"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="px-6 pb-6 pt-4 md:px-12 md:pb-12 md:pt-8 max-w-7xl mx-auto space-y-12 relative"
          >
            {/* Background Decor */}
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl -z-10" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-56 h-56 bg-blue-200/20 rounded-full blur-2xl -z-10" />

            {/* --- โลโก้แบรนด์ --- */}
            <motion.div 
              onClick={goHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer group w-fit relative z-20"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:bg-blue-500 transition-all">
                <span className="text-white text-2xl font-black italic">E</span>
              </div>
              <span className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                EngMaster
              </span>
            </motion.div>

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-2 relative z-10">
              <div className="flex-1 text-center md:text-left">
                <motion.div 
                  onClick={goHome}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-blue-600 rounded-full text-sm font-bold mb-6 shadow-sm cursor-pointer"
                >
                  <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>Welcome to EngMaster!</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-[1.1]">
                  Unlock your potential<br/>
                  <span onClick={goHome} className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">with EngMaster.</span>
                </h1>
                <p className="text-xl text-slate-500 mt-4 font-medium max-w-lg mx-auto md:mx-0">
                  เรียนอังกฤษแบบไม่เครียด สนุกไปกับทุกบทเรียน เก่งขึ้นได้ทุกวัน!
                </p>
              </div>
              
              {/* Mascot */}
              <motion.div 
                onClick={goHome}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="relative cursor-pointer group"
              >
                <div className="absolute inset-0 bg-white/60 blur-[100px] rounded-full scale-125" />
                <div className="relative text-[150px] md:text-[200px] leading-none filter drop-shadow-2xl z-10 select-none">🦉</div>
                <div className="absolute -top-2 -right-10 bg-white px-5 py-3 rounded-2xl rounded-bl-none shadow-xl border border-slate-100 z-20">
                  <p className="text-sm font-black text-slate-700">Let's go! 🚀</p>
                </div>
              </motion.div>
            </div>

            {/* --- Grid Menu --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 relative z-10">
              {courses.map((card) => {
                // ดึง Component ออกมาเพื่อใช้เป็น JSX tag (นี่คือวิธีที่ถูกต้องใน React)
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => goToCourse(card.id)}
                    whileHover={{ y: -12, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer group relative overflow-hidden h-80 flex flex-col justify-between transition-all hover:shadow-2xl"
                  >
                    <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-[2.5] 
                      ${card.color === 'orange' ? 'bg-orange-400' : ''}
                      ${card.color === 'pink' ? 'bg-pink-400' : ''}
                      ${card.color === 'purple' ? 'bg-purple-400' : ''}
                      ${card.color === 'blue' ? 'bg-blue-400' : ''}
                    `} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:rotate-12 transition-transform
                        ${card.color === 'orange' ? 'bg-orange-100 text-orange-500' : ''}
                        ${card.color === 'pink' ? 'bg-pink-100 text-pink-500' : ''}
                        ${card.color === 'purple' ? 'bg-purple-100 text-purple-500' : ''}
                        ${card.color === 'blue' ? 'bg-blue-100 text-blue-500' : ''}
                      `}>
                        {/* เรียกใช้ Component ที่นี่ */}
                        <Icon size={32} />
                      </div>
                      <h3 className={`text-2xl font-black text-slate-800 transition-colors
                        ${card.color === 'orange' ? 'group-hover:text-orange-600' : ''}
                        ${card.color === 'pink' ? 'group-hover:text-pink-600' : ''}
                        ${card.color === 'purple' ? 'group-hover:text-purple-600' : ''}
                        ${card.color === 'blue' ? 'group-hover:text-blue-600' : ''}
                      `}>
                        {card.title}
                      </h3>
                      <p className="text-slate-500 font-bold mt-2">{card.sub}</p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-4">
                      <span className={`text-xs font-black uppercase tracking-widest
                        ${card.color === 'orange' ? 'text-orange-400' : ''}
                        ${card.color === 'pink' ? 'text-pink-400' : ''}
                        ${card.color === 'purple' ? 'text-purple-400' : ''}
                        ${card.color === 'blue' ? 'text-blue-400' : ''}
                      `}>
                        Start Now
                      </span>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                        ${card.color === 'orange' ? 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white' : ''}
                        ${card.color === 'pink' ? 'bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white' : ''}
                        ${card.color === 'purple' ? 'bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white' : ''}
                        ${card.color === 'blue' ? 'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white' : ''}
                      `}>
                        <ChevronRight size={24} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Banner */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl shadow-emerald-200/50 mt-6"
            >
              <div className="absolute -right-10 -bottom-10 opacity-20"><Star size={200} fill="white" /></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Heart size={24} className="fill-white animate-pulse" />
                    <span className="text-sm font-black uppercase tracking-widest">Motivation</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">"Mistakes are proof that you are trying."</h3>
                  <p className="text-emerald-50 text-xl font-medium">เก่งขึ้นวันละนิดก็พอแล้ว! ✌️</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hidden md:block text-8xl select-none">💪</div>
              </div>
            </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}