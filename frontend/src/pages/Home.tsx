import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { grammarTopics } from '../data/grammarData';
import AdBanner from '../components/AdBanner';

export default function Grammar() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const activeTopic = grammarTopics.find(t => t.id === selectedTopic);

  // ฟังก์ชันช่วยตรวจสอบว่าหัวข้อไหนมี Quiz บ้าง
  const hasQuiz = (topicId: string) => {
    return ['tenses', 'parts-of-speech'].includes(topicId);
  };

  const startQuiz = (topicId: string) => {
    if (topicId === 'tenses') {
      navigate('/grammar/quiz');
    } else if (topicId === 'parts-of-speech') {
      navigate('/grammar/parts-of-speech-quiz');
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <AnimatePresence mode="wait">
        {!selectedTopic ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-3xl flex items-center justify-center text-4xl shadow-md">
                🧠
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">Grammar Challenge</h2>
                <p className="text-slate-500 text-lg font-medium">รวมไวยากรณ์สำคัญ จากพื้นฐานสู่ระดับสูง</p>
              </div>
            </div>

            <AdBanner className="mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grammarTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 cursor-pointer hover:shadow-lg transition-all group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150
                    ${topic.color === 'indigo' ? 'bg-indigo-50' : ''}
                    ${topic.color === 'orange' ? 'bg-orange-50' : ''}
                    ${topic.color === 'blue' ? 'bg-blue-50' : ''}
                    ${topic.color === 'purple' ? 'bg-purple-50' : ''}
                    ${topic.color === 'teal' ? 'bg-teal-50' : ''}
                    ${topic.color === 'rose' ? 'bg-rose-50' : ''}
                    ${topic.color === 'amber' ? 'bg-amber-50' : ''}
                    ${topic.color === 'cyan' ? 'bg-cyan-50' : ''}
                    ${topic.color === 'emerald' ? 'bg-emerald-50' : ''}
                    ${topic.color === 'slate' ? 'bg-slate-50' : ''}
                  `} />
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{topic.icon}</span>
                      <h3 className="text-xl font-bold text-slate-700 group-hover:text-purple-600 transition-colors">
                        {topic.title.split('. ')[1] || topic.title}
                      </h3>
                    </div>
                    <ChevronRight className="text-slate-300 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {topic.title.split('. ')[0]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors w-fit"
                >
                  <ArrowLeft size={20} /> Back to Topics
                </button>
                
                {/* แสดงปุ่ม Quiz ถ้ามี */}
                {selectedTopic && hasQuiz(selectedTopic) && (
                  <button 
                    onClick={() => startQuiz(selectedTopic)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <PlayCircle size={20} />
                    เริ่มทำแบบทดสอบ
                  </button>
                )}
            </div>

            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
              <span className="text-5xl">{activeTopic?.icon}</span>
              <div>
                {/* ✅ ใส่ ? ป้องกัน Error เวลาหาข้อมูลไม่เจอ */}
                <h2 className="text-3xl font-black text-slate-800">{activeTopic?.details?.title}</h2>
                <p className="text-slate-500 font-medium">{activeTopic?.title}</p>
              </div>
            </div>

            <AdBanner className="mb-8" />

            <div className="space-y-8">
              {/* ✅ ใส่ ? เพื่อป้องกัน Crash ถ้า subtopics เป็น undefined */}
              {activeTopic?.details?.subtopics?.map((sub, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">{sub.name}</h3>
                  
                  {sub.structure && (
                    <div className="mb-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg inline-block">
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wide mr-2">Structure:</span>
                        <span className="font-mono text-blue-700 font-medium">{sub.structure}</span>
                    </div>
                  )}

                  <p className="text-slate-700 font-medium mb-4 leading-relaxed">
                    {sub.usage || sub.explanation}
                  </p>
                  
                  {sub.examples && sub.examples.length > 0 && (
                    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Examples:</p>
                      <ul className="space-y-2.5">
                        {sub.examples.map((ex, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 items-start text-sm md:text-base">
                            <span className="text-purple-400 mt-1.5 text-[8px] flex-shrink-0">●</span>
                            <span dangerouslySetInnerHTML={{ __html: ex.replace(/\*\*(.*?)\*\*/g, '<b class="text-purple-700 font-bold">$1</b>') }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {selectedTopic && hasQuiz(selectedTopic) && (
              <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                 <h3 className="text-2xl font-bold text-slate-800 mb-4">พร้อมทดสอบความเข้าใจรึยัง?</h3>
                 <button 
                    onClick={() => startQuiz(selectedTopic)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <PlayCircle size={24} />
                    เริ่มทำแบบทดสอบ {activeTopic?.details?.title}
                  </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}