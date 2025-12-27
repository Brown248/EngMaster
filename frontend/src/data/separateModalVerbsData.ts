// frontend/src/data/separateModalVerbsData.ts
import { QuizQuestion } from '../types';

export interface ModalVerbsTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateModalVerbsData: ModalVerbsTopic[] = [
  {
    id: 'ability',
    name: 'Ability (Can)',
    description: 'ความสามารถ (Ability) และการขออนุญาต',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "I ______ swim very well.",
        options: ["can", "must", "should", "might"],
        correctAnswer: 0,
        explanation: "ใช้ 'can' บอกความสามารถ (Ability)"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "______ (Can/Must) you open the window, please?",
        correctAnswer: "can",
        explanation: "ใช้ Can ในการขอร้อง (Request) หรือขออนุญาต"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Arrange the sentence:",
        options: ["speak", "can", "she", "English", "fluently"],
        correctAnswer: ["she", "can", "speak", "English", "fluently"],
        explanation: "Subject + can + Verb infinitive"
      }
    ]
  },
  {
    id: 'obligation',
    name: 'Obligation (Must)',
    description: 'สิ่งที่ต้องทำ (Must) กฎระเบียบ',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "You ______ stop at the red light.",
        options: ["might", "can", "must", "should"],
        correctAnswer: 2,
        explanation: "เป็นกฎจราจร ต้องปฏิบัติตาม ใช้ 'must'"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "Students ______ (must/might) turn off their phones in class.",
        correctAnswer: "must",
        explanation: "เป็นกฎระเบียบห้องเรียน ใช้ must"
      },
      {
        id: 3,
        type: 'true-false',
        question: "**'Mustn't'** means you don't have to do it.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False: 'Mustn't' แปลว่า 'ห้ามทำ' (Prohibition) ไม่ใช่แค่ไม่จำเป็นต้องทำ"
      }
    ]
  },
  {
    id: 'advice',
    name: 'Advice (Should)',
    description: 'คำแนะนำ (Should) สิ่งที่ควรทำ',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "You look tired. You ______ get some rest.",
        options: ["can", "should", "must", "might"],
        correctAnswer: 1,
        explanation: "เป็นการให้คำแนะนำ (Advice) ด้วยความหวังดี"
      },
      {
        id: 2,
        type: 'reorder',
        question: "Give advice:",
        options: ["doctor", "see", "should", "a", "you"],
        correctAnswer: ["you", "should", "see", "a", "doctor"],
        explanation: "Subject + should + Verb 1"
      }
    ]
  },
  {
    id: 'possibility',
    name: 'Possibility (Might)',
    description: 'ความเป็นไปได้ (Might) อาจจะเกิดหรือไม่ก็ได้',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Take an umbrella. It ______ rain.",
        options: ["must", "should", "can", "might"],
        correctAnswer: 3,
        explanation: "คาดการณ์ความเป็นไปได้ในอนาคต ใช้ might (อาจจะ)"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "I am not sure, but he ______ (must/might) be at the library.",
        correctAnswer: "might",
        explanation: "คีย์เวิร์ดคือ 'not sure' ดังนั้นใช้ might (อาจจะ)"
      }
    ]
  }
];