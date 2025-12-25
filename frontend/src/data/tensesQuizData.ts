// frontend/src/data/tensesQuizData.ts
import { QuizQuestion } from '../types';

export const tensesQuizData: QuizQuestion[] = [
  // --- Part 1: Multiple Choice (5) ---
  {
    id: 1,
    type: 'choice',
    question: "Water ______ at 100 degrees Celsius.",
    options: ["boil", "boils", "is boiling", "boiled"],
    correctAnswer: 1,
    explanation: "Scientific Fact (ความจริงทางวิทยาศาสตร์) ใช้ Present Simple"
  },
  {
    id: 2,
    type: 'choice',
    question: "She ______ coffee every morning.",
    options: ["don't drink", "doesn't drink", "isn't drinking", "not drink"],
    correctAnswer: 1,
    explanation: "ปฏิเสธของ Present Simple ประธานเอกพจน์ใช้ doesn't + V1"
  },
  {
    id: 3,
    type: 'choice',
    question: "______ you play football?",
    options: ["Do", "Does", "Are", "Have"],
    correctAnswer: 0,
    explanation: "ประโยคคำถาม Present Simple ประธาน You ใช้ Do"
  },
  {
    id: 4,
    type: 'choice',
    question: "The sun ______ in the east.",
    options: ["rise", "rises", "is rising", "rose"],
    correctAnswer: 1,
    explanation: "Universal Truth (ความจริงตามธรรมชาติ)"
  },
  {
    id: 5,
    type: 'choice',
    question: "He usually ______ to work by bus.",
    options: ["go", "goes", "going", "went"],
    correctAnswer: 1,
    explanation: "Adverb of frequency 'usually' บ่งบอกถึงกิจวัตร"
  },

  // --- Part 2: True / False (5) ---
  {
    id: 6,
    type: 'true-false',
    question: "Correct or Incorrect: 'She live in London.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: She เป็นเอกพจน์ กริยาต้องเติม s -> lives"
  },
  {
    id: 7,
    type: 'true-false',
    question: "Correct or Incorrect: 'Does he likes pizza?'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: หลัง Do/Does กริยาต้องไม่ผัน (ตัด s ออก) -> like"
  },
  {
    id: 8,
    type: 'true-false',
    question: "Correct or Incorrect: 'I am agree with you.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: Agree เป็น Verb แท้ ไม่ใช้ verb to be นำหน้าใน Present Simple -> I agree"
  },
  {
    id: 9,
    type: 'true-false',
    question: "Correct or Incorrect: 'The train leaves at 8 PM.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0, // Correct
    explanation: "ถูก: ตารางเวลา (Schedule) ใช้ Present Simple ได้"
  },
  {
    id: 10,
    type: 'true-false',
    question: "Correct or Incorrect: 'They do not happy.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: Happy เป็น Adjective ต้องใช้ Verb to be -> They are not happy"
  },

  // --- Part 3: Reordering (5) ---
  {
    id: 11,
    type: 'reorder',
    question: "Rearrange:",
    options: ["always", "early", "up", "I", "get"],
    correctAnswer: ["I", "always", "get", "up", "early"],
    explanation: "Subject + Adverb of Freq + Verb"
  },
  {
    id: 12,
    type: 'reorder',
    question: "Rearrange:",
    options: ["English", "speak", "they", "do", "?"],
    correctAnswer: ["do", "they", "speak", "English", "?"],
    explanation: "Do + Subject + V1...?"
  },
  {
    id: 13,
    type: 'reorder',
    question: "Rearrange:",
    options: ["not", "does", "she", "work", "here"],
    correctAnswer: ["she", "does", "not", "work", "here"],
    explanation: "Negative: S + does not + V1"
  },
  {
    id: 14,
    type: 'reorder',
    question: "Rearrange:",
    options: ["earth", "sun", "goes", "around", "the", "the"],
    correctAnswer: ["the", "earth", "goes", "around", "the", "sun"],
    explanation: "Fact structure"
  },
  {
    id: 15,
    type: 'reorder',
    question: "Rearrange:",
    options: ["often", "how", "you", "travel", "do", "?"],
    correctAnswer: ["how", "often", "do", "you", "travel", "?"],
    explanation: "Wh-question with How often"
  },

  // --- Part 4: Fill in the blank (5) ---
  {
    id: 16,
    type: 'fill-blank',
    question: "My father ______ (teach) math.",
    correctAnswer: "teaches",
    explanation: "ลงท้ายด้วย ch เติม es"
  },
  {
    id: 17,
    type: 'fill-blank',
    question: "We ______ (not / know) the answer.",
    correctAnswer: "do not know",
    explanation: "We ใช้ do not"
  },
  {
    id: 18,
    type: 'fill-blank',
    question: "______ (be) she a doctor?",
    correctAnswer: "is",
    explanation: "Verb to be กับ She คือ Is"
  },
  {
    id: 19,
    type: 'fill-blank',
    question: "Tom and Jerry ______ (fight) all the time.",
    correctAnswer: "fight",
    explanation: "ประธานพหูพจน์ กริยาไม่ต้องเติม s"
  },
  {
    id: 20,
    type: 'fill-blank',
    question: "It ______ (rain) a lot in June.",
    correctAnswer: "rains",
    explanation: "It เป็นเอกพจน์ กริยาเติม s"
  }
];