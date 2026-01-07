import { QuizQuestion } from '../../types';

export const reportedSpeechQuizData: QuizQuestion[] = [
  // --- Part 1: Multiple Choice (5) ---
  {
    id: 1,
    type: 'choice',
    question: "Direct: 'I am hungry.' → Indirect: He said that he ______ hungry.",
    options: ["is", "was", "were", "been"],
    correctAnswer: 1,
    explanation: "Present Simple (am) เปลี่ยนเป็น Past Simple (was) ใน Indirect Speech"
  },
  {
    id: 2,
    type: 'choice',
    question: "Direct: 'I will buy a car.' → Indirect: She said she ______ buy a car.",
    options: ["will", "would", "can", "could"],
    correctAnswer: 1,
    explanation: "Will เปลี่ยนเป็น Would ใน Indirect Speech"
  },
  {
    id: 3,
    type: 'choice',
    question: "Direct: 'Do you like pizza?' → Indirect: He asked if I ______ pizza.",
    options: ["like", "liked", "likes", "had liked"],
    correctAnswer: 1,
    explanation: "Present Simple (like) เปลี่ยนเป็น Past Simple (liked)"
  },
  {
    id: 4,
    type: 'choice',
    question: "Direct: 'Stay here.' → Indirect: He told me ______ there.",
    options: ["to stay", "stayed", "staying", "stays"],
    correctAnswer: 0,
    explanation: "ประโยคคำสั่ง (Imperative) ใช้ to + infinitive และเปลี่ยน here เป็น there"
  },
  {
    id: 5,
    type: 'choice',
    question: "She told me ______ open the window.",
    options: ["don't", "not to", "no", "not"],
    correctAnswer: 1,
    explanation: "ประโยคคำสั่งปฏิเสธ ใช้ not to + infinitive"
  },

  // --- Part 2: True / False (5) ---
  {
    id: 6,
    type: 'true-false',
    question: "Correct or Incorrect: He said me that he was tired.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1,
    explanation: "ผิด: 'Said' ไม่ตามด้วยกรรมทันที ต้องใช้ 'He told me' หรือ 'He said to me'"
  },
  {
    id: 7,
    type: 'true-false',
    question: "Correct or Incorrect: She asked where did I live.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1,
    explanation: "ผิด: ใน Indirect Question ไม่มีการสลับกริยาช่วย ต้องเรียงเป็น 'where I lived'"
  },
  {
    id: 8,
    type: 'true-false',
    question: "Correct or Incorrect: He said that he had finished the work.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0,
    explanation: "ถูก: Past Simple/Present Perfect เปลี่ยนเป็น Past Perfect (had finished)"
  },
  {
    id: 9,
    type: 'true-false',
    question: "Correct or Incorrect: Mom told to me to clean the room.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1,
    explanation: "ผิด: 'Told' ตามด้วยกรรมเลย ไม่ต้องมี 'to' -> Mom told me..."
  },
  {
    id: 10,
    type: 'true-false',
    question: "Correct or Incorrect: He asked if I was ready.",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0,
    explanation: "ถูก: Yes/No question ใช้ if เชื่อมประโยค"
  },

  // --- Part 3: Reordering (5) ---
  {
    id: 11,
    type: 'reorder',
    question: "Rearrange into Indirect Speech:",
    options: ["said", "he", "tired", "was", "he", "that"],
    correctAnswer: ["he", "said", "that", "he", "was", "tired"],
    explanation: "He said that he was tired."
  },
  {
    id: 12,
    type: 'reorder',
    question: "Rearrange:",
    options: ["asked", "where", "I", "me", "she", "was"],
    correctAnswer: ["she", "asked", "me", "where", "I", "was"],
    explanation: "She asked me where I was."
  },
  {
    id: 13,
    type: 'reorder',
    question: "Rearrange:",
    options: ["told", "doctor", "the", "him", "stop", "to"],
    correctAnswer: ["the", "doctor", "told", "him", "to", "stop"],
    explanation: "The doctor told him to stop."
  },
  {
    id: 14,
    type: 'reorder',
    question: "Rearrange:",
    options: ["they", "play", "said", "would", "they", "football"],
    correctAnswer: ["they", "said", "they", "would", "play", "football"],
    explanation: "They said they would play football."
  },
  {
    id: 15,
    type: 'reorder',
    question: "Rearrange:",
    options: ["if", "asked", "I", "he", "coffee", "liked"],
    correctAnswer: ["he", "asked", "if", "I", "liked", "coffee"],
    explanation: "He asked if I liked coffee."
  },

  // --- Part 4: Fill in the blank (5) ---
  {
    id: 16,
    type: 'fill-blank',
    question: "He said, 'I can swim.' → He said that he ______ (can->past) swim.",
    correctAnswer: "could",
    explanation: "Can เปลี่ยนเป็น Could"
  },
  {
    id: 17,
    type: 'fill-blank',
    question: "She said to me → She ______ me.",
    correctAnswer: "told",
    explanation: "Said to เปลี่ยนเป็น Told เมื่อมีผู้ฟัง"
  },
  {
    id: 18,
    type: 'fill-blank',
    question: "'Are you happy?' → He asked ______ I was happy.",
    correctAnswer: "if",
    explanation: "ใช้ if หรือ whether เชื่อมประโยคคำถาม Yes/No"
  },
  {
    id: 19,
    type: 'fill-blank',
    question: "'I saw him yesterday.' → She said she had seen him the day ______.",
    correctAnswer: "before",
    explanation: "Yesterday เปลี่ยนเป็น the day before หรือ the previous day"
  },
  {
    id: 20,
    type: 'fill-blank',
    question: "He said, 'This is my book.' → He said that ______ was his book.",
    correctAnswer: "that",
    explanation: "This เปลี่ยนเป็น That"
  }
];