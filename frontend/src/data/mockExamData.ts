import { ExamPart, Question } from '../types';

// ============================================================================
// HELPER: QUESTION GENERATOR
// ============================================================================
const generateQuestions = (baseQuestions: any[], targetCount: number, startId: number) => {
  const result: Question[] = [];
  for (let i = 0; i < targetCount; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    result.push({
      ...base,
      id: startId + i,
      // ถ้ามี passage ให้คงเดิม ถ้าไม่มีและต้อง loop ให้คง text เดิม
      text: base.text,
      passage: base.passage 
    });
  }
  return result;
};

const images = {
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  construction: "https://images.unsplash.com/photo-1504384308090-c54be3855091?w=600&q=80",
  schedule: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=600&q=80"
};

// ============================================================================
// LISTENING SECTION (Part 1-4)
// ============================================================================

const part1Base = [
  {
    text: "(Audio) Look at the picture marked Number 1 in your test book.",
    image: images.meeting,
    choices: [
      "A. They are reviewing some documents.",
      "B. They are rearranging the office furniture.",
      "C. One of the men is putting on a jacket.",
      "D. The computer monitors are facing the wall."
    ],
    correctAnswer: 0,
    explanation: "✅ (A) ถูกต้อง: คนในภาพกำลังดูเอกสารและหน้าจอ"
  },
  {
    text: "(Audio) Look at the picture marked Number 2.",
    image: images.warehouse,
    choices: [
      "A. Some boxes are being loaded onto a truck.",
      "B. The shelves are filled with merchandise.",
      "C. A forklift is blocking the aisle.",
      "D. The warehouse floor is being cleaned."
    ],
    correctAnswer: 1,
    explanation: "✅ (B) ถูกต้อง: ชั้นวางของเต็มไปด้วยสินค้า"
  }
];

const part2Base = [
  {
    text: "(Audio) Who is responsible for booking the conference room?",
    choices: ["A. I think Ms. Garcia handles that.", "B. It's down the hall on the left.", "C. Yes, I booked it yesterday."],
    correctAnswer: 0,
    explanation: "ถาม Who ตอบชื่อคนรับผิดชอบ (Ms. Garcia)"
  },
  {
    text: "(Audio) Why hasn't the quarterly report been finalized yet?",
    choices: ["A. Because we're still waiting for the sales data.", "B. It was a very productive quarter.", "C. You can leave it on my desk."],
    correctAnswer: 0,
    explanation: "ถาม Why ตอบเหตุผล (Waiting for data)"
  }
];

const part3Base = [
  {
    text: "M: Hi, I'm calling to reschedule our meeting on Tuesday.\nW: That's fine. I'm free all morning on Wednesday.\nM: Wednesday morning works best for me. Shall we say 10 o'clock?\nW: Ah, I have a team briefing then. How about 11:00 instead?\n\nQ1: Why is the man calling?",
    choices: ["A. To cancel an order", "B. To reschedule a meeting", "C. To ask for directions", "D. To confirm a reservation"],
    correctAnswer: 1,
    explanation: "Keyword: 'calling to reschedule our meeting'"
  },
  {
    text: "Q2: What time do the speakers agree to meet?",
    choices: ["A. 10:00", "B. 11:00", "C. Tuesday", "D. Thursday"],
    correctAnswer: 1,
    explanation: "ตกลงกันที่ 11:00"
  },
  {
    text: "Q3: What will the woman do at 10:00?",
    choices: ["A. Meet the man", "B. Have a team briefing", "C. Visit a client", "D. Go to lunch"],
    correctAnswer: 1,
    explanation: "มี Team briefing ตอน 10 โมง"
  }
];

const part4Base = [
  {
    text: "(Audio) TechGiant Corp has announced plans to acquire a leading AI startup for 2 billion dollars. Shareholders reacted positively, with stock prices rising by 5%. The merger is expected to be finalized by the end of the year.\n\nQ1: What is the main topic of the report?",
    choices: ["A. A new product", "B. A company acquisition", "C. A new CEO", "D. Bankruptcy"],
    correctAnswer: 1,
    explanation: "Keyword: 'plans to acquire'"
  },
  {
    text: "Q2: How did the stock market react?",
    choices: ["A. Fell sharply", "B. Unchanged", "C. Rose by 5%", "D. Halted"],
    correctAnswer: 2,
    explanation: "Stock prices rising by 5%"
  },
  {
    text: "Q3: When will the deal be completed?",
    choices: ["A. Today", "B. Next month", "C. By year end", "D. Two years"],
    correctAnswer: 2,
    explanation: "Finalized by the end of the year"
  }
];

// ============================================================================
// READING SECTION (Part 5-7)
// ============================================================================

const part5Base = [
  {
    text: "Despite _______ extensive experience, Mr. Evans was not selected for the position.",
    choices: ["he", "him", "his", "himself"],
    correctAnswer: 2,
    explanation: "ต้องการ Possessive Adjective หน้า Noun (experience) -> 'his'"
  },
  {
    text: "The new strategy is _______ more effective than the previous one.",
    choices: ["significantly", "significant", "significance", "signify"],
    correctAnswer: 0,
    explanation: "ใช้ Adverb ขยาย Comparative -> 'significantly more effective'"
  },
  {
    text: "All employees must _______ with the safety regulations.",
    choices: ["comply", "observe", "fulfill", "obey"],
    correctAnswer: 0,
    explanation: "comply + with (ปฏิบัติตาม)"
  },
  {
    text: "Requests must be submitted _______ two weeks in advance.",
    choices: ["at", "on", "at least", "almost"],
    correctAnswer: 2,
    explanation: "at least (อย่างน้อย)"
  }
];

// --- Part 6 & 7: มี Passage ยาว ---

// 1. Elevator Email (Part 6)
const p6_elevator = `To: All Staff
From: Facilities
Subject: Elevator Maintenance

Please be advised that the main elevators will be out of service (1)_______ the weekend for scheduled maintenance. We apologize for any (2)_______ this may cause to staff working overtime. Please use the freight elevator located at the rear of the building (3)_______. Normal service is expected to (4)_______ by Monday morning.`;

const part6Base = [
  {
    passage: p6_elevator,
    text: "Question 1: Choose the best word for blank (1)",
    choices: ["while", "during", "as", "when"],
    correctAnswer: 1,
    explanation: "during the weekend (ตลอดช่วงวันหยุด)"
  },
  {
    passage: p6_elevator,
    text: "Question 2: Choose the best word for blank (2)",
    choices: ["convenience", "inconvenience", "convenient", "inconvenient"],
    correctAnswer: 1,
    explanation: "apologize for any inconvenience (ความไม่สะดวก)"
  },
  {
    passage: p6_elevator,
    text: "Question 3: Choose the best word for blank (3)",
    choices: ["instead", "however", "therefore", "although"],
    correctAnswer: 0,
    explanation: "use... instead (ใช้...แทน)"
  },
  {
    passage: p6_elevator,
    text: "Question 4: Choose the best word for blank (4)",
    choices: ["resume", "resuming", "resumed", "resumes"],
    correctAnswer: 0,
    explanation: "expected to resume (คาดว่าจะกลับมาใช้งานได้)"
  }
];

// 2. Double Passage: Memo & Email (Part 7)
const p7_relocation = `**Passage 1: Internal Memo**
From: Sarah Jenkins, Operations Director
To: All Staff
Date: October 15
Subject: Office Relocation Update

As you know, we will be moving to our new headquarters at Riverfront Plaza on November 1st. The packing process will begin next Monday. Each department has been assigned a specific day to pick up crates. Please ensure all personal items are packed by Friday, Oct 27th. The IT department will be disconnecting equipment starting at 5:00 PM that Friday. Employees are expected to work remotely on Oct 30-31 while movers transport furniture.

-----------------------------------

**Passage 2: Email**
From: Mark Alistair
To: Sarah Jenkins
Date: Oct 16
Subject: Re: Relocation

Dear Sarah,
I received your memo regarding the move. I'm writing to request a slight adjustment for the Marketing team. We have a major client pitch scheduled for the morning of Monday, Oct 30th. It is critical that we have full access to our workstations and the server. Could the IT department delay disconnecting our equipment until Monday afternoon? We can pack our personal items by the deadline, but we need the computers active.`;

const part7Base = [
  {
    passage: p7_relocation,
    text: "Q1: What is the main purpose of the memo?",
    choices: ["A. To announce a new client", "B. To provide instructions for the move", "C. To change the moving date", "D. To request feedback"],
    correctAnswer: 1,
    explanation: "Memo แจ้งรายละเอียดขั้นตอนการย้ายออฟฟิศ"
  },
  {
    passage: p7_relocation,
    text: "Q2: When will the IT department start disconnecting equipment?",
    choices: ["A. October 15", "B. October 27", "C. October 30", "D. November 1"],
    correctAnswer: 1,
    explanation: "Passage 1 ระบุ: 'starting at 5:00 PM that Friday' (Friday, Oct 27th)"
  },
  {
    passage: p7_relocation,
    text: "Q3: Why does Mark Alistair write the email?",
    choices: ["A. To complain about the location", "B. To ask for packing supplies", "C. To request a schedule change", "D. To resign"],
    correctAnswer: 2,
    explanation: "Mark ขอเลื่อนเวลาตัดระบบ ('request a slight adjustment')"
  },
  {
    passage: p7_relocation,
    text: "Q4: What implies about the Marketing team?",
    choices: ["A. They are moving to a different floor", "B. They have an important meeting on Oct 30", "C. They have already packed", "D. They work remotely often"],
    correctAnswer: 1,
    explanation: "Passage 2 ระบุ: 'major client pitch... Oct 30th'"
  },
  {
    passage: p7_relocation,
    text: "Q5: What solution does Mark propose?",
    choices: ["A. Canceling the meeting", "B. Working from home", "C. Keeping equipment connected longer", "D. Moving on the weekend"],
    correctAnswer: 2,
    explanation: "Mark ขอให้ 'delay disconnecting... until Monday afternoon'"
  }
];

// 3. Single Article: EV (Part 7)
const p7_ev = `**Article: The Future of Electric Vehicles**

(City Times) — Automotive giant Apex Motors unveiled its latest line of electric vehicles (EVs) yesterday, promising longer battery life and faster charging times. The new 'EcoDrive' series features a proprietary battery technology that allows drivers to travel up to 500 miles on a single charge.

Industry analyst, Dr. Alan Grant, noted, "This is a game-changer. Range anxiety has been the number one barrier to EV adoption. Apex Motors has effectively removed that hurdle."

However, challenges remain. The charging infrastructure in rural areas is still underdeveloped. To address this, Apex Motors announced a partnership with PowerGrid Inc. to install 5,000 new charging stations nationwide over the next two years.`;

const part7Base2 = [
  {
    passage: p7_ev,
    text: "Q6: What feature does the 'EcoDrive' series highlight?",
    choices: ["A. Lower price", "B. Self-driving", "C. Extended driving range", "D. Luxury interiors"],
    correctAnswer: 2,
    explanation: "บทความระบุ 'travel up to 500 miles on a single charge'"
  },
  {
    passage: p7_ev,
    text: "Q7: According to Dr. Grant, what has been the main problem for EV buyers?",
    choices: ["A. High cost", "B. Range anxiety", "C. Safety", "D. Design"],
    correctAnswer: 1,
    explanation: "Dr. Grant กล่าวว่า 'Range anxiety has been the number one barrier'"
  },
  {
    passage: p7_ev,
    text: "Q8: What is Apex Motors planning with PowerGrid Inc.?",
    choices: ["A. New battery", "B. Merger", "C. Build charging stations", "D. New dealerships"],
    correctAnswer: 2,
    explanation: "ระบุว่า 'install 5,000 new charging stations'"
  }
];

// ============================================================================
// EXPORT FULL MOCK DATA
// ============================================================================
export const mockExamData: Record<string, ExamPart> = {
  'listening-part1': { id: 'listening-part1', title: 'Part 1: Photographs', description: 'Select the best description.', timeLimit: 300, questions: generateQuestions(part1Base, 6, 1) },
  'listening-part2': { id: 'listening-part2', title: 'Part 2: Q&A', description: 'Choose the best response.', timeLimit: 600, questions: generateQuestions(part2Base, 25, 7) },
  'listening-part3': { id: 'listening-part3', title: 'Part 3: Conversations', description: 'Answer questions about the dialogue.', timeLimit: 900, questions: generateQuestions(part3Base, 39, 32) },
  'listening-part4': { id: 'listening-part4', title: 'Part 4: Short Talks', description: 'Answer questions about the talk.', timeLimit: 900, questions: generateQuestions(part4Base, 30, 71) },
  
  'reading-part5': { id: 'reading-part5', title: 'Part 5: Incomplete Sentences', description: 'Complete the sentence.', timeLimit: 900, questions: generateQuestions(part5Base, 30, 101) },
  'reading-part6': { id: 'reading-part6', title: 'Part 6: Text Completion', description: 'Complete the text.', timeLimit: 900, questions: generateQuestions(part6Base, 16, 131) }, // Loop set 1
  'reading-part7': { id: 'reading-part7', title: 'Part 7: Reading Comprehension', description: 'Read passages and answer.', timeLimit: 3000, 
    questions: [
      ...generateQuestions(part7Base, 30, 147), // Double Passage Set
      ...generateQuestions(part7Base2, 24, 177) // Single Passage Set
    ] 
  }
};