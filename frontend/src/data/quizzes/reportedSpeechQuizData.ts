import { QuizQuestion } from '../../types';

export const reportedSpeechQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Direct: 'Where do you live?' -> Indirect: He asked me where I ______.",
    options: ["live", "lived", "living", "lives"],
    correctAnswer: 1,
    explanation: "เปลี่ยน Present Simple (live) เป็น Past Simple (lived)"
  },
  {
    id: 2,
    type: 'choice',
    question: "Direct: 'Are you hungry?' -> Indirect: He asked ______ I was hungry.",
    options: ["that", "if", "what", "did"],
    correctAnswer: 1,
    explanation: "Yes/No Question เชื่อมด้วย if หรือ whether"
  },
  {
    id: 3,
    type: 'reorder',
    question: "Arrange the Indirect Speech:",
    options: ["said", "she", "tired", "was", "that", "she"],
    correctAnswer: ["she", "said", "that", "she", "was", "tired"],
    explanation: "S + said that + S + V2"
  },
  {
    id: 4,
    type: 'fill-blank',
    question: "Direct: 'I can swim.' -> Indirect: She said she ______ (can/could) swim.",
    correctAnswer: "could",
    explanation: "Can เปลี่ยนเป็น Could"
  },
  {
    id: 5,
    type: 'choice',
    question: "Choose the correct indirect sentence for: 'Don't talk.'",
    options: [
      "He said not to talk.",
      "He told me not to talk.",
      "He said don't talk.",
      "He asked not talk."
    ],
    correctAnswer: 1,
    explanation: "ประโยคห้าม (Don't...) เปลี่ยนเป็น not to + V1"
  }
];