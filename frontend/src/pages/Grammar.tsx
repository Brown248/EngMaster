import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';
import { useNavigate, useParams, Link, useSearchParams } from 'react-router-dom';
import { grammarTopics } from '../data/grammarData';
import AdBanner from '../components/AdBanner';

export default function Grammar() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  
  // ใช้ useSearchParams แทน useState เพื่อให้ Sync กับ URL
  const [searchParams, setSearchParams] = useSearchParams();

  // ดึงค่าจาก URL Query String (เช่น ?subtopic=Noun&type=Common Noun)
  const selectedSubtopicName = searchParams.get('subtopic');
  const selectedTypeName = searchParams.get('type');

  // หา Data Object จากชื่อที่ได้จาก URL
  const activeTopic = grammarTopics.find(t => t.id === topicId);
  
  const currentSubtopicData = activeTopic?.details?.subtopics?.find(
    s => s.name === selectedSubtopicName
  );

  const selectedTypeDetail = currentSubtopicData?.types?.find(
    t => t.name === selectedTypeName
  );

  // Scroll to top เมื่อ URL เปลี่ยน (เปลี่ยนหน้า)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, selectedSubtopicName, selectedTypeName]);

  const startQuiz = (mainTopicId: string, subTopicName?: string) => {
    if (mainTopicId === 'tenses') {
        navigate('/grammar/quiz');
    } else if (mainTopicId === 'parts-of-speech') {
        navigate('/grammar/parts-of-speech-quiz', { state: { subTopic: subTopicName } });
    } else if (mainTopicId === 'voice') {
        navigate('/grammar/voice-quiz');
    }
  };

  // Logic ปุ่ม Back บนหน้าจอ (Manual Back)
  // ให้ทำงานสอดคล้องกับปุ่ม Browser Back
  const handleBack = () => {
      if (selectedTypeName) {
          // ถ้าย้อนจาก Type -> กลับไป Subtopic (ลบ type ออกจาก URL)
          setSearchParams({ subtopic: selectedSubtopicName! });
      } else if (selectedSubtopicName) {
          // ถ้าย้อนจาก Subtopic -> กลับไปหน้าหลัก Topic (ลบ query ทั้งหมด)
          setSearchParams({});
      } else {
          // ถ้าอยู่หน้าหลัก Topic -> กลับไปเมนู Grammar รวม
          navigate('/grammar');
      }
  };

  // Helper สำหรับเปลี่ยนหน้า (Push State ลง Browser History)
  const goToSubtopic = (name: string) => {
      setSearchParams({ subtopic: name });
  };

  const goToTypeDetail = (name: string) => {
      setSearchParams({ subtopic: selectedSubtopicName!, type: name });
  };

  return (
    <div className="space-y-8 pb-12">
      <AnimatePresence mode="wait">
        
        {/* --- LEVEL 1: Main Topics (Parts of Speech, Tenses) --- */}
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
                    className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:shadow-lg transition-all h-full relative overflow-hidden group"
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
          
          /* --- LEVEL 2 & 3: Details Wrapper --- */
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100 min-h-[60vh]"
          >
            {/* Header */}
            <div className="mb-8">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors mb-4"
                >
                  <ArrowLeft size={20} /> 
                  {selectedTypeDetail ? 'Back to Types' : selectedSubtopicName ? 'Back to List' : 'All Topics'}
                </button>
                
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                    <span className="text-5xl">{activeTopic?.icon}</span>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800">
                            {selectedTypeDetail ? selectedTypeDetail.name : selectedSubtopicName || activeTopic?.details?.title}
                        </h2>
                        <p className="text-slate-500 font-medium">
                            {selectedTypeDetail ? currentSubtopicData?.name : activeTopic?.details?.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Logic */}
            {!selectedSubtopicName ? (
                 // --- LEVEL 1: Subtopic List (e.g. Noun, Verb List) ---
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeTopic?.details.subtopics.map((sub, idx) => (
                            <motion.div 
                                key={idx}
                                onClick={() => goToSubtopic(sub.name)} // เปลี่ยนเป็นใช้ URL Params
                                whileHover={{ scale: 1.01 }}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors group relative"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <BookOpen size={20} className="text-indigo-500"/> 
                                        {sub.name}
                                    </h3>
                                    <ChevronRight className="text-slate-300 group-hover:text-indigo-500"/>
                                </div>
                                <p className="text-slate-500 text-sm line-clamp-2">{sub.usage}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    {activeTopic?.id !== 'parts-of-speech' && (
                        <div className="mt-8 text-center">
                            <button onClick={() => startQuiz(activeTopic!.id)} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-105 transition-all">
                                <PlayCircle size={24} /> เริ่มทำแบบทดสอบรวม
                            </button>
                        </div>
                     )}
                 </div>

            ) : !selectedTypeDetail && currentSubtopicData?.types ? (
                
                // --- LEVEL 2: Type List (e.g. Common Noun, Proper Noun buttons) ---
                <div className="space-y-6 animate-fade-in">
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 mb-6 flex items-start gap-3">
                         <span className="text-2xl">💡</span>
                         <p className="font-medium mt-1">{currentSubtopicData.usage}</p>
                    </div>

                    <h3 className="text-xl font-bold text-slate-700 mb-4">เลือกหัวข้อเพื่อเจาะลึก:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {currentSubtopicData.types.map((type, idx) => (
                             <motion.button
                                key={idx}
                                onClick={() => goToTypeDetail(type.name)} // เปลี่ยนเป็นใช้ URL Params
                                whileHover={{ scale: 1.02, backgroundColor: '#fff' }}
                                className="text-left p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
                             >
                                 <h4 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 mb-1">{type.name}</h4>
                                 <p className="text-sm text-slate-500 line-clamp-1">{type.usage}</p>
                             </motion.button>
                         ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                        <button 
                            onClick={() => startQuiz(activeTopic!.id, selectedSubtopicName!)}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-900 hover:shadow-lg transition-all"
                        >
                            <PlayCircle size={20} />
                            ทำแบบทดสอบเรื่อง {selectedSubtopicName.split(' ')[1] || selectedSubtopicName}
                        </button>
                    </div>
                </div>

            ) : (
                
                // --- LEVEL 3: Detail View (Common Noun Usage & Examples) ---
                <div className="animate-fade-in space-y-8">
                     {(() => {
                         const detail = selectedTypeDetail || currentSubtopicData;
                         if(!detail) return <div className="text-center text-slate-400">Content not found</div>;

                         return (
                            <>
                                <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                                    <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                                        📌 หลักการใช้
                                    </h3>
                                    <p className="text-slate-700 text-lg leading-relaxed">
                                        {detail.usage}
                                    </p>
                                    {detail.structure && (
                                        <div className="mt-4 p-3 bg-white rounded-lg border border-indigo-100 font-mono text-indigo-600 text-sm">
                                            Structure: {detail.structure}
                                        </div>
                                    )}
                                </div>

                                {detail.vocabulary && detail.vocabulary.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔤 คำศัพท์น่ารู้</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {detail.vocabulary.map((word, i) => (
                                                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold border border-slate-200 text-sm">
                                                    {word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        📝 ตัวอย่างประโยค
                                    </h3>
                                    <div className="grid gap-3">
                                        {detail.examples?.map((ex, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
                                                <div className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                                                <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: ex.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">$1</span>') }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                         )
                     })()}
                </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}