import { QuizQuestion } from '../../types';

export interface RSTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateReportedSpeechData: RSTopic[] = [
  {
    id: 'direct-speech',
    name: 'Direct Speech',
    description: 'การใช้เครื่องหมายคำพูด (Quotation Marks)',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Which sentence is correct?",
        options: [
          'He said "I am happy."',
          'He said, "I am happy."',
          'He said "I am happy".',
          'He said I am happy.'
        ],
        correctAnswer: 1,
        explanation: "Direct Speech ต้องมีเครื่องหมายคอมมา (,) หลัง said และข้อความในเครื่องหมายคำพูด"
      },
      {
        id: 2,
        type: 'true-false',
        question: "In Direct Speech, we repeat the exact words.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True: Direct Speech คือการยกคำพูดเดิมมาพูดซ้ำทุกคำ"
      }
    ]
  },
  {
    id: 'indirect-speech',
    name: 'Indirect Speech',
    description: 'การเปลี่ยน Tense และ Pronoun (Backshift)',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Direct: 'I am busy.' -> Indirect: He said that he ______ busy.",
        options: ["is", "was", "were", "been"],
        correctAnswer: 1,
        explanation: "Present Simple (am) เปลี่ยนเป็น Past Simple (was)"
      },
      {
        id: 2,
        type: 'choice',
        question: "Direct: 'I will help.' -> Indirect: She said she ______ help.",
        options: ["will", "would", "can", "could"],
        correctAnswer: 1,
        explanation: "Will เปลี่ยนเป็น Would"
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Direct: 'Open the door.' -> Indirect: He told me ______ (to open/opening) the door.",
        correctAnswer: "to open",
        explanation: "ประโยคคำสั่ง (Imperative) เปลี่ยนเป็น to + infinitive"
      },
      {
        id: 4,
        type: 'choice',
        question: "Direct: 'I bought a car.' -> Indirect: He said he ______ a car.",
        options: ["bought", "has bought", "had bought", "buys"],
        correctAnswer: 2,
        explanation: "Past Simple (bought) เปลี่ยนเป็น Past Perfect (had bought)"
      }
    ]
  }
];