import { Link } from 'react-router-dom';
import { Book, Flame, Layers, GraduationCap, ArrowRight, Trophy, Star, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

// ข้อมูลสำหรับ Grid Cards ด้านล่าง
const features = [
  {
    title: 'Vocabulary Bank',
    desc: 'คลังคำศัพท์ A-Z พร้อมคำแปล',
    icon: Book,
    bgIcon: 'bg-blue-500',
    path: '/vocabulary',
    stat: '3,000+ Words',
    delay: 0.1
  },
  {
    title: 'Slang of the Day',
    desc: 'ศัพท์วัยรุ่นและสำนวนสุดฮิต',
    icon: Flame,
    bgIcon: 'bg-orange-500',
    path: '/slang',
    stat: 'Daily Update',
    delay: 0.2
  },
  {
    title: 'Grammar Station',
    desc: 'สรุปหลักไวยากรณ์เข้าใจง่าย',
    icon: Layers,
    bgIcon: 'bg-purple-500',
    path: '/grammar',
    stat: '12 Topics',
    delay: 0.3
  },
  {
    title: 'TOEIC Arena',
    desc: 'จำลองข้อสอบเสมือนจริง',
    icon: GraduationCap,
    bgIcon: 'bg-emerald-500',
    path: '/toeic',
    stat: 'Mock Tests',
    delay: 0.4
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      
      {/* 1. Header Section (Title + Streak) */}
      <div className="flex justify-between items-end">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back! 👋</h1>
          <p className="text-gray-500 mt-2">พร้อมฝึกภาษาอังกฤษวันนี้หรือยัง?</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4"
        >
          <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="p-1.5 bg-yellow-100 rounded-full">
              <Trophy size={18} className="text-yellow-600 fill-yellow-600" />
            </div>
            <div>
               <p className="text-xs text-gray-400 font-bold uppercase">Streak</p>
               <p className="text-sm font-bold text-gray-800">0 Days</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Hero Banner (Goal of the day) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 md:p-10 text-white shadow-xl shadow-blue-200"
      >
        {/* Background Decorations (Animated) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 bottom-0 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-2xl pointer-events-none" 
        />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <Target size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-bold">Goal of the day 🎯</h2>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
            "เรียนรู้คำศัพท์ใหม่ <span className="text-yellow-300">5 คำ</span> <br/>
            และทำแบบทดสอบ Grammar <span className="text-yellow-300">1 บท</span>"
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-50 transition-colors"
          >
            เริ่มฝึกทันที
          </motion.button>
        </div>
      </motion.div>

      {/* 3. Feature Grid (Practice Modes) */}
      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"
        >
          <div className="p-1.5 bg-yellow-100 rounded-lg">
            <Star size={16} className="text-yellow-600 fill-yellow-600" />
          </div>
          โหมดการฝึกฝน
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className={`${item.bgIcon} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-gray-200`}
                  >
                    <item.icon size={26} strokeWidth={2.5} />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                    <Clock size={12} />
                    {item.stat}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Start <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}