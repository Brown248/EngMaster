// frontend/src/data/conditionalsQuizData.ts
import { QuizQuestion } from '../types';

export const conditionalsQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Identify the type: **'If I were you, I would apologize.'**",
    options: ["Zero", "First", "Second", "Third"],
    correctAnswer: 2,
    explanation: "If + Past Simple (were), Would + V1 เป็น Second Conditional (แนะนำ/สมมติ)"
  },
  {
    id: 2,
    type: 'fill-blank',
    question: "If you heat water to 100°C, it ______ (boil/boils).",
    correctAnswer: "boils",
    explanation: "Zero Conditional (Scientific Fact) ใช้ Present Simple"
  },
  {
    id: 3,
    type: 'choice',
    question: "Complete: **'If she ______, she would have succeeded.'**",
    options: ["tried", "has tried", "had tried", "would try"],
    correctAnswer: 2,
    explanation: "Main clause เป็น 'would have succeeded' (Third) ดังนั้น If clause ต้องเป็น Past Perfect (had tried)"
  },
  {
    id: 4,
    type: 'reorder',
    question: "Make a First Conditional sentence:",
    options: ["will", "go", "if", "sunny", "it", "we", "is"],
    correctAnswer: ["if", "it", "is", "sunny", "we", "will", "go"],
    explanation: "If + Present (is), Future (will go)"
  },
  {
    id: 5,
    type: 'choice',
    question: "Which implies the event is **impossible** in the past?",
    options: ["If I go...", "If I went...", "If I had gone...", "When I go..."],
    correctAnswer: 2,
    explanation: "'If I had gone' (Third Conditional) ใช้พูดถึงสิ่งที่จบไปแล้วและแก้ไขไม่ได้"
  },
  {
    id: 6,
    type: 'fill-blank',
    question: "Mixed: If I had moved to USA, I ______ (will/would) speak English fluently now.",
    correctAnswer: "would",
    explanation: "ผลลัพธ์ในปัจจุบัน (now) ใช้ would + V1"
  },
  {
    id: 7,
    type: 'true-false',
    question: "**'Unless'** means **'If not'**.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True: 'Unless you study' = 'If you do not study'"
  },
  {
    id: 8,
    type: 'choice',
    question: "If I ______ the President, I would change the law.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2,
    explanation: "Subjunctive/Second Conditional ใช้ 'were' เสมอ"
  }
];