// frontend/src/data/mixedTensesQuizData.ts
import { QuizQuestion } from '../types';

export const mixedTensesQuizData: QuizQuestion[] = [
  // --- PART 1: Multiple Choice (10 ข้อ) ---
  {
    id: 1,
    type: 'choice',
    question: "She ______ to the gym every morning.",
    options: ["go", "goes", "is going", "went"],
    correctAnswer: 1, // Index of "goes"
    explanation: "Routine (กิจวัตร) ใช้ Present Simple ประธานเอกพจน์ กริยาเติม s",
    tenseTopic: "Present Simple"
  },
  {
    id: 2,
    type: 'choice',
    question: "They ______ dinner when the phone rang.",
    options: ["ate", "were eating", "have eaten", "eat"],
    correctAnswer: 1,
    explanation: "เหตุการณ์กำลังเกิดในอดีต (Past Continuous) แล้วมีอีกเหตุการณ์แทรก",
    tenseTopic: "Past Continuous"
  },
  {
    id: 3,
    type: 'choice',
    question: "By next year, I ______ from university.",
    options: ["will graduate", "will be graduating", "will have graduated", "graduate"],
    correctAnswer: 2,
    explanation: "มีคำว่า 'By...' ในอนาคต เน้นว่าเหตุการณ์จะจบสมบูรณ์ ใช้ Future Perfect",
    tenseTopic: "Future Perfect"
  },
  {
    id: 4,
    type: 'choice',
    question: "I ______ him since we were in high school.",
    options: ["know", "knew", "have known", "had known"],
    correctAnswer: 2,
    explanation: "Since + จุดเวลาในอดีต ถึงปัจจุบัน ใช้ Present Perfect",
    tenseTopic: "Present Perfect"
  },
  {
    id: 5,
    type: 'choice',
    question: "Look at those clouds! It ______ rain.",
    options: ["will", "is going to", "should", "might"],
    correctAnswer: 1,
    explanation: "มีหลักฐานปรากฏชัดเจน (clouds) ใช้ be going to คาดการณ์",
    tenseTopic: "Future Simple"
  },
  {
    id: 6,
    type: 'choice',
    question: "Before she went to sleep, she ______ her homework.",
    options: ["finished", "has finished", "had finished", "finishes"],
    correctAnswer: 2,
    explanation: "เกิดก่อนอีกเหตุการณ์ในอดีต (Past Perfect เกิดก่อน Past Simple)",
    tenseTopic: "Past Perfect"
  },
  {
    id: 7,
    type: 'choice',
    question: "At this time tomorrow, we ______ to Japan.",
    options: ["fly", "will fly", "will be flying", "have flown"],
    correctAnswer: 2,
    explanation: "ระบุเวลาเจาะจงในอนาคต (At this time tomorrow) ใช้ Future Continuous",
    tenseTopic: "Future Continuous"
  },
  {
    id: 8,
    type: 'choice',
    question: "The train ______ at 9:00 PM tonight.",
    options: ["leave", "leaves", "will leave", "is leaving"],
    correctAnswer: 1,
    explanation: "ตารางเวลา (Timetable) ใช้ Present Simple เสมอ แม้เป็นอนาคต",
    tenseTopic: "Present Simple"
  },
  {
    id: 9,
    type: 'choice',
    question: "He ______ very hard recently.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2,
    explanation: "Recently (ช่วงนี้) เน้นความต่อเนื่องของการกระทำ ใช้ Present Perfect Continuous",
    tenseTopic: "Present Perfect Continuous"
  },
  {
    id: 10,
    type: 'choice',
    question: "If I were you, I ______ that car.",
    options: ["won't buy", "wouldn't buy", "didn't buy", "haven't bought"],
    correctAnswer: 1,
    explanation: "Subjunctive Mood (สมมติเรื่องไม่จริง) ใช้ would + V1",
    tenseTopic: "Conditional"
  },

  // --- PART 2: True / False (5 ข้อ) ---
  {
    id: 11,
    type: 'true-false',
    question: "Correct or Incorrect: 'I am understanding what you mean.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "'Understand' เป็น Stative Verb ห้ามใช้ในรูป Continuous (ing)",
    tenseTopic: "Present Continuous"
  },
  {
    id: 12,
    type: 'true-false',
    question: "Correct or Incorrect: 'She has went to the market.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "Present Perfect ต้องใช้ Has/Have + V3 (Gone) ไม่ใช่ V2 (Went)",
    tenseTopic: "Present Perfect"
  },
  {
    id: 13,
    type: 'true-false',
    question: "Correct or Incorrect: 'I will call you when I arrive.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0, // Correct
    explanation: "ถูกต้อง หลัง Time word (when) ใช้ Present Simple แทน Future",
    tenseTopic: "Future Simple"
  },
  {
    id: 14,
    type: 'true-false',
    question: "Correct or Incorrect: 'Did you saw him yesterday?'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "หลัง Did กริยาต้องเป็น Infinitive (See) ห้ามผันเป็น Saw",
    tenseTopic: "Past Simple"
  },
  {
    id: 15,
    type: 'true-false',
    question: "Correct or Incorrect: 'He had been waiting for 2 hours before she came.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0, // Correct
    explanation: "ถูกต้องตามโครงสร้าง Past Perfect Continuous",
    tenseTopic: "Past Perfect Continuous"
  },

  // --- PART 3: Matching / Identify Tense (5 ข้อ) ---
  {
    id: 16,
    type: 'matching',
    question: "Identify the Tense: 'I have been living here for 10 years.'",
    options: ["Present Perfect", "Present Perfect Continuous", "Past Perfect Continuous", "Present Continuous"],
    correctAnswer: 1,
    explanation: "Have been + V-ing คือ Present Perfect Continuous",
    tenseTopic: "Tense ID"
  },
  {
    id: 17,
    type: 'matching',
    question: "Identify the Tense: 'The sun rises in the east.'",
    options: ["Present Continuous", "Past Simple", "Present Simple", "Future Simple"],
    correctAnswer: 2,
    explanation: "S + V1(s/es) คือ Present Simple",
    tenseTopic: "Tense ID"
  },
  {
    id: 18,
    type: 'matching',
    question: "Identify the Tense: 'She will have finished by Friday.'",
    options: ["Future Simple", "Future Continuous", "Future Perfect", "Present Perfect"],
    correctAnswer: 2,
    explanation: "Will have + V3 คือ Future Perfect",
    tenseTopic: "Tense ID"
  },
  {
    id: 19,
    type: 'matching',
    question: "Identify the Tense: 'While I was sleeping, mom came home.'",
    options: ["Past Simple", "Past Continuous", "Past Perfect", "Present Continuous"],
    correctAnswer: 1,
    explanation: "Was/Were + V-ing ในอดีต คือ Past Continuous",
    tenseTopic: "Tense ID"
  },
  {
    id: 20,
    type: 'matching',
    question: "Identify the Tense: 'He had left before I arrived.'",
    options: ["Past Simple", "Present Perfect", "Past Perfect", "Future Perfect"],
    correctAnswer: 2,
    explanation: "Had + V3 คือ Past Perfect",
    tenseTopic: "Tense ID"
  },

  // --- PART 4: Sentence Reordering (5 ข้อ) ---
  {
    id: 21,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["homework", "done", "have", "my", "I", "already"],
    correctAnswer: ["I", "have", "already", "done", "my", "homework"],
    explanation: "Position of 'already': Subject + have + already + V3 + Object",
    tenseTopic: "Present Perfect"
  },
  {
    id: 22,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["tomorrow", "raining", "be", "it", "will", "at 9 AM"],
    correctAnswer: ["it", "will", "be", "raining", "at 9 AM", "tomorrow"], 
    explanation: "Future Continuous: S + will be + V-ing",
    tenseTopic: "Future Continuous"
  },
  {
    id: 23,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["you", "where", "go", "did", "yesterday", "?"],
    correctAnswer: ["where", "did", "you", "go", "yesterday", "?"],
    explanation: "Wh-Question Past Simple: Wh + did + S + V1",
    tenseTopic: "Past Simple"
  },
  {
    id: 24,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["working", "been", "she", "has", "morning", "since"],
    correctAnswer: ["she", "has", "been", "working", "since", "morning"],
    explanation: "Present Perfect Continuous: S + has been + V-ing + since...",
    tenseTopic: "Present Perfect Continuous"
  },
  {
    id: 25,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["never", "I", "Japanese", "food", "eaten", "have"],
    correctAnswer: ["I", "have", "never", "eaten", "Japanese", "food"],
    explanation: "Experience: S + have + never + V3",
    tenseTopic: "Present Perfect"
  },

  // --- PART 5: Fill in the blank (5 ข้อ) ---
  {
    id: 26,
    type: 'fill-blank',
    question: "She usually ______ (drink) coffee in the morning.",
    correctAnswer: "drinks",
    explanation: "Present Simple ประธาน She กริยาเติม s",
    tenseTopic: "Present Simple"
  },
  {
    id: 27,
    type: 'fill-blank',
    question: "Last night, I ______ (watch) a horror movie.",
    correctAnswer: "watched",
    explanation: "Past Simple กริยาช่อง 2 เติม ed",
    tenseTopic: "Past Simple"
  },
  {
    id: 28,
    type: 'fill-blank',
    question: "They ______ (play) football right now.",
    correctAnswer: "are playing",
    explanation: "Right now = Present Continuous (are + v-ing)",
    tenseTopic: "Present Continuous"
  },
  {
    id: 29,
    type: 'fill-blank',
    question: "We ______ (live) in Bangkok for 5 years.",
    correctAnswer: "have lived",
    explanation: "For 5 years = Present Perfect (have + V3)",
    tenseTopic: "Present Perfect"
  },
  {
    id: 30,
    type: 'fill-blank',
    question: "The train ______ (leave) before we arrived.",
    correctAnswer: "had left",
    explanation: "เกิดก่อนอดีต = Past Perfect (had + V3)",
    tenseTopic: "Past Perfect"
  }
];