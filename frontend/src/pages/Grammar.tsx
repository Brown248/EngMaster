// frontend/src/pages/Grammar.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, BookOpen } from 'lucide-react'; 
import { useNavigate, useParams, Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ เพิ่ม import Helmet
import { grammarTopics } from '../data/core/grammarData'; 
import AdBanner from '../components/AdBanner';
import { GrammarTopic, GrammarSubtopic, GrammarTypeDetail } from '../types';

export default function Grammar() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSubtopicId = searchParams.get('subtopicId');
  const selectedTypeName = searchParams.get('type'); 

  const activeTopic = grammarTopics.find((t: GrammarTopic) => t.id === topicId);
  const currentSubtopicData = activeTopic?.details?.subtopics?.find((s: GrammarSubtopic) => s.id === selectedSubtopicId);
  const selectedTypeDetail = currentSubtopicData?.types?.find((t: GrammarTypeDetail) => t.name === selectedTypeName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, selectedSubtopicId, selectedTypeName]);

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

  // ✅ คำนวณ Title และ Description สำหรับ SEO แบบ Dynamic
  let pageTitle = "Grammar Summary - สรุปไวยากรณ์ภาษาอังกฤษครบจบในที่เดียว | EngMaster";
  let pageDesc = "รวมสรุปหลักไวยากรณ์ภาษาอังกฤษ (English Grammar) ทั้ง 12 Tenses, Parts of Speech, และ Sentence Structure อธิบายเข้าใจง่ายพร้อมตัวอย่าง";

  if (selectedTypeDetail) {
      pageTitle = `${selectedTypeDetail.name} - ${activeTopic?.title} | EngMaster`;
      pageDesc = `เรียนรู้เรื่อง ${selectedTypeDetail.name} ในหัวข้อ ${activeTopic?.title} พร้อมตัวอย่างประโยคและวิธีการใช้ที่ถูกต้อง`;
  } else if (currentSubtopicData) {
      pageTitle = `${currentSubtopicData.name} - Grammar | EngMaster`;
      pageDesc = `สรุปเรื่อง ${currentSubtopicData.name} : ${currentSubtopicData.usage}`;
  } else if (activeTopic) {
      pageTitle = `${activeTopic.title} - แบบฝึกหัดและสรุป | EngMaster`;
      pageDesc = activeTopic.details.description || "";
  }

  return (
    <div className="space-y-8 pb-12">
      {/* ✅ ใส่ Helmet ตรงนี้เพื่อให้เปลี่ยน Title ไปตามเนื้อหา */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>

      <AnimatePresence mode="wait">
        {!topicId ? (
          <motion.div key="list" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
             <div className="flex items-center gap-5">
               <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-3xl flex items-center justify-center text-4xl shadow-md">🧠</div>
               <div>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">Grammar Challenge</h2>
                  <p className="text-slate-500 text-lg font-medium">เลือกหัวข้อไวยากรณ์ที่ต้องการเรียนรู้</p>
               </div>
            </div>
            
            {/* ✅ เพิ่ม Text Content เพื่อแก้ปัญหา Low Value Content */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-slate-600 leading-relaxed">
                <p>
                    ไวยากรณ์ภาษาอังกฤษ (English Grammar) คือโครงสร้างพื้นฐานที่สำคัญในการสื่อสาร 
                    ไม่ว่าจะเป็นการพูด อ่าน หรือเขียน ในหน้านี้เราได้รวบรวมสรุปหลักไวยากรณ์ที่สำคัญไว้ครบถ้วน 
                    ตั้งแต่เรื่องพื้นฐานอย่าง <strong>Parts of Speech</strong> ไปจนถึงเรื่องซับซ้อนอย่าง <strong>12 Tenses</strong> และ <strong>Conditional Sentences</strong>
                </p>
                <p className="mt-2">
                    คุณสามารถเลือกหัวข้อด้านล่างเพื่อเริ่มเรียนรู้ได้ทันที โดยแต่ละบทเรียนจะประกอบไปด้วยคำอธิบาย โครงสร้างประโยค และตัวอย่างการใช้งานจริง
                </p>
            </div>

            {/* ❌ ปิดโฆษณาในหน้า List View ไปก่อน */}
            {/* <AdBanner className="mb-8" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grammarTopics.map((topic: GrammarTopic) => (
                <Link to={`/grammar/${topic.id}`} key={topic.id}>
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:shadow-lg transition-all h-full relative overflow-hidden group">
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
          <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100 min-h-[60vh]">
            <div className="mb-8">
                <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors mb-4">
                  <ArrowLeft size={20} /> {selectedTypeDetail ? 'Back to Types' : selectedSubtopicId ? 'Back to List' : 'All Topics'}
                </button>
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                    <span className="text-5xl">{activeTopic?.icon}</span>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800">{selectedTypeDetail ? selectedTypeDetail.name : currentSubtopicData?.name || activeTopic?.details?.title}</h2>
                        <p className="text-slate-500 font-medium">{selectedTypeDetail ? currentSubtopicData?.name : activeTopic?.details?.description}</p>
                    </div>
                </div>
            </div>

            <div className="min-h-[40vh]">
                {!selectedSubtopicId ? (
                     <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeTopic?.details.subtopics.map((sub: GrammarSubtopic, idx: number) => (
                                <motion.div key={idx} onClick={() => goToSubtopic(sub.id)} whileHover={{ scale: 1.01 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors group relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><BookOpen size={20} className="text-indigo-500"/> {sub.name}</h3>
                                        <ChevronRight className="text-slate-300 group-hover:text-indigo-500"/>
                                    </div>
                                    <p className="text-slate-500 text-sm line-clamp-2">{sub.usage}</p>
                                </motion.div>
                            ))}
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
                             {currentSubtopicData.types.map((type: GrammarTypeDetail, idx: number) => (
                                 <motion.button key={idx} onClick={() => goToTypeDetail(type.name)} whileHover={{ scale: 1.02, backgroundColor: '#fff' }} className="text-left p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
                                     <h4 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 mb-1">{type.name}</h4>
                                     <p className="text-sm text-slate-500 line-clamp-1">{type.usage}</p>
                                 </motion.button>
                             ))}
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
                                        <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">📌 หลักการใช้</h3>
                                        <p className="text-slate-700 text-lg leading-relaxed">{detail.usage}</p>
                                        {detail.structure && (
                                            <div className="mt-4 p-3 bg-white rounded-lg border border-indigo-100 font-mono text-indigo-600 text-sm">
                                                {typeof detail.structure === 'string' ? (
                                                    <span>Structure: {detail.structure}</span>
                                                ) : (
                                                    <div className="flex flex-col gap-2">
                                                        <div className="font-bold text-slate-500 text-xs uppercase border-b border-indigo-50 pb-1">Structure Forms</div>
                                                        <div className="flex gap-2 items-start"><span className="font-bold text-teal-600 min-w-[24px] select-none">(+)</span><span>{detail.structure.positive}</span></div>
                                                        {detail.structure.negative && <div className="flex gap-2 items-start"><span className="font-bold text-rose-500 min-w-[24px] select-none">(-)</span><span>{detail.structure.negative}</span></div>}
                                                        {detail.structure.question && <div className="flex gap-2 items-start"><span className="font-bold text-amber-600 min-w-[24px] select-none">(?)</span><span>{detail.structure.question}</span></div>}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    {detail.vocabulary && detail.vocabulary.length > 0 && (
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔤 ตัวอย่างคำศัพท์</h3>
                                            <div className="flex flex-wrap gap-2">{detail.vocabulary.map((word: string, i: number) => (<span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold border border-slate-200 text-sm">{word}</span>))}</div>
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">📝 ตัวอย่างประโยค</h3>
                                        <div className="grid gap-3">
                                            {detail.examples?.map((ex: string, i: number) => (
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
            </div>

            {/* ✅ AdBanner ด้านล่างสุดของหน้า Detail ถือว่า OK เพราะมีเนื้อหาบทเรียนเยอะแล้ว */}
            <div className="mt-12 pt-8 border-t border-slate-50">
                <AdBanner 
                    dataAdSlot="2990261154" 
                    className="shadow-sm border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300" 
                />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}