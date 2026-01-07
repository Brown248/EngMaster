import { QuizQuestion } from '../../types';

export interface QFTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separateQuestionFormsData: QFTopic[] = [
  {
    id: 'yes-no-questions',
    name: 'Yes/No Questions',
    description: 'คำถามที่ตอบ Yes/No',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        question: "______ (Do/Are) you like pizza?",
        correctAnswer: "do",
        explanation: "กริยาแท้ (like) ต้องใช้ Do/Does ช่วยใน Present Simple"
      },
      {
        id: 2,
        type: 'choice',
        question: "______ she at home?",
        options: ["Is", "Does", "Do", "Has"],
        correctAnswer: 0,
        explanation: "ถามถึงสถานที่/สถานะ (at home) ใช้ Verb to Be (Is)"
      }
    ]
  },
  {
    id: 'wh-questions',
    name: 'Wh-Questions',
    description: 'Who, What, Where, When, Why, How',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "______ is that man?",
        options: ["Who", "What", "When", "Why"],
        correctAnswer: 0,
        explanation: "ถามถึงคน ใช้ Who"
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "______ (Where/When) do you live?",
        correctAnswer: "where",
        explanation: "ถามสถานที่ ใช้ Where"
      }
    ]
  },
  {
    id: 'tag-questions',
    name: 'Tag Questions',
    description: 'คำถามห้อยท้าย (Question Tags)',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "It is cold, ______?",
        options: ["isn't it", "is it", "does it", "didn't it"],
        correctAnswer: 0,
        explanation: "ข้างหน้าบอกเล่า (is) ข้างหลังปฏิเสธ (isn't)"
      },
      {
        id: 2,
        type: 'choice',
        question: "You don't smoke, ______?",
        options: ["do you", "don't you", "are you", "have you"],
        correctAnswer: 0,
        explanation: "ข้างหน้าปฏิเสธ (don't) ข้างหลังบอกเล่า (do)"
      }
    ]
  }
];