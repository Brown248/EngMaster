import { QuizQuestion } from '../types';

export const tensesQuizData: QuizQuestion[] = [
  // --- Present ---
  {
    id: 1,
    question: "Look! It ______ outside.",
    options: ["rains", "is raining", "rained", "has rained"],
    correctAnswer: 1,
    explanation: "มีคำว่า Look! เป็นสัญญาณว่าเหตุการณ์กำลังเกิด (Present Continuous)."
  },
  {
    id: 2,
    question: "Water ______ at 100 degrees Celsius.",
    options: ["boil", "boils", "is boiling", "boiled"],
    correctAnswer: 1,
    explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ ใช้ Present Simple (เติม s)."
  },
  {
    id: 3,
    question: "I ______ my homework yet.",
    options: ["didn't finish", "haven't finished", "don't finish", "won't finish"],
    correctAnswer: 1,
    explanation: "มีคำว่า yet ในประโยคปฏิเสธ ใช้ Present Perfect."
  },
  {
    id: 4,
    question: "She usually ______ coffee, but today she is drinking tea.",
    options: ["doesn't drink", "drinks", "is drinking", "drank"],
    correctAnswer: 1,
    explanation: "ปกติ (usually) ใช้ Present Simple, วันนี้ (today) ใช้ Present Continuous."
  },
  {
    id: 5,
    question: "We ______ football for two hours. We are tired.",
    options: ["play", "are playing", "have been playing", "played"],
    correctAnswer: 2,
    explanation: "เน้นความต่อเนื่องของการกระทำที่ส่งผลถึงปัจจุบัน (เหนื่อย) ใช้ Present Perfect Continuous."
  },
  {
    id: 6,
    question: "My father ______ in a bank.",
    options: ["work", "works", "is working", "has worked"],
    correctAnswer: 1,
    explanation: "อาชีพหรือความจริงทั่วไป ใช้ Present Simple ประธานเอกพจน์กริยาเติม s."
  },
  {
    id: 7,
    question: "Please be quiet. The baby ______.",
    options: ["sleeps", "slept", "is sleeping", "has slept"],
    correctAnswer: 2,
    explanation: "เหตุการณ์กำลังเกิดขณะพูด (Please be quiet) ใช้ Present Continuous."
  },
  {
    id: 8,
    question: "They ______ to the cinema every Sunday.",
    options: ["go", "goes", "are going", "went"],
    correctAnswer: 0,
    explanation: "กิจวัตร (every Sunday) ใช้ Present Simple."
  },

  // --- Past ---
  {
    id: 9,
    question: "I ______ to London last year.",
    options: ["go", "went", "have gone", "had gone"],
    correctAnswer: 1,
    explanation: "ระบุเวลาจบชัดเจน (last year) ใช้ Past Simple."
  },
  {
    id: 10,
    question: "While I ______ TV, the phone rang.",
    options: ["watched", "was watching", "am watching", "have watched"],
    correctAnswer: 1,
    explanation: "เหตุการณ์กำลังดำเนินในอดีต (was watching) แล้วมีอีกอันแทรก."
  },
  {
    id: 11,
    question: "When I got to the station, the train ______.",
    options: ["left", "has left", "had left", "leaves"],
    correctAnswer: 2,
    explanation: "รถไฟออกไปก่อนที่ฉันจะถึง (อดีตซ้อนอดีต) ใช้ Past Perfect."
  },
  {
    id: 12,
    question: "He ______ there for 10 years before he moved.",
    options: ["lived", "has lived", "had lived", "was living"],
    correctAnswer: 2,
    explanation: "อยู่มาก่อนที่จะย้าย (Past Perfect)."
  },
  {
    id: 13,
    question: "I ______ very tired last night.",
    options: ["feel", "felt", "have felt", "had felt"],
    correctAnswer: 1,
    explanation: "เล่าเรื่องอดีต (last night) ใช้ Past Simple."
  },
  {
    id: 14,
    question: "Did you ______ him yesterday?",
    options: ["see", "saw", "seen", "seeing"],
    correctAnswer: 0,
    explanation: "หลัง Did กริยาต้องเป็นรูป Infinitive (V1 ไม่ผัน)."
  },
  {
    id: 15,
    question: "It ______ heavily when I woke up.",
    options: ["rained", "was raining", "rains", "has rained"],
    correctAnswer: 1,
    explanation: "ฝนกำลังตกอยู่ (Past Cont) ตอนที่ตื่น (Past Simple)."
  },

  // --- Future ---
  {
    id: 16,
    question: "I think it ______ tomorrow.",
    options: ["rains", "is raining", "will rain", "has rained"],
    correctAnswer: 2,
    explanation: "คาดเดาอนาคตทั่วไป (Prediction) ใช้ Future Simple."
  },
  {
    id: 17,
    question: "At 10 AM tomorrow, I ______ in a meeting.",
    options: ["will sit", "will be sitting", "sit", "have sat"],
    correctAnswer: 1,
    explanation: "ระบุเวลาเจาะจงในอนาคตว่าจะกำลังทำอะไรอยู่ ใช้ Future Continuous."
  },
  {
    id: 18,
    question: "By next year, she ______ her degree.",
    options: ["finishes", "will finish", "will have finished", "is finishing"],
    correctAnswer: 2,
    explanation: "มีคำว่า By (ภายใน...) ใช้ Future Perfect."
  },
  {
    id: 19,
    question: "Don't touch that! You ______ yourself.",
    options: ["burn", "are burning", "will burn", "have burnt"],
    correctAnswer: 2,
    explanation: "เตือนภัยหรือคาดเดาผลลัพธ์ ใช้ Future Simple."
  },
  {
    id: 20,
    question: "By the time you arrive, we ______ for hours.",
    options: ["wait", "will wait", "will have been waiting", "waited"],
    correctAnswer: 2,
    explanation: "เน้นความต่อเนื่องถึงจุดหนึ่งในอนาคต ใช้ Future Perfect Continuous."
  },

  // --- Mixed & Advanced ---
  {
    id: 21,
    question: "______ you ever ______ to Paris?",
    options: ["Did / go", "Have / been", "Do / go", "Were / going"],
    correctAnswer: 1,
    explanation: "ถามประสบการณ์ (ever) ใช้ Present Perfect."
  },
  {
    id: 22,
    question: "If it rains, we ______ at home.",
    options: ["stay", "stayed", "will stay", "would stay"],
    correctAnswer: 2,
    explanation: "First Conditional (If + Present, Future)."
  },
  {
    id: 23,
    question: "She said she ______ busy.",
    options: ["is", "was", "will be", "has been"],
    correctAnswer: 1,
    explanation: "Reported Speech: said (อดีต) -> was (อดีต)."
  },
  {
    id: 24,
    question: "While he was cooking, he ______ his finger.",
    options: ["cut", "was cutting", "cuts", "has cut"],
    correctAnswer: 0,
    explanation: "เหตุการณ์แทรกเข้ามาสั้นๆ (บาดนิ้ว) ใช้ Past Simple."
  },
  {
    id: 25,
    question: "The bus ______ at 9:00 AM every day.",
    options: ["leave", "leaves", "is leaving", "left"],
    correctAnswer: 1,
    explanation: "ตารางเวลา (Timetable) ใช้ Present Simple เสมอ."
  },
  {
    id: 26,
    question: "I ______ him since 2015.",
    options: ["knew", "know", "have known", "am knowing"],
    correctAnswer: 2,
    explanation: "Since + เวลาในอดีต ใช้ Present Perfect."
  },
  {
    id: 27,
    question: "What ______ you ______ when I called?",
    options: ["did / do", "were / doing", "are / doing", "have / done"],
    correctAnswer: 1,
    explanation: "ถามเหตุการณ์ที่กำลังทำในอดีต."
  },
  {
    id: 28,
    question: "By the time we got there, the concert ______.",
    options: ["started", "has started", "had started", "starts"],
    correctAnswer: 2,
    explanation: "คอนเสิร์ตเริ่มไปก่อนที่เราจะถึง (อดีตซ้อนอดีต) ใช้ Past Perfect."
  },
  {
    id: 29,
    question: "He ______ as a doctor for 20 years by next month.",
    options: ["works", "will work", "will have been working", "has worked"],
    correctAnswer: 2,
    explanation: "Future Perfect Continuous เน้นความต่อเนื่องถึงอนาคต (by next month)."
  },
  {
    id: 30,
    question: "Listen! Someone ______ the piano.",
    options: ["plays", "played", "is playing", "has played"],
    correctAnswer: 2,
    explanation: "Listen! บอกเหตุการณ์ขณะนี้ ใช้ Present Continuous."
  }
];