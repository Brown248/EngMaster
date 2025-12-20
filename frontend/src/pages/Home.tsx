import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Star, Heart, ArrowLeft, Book, Flame, Brain, GraduationCap, Search, CheckCircle2 } from 'lucide-react';

/** * 1. ส่วนแสดงผลหน้าบทเรียน (Course Detail View) - เลียนแบบ Image 2
 * ส่วนนี้จะแสดงผลเมื่อผู้ใช้กดเลือกหมวดหมู่จากหน้าหลัก
 */
const CourseDetail = ({ id, onBack }) => {
  const [search, setSearch] = useState("");
  
  const courseData = {
    vocab: { 
      title: 'Vocabulary', 
      icon: <Book size={40} />, 
      color: 'orange', 
      tagline: 'คลังศัพท์ระดับเทพ', 
      lessons: ['A-Z Common Words', 'Academic Vocab', 'Idioms & Phrases']
    },
    slang: { 
      title: 'Slang', 
      icon: <Flame size={40} />, 
      color: 'pink', 
      tagline: 'ศัพท์วัยรุ่นสุดฮิต', 
      lessons: ['Modern Slang 2024', 'Internet Slang', 'Casual Conversations']
    },
    grammar: { 
      title: '12 Tenses', 
      icon: <Brain size={40} />, 
      color: 'purple', 
      tagline: 'สรุปไวยากรณ์เข้าใจง่าย', 
      lessons: ['Present Tense Master', 'Past Tense Guide', 'Future Tense Tips']
    },
    toeic: { 
      title: 'TOEIC Exam', 
      icon: <GraduationCap size={40} />, 
      color: 'blue', 
      tagline: 'พิชิตคะแนน 990', 
      lessons: ['Listening Practice', 'Reading Speed Test', 'Grammar for TOEIC']
    },
  };

  const data = courseData[id] || courseData.vocab;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white"
    >
      {/* Header ของหน้าบทเรียน */}
      <div className={`p-8 md:p-12 text-white relative overflow-hidden bg-gradient-to-br 
        ${data.color === 'orange' ? 'from-orange-500 to-amber-500 shadow-orange-100' : ''}
        ${data.color === 'pink' ? 'from-pink-500 to-rose-500 shadow-pink-100' : ''}
        ${data.color === 'purple' ? 'from-purple-600 to-indigo-600 shadow-purple-100' : ''}
        ${data.color === 'blue' ? 'from-blue-600 to-cyan-600 shadow-blue-100' : ''}
      `}>
        <button onClick={onBack} className="mb-8 flex items-center gap-2 font-bold hover:underline bg-white/20 p-2 rounded-xl backdrop-blur-md">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-5 rounded-3xl backdrop-blur-md shadow-xl">{data.icon}</div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black">{data.title}</h2>
            <p className="opacity-90 font-medium text-lg mt-1">{data.tagline}</p>
          </div>
        </div>
        <Star className="absolute -right-10 -bottom-10 opacity-20 rotate-12" size={200} fill="white" />
      </div>

      {/* เนื้อหาในบทเรียน */}
      <div className="max-w-4xl mx-auto p-6 md:p-12 -mt-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-50 p-6 md:p-10 space-y-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="ค้นหาบทเรียน..." 
              className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 transition-all font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid gap-4">
            {data.lessons.map((lesson, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer group hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm text-${data.color}-500 font-bold`}>
                    {idx + 1}
                  </div>
                  <span className="font-bold text-slate-700">{lesson}</span>
                </div>
                <CheckCircle2 size={20} className="text-slate-200 group-hover:text-emerald-500 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 2. คอมโพเนนต์หลัก (App)
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // ฟังก์ชันนำทาง
  const goHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCourse = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          /* --- หน้าหลัก (Home View) --- */
          <motion.div 
            key="home"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            // ปรับระยะห่างด้านบน (pt) ให้น้อยลงเพื่อขยับเนื้อหาขึ้น
            className="px-6 pb-6 pt-4 md:px-12 md:pb-12 md:pt-8 max-w-7xl mx-auto space-y-12 relative"
          >
            {/* Background Decor */}
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl -z-10" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-56 h-56 bg-blue-200/20 rounded-full blur-2xl -z-10" />

            {/* --- โลโก้แบรนด์ E (สีฟ้า) + ชื่อ EngMaster (แก้ให้กดได้ยกก้อน) --- */}
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-4 relative z-10">
              <div className="flex-1 text-center md:text-left">
                <motion.div 
                  onClick={goHome}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 text-blue-600 rounded-full text-sm font-bold mb-8 shadow-sm cursor-pointer"
                >
                  <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>Welcome to EngMaster!</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-[1.1]">
                  Unlock your potential<br/>
                  <span onClick={goHome} className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">with EngMaster.</span>
                </h1>
                <p className="text-xl text-slate-500 mt-6 font-medium max-w-lg mx-auto md:mx-0">
                  เรียนอังกฤษแบบไม่เครียด สนุกไปกับทุกบทเรียน เก่งขึ้นได้ทุกวัน!
                </p>
              </div>
              
              {/* Mascot นกฮูก (กดได้) */}
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

            {/* --- ส่วนที่วงไว้ (Grid Menu) แก้ไขให้กดแล้วไปหน้า Detail จริง --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative z-10">
              {[
                { id: 'vocab', title: 'Vocabulary', sub: 'คลังศัพท์ A-Z', icon: '📚', color: 'orange' },
                { id: 'slang', title: 'Slang', sub: 'ศัพท์วัยรุ่น', icon: '🔥', color: 'pink' },
                { id: 'grammar', title: '12 Tenses', sub: 'ไวยากรณ์', icon: '🧠', color: 'purple' },
                { id: 'toeic', title: 'TOEIC Exam', sub: 'ข้อสอบจำลอง', icon: '🎓', color: 'blue' },
              ].map((card) => (
                <motion.div
                  key={card.id}
                  onClick={() => goToCourse(card.id)} // บรรทัดสำคัญที่ทำให้กดแล้วเปลี่ยนหน้า
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
                      {card.icon}
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
              ))}
            </div>

            {/* Banner */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl shadow-emerald-200/50 mt-10"
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
        ) : (
          /* --- หน้าบทเรียน (Course View - Image 2) --- */
          <CourseDetail key="detail" id={currentPage} onBack={goHome} />
        )}
      </AnimatePresence>
    </div>
  );
}