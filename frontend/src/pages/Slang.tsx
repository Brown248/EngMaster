import { Flame, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const slangData = [
  { id: 1, word: 'Tea', meaning: 'เรื่องซุบซิบ, ข่าวลือ', example: "What's the tea today?" },
  { id: 2, word: 'Slay', meaning: 'ทำได้ดีมาก, ปังมาก', example: "You slayed that outfit!" },
  { id: 3, word: 'Ghost', meaning: 'หายเงียบไป, เท', example: "He ghosted me after the first date." },
  { id: 4, word: 'Salty', meaning: 'หัวร้อน, อิจฉา', example: "Don't be salty just because I won." },
];

export default function Slang() {
  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-orange-100 rounded-xl text-orange-600">
            <Flame size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Slang of the Day</h1>
        </div>
        <p className="text-gray-500 text-sm">รวมศัพท์วัยรุ่นและสำนวนภาษาอังกฤษที่กำลังฮิต</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {slangData.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-orange-600">{item.word}</h2>
              <button className="p-2 bg-gray-50 hover:bg-orange-100 hover:text-orange-600 rounded-full text-gray-400 transition-colors">
                <Volume2 size={18} />
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Meaning</span>
                <p className="text-gray-800 font-medium">{item.meaning}</p>
              </div>
              <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">Example</span>
                <p className="text-gray-600 italic mt-0.5 text-sm">"{item.example}"</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}