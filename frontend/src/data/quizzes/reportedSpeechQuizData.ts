import { QuizQuestion } from '../../types';

export const reportedSpeechQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Direct: He said, \"I am happy.\"\nIndirect: He said that he ______ happy.",
    options: ["is", "was", "were", "been"],
    correctAnswer: 1,
    explanation: "ใน Indirect Speech ถ้ากริยานำเป็นอดีต (said) ต้องเปลี่ยน Tense ถอยหลัง (Present -> Past)"
  },
  {
    id: 2,
    type: 'choice',
    question: "She said, \"I will call you.\"",
    options: ["She said she will call me.", "She said she would call me.", "She said she calls me.", "She said she called me."],
    correctAnswer: 1,
    explanation: "Will ต้องเปลี่ยนเป็น Would ใน Indirect Speech"
  },
  {
    id: 3,
    type: 'true-false',
    question: "Correct or Incorrect: He asked me where did I live.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1,
    explanation: "ผิด: ใน Indirect Question ไม่ต้องสลับตำแหน่งกริยาช่วยเหมือนประโยคคำถาม -> He asked me where I lived."
  },
  {
    id: 4,
    type: 'fill-blank',
    question: "Mom said, \"Clean your room.\"\nMom told me ______ (clean) my room.",
    correctAnswer: "to clean",
    explanation: "ประโยคคำสั่ง (Imperative) เปลี่ยนเป็น Infinitive with to (to + V1)"
  },
  {
    id: 5,
    type: 'choice',
    question: "He asked, \"Are you busy?\"",
    options: ["He asked if I was busy.", "He asked that I was busy.", "He asked am I busy.", "He asked whether was I busy."],
    correctAnswer: 0,
    explanation: "Yes/No Question เชื่อมด้วย if หรือ whether และเรียงประโยคแบบบอกเล่า"
  }
];