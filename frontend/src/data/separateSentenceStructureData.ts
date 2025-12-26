// frontend/src/data/separateSentenceStructureData.ts
import { QuizQuestion } from '../types';

export interface SentenceStructureTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateSentenceStructureData: SentenceStructureTopic[] = [
  {
    id: 'sentence-types',
    name: 'Sentence Types (ประเภทประโยค)',
    description: 'Simple, Compound, Complex, Compound-Complex',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Identify the sentence type: **'The dog barked.'**",
        options: ["Simple", "Compound", "Complex", "Compound-Complex"],
        correctAnswer: 0,
        explanation: "มีประธาน (Dog) และกริยา (barked) ชุดเดียว เป็น Simple Sentence"
      },
      {
        id: 2,
        type: 'choice',
        question: "Identify: **'I wanted to go, but I was tired.'**",
        options: ["Simple", "Compound", "Complex", "Fragment"],
        correctAnswer: 1,
        explanation: "มี 2 ประโยคเชื่อมด้วย 'but' (FANBOYS) เป็น Compound Sentence"
      },
      {
        id: 3,
        type: 'choice',
        question: "Identify: **'She smiled because she was happy.'**",
        options: ["Simple", "Compound", "Complex", "Compound-Complex"],
        correctAnswer: 2,
        explanation: "มีคำเชื่อม 'because' (Subordinating Conjunction) ทำให้เป็น Complex Sentence"
      },
      {
        id: 4,
        type: 'fill-blank',
        question: "Compound sentences use FANBOYS. 'B' stands for ______.",
        correctAnswer: "but",
        explanation: "F=For, A=And, N=Nor, B=But, O=Or, Y=Yet, S=So"
      },
      {
        id: 5,
        type: 'reorder',
        question: "Make a Compound Sentence:",
        options: ["and", "sing", "I", "dance", "can", "she", "can"],
        correctAnswer: ["I", "can", "sing", "and", "she", "can", "dance"],
        explanation: "เชื่อม 2 ประโยคด้วย and"
      },
      {
        id: 6,
        type: 'true-false',
        question: "'Because it rained.' is a complete Simple Sentence.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False: มันเป็น Dependent Clause (ประโยคไม่สมบูรณ์) ต้องมีประโยคหลักมารับ"
      },
      {
        id: 7,
        type: 'choice',
        question: "Which word signals a **Complex** sentence?",
        options: ["And", "But", "Although", "Or"],
        correctAnswer: 2,
        explanation: "Although เป็น Subordinating Conjunction ใช้ใน Complex Sentence"
      },
      {
        id: 8,
        type: 'reorder',
        question: "Make a Complex Sentence:",
        options: ["if", "call", "me", "need", "you", "help"],
        correctAnswer: ["call", "me", "if", "you", "need", "help"],
        explanation: "Imperative + Dependent Clause (if...)"
      }
    ]
  },
  {
    id: 'sentence-purpose',
    name: 'Sentence Purpose (หน้าที่ประโยค)',
    description: 'Declarative, Interrogative, Imperative, Exclamatory',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Which sentence is **Interrogative**?",
        options: ["Sit down.", "Where are you?", "I am here.", "What a mess!"],
        correctAnswer: 1,
        explanation: "ประโยคคำถาม (Question) ลงท้ายด้วย ?"
      },
      {
        id: 2,
        type: 'choice',
        question: "What is an **Imperative** sentence?",
        options: ["A statement", "A question", "A command/request", "An exclamation"],
        correctAnswer: 2,
        explanation: "Imperative คือประโยคคำสั่งหรือขอร้อง"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "An exclamatory sentence ends with an ______ mark.",
        correctAnswer: "exclamation",
        explanation: "เครื่องหมายตกใจ (!)"
      },
      {
        id: 4,
        type: 'true-false',
        question: "**'Please help me.'** is a Declarative sentence.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False: เป็น Imperative (ขอร้อง)"
      },
      {
        id: 5,
        type: 'reorder',
        question: "Make an Exclamatory sentence:",
        options: ["cute", "how", "is", "she", "!"],
        correctAnswer: ["how", "cute", "she", "is", "!"],
        explanation: "How + Adj + S + V !"
      },
      {
        id: 6,
        type: 'choice',
        question: "**'The sun rises in the east.'** is...",
        options: ["Declarative", "Imperative", "Exclamatory", "Interrogative"],
        correctAnswer: 0,
        explanation: "บอกเล่าข้อเท็จจริง (Declarative)"
      },
      {
        id: 7,
        type: 'reorder',
        question: "Make an Interrogative sentence:",
        options: ["like", "you", "do", "pizza", "?"],
        correctAnswer: ["do", "you", "like", "pizza", "?"],
        explanation: "Do + S + V ?"
      }
    ]
  }
];