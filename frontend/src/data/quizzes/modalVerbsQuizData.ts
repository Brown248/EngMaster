// frontend/src/data/modalVerbsQuizData.ts
import { QuizQuestion } from '../../types';

export const modalVerbsQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "This is a library. You ______ be quiet.",
    options: ["can", "might", "must", "would"],
    correctAnswer: 2,
    explanation: "กฎของห้องสมุดคือ 'ต้อง' เงียบ (Obligation)"
  },
  {
    id: 2,
    type: 'choice',
    question: "I ______ play the piano when I was five.",
    options: ["can", "could", "must", "should"],
    correctAnswer: 1,
    explanation: "ความสามารถในอดีต (when I was five) ใช้ Could (รูปอดีตของ Can)"
  },
  {
    id: 3,
    type: 'fill-blank',
    question: "You ______ (should/can) see a dentist if your tooth hurts.",
    correctAnswer: "should",
    explanation: "ให้คำแนะนำ (Advice)"
  },
  {
    id: 4,
    type: 'choice',
    question: "Where is Jane? - She ______ be in her room, but I'm not sure.",
    options: ["must", "might", "can", "should"],
    correctAnswer: 1,
    explanation: "ไม่มั่นใจ (not sure) ใช้ might"
  },
  {
    id: 5,
    type: 'reorder',
    question: "Arrange the sentence:",
    options: ["not", "smoke", "you", "must", "here"],
    correctAnswer: ["you", "must", "not", "smoke", "here"],
    explanation: "Must not = ข้อห้าม (Prohibition)"
  },
  {
    id: 6,
    type: 'true-false',
    question: "**'Can'** describes obligation.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False: Can บอกความสามารถ (Ability) ส่วน Must บอกหน้าที่ (Obligation)"
  },
  {
    id: 7,
    type: 'choice',
    question: "It's cloudy. It ______ rain soon.",
    options: ["can", "must", "should", "might"],
    correctAnswer: 3,
    explanation: "คาดการณ์จากเมฆครึ้ม มีความเป็นไปได้ (Possibility)"
  },
  {
    id: 8,
    type: 'fill-blank',
    question: "I ______ (can/must) run 10 kilometers.",
    correctAnswer: "can",
    explanation: "บอกขีดความสามารถทางร่างกาย"
  }
];