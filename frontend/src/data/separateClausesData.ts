// frontend/src/data/separateClausesData.ts
import { QuizQuestion } from '../types';

export interface ClausesTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateClausesData: ClausesTopic[] = [
  {
    id: 'independent-clause',
    name: 'Independent Clause (อนุประโยคอิสระ)',
    description: 'ประโยคที่มีใจความสมบูรณ์ในตัวเอง',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Which one is an **Independent Clause**?",
        options: ["Because I was tired", "I went to bed", "When he arrived", "If it rains"],
        correctAnswer: 1,
        explanation: "'I went to bed' มีประธาน+กริยา และใจความสมบูรณ์ (Stand alone ได้)"
      },
      {
        id: 2,
        type: 'choice',
        question: "Identify the Independent Clause: **'Since she was late, she took a taxi.'**",
        options: ["Since she was late", "She took a taxi", "Late", "Took a taxi"],
        correctAnswer: 1,
        explanation: "'She took a taxi' เป็นประโยคหลักที่อยู่ได้ด้วยตัวเอง"
      },
      {
        id: 3,
        type: 'true-false',
        question: "**'The dog barked.'** is an Independent Clause.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True: เป็นประโยคสมบูรณ์ (Simple Sentence)"
      },
      {
        id: 4,
        type: 'reorder',
        question: "Arrange into an Independent Clause:",
        options: ["sun", "the", "shines", "brightly"],
        correctAnswer: ["the", "sun", "shines", "brightly"],
        explanation: "S + V + Adv"
      },
      {
        id: 5,
        type: 'fill-blank',
        question: "An independent clause expresses a complete ______.",
        correctAnswer: "thought",
        explanation: "Independent clause ต้องมี Complete thought (ใจความสมบูรณ์)"
      }
    ]
  },
  {
    id: 'dependent-clause',
    name: 'Dependent Clause (อนุประโยคไม่อิสระ)',
    description: 'Noun Clause, Adjective Clause, Adverb Clause',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Identify the **Noun Clause**: **'I know what you did.'**",
        options: ["I know", "what you did", "you did", "I know what"],
        correctAnswer: 1,
        explanation: "'what you did' ทำหน้าที่เป็นกรรมของกริยา know"
      },
      {
        id: 2,
        type: 'choice',
        question: "Identify the **Adjective Clause**: **'The girl who is singing is my sister.'**",
        options: ["The girl", "is my sister", "who is singing", "is singing"],
        correctAnswer: 2,
        explanation: "'who is singing' ขยายคำนาม The girl"
      },
      {
        id: 3,
        type: 'choice',
        question: "Identify the **Adverb Clause**: **'We left because it was boring.'**",
        options: ["We left", "because it was boring", "it was boring", "was boring"],
        correctAnswer: 1,
        explanation: "ขยายการกระทำ left (บอกเหตุผล)"
      },
      {
        id: 4,
        type: 'reorder',
        question: "Create a sentence with a Dependent Clause:",
        options: ["if", "rains", "it", "stay", "I", "will"],
        correctAnswer: ["if", "it", "rains", "I", "will", "stay"],
        explanation: "'If it rains' คือ Adverb Clause (Condition)"
      },
      {
        id: 5,
        type: 'true-false',
        question: "**'When the sun sets'** is a complete sentence.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False: เป็น Dependent Clause (ขาดใจความหลัก)"
      }
    ]
  }
];