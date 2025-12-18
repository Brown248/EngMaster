import { useState } from 'react';
import { Search, Volume2 } from 'lucide-react';

// ข้อมูลตัวอย่างสำหรับ UI (ในอนาคตจะดึงจาก Backend API)
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
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header & Search Section */}
      <div className="mb-6 flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Vocabulary Bank</h1>
          <p className="text-gray-500">คลังคำศัพท์แยกตามหมวดหมู่ A-Z</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search vocabulary..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* A-Z Filter Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {alphabets.map((char) => (
            <button
              key={char}
              onClick={() => setSelectedLetter(char)}
              className={`min-w-[40px] h-10 rounded-lg font-semibold flex items-center justify-center transition-colors ${
                selectedLetter === char
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary List Content */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {vocabData.map((item) => (
          <div 
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-200 transition-colors group"
          >
            <div className="flex flex-col">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-xl font-bold text-blue-700">{item.word}</span>
                <span className="text-sm text-gray-400 italic mb-0.5">{item.type}</span>
              </div>
              <span className="text-gray-600">{item.meaning}</span>
            </div>
            
            <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100">
              <Volume2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}