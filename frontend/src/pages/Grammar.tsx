// frontend/src/pages/Grammar.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';
import { useNavigate, useParams, Link, useSearchParams } from 'react-router-dom';
import { grammarTopics } from '../data/grammarData';
import AdBanner from '../components/AdBanner';

export default function Grammar() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSubtopicId = searchParams.get('subtopicId');
  const selectedTypeName = searchParams.get('type'); 

  const activeTopic = grammarTopics.find(t => t.id === topicId);
  
  const currentSubtopicData = activeTopic?.details?.subtopics?.find(
    s => s.id === selectedSubtopicId
  );

  const selectedTypeDetail = currentSubtopicData?.types?.find(
    t => t.name === selectedTypeName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, selectedSubtopicId, selectedTypeName]);

  const startQuiz = (mainTopicId: string, subTopicId?: string) => {
    if (mainTopicId === 'tenses') {
        navigate('/grammar/quiz');
    } else if (mainTopicId === 'parts-of-speech') {
        navigate('/grammar/parts-of-speech-quiz', { state: { subTopicId: subTopicId } });
    } else if (mainTopicId === 'voice') {
        navigate('/grammar/voice-quiz');
    } else if (mainTopicId === 'mood') {
        navigate('/grammar/mood-quiz', { state: { subTopicId: subTopicId } });
    } else if (mainTopicId === 'sentence-structure') {
        navigate('/grammar/sentence-structure-quiz', { state: { subTopicId: subTopicId } });
    } else if (mainTopicId === 'clauses') { // [New] เพิ่มเงื่อนไขนี้
        navigate('/grammar/clauses-quiz', { state: { subTopicId: subTopicId } });
    }
  };

  const handleBack = () => {
      if (selectedTypeName) {
          setSearchParams({ subtopicId: selectedSubtopicId! });
      } else if (selectedSubtopicId) {
          setSearchParams({});
      } else {
          navigate('/grammar');
      }
  };

  const goToSubtopic = (id: string) => {
      setSearchParams({ subtopicId: id });
  };

  const goToTypeDetail = (name: string) => {
      setSearchParams({ subtopicId: selectedSubtopicId!, type: name });
  };

  return (
    <div className="space-y-8 pb-12">
      <AnimatePresence mode="wait">
        
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
          
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100 min-h-[60vh]"
          >
            <div className="mb-8">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors mb-4"
                >
                  <ArrowLeft size={20} /> 
                  {selectedTypeDetail ? 'Back to Types' : selectedSubtopicId ? 'Back to List' : 'All Topics'}
                </button>
                
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                    <span className="text-5xl">{activeTopic?.icon}</span>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800">
                            {selectedTypeDetail ? selectedTypeDetail.name : currentSubtopicData?.name || activeTopic?.details?.title}
                        </h2>
                        <p className="text-slate-500 font-medium">
                            {selectedTypeDetail ? currentSubtopicData?.name : activeTopic?.details?.description}
                        </p>
                    </div>
                </div>
            </div>

            {!selectedSubtopicId ? (
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeTopic?.details.subtopics.map((sub, idx) => (
                            <motion.div 
                                key={idx}
                                onClick={() => goToSubtopic(sub.id)}
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
                    
                    <div className="mt-8 text-center">
                        <button onClick={() => startQuiz(activeTopic!.id)} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-105 transition-all">
                            <PlayCircle size={24} /> เริ่มทำแบบทดสอบ
                        </button>
                    </div>
                 </div>

            ) : !selectedTypeDetail && currentSubtopicData?.types ? (
                
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
                                onClick={() => goToTypeDetail(type.name)}
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
                            onClick={() => startQuiz(activeTopic!.id, currentSubtopicData.id)}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-900 hover:shadow-lg transition-all"
                        >
                            <PlayCircle size={20} />
                            ทำแบบทดสอบเรื่อง {currentSubtopicData.name.split(' ')[1] || currentSubtopicData.name}
                        </button>
                    </div>
                </div>

            ) : (
                
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
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔤 ตัวอย่างคำศัพท์</h3>
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