import { QuizQuestion } from '../types';

export const adjectiveQuizData: QuizQuestion[] = [
  // --- Part 1: Multiple Choice (5 ข้อ) ---
  {
    id: 1,
    type: 'choice',
    question: "This car is ______ than that one.",
    options: ["fast", "faster", "fastest", "more fast"],
    correctAnswer: 1,
    explanation: "Comparative: มีคำว่า 'than' แสดงว่าเป็นขั้นกว่า คำว่า fast พยางค์เดียวเติม -er ได้เลย"
  },
  {
    id: 2,
    type: 'choice',
    question: "She is the ______ student in the class.",
    options: ["smart", "smarter", "smartest", "most smart"],
    correctAnswer: 2,
    explanation: "Superlative: มีคำว่า 'the' และบริบท 'in the class' แสดงว่าเป็นขั้นสุด smart เติม -est"
  },
  {
    id: 3,
    type: 'choice',
    question: "This puzzle is ______ than the last one.",
    options: ["difficult", "difficulter", "more difficult", "most difficult"],
    correctAnswer: 2,
    explanation: "Difficult มี 3 พยางค์ ขั้นกว่าต้องใช้ 'more' นำหน้า"
  },
  {
    id: 4,
    type: 'choice',
    question: "Who is the ______ football player in the world?",
    options: ["good", "better", "best", "goodest"],
    correctAnswer: 2,
    explanation: "Irregular: Good เป็นคำยกเว้น ขั้นสุดคือ 'best'"
  },
  {
    id: 5,
    type: 'choice',
    question: "My house is ______ than yours.",
    options: ["big", "biger", "bigger", "more big"],
    correctAnswer: 2,
    explanation: "Big เป็นสระเสียงสั้นตัวเดียว (Short Vowel) ต้องเบิ้ลตัวสะกด (g) ก่อนเติม er เป็น bigger"
  },

  // --- Part 2: True / False (5 ข้อ) ---
  {
    id: 6,
    type: 'true-false',
    question: "Correct or Incorrect: 'He is more tall than me.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: Tall เป็นคำพยางค์เดียว ต้องใช้ taller ไม่ใช่ more tall"
  },
  {
    id: 7,
    type: 'true-false',
    question: "Correct or Incorrect: 'This is the most expensive bag.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0, // Correct
    explanation: "ถูก: Expensive มี 3 พยางค์ ใช้ the most ถูกต้องแล้ว"
  },
  {
    id: 8,
    type: 'true-false',
    question: "Correct or Incorrect: 'Today is badder than yesterday.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: Bad เป็นคำยกเว้น (Irregular) ขั้นกว่าคือ 'worse' ไม่ใช่ badder"
  },
  {
    id: 9,
    type: 'true-false',
    question: "Correct or Incorrect: 'She is the happiest girl.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 0, // Correct
    explanation: "ถูก: Happy ลงท้าย y เปลี่ยนเป็น i แล้วเติม est"
  },
  {
    id: 10,
    type: 'true-false',
    question: "Correct or Incorrect: 'Jupiter is the bigest planet.'",
    options: ["Correct", "Incorrect"],
    correctAnswer: 1, // Incorrect
    explanation: "ผิด: Bigest สะกดผิด ต้องเบิ้ล g เป็น 'biggest'"
  },

  // --- Part 3: Reordering (5 ข้อ) ---
  {
    id: 11,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["is", "cheetah", "faster", "a", "turtle", "than", "a"],
    correctAnswer: ["a", "cheetah", "is", "faster", "than", "a", "turtle"],
    explanation: "Structure: Noun 1 + is + adj-er + than + Noun 2"
  },
  {
    id: 12,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["beautiful", "most", "she", "the", "is", "girl"],
    correctAnswer: ["she", "is", "the", "most", "beautiful", "girl"],
    explanation: "Structure: Subject + is + the most + adj + Noun"
  },
  {
    id: 13,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["weather", "today", "worse", "yesterday", "is", "than"],
    correctAnswer: ["today", "weather", "is", "worse", "than", "yesterday"],
    explanation: "Comparison: worse than (แย่กว่า)"
  },
  {
    id: 14,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["English", "math", "is", "easier", "than"],
    correctAnswer: ["English", "is", "easier", "than", "math"],
    explanation: "Comparison: easier than (ง่ายกว่า)"
  },
  {
    id: 15,
    type: 'reorder',
    question: "Rearrange the sentence:",
    options: ["building", "tallest", "this", "the", "is", "city", "in", "the"],
    correctAnswer: ["this", "is", "the", "tallest", "building", "in", "the", "city"],
    explanation: "Superlative: The tallest building"
  },

  // --- Part 4: Fill in the blank (5 ข้อ) ---
  {
    id: 16,
    type: 'fill-blank',
    question: "Elephants are ______ (heavy) than lions.",
    correctAnswer: "heavier",
    explanation: "Heavy ลงท้าย y เปลี่ยนเป็น i แล้วเติม er"
  },
  {
    id: 17,
    type: 'fill-blank',
    question: "This is the ______ (bad) movie I have ever seen.",
    correctAnswer: "worst",
    explanation: "ขั้นสุดของ bad คือ worst"
  },
  {
    id: 18,
    type: 'fill-blank',
    question: "My brother is ______ (old) than me.",
    correctAnswer: "older",
    explanation: "ขั้นกว่าของ old คือ older"
  },
  {
    id: 19,
    type: 'fill-blank',
    question: "Summer is the ______ (hot) season.",
    correctAnswer: "hottest",
    explanation: "Hot สระเสียงสั้น ต้องเบิ้ล t เป็น hottest"
  },
  {
    id: 20,
    type: 'fill-blank',
    question: "This phone is ______ (expensive) than that one.",
    correctAnswer: "more expensive",
    explanation: "Expensive มีหลายพยางค์ ใช้ more นำหน้า"
  }
];