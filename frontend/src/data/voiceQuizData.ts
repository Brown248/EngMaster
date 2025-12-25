import { QuizQuestion } from '../types';

export const voiceQuizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'choice',
    question: "Change into Passive Voice: **'He opens the door.'**",
    options: [
      "The door is opened by him.",
      "The door was opened by him.",
      "The door has been opened by him.",
      "The door opens by him."
    ],
    correctAnswer: 0,
    explanation: "ประโยคต้นฉบับเป็น Present Simple (S + V1). โครงสร้าง Passive คือ 'is/am/are + V3' ดังนั้น 'is opened' จึงถูกต้อง"
  },
  {
    id: 2,
    type: 'choice',
    question: "Change into Passive Voice: **'They are building a new house.'**",
    options: [
      "A new house is built by them.",
      "A new house was being built by them.",
      "A new house is being built by them.",
      "A new house has been built by them."
    ],
    correctAnswer: 2,
    explanation: "Present Continuous (is/am/are + V-ing) เมื่อเป็น Passive ต้องมี 'being' คั่นกลาง -> 'is being built'."
  },
  {
    id: 3,
    type: 'choice',
    question: "Change into Passive Voice: **'Someone stole my bag yesterday.'**",
    options: [
      "My bag is stolen yesterday.",
      "My bag was stolen yesterday.",
      "My bag had been stolen yesterday.",
      "My bag has stolen yesterday."
    ],
    correctAnswer: 1,
    explanation: "Past Simple (V2) เมื่อเป็น Passive จะใช้ 'was/were + V3'. ประธาน (My bag) เป็นเอกพจน์ จึงใช้ 'was stolen'."
  },
  {
    id: 4,
    type: 'choice',
    question: "Which sentence is in **Passive Voice**?",
    options: [
      "The chef cooked a delicious meal.",
      "A delicious meal was cooked by the chef.",
      "The chef is cooking right now.",
      "The chef has cooked for years."
    ],
    correctAnswer: 1,
    explanation: "ข้อ 2 มีโครงสร้าง 'was cooked' (Be + V3) และประธาน (meal) เป็นผู้ถูกกระทำ"
  },
  {
    id: 5,
    type: 'choice',
    question: "Change into Active Voice: **'The letter was written by Sarah.'**",
    options: [
      "Sarah writes the letter.",
      "Sarah wrote the letter.",
      "Sarah is writing the letter.",
      "Sarah has written the letter."
    ],
    correctAnswer: 1,
    explanation: "'was written' คือ Past Simple Passive. เมื่อกลับเป็น Active ต้องใช้ V2 (Past Simple) คือ 'wrote'."
  },
  {
    id: 6,
    type: 'choice',
    question: "Change into Passive Voice: **'We have finished the work.'**",
    options: [
      "The work was finished.",
      "The work is finished.",
      "The work has been finished.",
      "The work had been finished."
    ],
    correctAnswer: 2,
    explanation: "Present Perfect (has/have + V3) เมื่อเป็น Passive ต้องเติม 'been' -> 'has been finished'."
  },
  {
    id: 7,
    type: 'choice',
    question: "Complete the sentence: **'This song ______ by a famous singer in 1990.'**",
    options: [
      "sing",
      "was sung",
      "is sung",
      "has sung"
    ],
    correctAnswer: 1,
    explanation: "เหตุการณ์ในอดีต (in 1990) และเพลงถูกร้อง (Passive) จึงใช้ Past Simple Passive -> 'was sung' (V3 ของ sing คือ sung)."
  },
  {
    id: 8,
    type: 'choice',
    question: "Change into Passive Voice: **'You must follow the rules.'**",
    options: [
      "The rules must followed.",
      "The rules must be followed.",
      "The rules must been followed.",
      "The rules are followed."
    ],
    correctAnswer: 1,
    explanation: "Modal Verb (must, can, should) เมื่อเป็น Passive จะตามด้วย 'be + V3' -> 'must be followed'."
  },
  {
    id: 9,
    type: 'choice',
    question: "Change into Passive Voice: **'Did he write this book?'**",
    options: [
      "Was this book written by him?",
      "Is this book written by him?",
      "Did this book written by him?",
      "Has this book been written by him?"
    ],
    correctAnswer: 0,
    explanation: "ประโยคคำถาม Past Simple (Did...) เมื่อเป็น Passive ให้ใช้ 'Was/Were' นำหน้า -> 'Was this book written...?'"
  },
  {
    id: 10,
    type: 'choice',
    question: "Why do we usually use Passive Voice?",
    options: [
      "To make the sentence longer.",
      "To emphasize the object or action, not the doer.",
      "To confuse the reader.",
      "Because Active Voice is incorrect."
    ],
    correctAnswer: 1,
    explanation: "เราใช้ Passive Voice เมื่อต้องการเน้นสิ่งที่ถูกกระทำ (Object) หรือการกระทำนั้นๆ มากกว่าตัวผู้กระทำ (Doer) หรือเมื่อไม่รู้ว่าใครทำ"
  }
];