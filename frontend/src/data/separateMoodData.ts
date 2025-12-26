// frontend/src/data/separateMoodData.ts
import { QuizQuestion } from '../types';

export interface MoodTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateMoodData: MoodTopic[] = [
  {
    id: 'indicative',
    name: 'Indicative Mood (บอกเล่า/ความจริง)',
    description: 'ประโยคบอกเล่าข้อเท็จจริงทั่วไป',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Which sentence is **Indicative**?",
        options: ["Go away!", "She plays tennis.", "I wish I were a bird.", "Be careful."],
        correctAnswer: 1,
        explanation: "'She plays tennis.' บอกเล่าข้อเท็จจริง (Fact)"
      },
      {
        id: 2,
        type: 'choice',
        question: "Is this sentence Indicative? **'The earth orbits the sun.'**",
        options: ["Yes", "No"],
        correctAnswer: 0,
        explanation: "ใช่ เป็นการบอกความจริงตามธรรมชาติ (Fact)"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Indicative: He ______ (lives/live) in Bangkok.",
        correctAnswer: "lives",
        explanation: "ประโยคบอกเล่าทั่วไป ผัน Verb ตามประธาน He"
      },
      {
        id: 4,
        type: 'reorder',
        question: "Arrange into Indicative sentence:",
        options: ["likes", "she", "ice cream"],
        correctAnswer: ["she", "likes", "ice cream"],
        explanation: "S + V + O (บอกเล่าปกติ)"
      },
      {
        id: 5,
        type: 'choice',
        question: "Which is **NOT** Indicative?",
        options: ["I am happy.", "Do you like pizza?", "Stop the car!", "It rained yesterday."],
        correctAnswer: 2,
        explanation: "'Stop the car!' เป็น Imperative (คำสั่ง)"
      }
    ]
  },
  {
    id: 'imperative',
    name: 'Imperative Mood (คำสั่ง/ขอร้อง)',
    description: 'ประโยคคำสั่ง ขึ้นต้นด้วย V1 หรือ Don\'t',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Choose the **Imperative** sentence.",
        options: ["You are sitting.", "Sit down please.", "If I sit...", "She sits."],
        correctAnswer: 1,
        explanation: "ขึ้นต้นด้วยกริยา (Sit) เพื่อบอกให้ทำ"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "Imperative: ______ (Open/Opens) your book.",
        correctAnswer: "open",
        explanation: "ประโยคคำสั่งใช้ V.Infinitive เสมอ"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Make a command:",
        options: ["quiet", "be", "please"],
        correctAnswer: ["please", "be", "quiet"],
        explanation: "Please + V1 (หรือ V1 + please)"
      },
      {
        id: 4,
        type: 'choice',
        question: "Negative Imperative starts with...",
        options: ["Doesn't", "Don't", "Not", "No"],
        correctAnswer: 1,
        explanation: "ประโยคห้าม ใช้ Don't + V1 (เช่น Don't go.)"
      },
      {
        id: 5,
        type: 'fill-blank',
        question: "Imperative: ______ (Don't/Not) touch that!",
        correctAnswer: "don't",
        explanation: "ใช้ Don't ในการห้าม"
      }
    ]
  },
  {
    id: 'subjunctive',
    name: 'Subjunctive Mood (สมมติ/ปรารถนา)',
    description: 'I wish I were..., I suggest that he go...',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Complete: **'I wish I ______ rich.'**",
        options: ["am", "was", "were", "been"],
        correctAnswer: 2,
        explanation: "ใน Subjunctive (เรื่องสมมติ) เราใช้ 'were' กับทุกประธาน (I, He, She, It)"
      },
      {
        id: 2,
        type: 'choice',
        question: "Correct Subjunctive form: **'I suggest that she ______ hard.'**",
        options: ["studies", "study", "studying", "studied"],
        correctAnswer: 1,
        explanation: "หลัง suggest that + S + V.infinitive (ไม่เติม s/es) เสมอ"
      },
      {
        id: 3,
        type: 'true-false',
        question: "Is this correct? **'If I was you, I would go.'** (Formal Grammar)",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1,
        explanation: "ตามหลักไวยากรณ์ที่ถูกต้องที่สุดต้องใช้ 'If I **were** you'"
      },
      {
        id: 4,
        type: 'fill-blank',
        question: "It is important that he ______ (be/is) on time.",
        correctAnswer: "be",
        explanation: "Subjunctive หลัง adjective important ใช้ be (infinitive)"
      },
      {
        id: 5,
        type: 'reorder',
        question: "Arrange the wish:",
        options: ["knew", "wish", "I", "answer", "the", "I"],
        correctAnswer: ["I", "wish", "I", "knew", "the", "answer"],
        explanation: "I wish + Past Simple (knew) = อยากให้รู้ (แต่ตอนนี้ไม่รู้)"
      }
    ]
  }
];