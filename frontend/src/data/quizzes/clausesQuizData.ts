// frontend/src/data/clausesQuizData.ts
import { QuizQuestion } from '../../types';

export const clausesQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Identify the Clause type: **'Although he is small, he is strong.'**",
    options: ["Noun Clause", "Adjective Clause", "Adverb Clause", "Independent Clause"],
    correctAnswer: 2,
    explanation: "'Although he is small' ขยายประโยคหลัก เป็น Adverb Clause (Concession)"
  },
  {
    id: 2,
    type: 'choice',
    question: "Which part is the **Independent Clause**? **'Before you go, wash the dishes.'**",
    options: ["Before you go", "wash the dishes", "you go", "Before"],
    correctAnswer: 1,
    explanation: "'Wash the dishes' เป็นประโยคคำสั่ง (Imperative) ที่อยู่ลำพังได้"
  },
  {
    id: 3,
    type: 'choice',
    question: "The clause **'that she is rich'** in 'I believe that she is rich' acts as...",
    options: ["Adjective", "Adverb", "Noun", "Verb"],
    correctAnswer: 2,
    explanation: "ทำหน้าที่เป็นกรรม (Object) ของ believe จึงเป็น Noun Clause"
  },
  {
    id: 4,
    type: 'fill-blank',
    question: "A dependent clause usually starts with a ______ conjunction (e.g., because, if).",
    correctAnswer: "subordinating",
    explanation: "คำเชื่อมเช่น because, if, when เรียกว่า Subordinating Conjunction"
  },
  {
    id: 5,
    type: 'reorder',
    question: "Form a sentence with an Adjective Clause:",
    options: ["man", "the", "who", "called", "left", "has"],
    correctAnswer: ["the", "man", "who", "called", "has", "left"],
    explanation: "who called ขยาย the man"
  },
  {
    id: 6,
    type: 'true-false',
    question: "**'Which I bought'** can stand alone as a sentence.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False: มันเป็น Relative Clause ไม่สมบูรณ์ในตัวเอง"
  },
  {
    id: 7,
    type: 'choice',
    question: "Combine these: 'I have a friend.' 'He lives in Japan.'",
    options: ["I have a friend when lives in Japan.", "I have a friend who lives in Japan.", "I have a friend where lives in Japan.", "I have a friend because lives in Japan."],
    correctAnswer: 1,
    explanation: "ใช้ 'who' เชื่อมเพื่อขยายคน (Adjective Clause)"
  },
  {
    id: 8,
    type: 'choice',
    question: "What does the clause modify? **'I will call you when I arrive.'**",
    options: ["call (Verb)", "you (Object)", "I (Subject)", "will (Aux)"],
    correctAnswer: 0,
    explanation: "'when I arrive' บอกเวลาของการโทร (call) -> Adverb Clause"
  }
];