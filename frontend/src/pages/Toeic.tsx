import { GraduationCap, PlayCircle, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const toeicParts = [
  { id: 1, part: 'Part 1', title: 'Photographs', items: 6, time: '3 mins', color: 'text-pink-500', bg: 'bg-pink-50' },
  { id: 2, part: 'Part 2', title: 'Question-Response', items: 25, time: '12 mins', color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 3, part: 'Part 3', title: 'Conversations', items: 39, time: '20 mins', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 4, part: 'Part 4', title: 'Talks', items: 30, time: '15 mins', color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 5, part: 'Part 5', title: 'Incomplete Sentences', items: 30, time: '12 mins', color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { id: 6, part: 'Part 6', title: 'Text Completion', items: 16, time: '8 mins', color: 'text-teal-500', bg: 'bg-teal-50' },
  { id: 7, part: 'Part 7', title: 'Reading Comprehension', items: 54, time: '50 mins', color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

export default function Toeic() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl text-white shadow-lg shadow-emerald-500/30">
            <GraduationCap size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-800">TOEIC Arena 🎯</h1>
            <p className="text-gray-500 font-medium">สนามซ้อมสอบเสมือนจริง จับเวลาจริง</p>
          </div>
        </div>
        <button className="hidden md:block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 transition-colors">
          Start Full Test
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toeicParts.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm cursor-pointer group relative overflow-hidden h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className={`px-4 py-2 ${item.bg} ${item.color} text-xs font-black rounded-xl uppercase tracking-wider`}>
                  {item.part}
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-all">
                  <PlayCircle size={24} className="fill-current" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors relative z-10 leading-tight">
                {item.title}
              </h3>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-3 text-xs text-gray-500 font-bold relative z-10">
              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                <CheckCircle2 size={14} className="text-gray-400" /> {item.items} Items
              </span>
              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Clock size={14} className="text-gray-400" /> {item.time}
              </span>
            </div>
            
            {/* Background Hover Effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-bl-[4rem] -mr-12 -mt-12 opacity-0 group-hover:opacity-50 transition-all duration-500`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}