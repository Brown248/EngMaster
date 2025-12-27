// frontend/src/data/separateConditionalsData.ts
import { QuizQuestion } from '../types';

export interface ConditionalsTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateConditionalsData: ConditionalsTopic[] = [
  {
    id: 'zero-conditional',
    name: 'Zero Conditional (Facts)',
    description: 'If + Present Simple, Present Simple',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        question: "If you freeze water, it ______ (turn/turns) into ice.",
        correctAnswer: "turns",
        explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ ใช้ Present Simple ทั้งคู่"
      },
      {
        id: 2,
        type: 'choice',
        question: "Zero Conditional structure is:",
        options: ["If + Pres, Will", "If + Past, Would", "If + Pres, Pres", "If + Past, Past"],
        correctAnswer: 2,
        explanation: "ใช้ Present Simple ทั้งสองส่วน"
      }
    ]
  },
  {
    id: 'first-conditional',
    name: 'First Conditional (Future Possibility)',
    description: 'If + Present Simple, Will + V1',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "If it rains tomorrow, I ______ home.",
        options: ["stay", "stayed", "will stay", "would stay"],
        correctAnswer: 2,
        explanation: "First Conditional: เหตุการณ์ในอนาคตที่เป็นไปได้ ใช้ Will + V1"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "If she ______ (come/comes) early, we will start.",
        correctAnswer: "comes",
        explanation: "หลัง If เป็น Present Simple (she comes)"
      }
    ]
  },
  {
    id: 'second-conditional',
    name: 'Second Conditional (Unreal Present)',
    description: 'If + Past Simple, Would + V1',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "If I ______ a bird, I would fly.",
        options: ["am", "was", "were", "been"],
        correctAnswer: 2,
        explanation: "ใน Second Conditional ใช้ 'were' กับทุกประธาน (If I were...)"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "If I had money, I ______ (will/would) buy it.",
        correctAnswer: "would",
        explanation: "If + Past Simple (had) คู่กับ Would"
      }
    ]
  },
  {
    id: 'third-conditional',
    name: 'Third Conditional (Unreal Past)',
    description: 'If + Past Perfect, Would have + V3',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "If I had known, I ______ you.",
        options: ["would help", "will help", "would have helped", "helped"],
        correctAnswer: 2,
        explanation: "If + Past Perfect (had known) คู่กับ Would have + V3"
      },
      {
        id: 2,
        type: 'reorder',
        question: "Arrange the Third Conditional:",
        options: ["passed", "have", "studied", "you", "if", "would", "you", "had"],
        correctAnswer: ["if", "you", "had", "studied", "you", "would", "have", "passed"],
        explanation: "If + S + had + V3, S + would have + V3"
      }
    ]
  },
  {
    id: 'mixed-conditional',
    name: 'Mixed Conditional',
    description: 'Past Cause -> Present Result',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "If I had eaten breakfast, I ______ hungry now.",
        options: ["wouldn't be", "wouldn't have been", "won't be", "am not"],
        correctAnswer: 0,
        explanation: "เหตุดเกิดในอดีต (had eaten) แต่ผลอยู่ที่ปัจจุบัน (now) ใช้ would + V1 (be)"
      }
    ]
  }
];