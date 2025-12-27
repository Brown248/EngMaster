// frontend/src/data/separateGerundInfinitiveData.ts
import { QuizQuestion } from '../types';

export interface GITopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateGerundInfinitiveData: GITopic[] = [
  {
    id: 'gerund',
    name: 'Gerund (V-ing)',
    description: 'หลัง enjoy, mind, avoid, finish, keep และ Preposition',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "I enjoy ______ books.",
        options: ["to read", "read", "reading", "reads"],
        correctAnswer: 2,
        explanation: "หลัง 'enjoy' ต้องตามด้วย Gerund (V-ing) เสมอ"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "Would you mind ______ (open/opening) the window?",
        correctAnswer: "opening",
        explanation: "หลัง 'mind' (รังเกียจไหมที่จะ...) ใช้ V-ing"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Arrange the sentence:",
        options: ["is", "Swimming", "exercise", "good"],
        correctAnswer: ["Swimming", "is", "good", "exercise"],
        explanation: "Gerund (Swimming) ทำหน้าที่เป็นประธานของประโยคได้"
      },
      {
        id: 4,
        type: 'choice',
        question: "He left without ______ goodbye.",
        options: ["say", "saying", "to say", "said"],
        correctAnswer: 1,
        explanation: "หลัง Preposition (without) ต้องตามด้วย V-ing"
      },
      {
        id: 5,
        type: 'fill-blank',
        question: "Please avoid ______ (make/making) noise.",
        correctAnswer: "making",
        explanation: "หลัง 'avoid' (หลีกเลี่ยง) ใช้ V-ing"
      }
    ]
  },
  {
    id: 'infinitive',
    name: 'Infinitive (to + V)',
    description: 'หลัง want, hope, decide, need, promise และ Adjectives',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "I want ______ a doctor.",
        options: ["being", "to be", "be", "been"],
        correctAnswer: 1,
        explanation: "หลัง 'want' ใช้ Infinitive (to + V)"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "She decided ______ (to buy/buying) the car.",
        correctAnswer: "to buy",
        explanation: "หลัง 'decide' ใช้ to + V"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Arrange the sentence:",
        options: ["to", "hopes", "win", "He"],
        correctAnswer: ["He", "hopes", "to", "win"],
        explanation: "hope + to + V"
      },
      {
        id: 4,
        type: 'choice',
        question: "It is important ______ water.",
        options: ["drink", "drinking", "to drink", "drank"],
        correctAnswer: 2,
        explanation: "หลัง Adjective (important) มักตามด้วย to + V"
      },
      {
        id: 5,
        type: 'fill-blank',
        question: "I went to the shop ______ (to buy/buying) milk.",
        correctAnswer: "to buy",
        explanation: "Infinitive of purpose: ใช้ to + V เพื่อบอกวัตถุประสงค์ (เพื่อที่จะซื้อ)"
      }
    ]
  }
];