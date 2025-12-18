import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, BookOpen, Clock } from 'lucide-react';

const tenseData: Record<string, { structure: string, concept: string, examples: string[] }> = {
    "Present Simple": {
        structure: "S + V.1 (s/es)",
        concept: "ใช้กับข้อเท็จจริง (Fact), กิจวัตร (Routine), และความจริงทั่วไป",
        examples: ["I eat rice every day.", "The sun rises in the east.", "She works at a bank."]
    },
    "Present Continuous": {
        structure: "S + is/am/are + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังเกิดขึ้นขณะพูด หรือ แผนการในอนาคตอันใกล้",
        examples: ["I am studying English now.", "Look! It is raining.", "We are meeting him tomorrow."]
    },
    "Present Perfect": {
        structure: "S + has/have + V.3",
        concept: "ใช้กับเหตุการณ์ที่เกิดขึ้นในอดีตและส่งผลถึงปัจจุบัน หรือเพิ่งจบลง",
        examples: ["I have lost my keys.", "She has lived here for 10 years.", "Have you ever been to Japan?"]
    },
    "Present Perfect Continuous": {
        structure: "S + has/have + been + V.ing",
        concept: "เน้นความต่อเนื่องของเหตุการณ์ตั้งแต่อดีตจนถึงปัจจุบัน",
        examples: ["It has been raining for 3 hours.", "I have been waiting for you all morning."]
    },
    "Past Simple": {
        structure: "S + V.2",
        concept: "ใช้กับเหตุการณ์ที่จบลงแล้วในอดีต (มีระบุเวลาชัดเจน)",
        examples: ["I went to the cinema yesterday.", "We lived in London in 2010.", "He didn't buy the car."]
    },
    "Past Continuous": {
        structure: "S + was/were + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังดำเนินอยู่ในอดีต ณ เวลาใดเวลาหนึ่ง",
        examples: ["I was sleeping at 10 PM last night.", "While I was cooking, the phone rang."]
    },
    "Past Perfect": {
        structure: "S + had + V.3",
        concept: "ใช้คู่กับ Past Simple เพื่อบอกว่าเหตุการณ์หนึ่งเกิดก่อน (Past Perf) อีกเหตุการณ์หนึ่ง (Past Sim)",
        examples: ["When I arrived, the train had left.", "She had finished her work before she went out."]
    },
    "Past Perfect Continuous": {
        structure: "S + had + been + V.ing",
        concept: "คล้าย Past Perfect แต่เน้นความต่อเนื่องของการกระทำที่เกิดก่อน",
        examples: ["He had been drinking milk out of the carton when Mom walked into the kitchen."]
    },
    "Future Simple": {
        structure: "S + will + V.inf",
        concept: "ใช้คาดเดาอนาคต, สัญญา, หรือตัดสินใจทันทีขณะพูด",
        examples: ["I will call you later.", "It will rain tomorrow.", "I think he will win."]
    },
    "Future Continuous": {
        structure: "S + will + be + V.ing",
        concept: "ใช้บอกเหตุการณ์ที่จะกำลังเกิดขึ้น ณ เวลาหนึ่งในอนาคต",
        examples: ["At 8 PM tomorrow, I will be eating dinner.", "Don't call me at 9, I will be sleeping."]
    },
    "Future Perfect": {
        structure: "S + will + have + V.3",
        concept: "ใช้บอกว่าเหตุการณ์จะเสร็จสมบูรณ์ ณ เวลาหนึ่งในอนาคต",
        examples: ["By next year, I will have graduated.", "She will have finished the report by 5 PM."]
    },
    "Future Perfect Continuous": {
        structure: "S + will + have + been + V.ing",
        concept: "เน้นความต่อเนื่องของการกระทำที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต",
        examples: ["By next month, I will have been working here for 2 years."]
    }
};

const tenseGroups = [
    {
        title: "Present",
        icon: "☀️",
        color: "emerald",
        items: ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous"]
    },
    {
        title: "Past",
        icon: "🕰️",
        color: "amber",
        items: ["Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous"]
    },
    {
        title: "Future",
        icon: "🚀",
        color: "indigo",
        items: ["Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous"]
    }
];

export default function Grammar() {
  const [selectedTense, setSelectedTense] = useState<string | null>(null);

  // Helper for dynamic Tailwind classes (safe way)
  const getColorClasses = (color: string) => {
    const map: Record<string, any> = {
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', hover: 'hover:bg-emerald-50' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', hover: 'hover:bg-amber-50' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', hover: 'hover:bg-indigo-50' },
    };
    return map[color] || map.emerald;
  };

  return (
    <div className="space-y-8">
      <AnimatePresence mode='wait'>
        {!selectedTense ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-purple-100 text-purple-500 rounded-3xl flex items-center justify-center text-4xl shadow-md"
              >
                🧠
              </motion.div>
              <div>
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">12 Tenses Challenge</h2>
                <p className="text-slate-500 text-lg font-medium">เลือก Tense ที่ต้องการเรียนรู้เลย</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tenseGroups.map((group, groupIndex) => {
                const colors = getColorClasses(group.color);
                return (
                  <motion.div 
                    key={groupIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.15, type: "spring" }}
                    className="bg-white rounded-[2rem] p-3 border-2 border-slate-50 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full"
                  >
                    <div className={`p-6 rounded-[1.5rem] ${colors.bg} ${colors.text} font-black text-2xl text-center mb-4 flex items-center justify-center gap-3 shadow-inner`}>
                      <span>{group.icon}</span> {group.title}
                    </div>
                    <div className="space-y-2 p-2 flex-1">
                      {group.items.map((tense, idx) => (
                        <motion.button 
                          key={idx}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedTense(tense)}
                          className={`w-full text-left p-4 rounded-xl ${colors.hover} transition-colors font-bold text-slate-600 hover:text-slate-800 flex justify-between items-center group`}
                        >
                          {tense}
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                            <ChevronRight className="text-slate-400" size={18} />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="max-w-4xl mx-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTense(null)}
              className="bg-white px-6 py-3 rounded-full shadow-md text-slate-600 font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 mb-6 border border-slate-100"
            >
              <ArrowLeft size={20} /> Back to Menu
            </motion.button>
            
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
              <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-10 text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
                <h2 className="text-5xl font-black mb-2 relative z-10">{selectedTense}</h2>
                <div className="flex items-center gap-2 opacity-90 font-medium relative z-10">
                  <BookOpen size={18} />
                  <span>Grammar Card</span>
                </div>
              </div>
              
              <div className="p-10 space-y-10">
                {tenseData[selectedTense] && (
                  <>
                    {/* Structure Box */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-violet-50 rounded-3xl p-8 border-l-8 border-violet-500 relative"
                    >
                        <h3 className="text-violet-900 font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                          <Clock size={16} /> Structure
                        </h3>
                        <p className="text-4xl font-mono font-bold text-violet-600 tracking-tight">
                          {tenseData[selectedTense].structure}
                        </p>
                    </motion.div>

                    {/* Concept */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-slate-800 font-black text-2xl mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-white text-lg">💡</span>
                            หลักการใช้
                        </h3>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium pl-11">
                          {tenseData[selectedTense].concept}
                        </p>
                    </motion.div>

                    {/* Examples */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-slate-50 rounded-3xl p-8"
                    >
                        <h3 className="text-slate-800 font-black text-2xl mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-lg">🗣️</span>
                            ตัวอย่างประโยค
                        </h3>
                        <ul className="space-y-4">
                            {tenseData[selectedTense].examples.map((ex, i) => (
                                <li key={i} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:scale-[1.01] transition-transform">
                                    <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">{i + 1}</span>
                                    <span className="text-slate-700 text-lg font-medium">{ex}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}