import { useState } from 'react';
import { Search, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const vocabData = [
  { id: 1, word: 'Accomplish', type: 'v.', meaning: 'ทำสำเร็จ, บรรลุผล', category: 'A' },
  { id: 2, word: 'Benevolent', type: 'adj.', meaning: 'ใจบุญ, เมตตากรุณา', category: 'B' },
  { id: 3, word: 'Collaborate', type: 'v.', meaning: 'ร่วมมือ, ประสานงาน', category: 'C' },
  { id: 4, word: 'Diligent', type: 'adj.', meaning: 'ขยันหมั่นเพียร', category: 'D' },
  { id: 5, word: 'Elaborate', type: 'v.', meaning: 'ขยายความ, ทำอย่างประณีต', category: 'E' },
];

const alphabets = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Vocabulary() {
  const [selectedLetter, setSelectedLetter] = useState('#');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-w-5xl mx-auto">
      <div className="mb-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Vocabulary Bank</h1>
          <p className="text-gray-500 text-sm">คลังคำศัพท์แยกตามหมวดหมู่ A-Z</p>
        </div>

        {/* Search Bar Clean Style */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="ค้นหาคำศัพท์..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-gray-700 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* A-Z Filter */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
          {alphabets.map((char) => (
            <button
              key={char}
              onClick={() => setSelectedLetter(char)}
              className={`min-w-[40px] h-10 rounded-lg text-sm font-semibold flex items-center justify-center transition-all ${
                selectedLetter === char
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-100 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-4">
        <AnimatePresence>
          {vocabData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-blue-700">{item.word}</h3>
                  <span className="text-sm text-gray-400 italic">{item.type}</span>
                </div>
                <p className="text-gray-600 font-medium">{item.meaning}</p>
              </div>
              
              <button className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 hover:text-white">
                <Volume2 size={18} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}