import { QuizQuestion } from '../../types';

export const questionFormsQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "You like coffee, ______?",
    options: ["don't you", "do you", "aren't you", "didn't you"],
    correctAnswer: 0,
    explanation: "ประโยคหน้าเป็นบอกเล่า (Present Simple) ประโยค Tag ต้องเป็นปฏิเสธ (don't you)"
  },
  {
    id: 2,
    type: 'choice',
    question: "______ usually cooks dinner in your family?",
    options: ["Who", "What", "When", "Where"],
    correctAnswer: 0,
    explanation: "ถามหาบุคคล (ผู้กระทำ) ใช้ Who"
  },
  {
    id: 3,
    type: 'reorder',
    question: "Rearrange the question:",
    options: ["live", "where", "you", "do", "?"],
    correctAnswer: ["where", "do", "you", "live", "?"],
    explanation: "Wh-word + Auxiliary Verb + Subject + Main Verb"
  },
  {
    id: 4,
    type: 'true-false',
    question: "Correct or Incorrect: She can swim, can she?",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1,
    explanation: "ผิด: ประโยคหน้าบอกเล่า (can) Tag ต้องเป็นปฏิเสธ -> can't she?"
  },
  {
    id: 5,
    type: 'fill-blank',
    question: "______ (do) he go to school yesterday?",
    correctAnswer: "Did",
    explanation: "ถามถึงอดีต (yesterday) ใช้กริยาช่วย Did"
  }
];