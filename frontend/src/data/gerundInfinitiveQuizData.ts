// frontend/src/data/gerundInfinitiveQuizData.ts
import { QuizQuestion } from '../types';

export const gerundInfinitiveQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "She promised ______ me.",
    options: ["helping", "help", "to help", "helped"],
    correctAnswer: 2,
    explanation: "promise + to + V (สัญญาว่าจะทำ)"
  },
  {
    id: 2,
    type: 'choice',
    question: "Have you finished ______ your homework?",
    options: ["do", "doing", "to do", "done"],
    correctAnswer: 1,
    explanation: "finish + V-ing (ทำเสร็จ)"
  },
  {
    id: 3,
    type: 'fill-blank',
    question: "I am interested in ______ (learn/learning) English.",
    correctAnswer: "learning",
    explanation: "หลัง Preposition 'in' ต้องตามด้วย V-ing"
  },
  {
    id: 4,
    type: 'reorder',
    question: "Create a sentence:",
    options: ["learn", "to", "They", "planned", "Japanese"],
    correctAnswer: ["They", "planned", "to", "learn", "Japanese"],
    explanation: "plan + to + V"
  },
  {
    id: 5,
    type: 'choice',
    question: "Stop ______! It's annoying.",
    options: ["to talk", "talking", "talk", "talked"],
    correctAnswer: 1,
    explanation: "Stop + V-ing = หยุดทำสิ่งนั้น (หยุดคุยเดี๋ยวนี้)"
  },
  {
    id: 6,
    type: 'true-false',
    question: "**'I look forward to seeing you.'** is correct.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True: 'look forward to' เป็นสำนวนพิเศษที่ 'to' เป็น prep. จึงตามด้วย V-ing"
  },
  {
    id: 7,
    type: 'choice',
    question: "It's too late ______ out.",
    options: ["go", "going", "to go", "went"],
    correctAnswer: 2,
    explanation: "Adjective (late) + to + V"
  },
  {
    id: 8,
    type: 'fill-blank',
    question: "He keeps ______ (ask/asking) the same question.",
    correctAnswer: "asking",
    explanation: "keep + V-ing (ทำต่อไปเรื่อยๆ)"
  }
];