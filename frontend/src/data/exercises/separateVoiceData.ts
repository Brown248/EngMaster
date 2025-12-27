// frontend/src/data/separateVoiceData.ts
import { QuizQuestion } from '../../types';

export interface VoiceTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateVoiceData: VoiceTopic[] = [
  {
    id: 'active-voice',
    name: 'Active Voice (ประธานกระทำ)',
    description: 'เน้นประธานเป็นผู้กระทำ (Subject + Verb + Object)',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Which sentence is in **Active Voice**?",
        options: [
          "The book was read by mom.",
          "Mom read the book.",
          "The book is being read.",
          "The book has been read."
        ],
        correctAnswer: 1,
        explanation: "ประโยคนี้ประธาน (Mom) เป็นผู้กระทำกริยา (read) โดยตรง"
      },
      {
        id: 2,
        type: 'choice',
        question: "Change into Active Voice: **'The cake was eaten by the dog.'**",
        options: [
          "The dog eats the cake.",
          "The dog ate the cake.",
          "The dog is eating the cake.",
          "The dog has eaten the cake."
        ],
        correctAnswer: 1,
        explanation: "Was eaten เป็น Past Simple Passive ดังนั้น Active ต้องเป็น Past Simple (V2) คือ ate"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Arrange into Active Voice:",
        options: ["cat", "mouse", "the", "chased", "the"],
        correctAnswer: ["the", "cat", "chased", "the", "mouse"],
        explanation: "Subject (The cat) + Verb (chased) + Object (the mouse)"
      },
      {
        id: 4,
        type: 'fill-blank',
        question: "Active: She ______ (writes/is written) a letter every week.",
        correctAnswer: "writes",
        explanation: "Active Voice ประธานทำเองใช้ Active verb (writes)"
      },
      {
        id: 5,
        type: 'choice',
        question: "Identify the Active Voice sentence.",
        options: [
          "Mistakes were made.",
          "I made a mistake.",
          "A mistake was made by me.",
          "A mistake has been made."
        ],
        correctAnswer: 1,
        explanation: "ประธาน (I) กระทำกริยา (made) โดยตรง"
      },
      {
        id: 6,
        type: 'choice',
        question: "Change to Active: **'The song is sung by her.'**",
        options: [
          "She sang the song.",
          "She sings the song.",
          "She is singing the song.",
          "She has sung the song."
        ],
        correctAnswer: 1,
        explanation: "Is sung (Present Simple Passive) -> Sings (Present Simple Active)"
      },
      {
        id: 7,
        type: 'true-false',
        question: "Is this sentence Active Voice? **'John kicked the ball.'**",
        options: ["Yes", "No"],
        correctAnswer: 0,
        explanation: "ใช่ เพราะ John (ประธาน) เป็นผู้เตะ (กริยา)"
      },
      {
        id: 8,
        type: 'reorder',
        question: "Arrange into Active Voice:",
        options: ["will", "I", "it", "do"],
        correctAnswer: ["I", "will", "do", "it"],
        explanation: "Active Future Simple: S + will + V1"
      },
      {
        id: 9,
        type: 'choice',
        question: "Change to Active: **'The house is being built by them.'**",
        options: [
          "They build the house.",
          "They are building the house.",
          "They built the house.",
          "They have built the house."
        ],
        correctAnswer: 1,
        explanation: "Is being built (Present Cont. Passive) -> Are building (Present Cont. Active)"
      },
      {
        id: 10,
        type: 'fill-blank',
        question: "Active: He ______ (cleaned/was cleaned) his car yesterday.",
        correctAnswer: "cleaned",
        explanation: "ประธานกระทำเอง ใช้ cleaned"
      }
    ]
  },
  {
    id: 'passive-voice',
    name: 'Passive Voice (ประธานถูกกระทำ)',
    description: 'เน้นสิ่งที่ถูกกระทำ (Be + V3)',
    questions: [
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
        explanation: "Present Simple Active -> is/am/are + V3"
      },
      {
        id: 2,
        type: 'choice',
        question: "Structure of Passive Voice is:",
        options: [
          "S + V + O",
          "Verb to Be + V3",
          "Verb to Have + V3",
          "Verb to Do + V1"
        ],
        correctAnswer: 1,
        explanation: "หัวใจของ Passive Voice คือ Verb to Be + Past Participle (V3)"
      },
      {
        id: 3,
        type: 'reorder',
        question: "Arrange into Passive Voice:",
        options: ["rice", "eaten", "is", "by", "me"],
        correctAnswer: ["rice", "is", "eaten", "by", "me"],
        explanation: "Object + is + V3 + by Subject"
      },
      {
        id: 4,
        type: 'choice',
        question: "Change into Passive: **'Someone stole my bag.'**",
        options: [
          "My bag is stolen.",
          "My bag was stolen.",
          "My bag has been stolen.",
          "My bag is being stolen."
        ],
        correctAnswer: 1,
        explanation: "Stole (V2) -> Was/Were + V3 (stolen)"
      },
      {
        id: 5,
        type: 'fill-blank',
        question: "Passive: The homework ______ (must do/must be done) by tomorrow.",
        correctAnswer: "must be done",
        explanation: "Modal verb passive: Modal + be + V3"
      },
      {
        id: 6,
        type: 'true-false',
        question: "Is this sentence Passive? **'The car was washed.'**",
        options: ["Yes", "No"],
        correctAnswer: 0,
        explanation: "ใช่ มีโครงสร้าง Be (was) + V3 (washed)"
      },
      {
        id: 7,
        type: 'choice',
        question: "Change into Passive: **'They represent the company.'**",
        options: [
          "The company represented by them.",
          "The company is represented by them.",
          "The company represents them.",
          "The company was represented by them."
        ],
        correctAnswer: 1,
        explanation: "Present Simple Active -> is/am/are + V3"
      },
      {
        id: 8,
        type: 'reorder',
        question: "Arrange into Passive Voice:",
        options: ["room", "cleaned", "the", "was"],
        correctAnswer: ["the", "room", "was", "cleaned"],
        explanation: "Past Simple Passive"
      },
      {
        id: 9,
        type: 'choice',
        question: "Complete: 'English ______ all over the world.'",
        options: [
          "speaks",
          "is spoken",
          "spoke",
          "has spoken"
        ],
        correctAnswer: 1,
        explanation: "ภาษาอังกฤษถูกพูด (Passive) และเป็นความจริงทั่วไป (Present Simple) -> is spoken"
      },
      {
        id: 10,
        type: 'fill-blank',
        question: "Passive: This book was ______ (write/written) by JK Rowling.",
        correctAnswer: "written",
        explanation: "หลัง Verb to be ใน Passive ต้องเป็น V3 เสมอ"
      }
    ]
  }
];