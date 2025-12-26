// frontend/src/data/sentenceStructureQuizData.ts
import { QuizQuestion } from '../types';

export const sentenceStructureQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Identify the sentence type: **'I study hard so I can pass.'**",
    options: ["Simple", "Compound", "Complex", "Imperative"],
    correctAnswer: 1,
    explanation: "ใช้ 'so' (FANBOYS) เชื่อม เป็น Compound Sentence"
  },
  {
    id: 2,
    type: 'choice',
    question: "Identify the purpose: **'Watch out!'**",
    options: ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
    correctAnswer: 2,
    explanation: "แสดงอารมณ์ตกใจเตือนภัย (Exclamatory) หรืออาจมองเป็น Imperative ที่ใส่อารมณ์ แต่ Exclamatory ตรงที่สุดเพราะมี !"
  },
  {
    id: 3,
    type: 'fill-blank',
    question: "A ______ (Simple/Compound) sentence has one independent clause.",
    correctAnswer: "simple",
    explanation: "Simple Sentence มีใจความเดียว"
  },
  {
    id: 4,
    type: 'reorder',
    question: "Create a Complex sentence:",
    options: ["ate", "because", "he", "hungry", "was", "he"],
    correctAnswer: ["he", "ate", "because", "he", "was", "hungry"],
    explanation: "เชื่อมด้วย because"
  },
  {
    id: 5,
    type: 'true-false',
    question: "**'Does she know?'** is a Declarative sentence.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False: เป็น Interrogative (คำถาม)"
  },
  {
    id: 6,
    type: 'choice',
    question: "Which consists of 2 Independent Clauses?",
    options: ["Simple", "Compound", "Complex", "Fragment"],
    correctAnswer: 1,
    explanation: "Compound Sentence = Independent + FANBOYS + Independent"
  },
  {
    id: 7,
    type: 'reorder',
    question: "Make an Imperative sentence:",
    options: ["your", "room", "clean", "now"],
    correctAnswer: ["clean", "your", "room", "now"],
    explanation: "ขึ้นต้นด้วยกริยา (Clean)"
  },
  {
    id: 8,
    type: 'choice',
    question: "**'What a nice car!'** starts with 'What' but it is not a question because...",
    options: ["It has no verb", "It ends with !", "It is too short", "It is declarative"],
    correctAnswer: 1,
    explanation: "มันลงท้ายด้วย ! จึงเป็น Exclamatory (ประโยคอุทาน)"
  }
];