import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { grammarTopics } from '../data/grammarData';
import AdBanner from '../components/AdBanner';

export default function Grammar() {
  const navigate = useNavigate();
  const { topicId } = useParams(); 
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  const activeTopic = grammarTopics.find(t => t.id === topicId);

  // ฟังก์ชันเริ่ม Quiz โดยส่ง State ไปบอกว่าเลือกหัวข้อไหน
  const startQuiz = (mainTopicId: string, subTopicName?: string) => {
    if (mainTopicId === 'tenses') {
        navigate('/grammar/quiz');
    } else if (mainTopicId === 'parts-of-speech') {
        // ถ้าเลือก Adjective ให้ส่ง state ไป
        navigate('/grammar/parts-of-speech-quiz', { state: { subTopic: subTopicName } });
    } else if (mainTopicId === 'voice') {
        navigate('/grammar/voice-quiz');
    }
  };

  // เช็คว่าหัวข้อไหนมี Quiz บ้าง
  const hasQuiz = (mainId: string, subName?: string) => {
    if (mainId === 'tenses' || mainId === 'voice') return true;
    // สำหรับ Parts of Speech ตอนนี้ทำเฉพาะ Adjective (ตามโจทย์)
    if (mainId === 'parts-of-speech' && subName?.includes('Adjective')) return true;
    // หรือถ้าอยากให้ทำ Quiz รวมของ Parts of Speech ก็เปิดบรรทัดล่าง
    // if (mainId === 'parts-of-speech' && !subName) return true; 
    return false;
  };

  return (
    <div className="space-y-8 pb-12">
      <AnimatePresence mode="wait">
        
        {/* --- 1. หน้าหลัก (รายการ Topic ใหญ่) --- */}
        {!topicId ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
               <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-3xl flex items-center justify-center text-4xl shadow-md">🧠</div>
               <div>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">Grammar Challenge</h2>
                  <p className="text-slate-500 text-lg font-medium">เลือกหัวข้อไวยากรณ์ที่ต้องการเรียนรู้</p>
               </div>
            </div>

            <AdBanner className="mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grammarTopics.map((topic) => (
                <Link to={`/grammar/${topic.id}`} key={topic.id}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:shadow-lg transition-all h-full relative overflow-hidden group`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <span className="text-4xl">{topic.icon}</span>
                      <h3 className="text-xl font-bold text-slate-700 group-hover:text-indigo-600">{topic.title}</h3>
                    </div>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : (
          
          /* --- 2. หน้ารายละเอียด (Detail) --- */
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100"
          >
            {/* Header: ปุ่ม Back & Title */}
            <div className="mb-8">
                <button 
                  onClick={() => {
                      if (selectedSubtopic) setSelectedSubtopic(null); // ถ้าเปิด Subtopic อยู่ ให้ปิด
                      else navigate('/grammar'); // ถ้าอยู่หน้าหลัก Topic ให้กลับไปเมนู
                  }}
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors mb-4"
                >
                  <ArrowLeft size={20} /> {selectedSubtopic ? 'Back to List' : 'All Topics'}
                </button>
                
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                    <span className="text-5xl">{activeTopic?.icon}</span>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800">{activeTopic?.details?.title}</h2>
                        <p className="text-slate-500 font-medium">
                            {selectedSubtopic || activeTopic?.details?.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- กรณี Parts of Speech: แสดง Grid ย่อย --- */}
            {activeTopic?.id === 'parts-of-speech' && !selectedSubtopic ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTopic.details.subtopics.map((sub, idx) => (
                        <motion.div 
                            key={idx}
                            onClick={() => setSelectedSubtopic(sub.name)}
                            whileHover={{ scale: 1.01 }}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <BookOpen size={20} className="text-indigo-500"/> 
                                {sub.name}
                            </h3>
                            <p className="text-slate-500 text-sm line-clamp-2">{sub.usage}</p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                /* --- แสดงเนื้อหา (Content) --- */
                <div className="space-y-8">
                    {/* กรองแสดงเฉพาะ Subtopic ที่เลือก (ถ้ามี) หรือแสดงทั้งหมด (สำหรับ Tenses/Voice) */}
                    {activeTopic?.details?.subtopics
                        ?.filter(sub => !selectedSubtopic || sub.name === selectedSubtopic)
                        .map((sub, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 animate-fade-in">
                            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{sub.name}</h3>
                            
                            {/* Usage Section */}
                            <div className="mb-6">
                                <h4 className="font-bold text-slate-700 mb-2">💡 หลักการใช้:</h4>
                                <p className="text-slate-600 leading-relaxed">{sub.usage}</p>
                            </div>

                            {/* Structure Section */}
                            {sub.structure && (
                                <div className="mb-6 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-700 mb-1 text-sm uppercase">🔑 โครงสร้าง / จุดสังเกต:</h4>
                                    <p className="font-mono text-blue-900 font-medium">{sub.structure}</p>
                                </div>
                            )}

                            {/* Examples Section */}
                            {sub.examples && (
                                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">ตัวอย่างประโยค:</h4>
                                    <ul className="space-y-3">
                                        {sub.examples.map((ex, i) => (
                                        <li key={i} className="flex gap-3 text-slate-700 items-start">
                                            <span className="text-indigo-400 mt-1.5 text-[8px] flex-shrink-0">●</span>
                                            <span dangerouslySetInnerHTML={{ __html: ex.replace(/\*\*(.*?)\*\*/g, '<b class="text-indigo-700 bg-indigo-50 px-1 rounded">$1</b>') }} />
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* ปุ่ม Start Quiz เฉพาะหัวข้อนั้นๆ */}
                            {hasQuiz(activeTopic.id, sub.name) && (
                                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                                    <button 
                                        onClick={() => startQuiz(activeTopic.id, sub.name)}
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg"
                                    >
                                        <PlayCircle size={20} />
                                        ทำแบบทดสอบ {sub.name.split(' ')[0]}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {/* ปุ่ม Start Quiz รวม สำหรับ Tenses หรือ Voice */}
                    {!selectedSubtopic && hasQuiz(activeTopic?.id || '') && activeTopic?.id !== 'parts-of-speech' && (
                        <div className="mt-8 text-center">
                            <button 
                                onClick={() => startQuiz(activeTopic!.id)}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <PlayCircle size={24} />
                                เริ่มทำแบบทดสอบรวม
                            </button>
                        </div>
                    )}
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}