export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

export const tensesQuizData: QuizQuestion[] = [
  // --- Present Tenses ---
  {
    id: 1,
    question: "Look! It ______ outside. You should take an umbrella.",
    options: ["rains", "is raining", "rained", "has rained"],
    correctAnswer: 1,
    explanation: "มีคำว่า 'Look!' (ดูนั่นสิ!) แสดงว่าเหตุการณ์กำลังเกิดขึ้น ณ ขณะพูด ต้องใช้ Present Continuous (is/am/are + V-ing)."
  },
  {
    id: 2,
    question: "She usually ______ to school by bus, but today she is walking.",
    options: ["go", "goes", "is going", "went"],
    correctAnswer: 1,
    explanation: "คำว่า 'usually' บอกนิสัยหรือกิจวัตร ต้องใช้ Present Simple ประธาน She (เอกพจน์) กริยาต้องเติม -es เป็น 'goes'."
  },
  {
    id: 3,
    question: "I ______ my keys. I can't open the door now.",
    options: ["lose", "lost", "have lost", "had lost"],
    correctAnswer: 2,
    explanation: "เหตุการณ์เกิดขึ้นในอดีต (ทำกุญแจหาย) แต่ส่งผลถึงปัจจุบัน (เข้าห้องไม่ได้) ต้องใช้ Present Perfect (have + V3)."
  },
  {
    id: 4,
    question: "They ______ football for two hours. They look tired.",
    options: ["are playing", "have played", "have been playing", "played"],
    correctAnswer: 2,
    explanation: "มี 'for two hours' และเน้นความต่อเนื่องของการกระทำที่ส่งผลให้เหนื่อย ต้องใช้ Present Perfect Continuous (have been + V-ing)."
  },
  
  // --- Past Tenses ---
  {
    id: 5,
    question: "We ______ to Chiang Mai last December.",
    options: ["go", "went", "have gone", "were going"],
    correctAnswer: 1,
    explanation: "มีระบุเวลาในอดีตชัดเจน 'last December' ต้องใช้ Past Simple (V2) คือ 'went'."
  },
  {
    id: 6,
    question: "While I ______ TV, the electricity went out.",
    options: ["watched", "was watching", "am watching", "have watched"],
    correctAnswer: 1,
    explanation: "เหตุการณ์กำลังดำเนินอยู่ (ดูทีวี) แล้วมีอีกเหตุการณ์แทรก (ไฟดับ) ใช้ Past Continuous (was/were + V-ing) คู่กับ Past Simple."
  },
  {
    id: 7,
    question: "When I arrived at the station, the train ______.",
    options: ["left", "has left", "had left", "was leaving"],
    correctAnswer: 2,
    explanation: "รถไฟออกไป 'ก่อน' ที่จะมาถึง (อดีตซ้อนอดีต) เหตุการณ์ที่เกิดก่อนใช้ Past Perfect (had + V3)."
  },
  {
    id: 8,
    question: "He was tired because he ______ all day.",
    options: ["worked", "has worked", "had been working", "is working"],
    correctAnswer: 2,
    explanation: "บอกสาเหตุในอดีต (was tired) ที่เกิดจากการทำต่อเนื่องมานานก่อนหน้านั้น ใช้ Past Perfect Continuous (had been + V-ing)."
  },

  // --- Future Tenses ---
  {
    id: 9,
    question: "I think it ______ tomorrow.",
    options: ["rains", "is raining", "will rain", "has rained"],
    correctAnswer: 2,
    explanation: "การคาดเดาอนาคตทั่วไป (Prediction) มักใช้ Future Simple (will + V1)."
  },
  {
    id: 10,
    question: "Don't call me at 8 PM. I ______ dinner.",
    options: ["will have", "will be having", "have", "am having"],
    correctAnswer: 1,
    explanation: "ระบุเวลาเจาะจงในอนาคต (At 8 PM) ว่าจะกำลังทำอะไรอยู่ ใช้ Future Continuous (will be + V-ing)."
  },
  {
    id: 11,
    question: "By next year, she ______ her degree.",
    options: ["finishes", "will finish", "will have finished", "has finished"],
    correctAnswer: 2,
    explanation: "มีคำว่า 'By...' (ภายใน...) บอกว่าเหตุการณ์จะเสร็จสิ้นก่อนเวลานั้นในอนาคต ใช้ Future Perfect (will have + V3)."
  },
  {
    id: 12,
    question: "By the time you arrive, we ______ for three hours.",
    options: ["will wait", "will be waiting", "will have been waiting", "wait"],
    correctAnswer: 2,
    explanation: "เน้นระยะเวลา (for three hours) ที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต ใช้ Future Perfect Continuous."
  },

  // --- Mixed / Tricky Questions ---
  {
    id: 13,
    question: "The sun ______ in the east.",
    options: ["rise", "rises", "is rising", "rose"],
    correctAnswer: 1,
    explanation: "เป็นความจริงตามธรรมชาติ (General Truth) ใช้ Present Simple เสมอ."
  },
  {
    id: 14,
    question: "I ______ him since we were in high school.",
    options: ["know", "knew", "have known", "am knowing"],
    correctAnswer: 2,
    explanation: "มี 'since' (ตั้งแต่) บอกจุดเริ่มต้นในอดีตถึงปัจจุบัน ใช้ Present Perfect. (Know ไม่นิยมใช้รูป Continuous)."
  },
  {
    id: 15,
    question: "Listen to the thunder! It ______ rain.",
    options: ["will", "is going to", "is", "must"],
    correctAnswer: 1,
    explanation: "คาดการณ์อนาคตที่มีหลักฐานชัดเจน (เสียงฟ้าร้อง) ใช้ 'be going to'."
  },
  {
    id: 16,
    question: "Before she moved to London, she ______ in Paris for 5 years.",
    options: ["lives", "has lived", "had lived", "lived"],
    correctAnswer: 2,
    explanation: "เหตุการณ์ในอดีต (อยู่ปารีส) เกิดก่อนอีกเหตุการณ์ในอดีต (ย้ายไปลอนดอน) ใช้ Past Perfect."
  },
  {
    id: 17,
    question: "If it rains, I ______ at home.",
    options: ["stay", "stayed", "will stay", "would stay"],
    correctAnswer: 2,
    explanation: "First Conditional (If + Present, Future) เป็นเหตุการณ์สมมติที่อาจเกิดขึ้นจริง."
  },
  {
    id: 18,
    question: "While he was cooking, he ______ his finger.",
    options: ["cut", "was cutting", "cuts", "has cut"],
    correctAnswer: 0,
    explanation: "เหตุการณ์สั้นๆ (บาดนิ้ว) เข้ามาแทรกเหตุการณ์ที่กำลังดำเนินอยู่ ใช้ Past Simple (V2 cut-cut-cut)."
  },
  {
    id: 19,
    question: "This time next week, I ______ on the beach.",
    options: ["lie", "am lying", "will be lying", "will lie"],
    correctAnswer: 2,
    explanation: "จินตนาการภาพเหตุการณ์ที่จะกำลังเกิดขึ้นในเวลาที่ระบุในอนาคต ใช้ Future Continuous."
  },
  {
    id: 20,
    question: "She said that she ______ hungry.",
    options: ["is", "was", "has been", "will be"],
    correctAnswer: 1,
    explanation: "Reported Speech (Indirect) ประโยคหลักเป็นอดีต (said) ประโยคย่อยต้องถอย Tense เป็นอดีตตาม (is -> was)."
  }
];