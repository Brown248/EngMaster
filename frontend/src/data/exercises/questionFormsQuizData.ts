import { QuizQuestion } from '../../types';

export const questionFormsQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'reorder',
    question: "Arrange the question:",
    options: ["name", "is", "What", "your", "?"],
    correctAnswer: ["What", "is", "your", "name", "?"],
    explanation: "Wh-word + V + S"
  },
  {
    id: 2,
    type: 'choice',
    question: "They are students, ______?",
    options: ["aren't they", "are they", "don't they", "isn't they"],
    correctAnswer: 0,
    explanation: "Tag question ของ are คือ aren't"
  },
  {
    id: 3,
    type: 'fill-blank',
    question: "______ (How/Who) old are you?",
    correctAnswer: "how",
    explanation: "ถามอายุใช้ How old"
  },
  {
    id: 4,
    type: 'choice',
    question: "______ you play tennis yesterday?",
    options: ["Do", "Did", "Are", "Have"],
    correctAnswer: 1,
    explanation: "อดีต (yesterday) ใช้ Did"
  },
  {
    id: 5,
    type: 'true-false',
    question: "**'He likes coffee, doesn't he?'** is correct.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True: ประธาน He กริยาเติม s (likes) ใช้ doesn't ใน Tag"
  }
];