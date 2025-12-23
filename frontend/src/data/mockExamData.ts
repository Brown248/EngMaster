import { ExamPart, Question } from '../types';

// ============================================================================
// 1. UTILITIES & ASSETS
// ============================================================================
const images = {
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  construction: "https://images.unsplash.com/photo-1504384308090-c54be3855091?w=800&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  airport: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
  store: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
};

// Helper สร้าง Question Object
const q = (id: number, text: string, choices: string[], correct: number, expl: string, image?: string, passage?: string): Question => ({
  id, text, choices, correctAnswer: correct, explanation: expl, image, passage
});

// ============================================================================
// PART 1: PHOTOGRAPHS (6 Questions)
// ============================================================================
const part1: Question[] = [
  q(1, "Look at the picture marked Number 1 in your test book.", 
    ["(A) They are sitting at a conference table.", "(B) They are cleaning the office furniture.", "(C) One of the men is standing up.", "(D) The computers are turned off."], 
    0, "Keyword: 'sitting at a table' (นั่งที่โต๊ะ) ตรงกับภาพการประชุม", images.meeting),
  
  q(2, "Look at the picture marked Number 2 in your test book.", 
    ["(A) Some boxes are being loaded onto a truck.", "(B) The shelves are stocked with merchandise.", "(C) A forklift is parked in the aisle.", "(D) The floor is being swept."], 
    1, "Keyword: 'stocked' (มีสินค้าวางอยู่) อธิบายสภาพคลังสินค้าได้ถูกต้อง", images.warehouse),
  
  q(3, "Look at the picture marked Number 3 in your test book.", 
    ["(A) The workers are wearing safety helmets.", "(B) A bridge is being demolished.", "(C) Traffic has been stopped on the street.", "(D) Construction tools are scattered on the ground."], 
    0, "Keyword: 'wearing safety helmets' (สวมหมวกนิรภัย) เป็นจุดเด่นของคนงานในภาพ", images.construction),
  
  q(4, "Look at the picture marked Number 4 in your test book.", 
    ["(A) The airplane is taking off from the runway.", "(B) Passengers are boarding the aircraft.", "(C) Luggage is being unloaded from the plane.", "(D) The airport terminal is closed."], 
    1, "Keyword: 'boarding' (กำลังขึ้นเครื่อง) ตรงกับการกระทำของผู้โดยสาร", images.airport),
  
  q(5, "Look at the picture marked Number 5 in your test book.", 
    ["(A) She is paying for her items.", "(B) She is trying on a pair of shoes.", "(C) She is looking at some clothes.", "(D) She is folding a shirt."], 
    2, "Keyword: 'looking at' (กำลังมองดู) ตรงกับอิริยาบถของผู้หญิงในร้าน", images.store),
  
  q(6, "Look at the picture marked Number 6 in your test book.", 
    ["(A) Monitors are mounted on the wall.", "(B) The chairs are pushed under the desks.", "(C) Papers are scattered on the floor.", "(D) The office is crowded with people."], 
    0, "Keyword: 'mounted on' (ติดตั้งอยู่บน...) อธิบายตำแหน่งจอภาพได้ถูกต้อง", images.office),
];

// ============================================================================
// PART 2: QUESTION-RESPONSE (25 Questions)
// ============================================================================
const part2: Question[] = [
  q(7, "Who is leading the marketing presentation today?", ["(A) In the conference room.", "(B) Mr. Tanaka is.", "(C) At 2:00 PM."], 1, "ถาม Who (ใคร) ต้องตอบเป็นชื่อคนหรือตำแหน่ง (Mr. Tanaka)"),
  q(8, "Where did you leave the quarterly report?", ["(A) On your desk.", "(B) It was a good report.", "(C) Yes, I did."], 0, "ถาม Where (ที่ไหน) ต้องตอบเป็นสถานที่ (On your desk)"),
  q(9, "When does the train to Chicago leave?", ["(A) From Platform 4.", "(B) In about ten minutes.", "(C) No, I'm driving."], 1, "ถาม When (เมื่อไหร่) ต้องตอบเป็นเวลา (In about ten minutes)"),
  q(10, "Why has the meeting been rescheduled?", ["(A) Because the manager is ill.", "(B) It's in Room B.", "(C) Yes, let's meet."], 0, "ถาม Why (ทำไม) ต้องตอบเหตุผล (Because...)"),
  q(11, "How do I sign up for the workshop?", ["(A) It starts on Monday.", "(B) Fill out this form.", "(C) The shop works well."], 1, "ถาม How (อย่างไร) ต้องตอบวิธีการ (Fill out this form)"),
  q(12, "Would you prefer coffee or tea?", ["(A) Yes, please.", "(B) Neither, I'll have water.", "(C) It's $3.00."], 1, "ถามให้เลือก (Choice) ตอบปฏิเสธทั้งคู่และเลือกอย่างอื่นได้ (Neither)"),
  q(13, "Did you finish reviewing the budget?", ["(A) It's a large budget.", "(B) Not yet, I'm almost done.", "(C) Yesterday morning."], 1, "ถาม Yes/No (ทำเสร็จหรือยัง) ตอบ Not yet (ยังไม่เสร็จ)"),
  q(14, "Whose laptop is this?", ["(A) It belongs to Sarah.", "(B) It's a new model.", "(C) I have a desktop."], 0, "ถาม Whose (ของใคร) ตอบชื่อเจ้าของ (Sarah)"),
  q(15, "Can you help me carry these boxes?", ["(A) Certainly.", "(B) It's very light.", "(C) I moved last week."], 0, "ประโยคขอร้อง (Can you...) ตอบรับด้วย Certainly (ได้แน่นอน)"),
  q(16, "The printer is out of ink again.", ["(A) I'll order some more.", "(B) Yes, it's pink.", "(C) Print it clearly."], 0, "ประโยคบอกเล่าปัญหา การตอบสนองที่ดีคือเสนอทางแก้ (I'll order...)"),
  q(17, "How much is the round-trip ticket?", ["(A) Two days ago.", "(B) It's $250.", "(C) To London."], 1, "ถาม How much (ราคาเท่าไหร่) ตอบเป็นจำนวนเงิน ($250)"),
  q(18, "Isn't Mr. Evans coming to the party?", ["(A) Yes, he's out of town.", "(B) No, unfortunately he's busy.", "(C) By taxi."], 1, "ถามแบบปฏิเสธ (Isn't...) ตอบ No เพื่อยืนยันว่าเขาไม่มา"),
  q(19, "Where is the nearest post office?", ["(A) To mail a letter.", "(B) Just around the corner.", "(C) It opens at 9."], 1, "ถาม Where (ที่ไหน) ตอบตำแหน่ง (Just around the corner)"),
  q(20, "Who approved the project timeline?", ["(A) The director did.", "(B) It takes three months.", "(C) Next week."], 0, "ถาม Who (ใคร) ตอบตำแหน่ง (The director)"),
  q(21, "When are the applications due?", ["(A) Submit them online.", "(B) By the end of the week.", "(C) The application is long."], 1, "ถาม When (เมื่อไหร่/กำหนดการ) ตอบช่วงเวลา (By the end of...)"),
  q(22, "Why did you take the bus today?", ["(A) My car is in the shop.", "(B) A bus ticket.", "(C) To the station."], 0, "ถาม Why (ทำไม) ตอบเหตุผล (รถเสีย/อยู่อู่ซ่อม)"),
  q(23, "How long will the presentation last?", ["(A) About an hour.", "(B) In the auditorium.", "(C) 50 people."], 0, "ถาม How long (นานแค่ไหน) ตอบระยะเวลา (About an hour)"),
  q(24, "Do you have a reservation?", ["(A) Yes, under the name Jones.", "(B) I'm hungry.", "(C) At 7 o'clock."], 0, "ถาม Yes/No (จองไว้ไหม) ตอบ Yes พร้อมรายละเอียด"),
  q(25, "Which color do you prefer for the logo?", ["(A) The blue one looks professional.", "(B) Yes, I like it.", "(C) It's a new logo."], 0, "ถาม Which (อันไหน) ตอบระบุสีและเหตุผล"),
  q(26, "Has the package arrived yet?", ["(A) I'll check the mailroom.", "(B) Send it by express.", "(C) To the client."], 0, "ถามสถานะ (Arrived yet?) ตอบรับด้วยการไปตรวจสอบให้"),
  q(27, "Let's meet for lunch at noon.", ["(A) That sounds good.", "(B) I had a sandwich.", "(C) In the meeting."], 0, "ประโยคชักชวน (Let's...) ตอบตกลง (That sounds good)"),
  q(28, "I can't find my security badge.", ["(A) Check your jacket pocket.", "(B) It's safe.", "(C) Open the door."], 0, "แจ้งปัญหา (หาของไม่เจอ) คู่สนทนาแนะนำที่ค้นหา (Check your pocket)"),
  q(29, "How often is the newsletter published?", ["(A) Every month.", "(B) To all employees.", "(C) News is good."], 0, "ถาม How often (บ่อยแค่ไหน) ตอบความถี่ (Every month)"),
  q(30, "Is the manager in her office?", ["(A) No, she's in a meeting.", "(B) She is nice.", "(C) It's a big office."], 0, "ถาม Availability ตอบปฏิเสธพร้อมบอกว่าไปไหน"),
  q(31, "What time does the movie start?", ["(A) It starts at 7:30.", "(B) It was a good movie.", "(C) Let's go."], 0, "ถาม What time (กี่โมง) ตอบเวลาเจาะจง (7:30)")
];

// ============================================================================
// PART 3: CONVERSATIONS (39 Questions / 13 Sets)
// ============================================================================
const part3: Question[] = [];
let p3_id = 32;

// Interface สำหรับ Part 3 เพื่อแก้ TypeScript Error
interface P3Scenario {
  topic: string;
  questions: { q: string; a: string[]; c: number }[];
}

const p3_scenarios: P3Scenario[] = [
  {
    topic: "Office Supply Issue",
    questions: [
      { q: "What is the problem with the printer?", a: ["(A) It is out of paper.", "(B) It is jamming repeatedly.", "(C) It won't turn on.", "(D) It is out of ink."], c: 1 },
      { q: "What does the man suggest doing?", a: ["(A) Buying a new printer.", "(B) Calling technical support.", "(C) Using a different machine.", "(D) Canceling the print job."], c: 1 },
      { q: "What will the woman likely do next?", a: ["(A) Go to lunch.", "(B) Call the technician.", "(C) Fix it herself.", "(D) Write a report."], c: 1 }
    ]
  },
  {
    topic: "Travel Arrangements",
    questions: [
      { q: "Where are the speakers planning to go?", a: ["(A) New York.", "(B) London.", "(C) Paris.", "(D) Tokyo."], c: 0 },
      { q: "How will they travel there?", a: ["(A) By train.", "(B) By bus.", "(C) By car.", "(D) By airplane."], c: 0 },
      { q: "When is the departure time?", a: ["(A) 8:00 AM.", "(B) 9:00 AM.", "(C) 10:00 AM.", "(D) 11:00 AM."], c: 1 }
    ]
  },
  { topic: "Rescheduling a Meeting", questions: [{q: "Why does the man want to reschedule?", a:["(A) He is sick.","(B) He has an appointment.","(C) He missed his flight.","(D) A meeting ran late."],c:3}, {q: "What time does the woman suggest?", a:["(A) 2:00 PM.","(B) 3:00 PM.","(C) 4:00 PM.","(D) 5:00 PM."],c:1}, {q: "Where will they meet?", a:["(A) Cafeteria.","(B) Office.","(C) Room B.","(D) Online."],c:2}] },
  { topic: "Job Interview", questions: [{q: "What position is being discussed?", a:["(A) Sales","(B) HR","(C) IT","(D) Admin"],c:0}, {q: "How much experience does the candidate have?", a:["(A) 1 yr","(B) 5 yrs","(C) None","(D) 10 yrs"],c:1}, {q: "When can the candidate start?", a:["(A) Immediately","(B) Next week","(C) Next month","(D) In two weeks"],c:3}] },
  { topic: "Restaurant Reservation", questions: [{q: "What is the woman doing?", a:["(A) Ordering food","(B) Booking a table","(C) Complaining","(D) Applying for a job"],c:1}, {q: "How many people are in the party?", a:["(A) Two","(B) Four","(C) Six","(D) Eight"],c:2}, {q: "What time is the reservation for?", a:["(A) 6:00","(B) 7:00","(C) 8:00","(D) 9:00"],c:1}] },
  { topic: "Shipping Error", questions: [{q: "What is the problem?", a:["(A) Wrong item sent","(B) Item damaged","(C) Package lost","(D) Late delivery"],c:0}, {q: "What item was ordered?", a:["(A) Laptop","(B) Desk chair","(C) Monitor","(D) Printer"],c:1}, {q: "What does customer service offer?", a:["(A) Refund","(B) Discount","(C) Replacement","(D) Free replacement"],c:3}] },
  { topic: "Hotel Check-out", questions: [{q: "Where is this conversation taking place?", a:["(A) Bank","(B) Hotel","(C) Airport","(D) Restaurant"],c:1}, {q: "What charge is questioned?", a:["(A) Room service","(B) Phone call","(C) Mini-bar","(D) Laundry"],c:2}, {q: "How will the man pay?", a:["(A) Cash","(B) Credit card","(C) Check","(D) Gift card"],c:1}] },
  { topic: "Software Training", questions: [{q: "What is the training about?", a:["(A) Sales","(B) New software","(C) Safety","(D) Management"],c:1}, {q: "When is the training?", a:["(A) Afternoon","(B) Morning","(C) Monday","(D) Friday"],c:1}, {q: "Who must attend?", a:["(A) All staff","(B) Managers","(C) New hires","(D) IT Dept"],c:2}] },
  { topic: "Real Estate", questions: [{q: "What are they discussing?", a:["(A) Renting office","(B) Buying house","(C) Selling car","(D) Building factory"],c:0}, {q: "What feature is liked?", a:["(A) Location","(B) Price","(C) Size","(D) View"],c:0}, {q: "What is the problem?", a:["(A) Too expensive","(B) Too small","(C) No parking","(D) Noisy"],c:1}] },
  { topic: "Conference Planning", questions: [{q: "What event is planned?", a:["(A) Wedding","(B) Trade show","(C) Staff party","(D) Retirement dinner"],c:1}, {q: "How many attendees?", a:["(A) 100","(B) 200","(C) 500","(D) 1000"],c:2}, {q: "What needs booking?", a:["(A) Flight","(B) Catering","(C) Music","(D) Hotel"],c:1}] },
  { topic: "Bank Loan", questions: [{q: "Why visit the bank?", a:["(A) Open account","(B) Apply for loan","(C) Deposit money","(D) Cash check"],c:1}, {q: "Loan purpose?", a:["(A) Car","(B) Business","(C) House","(D) Education"],c:1}, {q: "Document needed?", a:["(A) ID card","(B) Tax forms","(C) Business plan","(D) Pay stubs"],c:2}] },
  { topic: "Doctor's Appointment", questions: [{q: "Patient's complaint?", a:["(A) Headache","(B) Back pain","(C) Toothache","(D) Fever"],c:1}, {q: "Duration of pain?", a:["(A) One day","(B) Two days","(C) A week","(D) A month"],c:2}, {q: "Doctor's advice?", a:["(A) Surgery","(B) Rest","(C) Exercise","(D) Medication"],c:3}] },
  { topic: "Store Map", questions: [{q: "Where are they standing?", a:["(A) Entrance","(B) Bakery","(C) Dairy","(D) Checkout"],c:0}, {q: "Looking for?", a:["(A) Milk","(B) Bread","(C) Fruit","(D) Coffee"],c:3}, {q: "Which aisle?", a:["(A) Aisle 1","(B) Aisle 2","(C) Aisle 3","(D) Aisle 4"],c:2}] }
];

p3_scenarios.forEach(scenario => {
  scenario.questions.forEach(qItem => {
    part3.push(q(p3_id++, `[Conversation: ${scenario.topic}] ${qItem.q}`, qItem.a, qItem.c, "คำตอบต้องวิเคราะห์จากบทสนทนา (Mock Transcript)"));
  });
});

// ============================================================================
// PART 4: SHORT TALKS (30 Questions / 10 Sets)
// ============================================================================
const part4: Question[] = [];
let p4_id = 71;

// Interface สำหรับ Part 4
interface P4Scenario {
  topic: string;
  questions: { q: string; a: string[]; c: number }[];
}

const p4_scenarios: P4Scenario[] = [
  {
    topic: "Airport Announcement",
    questions: [
      { q: "Where is this announcement?", a: ["(A) Train station", "(B) Airport", "(C) Bus stop", "(D) Port"], c: 1 },
      { q: "Why is the flight delayed?", a: ["(A) Bad weather", "(B) Mechanical problem", "(C) Late crew", "(D) Air traffic"], c: 1 },
      { q: "What should passengers do?", a: ["(A) Board now", "(B) Wait at gate", "(C) Get bags", "(D) Go to hotel"], c: 1 }
    ]
  },
  {
    topic: "Weather Forecast",
    questions: [
      { q: "Weather today?", a: ["(A) Sunny", "(B) Rainy", "(C) Snowy", "(D) Windy"], c: 1 },
      { q: "When will rain stop?", a: ["(A) Evening", "(B) Tomorrow", "(C) Next week", "(D) In an hour"], c: 1 },
      { q: "Suggestion?", a: ["(A) Go to beach", "(B) Bring umbrella", "(C) Wear coat", "(D) Stay home"], c: 1 }
    ]
  },
  { topic: "Traffic Report", questions: [{q: "Where is heavy traffic?", a:["(A) Main St","(B) Highway 9","(C) Bridge","(D) Tunnel"],c:1}, {q: "Cause?", a:["(A) Accident","(B) Construction","(C) Rain","(D) Event"],c:0}, {q: "Alternate route?", a:["(A) Route 1","(B) Route 66","(C) City Center","(D) River Road"],c:3}] },
  { topic: "Museum Tour", questions: [{q: "Who is speaking?", a:["(A) Visitor","(B) Guard","(C) Tour guide","(D) Artist"],c:2}, {q: "Tour topic?", a:["(A) Modern Art","(B) Ancient History","(C) Dinosaurs","(D) Space"],c:1}, {q: "Rule?", a:["(A) Talking","(B) Walking","(C) Photography","(D) Eating"],c:2}] },
  { topic: "Business News", questions: [{q: "Company mentioned?", a:["(A) TechCorp","(B) FoodInc","(C) AutoCo","(D) BankOne"],c:0}, {q: "Recent event?", a:["(A) Merger","(B) Bankruptcy","(C) New Product","(D) CEO quit"],c:2}, {q: "Market reaction?", a:["(A) Rose","(B) Fell","(C) Stable","(D) Crashed"],c:0}] },
  { topic: "Voicemail", questions: [{q: "Caller?", a:["(A) Doctor","(B) Mechanic","(C) Teacher","(D) Delivery"],c:1}, {q: "Reason?", a:["(A) Sell car","(B) Repair report","(C) Buy parts","(D) Ask directions"],c:1}, {q: "Pickup time?", a:["(A) Today","(B) Tomorrow","(C) Friday","(D) Monday"],c:2}] },
  { topic: "Store Ad", questions: [{q: "Sale item?", a:["(A) Furniture","(B) Electronics","(C) Clothing","(D) Groceries"],c:0}, {q: "Discount?", a:["(A) 10%","(B) 20%","(C) 30%","(D) 50%"],c:3}, {q: "Ends when?", a:["(A) Tonight","(B) Sunday","(C) Next week","(D) Never"],c:1}] },
  { topic: "Meeting Intro", questions: [{q: "Purpose?", a:["(A) Budget","(B) Kickoff","(C) Training","(D) Party"],c:1}, {q: "Guest speaker?", a:["(A) CEO","(B) Consultant","(C) Client","(D) Manager"],c:1}, {q: "Duration?", a:["(A) 30 mins","(B) 1 hour","(C) 2 hours","(D) All day"],c:1}] },
  { topic: "Award Speech", questions: [{q: "Award?", a:["(A) Employee of Year","(B) Sales","(C) Design","(D) Leadership"],c:0}, {q: "Who to thank?", a:["(A) Family","(B) Boss","(C) Team","(D) Clients"],c:2}, {q: "Next step?", a:["(A) Retire","(B) Celebrate","(C) Work harder","(D) Travel"],c:1}] },
  { topic: "Safety Drill", questions: [{q: "Event?", a:["(A) Fire drill","(B) Earthquake","(C) Tornado","(D) Lockdown"],c:0}, {q: "Go where?", a:["(A) Roof","(B) Basement","(C) Parking lot","(D) Lobby"],c:2}, {q: "Take what?", a:["(A) Laptop","(B) Purse","(C) Nothing","(D) Coat"],c:2}] }
];

p4_scenarios.forEach(scenario => {
  scenario.questions.forEach(qItem => {
    part4.push(q(p4_id++, `[Talk: ${scenario.topic}] ${qItem.q}`, qItem.a, qItem.c, "คำตอบต้องวิเคราะห์จากบทพูด (Mock Transcript)"));
  });
});

// ============================================================================
// PART 5: INCOMPLETE SENTENCES (30 Questions)
// ============================================================================
const part5: Question[] = [
  q(101, "Mr. Evans _______ the annual report yesterday.", ["(A) wrote", "(B) writes", "(C) written", "(D) writing"], 0, "Tense: มีคำว่า 'yesterday' (เมื่อวาน) ต้องใช้ Past Simple (V.2) คือ 'wrote'"),
  q(102, "The cost of living is _______ higher than expected.", ["(A) significantly", "(B) significant", "(C) significance", "(D) signify"], 0, "Adverb: คำกริยาวิเศษณ์ (significantly) ใช้ขยาย Adjective (higher)"),
  q(103, "All employees must _______ with the safety regulations.", ["(A) comply", "(B) observe", "(C) follow", "(D) do"], 0, "Collocation: 'comply with' (ปฏิบัติตาม) เป็นสำนวนที่ถูกต้อง"),
  q(104, "We need to hire _______ staff for the holiday season.", ["(A) additional", "(B) addition", "(C) add", "(D) additionally"], 0, "Adjective: ต้องการคำขยาย Noun (staff) ต้องใช้ 'additional'"),
  q(105, "The _______ of the new product was a huge success.", ["(A) launch", "(B) launched", "(C) launching", "(D) launcher"], 0, "Noun: หลัง Article 'The' ต้องการคำนาม (launch = การเปิดตัว)"),
  q(106, "He is a highly _______ architect in the industry.", ["(A) respected", "(B) respect", "(C) respecting", "(D) respects"], 0, "Participial Adjective: ถูกเคารพ (Passive sense) ใช้ V.3 (respected)"),
  q(107, "Please submit the application _______ Friday.", ["(A) by", "(B) on", "(C) at", "(D) to"], 0, "Preposition: กำหนดเส้นตาย (Deadline) ใช้ 'by' (ภายใน)"),
  q(108, "She works _______ hard to meet the deadlines.", ["(A) very", "(B) much", "(C) many", "(D) lot"], 0, "Adverb: ขยาย adverb (hard) ใช้ 'very' (มาก)"),
  q(109, "_______ the bad weather, the event continued.", ["(A) Despite", "(B) Although", "(C) Because", "(D) However"], 0, "Preposition: ตามด้วย Noun Phrase (the bad weather) ต้องใช้ 'Despite' (แม้ว่า)"),
  q(110, "Access to the server is _______ to authorized personnel.", ["(A) restricted", "(B) restrict", "(C) restriction", "(D) restricts"], 0, "Passive Voice: is + V.3 (restricted) แปลว่า ถูกจำกัด"),
  q(111, "The conference will _______ at 9:00 AM sharp.", ["(A) commence", "(B) comment", "(C) commit", "(D) common"], 0, "Vocabulary: 'commence' เป็นคำทางการของ start (เริ่ม)"),
  q(112, "It is _______ critical that we finish on time.", ["(A) absolutely", "(B) absolute", "(C) absolution", "(D) absolved"], 0, "Adverb: ขยาย Adjective (critical) ต้องใช้ 'absolutely' (อย่างยิ่ง)"),
  q(113, "The committee _______ the proposal last week.", ["(A) reviewed", "(B) review", "(C) reviews", "(D) reviewer"], 0, "Tense: 'last week' บอกอดีต ต้องใช้ Past Tense (reviewed)"),
  q(114, "We offer a _______ variety of services.", ["(A) wide", "(B) width", "(C) widen", "(D) widely"], 0, "Adjective: ขยาย Noun (variety) ต้องใช้ 'wide' (กว้างขวาง)"),
  q(115, "He _______ to the manager about the issue.", ["(A) spoke", "(B) speak", "(C) speaks", "(D) speaking"], 0, "Past Simple: เหตุการณ์จบแล้วใช้ 'spoke' (พูด)"),
  q(116, "The _______ arrived late due to the storm.", ["(A) shipment", "(B) ship", "(C) shipped", "(D) shipping"], 0, "Noun Subject: ประธานของประโยคต้องเป็นคำนาม 'shipment' (การขนส่ง)"),
  q(117, "Please _______ the attached form and return it.", ["(A) complete", "(B) full", "(C) done", "(D) did"], 0, "Imperative: ประโยคคำสั่งใช้ V.1 'complete' (กรอกให้ครบ)"),
  q(118, "This restaurant is _______ recommended by locals.", ["(A) highly", "(B) high", "(C) height", "(D) higher"], 0, "Adverb: ขยาย V.3 (recommended) ใช้ 'highly' (อย่างสูง/มาก)"),
  q(119, "_______ you are busy, I will come back later.", ["(A) Since", "(B) Due to", "(C) Despite", "(D) Therefore"], 0, "Conjunction: เชื่อมประโยคเหตุผล (Because/Since)"),
  q(120, "The _______ rate has increased this year.", ["(A) interest", "(B) interesting", "(C) interested", "(D) interests"], 0, "Compound Noun: อัตราดอกเบี้ยใช้ 'interest rate'"),
  q(121, "Please drive _______ in the school zone.", ["(A) carefully", "(B) careful", "(C) care", "(D) cared"], 0, "Adverb: ขยายกริยา drive ต้องใช้ 'carefully' (อย่างระมัดระวัง)"),
  q(122, "The final _______ will be made by the CEO.", ["(A) decision", "(B) decide", "(C) decisive", "(D) decided"], 0, "Noun: หลัง Adjective (final) ต้องเป็นคำนาม 'decision' (การตัดสินใจ)"),
  q(123, "_______ of the cost, we need quality materials.", ["(A) Regardless", "(B) Regarding", "(C) Regard", "(D) Regards"], 0, "Idiom: 'Regardless of' แปลว่า โดยไม่คำนึงถึง"),
  q(124, "Ms. Lee is _______ for the sales department.", ["(A) responsible", "(B) response", "(C) respond", "(D) responsibly"], 0, "Adjective: is responsible for (รับผิดชอบต่อ...)"),
  q(125, "Read the _______ manual before operating.", ["(A) instruction", "(B) instruct", "(C) instructor", "(D) instructive"], 0, "Noun Adjunct: คู่มือคำแนะนำ 'instruction manual'"),
  q(126, "We _______ appreciate your business.", ["(A) greatly", "(B) great", "(C) greatness", "(D) greater"], 0, "Adverb: ขยายกริยา appreciate ต้องใช้ 'greatly' (อย่างมาก)"),
  q(127, "The room is currently _______.", ["(A) occupied", "(B) occupy", "(C) occupant", "(D) occupation"], 0, "Adjective: occupied (ถูกใช้งาน/ไม่ว่าง)"),
  q(128, "Our team _______ the championship.", ["(A) won", "(B) win", "(C) winner", "(D) winning"], 0, "Past Tense: ชนะแล้วใช้ 'won'"),
  q(129, "Check the _______ date on the package.", ["(A) expiration", "(B) expire", "(C) expired", "(D) expiring"], 0, "Noun Adjunct: วันหมดอายุ 'expiration date'"),
  q(130, "The project was a _______ success.", ["(A) huge", "(B) hugely", "(C) hugeness", "(D) hugs"], 0, "Adjective: ขยาย Noun (success) ใช้ 'huge' (ใหญ่หลวง)"),
];

// ============================================================================
// PART 6: TEXT COMPLETION (16 Questions / 4 Texts)
// ============================================================================
const part6: Question[] = [];
let p6_id = 131;

// Interface สำหรับ Part 6
interface P6Text {
  t: string;
  c: string;
  qs: { a: string[]; c: number; }[];
}

const p6_texts: P6Text[] = [
  { 
    t: "Email: Office Renovation", 
    c: "To: All Staff\nFrom: Facilities\n\nPlease be advised that the lobby will be closed for renovation (131)__ next weekend. We apologize for any (132)__ this may cause. Please use the rear entrance (133)__. The lobby will reopen on (134)__.", 
    qs: [
      {a: ["(A) during", "(B) while", "(C) between", "(D) as"], c: 0},
      {a: ["(A) inconvenience", "(B) problem", "(C) time", "(D) mistake"], c: 0},
      {a: ["(A) instead", "(B) so", "(C) too", "(D) either"], c: 0},
      {a: ["(A) Monday", "(B) ago", "(C) yesterday", "(D) last"], c: 0}
    ]
  },
  { 
    t: "Letter: Job Offer", 
    c: "Dear Mr. Smith,\n\nWe are pleased to offer you the position of Analyst. Your start date is (135)__ for June 1st. The starting salary is (136)__ in the attached contract. Please (137)__ the offer by Friday. We look forward to (138)__ with you.", 
    qs: [
      {a: ["(A) scheduled", "(B) schedule", "(C) scheduling", "(D) schedules"], c: 0},
      {a: ["(A) detailed", "(B) details", "(C) detail", "(D) detailing"], c: 0},
      {a: ["(A) accept", "(B) except", "(C) access", "(D) aspect"], c: 0},
      {a: ["(A) working", "(B) work", "(C) worked", "(D) works"], c: 0}
    ]
  },
  { 
    t: "Memo: New Policy", 
    c: "To: Sales Team\n\nEffective immediately, the travel policy has changed. Employees must (139)__ all receipts for expenses. Reimbursements will be processed (140)__. Any expenses over $50 require (141)__ approval. Please contact HR if you have (142)__.", 
    qs: [
      {a: ["(A) submit", "(B) subject", "(C) subtract", "(D) subside"], c: 0},
      {a: ["(A) weekly", "(B) week", "(C) weeks", "(D) weekend"], c: 0},
      {a: ["(A) prior", "(B) after", "(C) late", "(D) post"], c: 0},
      {a: ["(A) questions", "(B) questioning", "(C) question", "(D) questioned"], c: 0}
    ]
  },
  { 
    t: "Ad: Clearance Sale", 
    c: "Big Summer Sale!\n\nEverything must go. Prices have been (143)__ by up to 50%. Visit our store (144)__ Main Street. The sale (145)__ on Sunday. Don't (146)__ out on these deals!", 
    qs: [
      {a: ["(A) reduced", "(B) raised", "(C) risen", "(D) grow"], c: 0},
      {a: ["(A) on", "(B) in", "(C) at", "(D) to"], c: 0},
      {a: ["(A) ends", "(B) end", "(C) ending", "(D) ended"], c: 0},
      {a: ["(A) miss", "(B) missing", "(C) missed", "(D) mess"], c: 0}
    ]
  }
];

p6_texts.forEach(txt => {
  txt.qs.forEach((qItem) => {
    part6.push(q(p6_id++, `Part 6 (${txt.t}): Choose the best word.`, qItem.a, qItem.c, "เลือกคำศัพท์ที่เหมาะสมกับบริบท", undefined, txt.c));
  });
});

// ============================================================================
// PART 7: READING COMPREHENSION (54 Questions)
// ============================================================================
const part7: Question[] = [];
let p7_id = 147;

// Interface สำหรับ Part 7
interface P7Passage {
  title: string;
  body: string;
  qs: { q: string; a: string[]; c: number }[];
}

// 1. Single Passages
const singlePassages: P7Passage[] = [
  { 
    title: "Email: Meeting Reschedule", 
    body: "From: Sarah Connor\nTo: Team\nSubject: Meeting Change\n\nDue to an urgent client request, the project meeting scheduled for tomorrow is moved to Friday at 10 AM in Room 303. Please bring your updated reports.", 
    qs: [
      { q: "Why was the meeting moved?", a: ["(A) Client request", "(B) Manager is sick", "(C) Room unavailable", "(D) Holiday"], c: 0 },
      { q: "When is the new meeting time?", a: ["(A) Friday at 10 AM", "(B) Tomorrow at 10 AM", "(C) Friday at 2 PM", "(D) Next week"], c: 0 },
      { q: "What are attendees asked to bring?", a: ["(A) Updated reports", "(B) Lunch", "(C) Laptops", "(D) Client files"], c: 0 }
    ]
  },
  { 
    title: "Advertisement: Shoe Sale", 
    body: "Step Up Shoe Store\n\nWeekend Flash Sale! Get 50% off all running shoes. Buy one pair of dress shoes, get the second pair for $10. Offer valid this Saturday and Sunday only at our Downtown location.", 
    qs: [
      { q: "What kind of shoes are 50% off?", a: ["(A) Running shoes", "(B) Dress shoes", "(C) Sandals", "(D) Boots"], c: 0 },
      { q: "What is the special offer for dress shoes?", a: ["(A) Buy 1 get 2nd for $10", "(B) 50% off", "(C) Free socks", "(D) $10 each"], c: 0 },
      { q: "Where is the sale taking place?", a: ["(A) Downtown location", "(B) Online", "(C) Mall branch", "(D) Outlet"], c: 0 }
    ]
  },
  { 
    title: "Notice: Parking Lot Maintenance", 
    body: "Attention Staff:\n\nParking Lot B will be closed for repaving from June 1st to June 3rd. Please park in Lot C or the street parking during this time. Vehicles left in Lot B will be towed at the owner's expense.", 
    qs: [
      { q: "Why is Lot B closed?", a: ["(A) For repaving", "(B) For an event", "(C) It is full", "(D) Cleaning"], c: 0 },
      { q: "Where should staff park?", a: ["(A) Lot C", "(B) Lot A", "(C) The garage", "(D) At home"], c: 0 },
      { q: "What happens to cars left in Lot B?", a: ["(A) They will be towed", "(B) They will be washed", "(C) They will get a ticket", "(D) Nothing"], c: 0 }
    ]
  },
  { 
    title: "Chat Log: Project Update", 
    body: "Sam (9:00): Did you finish the design draft?\nAnn (9:05): Almost. I just need to add the logo.\nSam (9:06): Great. Please send it by noon.\nAnn (9:07): Will do.", 
    qs: [
      { q: "What is Ann working on?", a: ["(A) Design draft", "(B) Budget", "(C) Schedule", "(D) Email"], c: 0 },
      { q: "What is missing from the draft?", a: ["(A) The logo", "(B) The text", "(C) The colors", "(D) The price"], c: 0 },
      { q: "When is the deadline?", a: ["(A) Noon", "(B) 5 PM", "(C) Tomorrow", "(D) 9 AM"], c: 0 }
    ]
  },
  { title: "Invoice", body: "Invoice #999\nService: Web Design\nHours: 10\nRate: $50/hr\nTotal: $500\nDue Date: Upon receipt.", qs: [{q: "What service was provided?", a:["(A) Web Design", "(B) Hosting", "(C) SEO", "(D) Repair"], c:0}, {q: "What is the total amount?", a:["(A) $500", "(B) $50", "(C) $100", "(D) $1000"], c:0}, {q: "When is payment due?", a:["(A) Upon receipt", "(B) In 30 days", "(C) Next week", "(D) Yesterday"], c:0}] },
  { title: "Menu", body: "Joe's Cafe\n- Coffee: $3\n- Sandwich: $8\n- Salad: $7\nCombo: Sandwich + Drink for $10.", qs: [{q: "How much is a salad?", a:["(A) $7", "(B) $8", "(C) $3", "(D) $10"], c:0}, {q: "What is in the combo?", a:["(A) Sandwich + Drink", "(B) Salad + Drink", "(C) Coffee + Cake", "(D) Soup + Salad"], c:0}, {q: "What costs $3?", a:["(A) Coffee", "(B) Tea", "(C) Water", "(D) Milk"], c:0}] },
  { title: "Job Ad", body: "Wanted: Chef. 5 years exp required. Must work weekends. Apply in person.", qs: [{q: "What job is advertised?", a:["(A) Chef", "(B) Waiter", "(C) Manager", "(D) Cleaner"], c:0}, {q: "How much experience is needed?", a:["(A) 5 years", "(B) 1 year", "(C) None", "(D) 10 years"], c:0}, {q: "How to apply?", a:["(A) In person", "(B) Email", "(C) Call", "(D) Fax"], c:0}] },
  { title: "Train Ticket", body: "Ticket: NY to Boston. Departs: 8:00 AM. Seat: 4A. Price: $80. Non-refundable.", qs: [{q: "What is the destination?", a:["(A) Boston", "(B) NY", "(C) DC", "(D) Philly"], c:0}, {q: "What is the seat number?", a:["(A) 4A", "(B) 8A", "(C) 1B", "(D) 2C"], c:0}, {q: "What is the policy?", a:["(A) Non-refundable", "(B) Flexible", "(C) Free food", "(D) Open seat"], c:0}] },
  { title: "Weather Alert", body: "Severe Storm Warning. Heavy rain expected tonight. Avoid driving if possible.", qs: [{q: "What is the warning about?", a:["(A) Severe Storm", "(B) Heatwave", "(C) Snow", "(D) Fog"], c:0}, {q: "When is rain expected?", a:["(A) Tonight", "(B) Now", "(C) Tomorrow", "(D) Weekends"], c:0}, {q: "What is the advice?", a:["(A) Avoid driving", "(B) Evacuate", "(C) Buy water", "(D) Stay awake"], c:0}] }
];

singlePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Passage: ${p.title}) ${qItem.q}`, qItem.a, qItem.c, "ค้นหาคำตอบจากเนื้อเรื่อง", undefined, p.body));
  });
});

// 2. Double Passages
interface P7DoublePassage {
  t: string;
  b: string;
  qs: { q: string; a: string[]; c: number }[];
}

const doublePassages: P7DoublePassage[] = [
  { 
    t: "Order & Email", 
    b: "Document 1: Order Form\nItem: Office Chair\nQty: 1\nPrice: $150\nDelivery: Standard (5 days)\n\nDocument 2: Email\nTo: Support\nFrom: Buyer\nSubject: Damaged Item\nMy order arrived today but the chair leg is broken. Please help.", 
    qs: [
      { q: "What item was ordered?", a: ["(A) Office Chair", "(B) Desk", "(C) Lamp", "(D) Sofa"], c: 0 },
      { q: "How much was the item?", a: ["(A) $150", "(B) $50", "(C) $100", "(D) $200"], c: 0 },
      { q: "What is the problem in the email?", a: ["(A) Item is broken", "(B) Item is late", "(C) Wrong item", "(D) Too expensive"], c: 0 },
      { q: "When is standard delivery?", a: ["(A) 5 days", "(B) 1 day", "(C) 2 weeks", "(D) Same day"], c: 0 },
      { q: "What does the buyer want?", a: ["(A) Help/Solution", "(B) A refund only", "(C) A discount", "(D) To return it"], c: 0 }
    ]
  },
  { 
    t: "Schedule & Memo", 
    b: "Document 1: Conference Schedule\n9:00 - Keynote\n10:30 - Marketing Workshop\n12:00 - Lunch\n\nDocument 2: Memo\nTo: Attendees\nNote: The Marketing Workshop has been moved to 1:00 PM due to technical issues.", 
    qs: [
      { q: "What time was the workshop originally?", a: ["(A) 10:30", "(B) 9:00", "(C) 12:00", "(D) 1:00"], c: 0 },
      { q: "What time is the new slot?", a: ["(A) 1:00 PM", "(B) 10:30 AM", "(C) 2:00 PM", "(D) 9:00 AM"], c: 0 },
      { q: "Why was it moved?", a: ["(A) Technical issues", "(B) Speaker sick", "(C) Room full", "(D) No lunch"], c: 0 },
      { q: "What happens at 9:00?", a: ["(A) Keynote", "(B) Lunch", "(C) Break", "(D) Reg"], c: 0 },
      { q: "Who is the memo for?", a: ["(A) Attendees", "(B) Speakers", "(C) Staff", "(D) Cleaners"], c: 0 }
    ]
  }
];

doublePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Double: ${p.t}) ${qItem.q}`, qItem.a, qItem.c, "ต้องดูข้อมูลจากเอกสารทั้งสองฉบับประกอบกัน", undefined, p.b));
  });
});

// 3. Triple Passages
const triplePassages: P7DoublePassage[] = [
  { 
    t: "Business Trip", 
    b: "Doc 1: Flight Itinerary\nDep: NY 8am\nArr: London 8pm\nDate: May 1st\n\nDoc 2: Hotel Booking\nGuest: John Doe\nCheck-in: May 1st\nCheck-out: May 5th\n\nDoc 3: Expense Report\nFlight: $500\nHotel: $400\nMeals: $100", 
    qs: [
      { q: "Where is John going?", a: ["(A) London", "(B) NY", "(C) Paris", "(D) Tokyo"], c: 0 },
      { q: "When does he arrive?", a: ["(A) May 1st", "(B) May 5th", "(C) April 30th", "(D) June 1st"], c: 0 },
      { q: "How many nights is he staying?", a: ["(A) 4 nights", "(B) 1 night", "(C) 5 nights", "(D) 3 nights"], c: 0 },
      { q: "How much was the flight?", a: ["(A) $500", "(B) $400", "(C) $100", "(D) $1000"], c: 0 },
      { q: "What is Doc 3?", a: ["(A) Expense Report", "(B) Receipt", "(C) Ticket", "(D) Menu"], c: 0 }
    ]
  },
  { 
    t: "Recruitment", 
    b: "Doc 1: Job Ad\nRole: Manager. Exp: 3+ yrs. Email resume to hr@co.com.\n\nDoc 2: Email\nFrom: Alice\nTo: HR\nAttached is my resume. I have 5 years exp.\n\nDoc 3: Interview Invite\nDear Alice, can you interview on Monday?", 
    qs: [
      { q: "What job is advertised?", a: ["(A) Manager", "(B) Clerk", "(C) CEO", "(D) Intern"], c: 0 },
      { q: "How many years experience does Alice have?", a: ["(A) 5 years", "(B) 3 years", "(C) 1 year", "(D) None"], c: 0 },
      { q: "Does Alice meet the requirements?", a: ["(A) Yes", "(B) No", "(C) Maybe", "(D) Unknown"], c: 0 },
      { q: "What happened next?", a: ["(A) She got an interview", "(B) She was rejected", "(C) She quit", "(D) She hired"], c: 0 },
      { q: "When is the interview?", a: ["(A) Monday", "(B) Tuesday", "(C) Friday", "(D) Sunday"], c: 0 }
    ]
  },
  { 
    t: "Service Repair", 
    b: "Doc 1: Service Ticket\nIssue: AC Leaking. Priority: High.\n\nDoc 2: Quote\nParts: $50\nLabor: $100\nTotal: $150\n\nDoc 3: Customer Review\n'Fast service and fair price. AC works great now.'", 
    qs: [
      { q: "What is the issue?", a: ["(A) AC Leaking", "(B) Heater broken", "(C) Roof leak", "(D) Car engine"], c: 0 },
      { q: "What is the priority?", a: ["(A) High", "(B) Low", "(C) Medium", "(D) None"], c: 0 },
      { q: "What is the total cost?", a: ["(A) $150", "(B) $100", "(C) $50", "(D) $200"], c: 0 },
      { q: "Was the customer happy?", a: ["(A) Yes", "(B) No", "(C) Neutral", "(D) Angry"], c: 0 },
      { q: "What did the customer mention?", a: ["(A) Fast service", "(B) Bad food", "(C) Dirty floor", "(D) Loud noise"], c: 0 }
    ]
  }
];

triplePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Triple: ${p.t}) ${qItem.q}`, qItem.a, qItem.c, "ต้องวิเคราะห์ความสัมพันธ์ของทั้ง 3 เอกสาร", undefined, p.b));
  });
});

// ============================================================================
// EXPORT FINAL DATA
// ============================================================================
export const mockExamData: Record<string, ExamPart> = {
  'listening-part1': { id: 'listening-part1', title: 'Part 1: Photographs', description: 'เลือกประโยคที่อธิบายภาพได้ดีที่สุด', timeLimit: 300, questions: part1 },
  'listening-part2': { id: 'listening-part2', title: 'Part 2: Q&A', description: 'เลือกคำตอบที่เหมาะสมที่สุดสำหรับคำถาม', timeLimit: 600, questions: part2 },
  'listening-part3': { id: 'listening-part3', title: 'Part 3: Conversations', description: 'อ่านบทสนทนาแล้วตอบคำถาม', timeLimit: 900, questions: part3 },
  'listening-part4': { id: 'listening-part4', title: 'Part 4: Short Talks', description: 'อ่านบทพูดแล้วตอบคำถาม', timeLimit: 900, questions: part4 },
  'reading-part5': { id: 'reading-part5', title: 'Part 5: Sentences', description: 'เลือกคำศัพท์หรือไวยากรณ์ที่ถูกต้อง', timeLimit: 900, questions: part5 },
  'reading-part6': { id: 'reading-part6', title: 'Part 6: Text Completion', description: 'เลือกคำที่หายไปในบทความ', timeLimit: 900, questions: part6 },
  'reading-part7': { id: 'reading-part7', title: 'Part 7: Reading Comp', description: 'อ่านบทความและตอบคำถาม', timeLimit: 3000, questions: part7 }
};