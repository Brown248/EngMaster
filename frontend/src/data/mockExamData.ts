import { ExamPart, Question } from '../types';

// --- Helper Functions ---
const generateQuestions = (baseQuestions: any[], targetCount: number, startId: number) => {
  const result: Question[] = [];
  for (let i = 0; i < targetCount; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    result.push({
      ...base,
      id: startId + i,
      // ถ้าเป็นโจทย์ Reading ยาวๆ อาจจะคงเดิมไว้ แต่ถ้าเป็นข้อสั้นๆ อาจจะเติมเลข Variation
      text: i < baseQuestions.length ? base.text : base.text
    });
  }
  return result;
};

// --- Base Images ---
const images = {
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
  construction: "https://images.unsplash.com/photo-1504384308090-c54be3855091?w=500&q=80"
};

// ==========================================
// LISTENING BASE DATA (Real TOEIC Style)
// ==========================================

const part1Base = [
  {
    text: "(Audio) Look at the picture marked Number 1 in your test book.",
    image: images.meeting,
    choices: [
      "Some documents are being distributed.",
      "A presentation is being conducted.",
      "Some people are rearranging the furniture.",
      "The blinds have been pulled down."
    ],
    correctAnswer: 1,
    explanation: "ในภาพมีการนำเสนองาน (Presentation) ข้อ A ผิดเพราะไม่มีใครแจกเอกสาร, C ผิดเพราะไม่ได้ย้ายโต๊ะ"
  },
  {
    text: "(Audio) Look at the picture marked Number 2.",
    image: images.warehouse,
    choices: [
      "Boxes are stacked on the shelves.",
      "A forklift is being repaired.",
      "The warehouse is empty.",
      "Workers are loading a truck."
    ],
    correctAnswer: 0,
    explanation: "ภาพกล่องวางซ้อนกันบนชั้น (Stacked on the shelves) เป็นศัพท์ Part 1 ที่ออกบ่อย"
  }
];

const part2Base = [
  {
    text: "(Audio) Who's responsible for booking the flight tickets?",
    choices: [
      "It's in the conference room.",
      "Ms. Tanaka usually handles that.",
      "No, I haven't booked it yet."
    ],
    correctAnswer: 1,
    explanation: "ถาม Who (ใคร) คำตอบทางอ้อมระบุชื่อคนรับผิดชอบ (Ms. Tanaka handles that)"
  },
  {
    text: "(Audio) Why has the workshop been postponed?",
    choices: [
      "Because the speaker is ill.",
      "Until next Friday.",
      "At the training center."
    ],
    correctAnswer: 0,
    explanation: "ถาม Why (ทำไม) ต้องการเหตุผล (Because...)"
  },
  {
    text: "(Audio) Would you prefer to meet in the morning or the afternoon?",
    choices: [
      "Yes, I would.",
      "It was a productive meeting.",
      "Either works for me."
    ],
    correctAnswer: 2,
    explanation: "คำถามเลือกตอบ (Or) คำตอบที่ถูกต้องมักจะเป็น 'ได้ทั้งคู่' (Either works)"
  }
];

const part3Base = [
  // Conversation 1: Problem Solving
  {
    text: "What problem are the speakers discussing?",
    choices: ["A computer malfunction.", "A shipping delay.", "A billing error.", "A lost contract."],
    correctAnswer: 2,
    explanation: "มี Keyword เช่น 'invoice', 'incorrect amount', 'overcharged' -> Billing error"
  },
  {
    text: "What does the man suggest?",
    choices: ["Calling the supplier.", "Reviewing the policy.", "Sending a revised invoice.", "Pay the full amount."],
    correctAnswer: 0,
    explanation: "ผู้ชายพูดว่า 'Why don't we contact the vendor?' -> Calling supplier"
  },
  {
    text: "What will the woman do next?",
    choices: ["Update the database.", "Speak to the manager.", "Wait for a call.", "Write a check."],
    correctAnswer: 1,
    explanation: "'I'll run this by Ms. Garcia first.' -> Speak to manager"
  }
];

const part4Base = [
  // Talk 1: Voicemail Message
  {
    text: "What is the purpose of the message?",
    choices: ["To schedule an interview.", "To confirm a reservation.", "To request a refund.", "To offer a job."],
    correctAnswer: 0,
    explanation: "ข้อความจาก HR นัดสัมภาษณ์ 'We'd like to schedule an interview...'"
  },
  {
    text: "What is the listener asked to bring?",
    choices: ["A photo ID.", "A portfolio.", "A reference letter.", "A resume."],
    correctAnswer: 1,
    explanation: "Please bring a copy of your portfolio."
  },
  {
    text: "When should the listener return the call?",
    choices: ["By 5 PM today.", "Tomorrow morning.", "Next week.", "Immediately."],
    correctAnswer: 0,
    explanation: "Please call me back before the office closes at 5."
  }
];

// ==========================================
// READING BASE DATA (Real TOEIC Style)
// ==========================================

const part5Base = [
  {
    text: "Ms. Johnson is a highly _______ architect who has designed several landmarks.",
    choices: ["respect", "respects", "respected", "respecting"],
    correctAnswer: 2,
    explanation: "Adjective ขยาย architect ต้องใช้ Past Participle (respected) แปลว่า ที่ได้รับความเคารพ/มีชื่อเสียง"
  },
  {
    text: "The annual report must be submitted _______ Friday, March 15.",
    choices: ["on", "at", "by", "to"],
    correctAnswer: 2,
    explanation: "Deadline ใช้ Preposition 'by' (ภายใน/ก่อน) ถ้า 'on' จะหมายถึงทำในวันนั้นพอดี"
  },
  {
    text: "_______ severe weather conditions, the outdoor concert was canceled.",
    choices: ["Because", "Due to", "Although", "Unless"],
    correctAnswer: 1,
    explanation: "ตามด้วย Noun Phrase (severe weather conditions) ต้องใช้ Due to. (Because ต้องตามด้วยประโยค)"
  },
  {
    text: "The new software allows users to process data much more _______.",
    choices: ["efficient", "efficiency", "efficiently", "efficiencies"],
    correctAnswer: 2,
    explanation: "ขยาย Verb 'process' ต้องใช้ Adverb (efficiently)"
  },
  {
    text: "We are currently seeking a _______ replacement for the retiring director.",
    choices: ["suit", "suitability", "suitable", "suitably"],
    correctAnswer: 2,
    explanation: "ต้องการ Adjective (suitable) มาขยาย Noun (replacement)"
  }
];

const part6Base = [
  {
    text: "To: All Employees\nSubject: Maintenance\n\nPlease be advised that the elevators will be out of _______ tomorrow morning.",
    choices: ["work", "order", "repair", "service"],
    correctAnswer: 3,
    explanation: "Idiom: 'Out of service' (งดให้บริการ/ใช้งานไม่ได้)"
  },
  {
    text: "Technicians will be performing routine _______ checks.",
    choices: ["safe", "safety", "safely", "safer"],
    correctAnswer: 1,
    explanation: "Compound Noun: Safety checks (การตรวจสอบความปลอดภัย)"
  },
  {
    text: "We apologize for the _______.",
    choices: ["inconvenience", "convenience", "inconvenient", "convenient"],
    correctAnswer: 0,
    explanation: "Noun: Inconvenience (ความไม่สะดวก)"
  },
  {
    text: "Please use the stairs _______.",
    choices: ["instead", "however", "therefore", "although"],
    correctAnswer: 0,
    explanation: "Adverb จบประโยค: Instead (แทน)"
  }
];

const part7Base = [
  // Set 1: Email & Schedule (Double Passage)
  {
    text: "**Passage 1: Email**\nFrom: J. Miller\nTo: Staff\nSubject: Training Workshop\n\nI'm pleased to announce the schedule for next week's software training. All sessions will be held in Room B.\n\n**Passage 2: Schedule**\nMonday: Intro to Excel (9-11 AM)\nTuesday: Advanced PowerPoint (1-3 PM)\nWednesday: Database Management (10-12 AM)\n\n----------------\n\nWhat is the purpose of the email?",
    choices: ["To cancel a meeting.", "To announce a training schedule.", "To hire a trainer.", "To request software."],
    correctAnswer: 1,
    explanation: "Subject: Training Workshop และเนื้อหาแจ้งตารางอบรม"
  },
  {
    text: "Where will the training take place?",
    choices: ["Room A", "Room B", "The cafeteria", "Online"],
    correctAnswer: 1,
    explanation: "ระบุชัดเจน 'held in Room B'"
  },
  {
    text: "Which session is held in the afternoon?",
    choices: ["Intro to Excel", "Advanced PowerPoint", "Database Management", "None"],
    correctAnswer: 1,
    explanation: "PowerPoint เวลา 1-3 PM (บ่าย)"
  },
  {
    text: "Who is the sender of the email?",
    choices: ["Staff", "J. Miller", "HR", "IT Support"],
    correctAnswer: 1,
    explanation: "From: J. Miller"
  },
  {
    text: "How long is the Excel session?",
    choices: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 1,
    explanation: "9-11 AM = 2 hours"
  }
];

// ==========================================
// EXPORT FULL MOCK DATA (200 ITEMS GENERATED)
// ==========================================
export const mockExamData: Record<string, ExamPart> = {
  // LISTENING (100 Questions)
  'listening-part1': {
    id: 'listening-part1',
    title: 'Part 1: Photographs',
    description: 'Select the best description of the picture.',
    timeLimit: 300,
    questions: generateQuestions(part1Base, 6, 1)
  },
  'listening-part2': {
    id: 'listening-part2',
    title: 'Part 2: Question-Response',
    description: 'Listen to a question and choose the best response.',
    timeLimit: 600,
    questions: generateQuestions(part2Base, 25, 7)
  },
  'listening-part3': {
    id: 'listening-part3',
    title: 'Part 3: Conversations',
    description: 'Listen to the dialogue and answer three questions.',
    timeLimit: 900,
    questions: generateQuestions(part3Base, 39, 32)
  },
  'listening-part4': {
    id: 'listening-part4',
    title: 'Part 4: Short Talks',
    description: 'Listen to the talk and answer three questions.',
    timeLimit: 900,
    questions: generateQuestions(part4Base, 30, 71)
  },

  // READING (100 Questions)
  'reading-part5': {
    id: 'reading-part5',
    title: 'Part 5: Incomplete Sentences',
    description: 'Select the best word to complete the sentence.',
    timeLimit: 900,
    questions: generateQuestions(part5Base, 30, 101)
  },
  'reading-part6': {
    id: 'reading-part6',
    title: 'Part 6: Text Completion',
    description: 'Complete the missing words in the text.',
    timeLimit: 900,
    questions: generateQuestions(part6Base, 16, 131)
  },
  'reading-part7': {
    id: 'reading-part7',
    title: 'Part 7: Reading Comprehension',
    description: 'Read the passages and answer the questions.',
    timeLimit: 3000, 
    questions: generateQuestions(part7Base, 54, 147)
  }
};