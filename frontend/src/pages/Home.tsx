// frontend/src/pages/Home.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Zap, Star, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// ✅ แก้ไข Path ตรงนี้
import { coursesData } from '../data/core/homeData';
import AdBanner from '../components/AdBanner';

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const goToCourse = (id: string) => {
    navigate(`/${id}`);
  };

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 20 } 
    }
  };

  const floatingVars = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
            key="home"
            ref={containerRef}
            initial="hidden"
            animate="show"
            variants={containerVars}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 relative"
          >
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl -z-10 opacity-60" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-100/60 rounded-full blur-2xl -z-10" />

            {/* --- HERO SECTION --- */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-10 relative z-10">
              
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <motion.div 
                  variants={itemVars}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-indigo-100 text-indigo-600 rounded-full text-xs font-bold mb-4 shadow-sm cursor-default hover:shadow-md transition-shadow"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                  >
                    <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
                  </motion.div>
                  <span>New Interactive Learning</span>
                </motion.div>
                
                <motion.h1 
                  variants={itemVars}
                  className="text-4xl md:text-6xl font-black text-slate-900 mb-3 tracking-tight leading-[1.1]"
                >
                  Master English <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                    Effortlessly.
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVars}
                  className="text-base md:text-lg text-slate-500 mb-6 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed"
                >
                  เรียนภาษาอังกฤษด้วยวิธีที่สนุกและเข้าใจง่าย ครอบคลุมทั้งไวยากรณ์ คำศัพท์ และแบบทดสอบเพื่อวัดผลจริง
                </motion.p>

                <motion.div 
                  variants={itemVars}
                  className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                >
                  <button 
                    onClick={() => navigate('/grammar')}
                    className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                        Start Learning
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>

              <motion.div 
                variants={itemVars}
                className="flex-1 relative w-full max-w-xs md:max-w-sm flex justify-center items-center order-1 md:order-2"
              >
                <div className="relative z-10">
                    <motion.div
                        variants={floatingVars}
                        animate="animate"
                        className="text-[120px] md:text-[160px] leading-none filter drop-shadow-2xl cursor-pointer select-none"
                        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.3 } }}
                    >
                        🦉
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-sm font-bold text-slate-700 z-20"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                        </motion.div>
                        <span>Let's Go!</span>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-4 -left-6 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-sm font-bold text-slate-700 z-20"
                    >
                        <Zap className="text-orange-500 w-4 h-4" />
                        <span>Keep Learning</span>
                    </motion.div>
                </div>
                
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-200/50 rounded-full blur-3xl -z-10" 
                />
              </motion.div>
            </div>

            <motion.div variants={itemVars} className="relative z-10">
                <AdBanner className="mb-10 shadow-sm border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300" />
            </motion.div>

            {/* --- COURSES GRID --- */}
            <motion.div 
                variants={containerVars}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10"
            >
              {coursesData.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVars}
                  onClick={() => goToCourse(course.id)}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 border border-slate-100 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getGradient(course.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full -mr-6 -mt-6`} />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <motion.div 
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm transition-transform ${getColorClass(course.color)}`}
                            >
                                <course.icon size={24} />
                            </motion.div>
                            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">
                            {course.sub}
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-auto">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-500 transition-colors">Start Course</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            <ChevronRight size={16} />
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function getColorClass(color: string) {
    const map: Record<string, string> = {
        orange: 'bg-orange-50 text-orange-500',
        pink: 'bg-pink-50 text-pink-500',
        purple: 'bg-purple-50 text-purple-500',
        blue: 'bg-blue-50 text-blue-500',
    };
    return map[color] || 'bg-slate-50 text-slate-500';
}

function getGradient(color: string) {
    const map: Record<string, string> = {
        orange: 'from-orange-400 to-red-500',
        pink: 'from-pink-400 to-rose-500',
        purple: 'from-purple-500 to-indigo-600',
        blue: 'from-blue-400 to-cyan-500',
    };
    return map[color] || 'from-slate-400 to-slate-600';
}