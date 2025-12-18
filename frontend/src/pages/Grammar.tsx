import { Layers, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const topics = [
  { title: "12 Tenses Summary", level: "Basic", color: "bg-green-100 text-green-700" },
  { title: "Passive Voice", level: "Intermediate", color: "bg-yellow-100 text-yellow-700" },
  { title: "If Clauses", level: "Intermediate", color: "bg-yellow-100 text-yellow-700" },
  { title: "Advanced Relative Clauses", level: "Advanced", color: "bg-red-100 text-red-700" },
];

export default function Grammar() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        className="flex items-center gap-4 mb-10"
      >
        <div className="p-4 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-500/40">
          <Layers size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-gray-800">Grammar Station</h1>
          <p className="text-gray-500">Short notes & Cheat sheets</p>
        </div>
      </motion.div>

      <div className="space-y-4">
        {topics.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-purple-100 flex items-center justify-center text-purple-600 font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {t.title}
                </h3>
                <span className={`inline-block mt-1 px-3 py-1 rounded-lg text-xs font-bold ${t.color}`}>
                  {t.level}
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <ChevronRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}