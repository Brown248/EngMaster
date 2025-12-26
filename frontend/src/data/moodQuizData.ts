// frontend/src/data/moodQuizData.ts
import { QuizQuestion } from '../types';

export const moodQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Which mood expresses a **fact**?",
    options: ["Imperative", "Subjunctive", "Indicative", "Conditional"],
    correctAnswer: 2,
    explanation: "Indicative Mood ใช้บอกเล่าความจริง"
  },
  {
    id: 2,
    type: 'choice',
    question: "Identify the mood: **'Be quiet!'**",
    options: ["Indicative", "Imperative", "Subjunctive", "Passive"],
    correctAnswer: 1,
    explanation: "เป็นประโยคคำสั่ง (Imperative)"
  },
  {
    id: 3,
    type: 'choice',
    question: "Complete: **'I suggest that Tom ______ to the doctor.'**",
    options: ["goes", "go", "going", "went"],
    correctAnswer: 1,
    explanation: "Subjunctive: suggest that + S + V.infinitive (go)"
  },
  {
    id: 4,
    type: 'fill-blank',
    question: "I wish I ______ (were/was) a bird.",
    correctAnswer: "were",
    explanation: "Subjunctive (สมมติสิ่งที่เป็นไปไม่ได้) ใช้ were"
  },
  {
    id: 5,
    type: 'choice',
    question: "Which sentence is **Indicative**?",
    options: ["God save the Queen!", "Open the door.", "The sky is blue.", "If I were you..."],
    correctAnswer: 2,
    explanation: "บอกความจริงทางธรรมชาติ"
  },
  {
    id: 6,
    type: 'reorder',
    question: "Make an imperative sentence:",
    options: ["grass", "the", "off", "keep"],
    correctAnswer: ["keep", "off", "the", "grass"],
    explanation: "คำสั่งห้ามเดินลัดสนามหญ้า"
  },
  {
    id: 7,
    type: 'choice',
    question: "Identify the mood: **'I demand that he apologize.'**",
    options: ["Indicative", "Imperative", "Subjunctive", "Continuous"],
    correctAnswer: 2,
    explanation: "Demand that + S + V.infinitive เป็นรูป Subjunctive"
  },
  {
    id: 8,
    type: 'true-false',
    question: "Imperative sentences always need a subject.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False: Imperative มักละประธาน (You) ไว้ เช่น 'Sit down.'"
  },
  {
    id: 9,
    type: 'fill-blank',
    question: "Imperative: ______ (Do/Don't) smoke here.",
    correctAnswer: "don't",
    explanation: "คำสั่งห้าม"
  },
  {
    id: 10,
    type: 'choice',
    question: "Which sentence shows a **wish**?",
    options: ["I am eating.", "Eat your food.", "I wish it were sunny.", "It is sunny."],
    correctAnswer: 2,
    explanation: "I wish... เป็นรูปแบบของ Subjunctive Mood"
  }
];