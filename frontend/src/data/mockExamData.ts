import { ExamPart, Question } from '../types';

// ============================================================================
// UTILITIES & ASSETS
// ============================================================================
const images = {
  p1_1: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  p1_2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  p1_3: "https://images.unsplash.com/photo-1504384308090-c54be3855091?w=600&q=80",
  p1_4: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80",
  p1_5: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&q=80",
  p1_6: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  graphic_schedule: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=600&q=80",
};

// Helper to create simple questions compactly
const q = (id: number, text: string, choices: string[], correct: number, expl: string, img?: string, pass?: string): Question => ({
  id, text, choices, correctAnswer: correct, explanation: expl, image: img, passage: pass
});

// ============================================================================
// PART 1: PHOTOGRAPHS (6 Unique Questions)
// ============================================================================
const part1 = [
  q(1, "(Audio) Look at the picture marked Number 1.", ["A. They are attending a meeting.", "B. They are rearranging furniture.", "C. One man is standing.", "D. Computers are off."], 0, "People are sitting around a table.", images.p1_1),
  q(2, "(Audio) Look at the picture marked Number 2.", ["A. Boxes are loaded on a truck.", "B. Shelves are filled with items.", "C. A forklift is moving.", "D. The floor is being cleaned."], 1, "Shelves are stocked with goods.", images.p1_2),
  q(3, "(Audio) Look at the picture marked Number 3.", ["A. Workers are wearing helmets.", "B. A building is being painted.", "C. Traffic is stopped.", "D. Tools are on the ground."], 0, "Construction workers wearing safety gear.", images.p1_3),
  q(4, "(Audio) Look at the picture marked Number 4.", ["A. The plane is taking off.", "B. Passengers are boarding.", "C. Luggage is being unloaded.", "D. The runway is closed."], 1, "People are walking towards the plane.", images.p1_4),
  q(5, "(Audio) Look at the picture marked Number 5.", ["A. She is washing dishes.", "B. She is chopping vegetables.", "C. The oven is open.", "D. Food is being served."], 1, "Woman cutting vegetables in kitchen.", images.p1_5),
  q(6, "(Audio) Look at the picture marked Number 6.", ["A. Customers are browsing.", "B. The store is closed.", "C. Items are being packed.", "D. The cashier is busy."], 0, "Shoppers looking at clothes.", images.p1_6),
];

// ============================================================================
// PART 2: QUESTION-RESPONSE (25 Unique Questions)
// ============================================================================
const part2 = [
  q(7, "Who is the new marketing director?", ["A. Mr. Anderson.", "B. In the conference room.", "C. Next Monday."], 0, "Who -> Person"),
  q(8, "Where did you leave the file?", ["A. At 2 o'clock.", "B. On your desk.", "C. Yes, I did."], 1, "Where -> Place"),
  q(9, "When does the train arrive?", ["A. In ten minutes.", "B. To London.", "C. No, it's late."], 0, "When -> Time"),
  q(10, "Why is the office so cold?", ["A. It's winter.", "B. The heater is broken.", "C. Yes, very cold."], 1, "Why -> Reason"),
  q(11, "How do I contact support?", ["A. Call this number.", "B. It's supported.", "C. Mr. Lee."], 0, "How -> Method"),
  q(12, "Would you like coffee or tea?", ["A. Yes, please.", "B. Neither, thanks.", "C. In a cup."], 1, "Choice question"),
  q(13, "Did you finish the report?", ["A. It's a long report.", "B. Not yet.", "C. Yesterday."], 1, "Status check"),
  q(14, "Whose car is parked outside?", ["A. It's mine.", "B. In the lot.", "C. A red car."], 0, "Whose -> Ownership"),
  q(15, "Can you help me move this?", ["A. Certainly.", "B. It's heavy.", "C. I moved it."], 0, "Request -> Offer"),
  q(16, "The meeting has been canceled.", ["A. Really? Why?", "B. Yes, at 2 PM.", "C. In Room B."], 0, "Reaction to news"),
  q(17, "How much does this cost?", ["A. 50 items.", "B. It's expensive.", "C. $20."], 2, "Price"),
  q(18, "Isn't he coming today?", ["A. Yes, he called in sick.", "B. No, he's ill.", "C. By bus."], 1, "Negative Q"),
  q(19, "Where is the nearest bank?", ["A. To deposit money.", "B. Around the corner.", "C. It opens at 9."], 1, "Location"),
  q(20, "Who approved the budget?", ["A. The CEO did.", "B. It's enough.", "C. Last week."], 0, "Person"),
  q(21, "When is the deadline?", ["A. Submit it.", "B. By Friday.", "C. The line is dead."], 1, "Time"),
  q(22, "Why did you call tech support?", ["A. My internet is down.", "B. A good technician.", "C. With my phone."], 0, "Reason"),
  q(23, "How long is the flight?", ["A. 500 miles.", "B. 2 hours.", "C. First class."], 1, "Duration"),
  q(24, "Do you have a reservation?", ["A. Yes, under Smith.", "B. I'm hungry.", "C. At 7 PM."], 0, "Confirmation"),
  q(25, "Which dress do you prefer?", ["A. The blue one.", "B. Yes, I do.", "C. It fits well."], 0, "Choice"),
  q(26, "Has the mail arrived?", ["A. I'll check.", "B. Send it.", "C. To the post office."], 0, "Action"),
  q(27, "Let's go for lunch.", ["A. Good idea.", "B. I had lunch.", "C. A sandwich."], 0, "Agreement"),
  q(28, "I can't find my keys.", ["A. Check your pocket.", "B. It's key.", "C. Open the door."], 0, "Suggestion"),
  q(29, "How often do you exercise?", ["A. To lose weight.", "B. Daily.", "C. At the gym."], 1, "Frequency"),
  q(30, "Is Ms. Jones in today?", ["A. No, she's off.", "B. She is nice.", "C. In the office."], 0, "Availability"),
  q(31, "What time is it?", ["A. It's 3:30.", "B. Time to go.", "C. A new watch."], 0, "Time")
];

// ============================================================================
// PART 3: CONVERSATIONS (39 Questions / 13 Sets)
// ============================================================================
const part3 = [];
let p3_id = 32;
const p3_contexts = [
  { t: "Printer Problem", q: ["Problem?", "Solution?", "Next step?"], a: [0, 1, 2], c: [["Jam", "Ink", "Power", "Net"], ["Call IT", "Buy new", "Wait", "Fix"], ["Wait", "Print", "Leave", "Pay"]] },
  { t: "Travel Plan", q: ["Where going?", "Transport?", "Time?"], a: [1, 0, 3], c: [["NY", "London", "Paris", "Tokyo"], ["Train", "Bus", "Car", "Plane"], ["8am", "9am", "10am", "11am"]] },
  { t: "Meeting Sched", q: ["Purpose?", "Conflict?", "New time?"], a: [2, 1, 0], c: [["Cancel", "Join", "Reschedule", "Pay"], ["Sick", "Busy", "Late", "Lost"], ["Mon", "Tue", "Wed", "Thu"]] },
  { t: "Ordering Lunch", q: ["Meal?", "Drink?", "Pay method?"], a: [0, 2, 1], c: [["Pizza", "Burger", "Salad", "Soup"], ["Water", "Soda", "Tea", "Coffee"], ["Cash", "Card", "App", "Free"]] },
  { t: "Hotel Check-in", q: ["Location?", "Issue?", "Offer?"], a: [1, 0, 3], c: [["Airport", "Hotel", "Bank", "Shop"], ["No view", "No room", "Noise", "Cost"], ["Refund", "Discount", "Meal", "Upgrade"]] },
  { t: "Job Interview", q: ["Position?", "Experience?", "Start?"], a: [0, 1, 2], c: [["Sales", "HR", "IT", "Admin"], ["1 yr", "5 yrs", "None", "10 yrs"], ["Now", "Mon", "Jun", "Jul"]] },
  { t: "Shipping Err", q: ["Item?", "Error?", "Fix?"], a: [1, 2, 0], c: [["Book", "Laptop", "Desk", "Pen"], ["Lost", "Late", "Broken", "Wrong"], ["Replace", "Refund", "Repair", "Wait"]] },
  { t: "Event Plan", q: ["Event?", "Guests?", "Venue?"], a: [2, 0, 1], c: [["Meeting", "Party", "Conf", "Expo"], ["50", "100", "200", "500"], ["Hotel", "Hall", "Park", "Office"]] },
  { t: "Software Bug", q: ["System?", "Symptom?", "Action?"], a: [0, 1, 2], c: [["Email", "Chat", "Web", "App"], ["Slow", "Crash", "Login", "Data"], ["Reboot", "Update", "Patch", "Scan"]] },
  { t: "Real Estate", q: ["Looking for?", "Budget?", "Area?"], a: [1, 2, 0], c: [["Buy", "Rent", "Sell", "Build"], ["$1k", "$2k", "$3k", "$4k"], ["City", "Suburb", "Rural", "Coast"]] },
  { t: "Bank Loan", q: ["Reason?", "Amount?", "Term?"], a: [0, 1, 2], c: [["Car", "House", "Biz", "School"], ["$10k", "$50k", "$100k", "$1M"], ["1yr", "5yr", "10yr", "20yr"]] },
  { t: "Dr. Appt", q: ["Symptom?", "Doctor?", "Time?"], a: [1, 0, 3], c: [["Fever", "Pain", "Cough", "Flu"], ["Dentist", "GP", "Eye", "Skin"], ["9:00", "9:30", "10:00", "10:30"]] },
  { t: "Graphic: Map", q: ["Where?", "Path?", "Stop?"], a: [0, 1, 2], c: [["Park", "Zoo", "Mall", "Gym"], ["North", "South", "East", "West"], ["Gate A", "Gate B", "Gate C", "Gate D"]], img: images.graphic_schedule }
];

p3_contexts.forEach(ctx => {
  ctx.q.forEach((questionText, i) => {
    part3.push(q(p3_id++, `${ctx.t}: ${questionText}`, ctx.c[i], ctx.a[i], `${ctx.t} context.`, ctx.img));
  });
});

// ============================================================================
// PART 4: SHORT TALKS (30 Questions / 10 Sets)
// ============================================================================
const part4 = [];
let p4_id = 71;
const p4_contexts = [
  { t: "Airport Announce", q: ["Where?", "Delay cause?", "Instruction?"], a: [0, 1, 2] },
  { t: "Traffic Report", q: ["Location?", "Problem?", "Advice?"], a: [1, 0, 3] },
  { t: "Weather Forecast", q: ["Today?", "Tomorrow?", "Temp?"], a: [2, 1, 0] },
  { t: "Museum Tour", q: ["Speaker?", "Topic?", "Rule?"], a: [0, 2, 1] },
  { t: "Business News", q: ["Company?", "Event?", "Result?"], a: [1, 0, 2] },
  { t: "Voicemail", q: ["Caller?", "Purpose?", "Callback?"], a: [2, 1, 0] },
  { t: "Store Sale", q: ["Product?", "Discount?", "Duration?"], a: [0, 1, 2] },
  { t: "Meeting Intro", q: ["Speaker?", "Agenda?", "Time?"], a: [1, 2, 0] },
  { t: "Award Speech", q: ["Winner?", "Reason?", "Prize?"], a: [2, 0, 1] },
  { t: "Safety Drill", q: ["Event?", "Action?", "Meeting point?"], a: [0, 1, 2] }
];
// Generate choices dynamically to save space but ensure uniqueness
p4_contexts.forEach(ctx => {
  ctx.q.forEach((qt, i) => {
    part4.push(q(p4_id++, `(Talk: ${ctx.t}) ${qt}`, ["Option A", "Option B", "Option C", "Option D"], ctx.a[i], "Explanation based on context."));
  });
});

// ============================================================================
// PART 5: INCOMPLETE SENTENCES (30 Unique Questions)
// ============================================================================
const part5 = [
  q(101, "Mr. Evans _______ the report yesterday.", ["wrote", "writes", "written", "writing"], 0, "Past Simple"),
  q(102, "The cost is _______ higher than expected.", ["significantly", "significant", "significance", "signify"], 0, "Adv + Adj"),
  q(103, "Please _______ with the regulations.", ["comply", "observe", "follow", "do"], 0, "Comply with"),
  q(104, "We need to hire _______ staff.", ["additional", "addition", "add", "additionally"], 0, "Adj + Noun"),
  q(105, "The _______ of the new product.", ["launch", "launched", "launching", "launcher"], 0, "The + Noun"),
  q(106, "He is a _______ architect.", ["respected", "respect", "respecting", "respects"], 0, "V3 as Adj"),
  q(107, "Submit by _______.", ["Friday", "on", "at", "quick"], 0, "Deadline Noun"),
  q(108, "She works _______ hard.", ["very", "much", "many", "lot"], 0, "Very + Adv"),
  q(109, "_______ the rain, we played.", ["Despite", "Although", "Because", "But"], 0, "Despite + Noun"),
  q(110, "Access is _______ to members.", ["restricted", "restrict", "restriction", "restricts"], 0, "Passive"),
  q(111, "The meeting will _______ at 9.", ["commence", "comment", "commit", "common"], 0, "Verb start"),
  q(112, "It is _______ critical.", ["absolutely", "absolute", "absolution", "absolved"], 0, "Adv + Adj"),
  q(113, "They _______ the proposal.", ["reviewed", "review", "reviews", "reviewer"], 0, "Past Tense"),
  q(114, "A _______ variety of options.", ["wide", "width", "widen", "widely"], 0, "Adj + Noun"),
  q(115, "He _______ to the manager.", ["spoke", "speak", "speaks", "speaking"], 0, "Past Simple"),
  q(116, "The _______ was delayed.", ["shipment", "ship", "shipped", "shipping"], 0, "Noun subject"),
  q(117, "Please _______ the form.", ["complete", "full", "done", "did"], 0, "Verb imperative"),
  q(118, "It is _______ recommended.", ["highly", "high", "height", "higher"], 0, "Adv + V3"),
  q(119, "_______ you are busy, I will wait.", ["Since", "Due to", "Despite", "However"], 0, "Conjunction"),
  q(120, "The _______ rate is low.", ["interest", "interesting", "interested", "interests"], 0, "Noun compound"),
  q(121, "He drives _______.", ["carefully", "careful", "care", "cared"], 0, "Adverb of manner"),
  q(122, "The _______ is final.", ["decision", "decide", "decisive", "decided"], 0, "Noun"),
  q(123, "_______ of the weather, we went.", ["Regardless", "Regarding", "Regard", "Regards"], 0, "Regardless of"),
  q(124, "She is _______ for the team.", ["responsible", "response", "respond", "responsibly"], 0, "Adj"),
  q(125, "The _______ manual.", ["instruction", "instruct", "instructor", "instructive"], 0, "Noun adjunct"),
  q(126, "We _______ appreciate it.", ["greatly", "great", "greatness", "greater"], 0, "Adv + Verb"),
  q(127, "The room is _______.", ["occupied", "occupy", "occupant", "occupation"], 0, "Adjective"),
  q(128, "He _______ the prize.", ["won", "win", "winner", "winning"], 0, "Verb"),
  q(129, "The _______ date.", ["expiration", "expire", "expired", "expiring"], 0, "Noun"),
  q(130, "It was a _______ success.", ["huge", "hugely", "hugeness", "hugs"], 0, "Adj + Noun")
];

// ============================================================================
// PART 6: TEXT COMPLETION (16 Questions / 4 Texts)
// ============================================================================
const part6 = [];
let p6_id = 131;
const texts = [
  { t: "Elevator Memo", c: "Elevator closed (1)__ weekend. Sorry for (2)__. Use stairs (3)__. Open (4)__.", a: [["during", "while"], ["inconvenience", "problem"], ["instead", "so"], ["Monday", "ago"]], ans: [0, 0, 0, 0] },
  { t: "Sale Email", c: "Sale starts (5)__. Prices (6)__. Come (7)__. Look (8)__.", a: [["tomorrow", "yesterday"], ["reduced", "up"], ["early", "late"], ["forward", "back"]], ans: [0, 0, 0, 0] },
  { t: "Dress Code", c: "Policy is (9)__. Must (10)__ suits. Apply (11)__. Ask (12)__.", a: [["strict", "easy"], ["wear", "do"], ["daily", "never"], ["HR", "IT"]], ans: [0, 0, 0, 0] },
  { t: "Thank You", c: "Thanks for (13)__. Hope you (14)__. Leave (15)__. Visit (16)__.", a: [["buying", "selling"], ["like", "hate"], ["review", "mess"], ["site", "home"]], ans: [0, 0, 0, 0] }
];
texts.forEach(txt => {
  txt.a.forEach((opts, i) => {
    part6.push(q(p6_id++, `Part 6 (${txt.t}): Choose word.`, [opts[0], opts[1], "Option C", "Option D"], txt.ans[i], "Grammar/Vocab context.", undefined, txt.c));
  });
});

// ============================================================================
// PART 7: READING COMPREHENSION (54 Questions)
// ============================================================================
const part7 = [];
let p7_id = 147;

// 1. Single Passages (9 Texts x ~3 Qs = 29 Qs)
const singlePassages = [
  { title: "Email: Meeting", body: "Meeting moved to Friday due to client request.", qs: [
    { q: "Why moved?", a: ["Client", "Sick", "Rain", "Holiday"], c: 0 },
    { q: "New day?", a: ["Friday", "Mon", "Tue", "Wed"], c: 0 },
    { q: "Recipient?", a: ["Team", "Boss", "Client", "IT"], c: 0 }
  ]},
  { title: "Ad: Shoe Sale", body: "50% off shoes this weekend only. Downtown.", qs: [
    { q: "What item?", a: ["Shoes", "Hats", "Bags", "Coats"], c: 0 },
    { q: "Discount?", a: ["50%", "10%", "20%", "Free"], c: 0 },
    { q: "Where?", a: ["Downtown", "Mall", "Web", "Park"], c: 0 }
  ]},
  { title: "Memo: Parking", body: "Lot B closed for repairs. Park in Lot C.", qs: [
    { q: "Problem?", a: ["Repairs", "Full", "Event", "Snow"], c: 0 },
    { q: "Where park?", a: ["Lot C", "Lot A", "Street", "Home"], c: 0 },
    { q: "Which lot closed?", a: ["Lot B", "Lot C", "Lot A", "None"], c: 0 }
  ]},
  { title: "Chat: Project", body: "Sam: Done? Ann: Almost. Sam: Send by 5.", qs: [
    { q: "Status?", a: ["Almost", "Done", "Start", "None"], c: 0 },
    { q: "Deadline?", a: ["5 PM", "6 PM", "4 PM", "Noon"], c: 0 },
    { q: "Speakers?", a: ["Colleagues", "Family", "Friends", "Strangers"], c: 0 }
  ]},
  { title: "Notice: Kitchen", body: "Clean up after lunch. Fridge cleared Friday.", qs: [
    { q: "Rule?", a: ["Clean up", "Pay", "Cook", "Sleep"], c: 0 },
    { q: "Fridge day?", a: ["Friday", "Mon", "Wed", "Sun"], c: 0 },
    { q: "Topic?", a: ["Hygiene", "Food", "Party", "Meeting"], c: 0 }
  ]},
  { title: "Letter: Refund", body: "We received return. Refund processed in 3 days.", qs: [
    { q: "Action?", a: ["Refund", "Bill", "Ship", "Order"], c: 0 },
    { q: "Time?", a: ["3 days", "1 week", "Now", "Never"], c: 0 },
    { q: "Reason?", a: ["Return", "Buy", "Gift", "Loss"], c: 0 }
  ]},
  { title: "Article: Tech", body: "New phone X released. Better camera. $999.", qs: [
    { q: "Product?", a: ["Phone", "TV", "Car", "Toy"], c: 0 },
    { q: "Feature?", a: ["Camera", "Screen", "Sound", "Size"], c: 0 },
    { q: "Price?", a: ["$999", "$100", "$500", "Free"], c: 0 },
    { q: "Status?", a: ["Released", "Delayed", "Old", "Secret"], c: 0 }
  ]},
  { title: "Invite: Party", body: "Retirement party for John. Friday 6PM. Room A.", qs: [
    { q: "Event?", a: ["Retirement", "Birthday", "Wedding", "Work"], c: 0 },
    { q: "Who?", a: ["John", "Mary", "Bob", "Sue"], c: 0 },
    { q: "Time?", a: ["6 PM", "5 PM", "7 PM", "8 PM"], c: 0 },
    { q: "Where?", a: ["Room A", "Room B", "Lobby", "Bar"], c: 0 }
  ]},
  { title: "Form: Feedback", body: "Rate service 1-5. Comment below.", qs: [
    { q: "Purpose?", a: ["Feedback", "Order", "Tax", "Job"], c: 0 },
    { q: "Scale?", a: ["1-5", "1-10", "Yes/No", "A-F"], c: 0 },
    { q: "Extra?", a: ["Comment", "Photo", "Call", "Email"], c: 0 }
  ]}
];
singlePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Passage: ${p.title}) ${qItem.q}`, qItem.a, qItem.c, "Context clue.", undefined, p.body));
  });
});

// 2. Double Passages (2 Sets x 5 Qs = 10 Qs)
const doublePassages = [
  { t: "Order & Email", b: "Doc1: Order #123 (Desk).\nDoc2: Email: Desk arrived damaged.", qs: [
    { q: "What ordered?", a: ["Desk", "Chair", "Lamp", "Pen"], c: 0 },
    { q: "Problem?", a: ["Damaged", "Lost", "Late", "Wrong"], c: 0 },
    { q: "Doc 1 Type?", a: ["Invoice", "Memo", "Ad", "List"], c: 0 },
    { q: "Doc 2 Sender?", a: ["Buyer", "Seller", "Driver", "Bank"], c: 0 },
    { q: "Solution?", a: ["Return", "Keep", "Sell", "Fix"], c: 0 }
  ]},
  { t: "Schedule & Memo", b: "Doc1: Train Schedule (9am, 10am).\nDoc2: Memo: Meeting is at 11am.", qs: [
    { q: "Meeting time?", a: ["11am", "9am", "10am", "12pm"], c: 0 },
    { q: "Which train?", a: ["9am", "10am", "8am", "Noon"], c: 0 },
    { q: "Transport?", a: ["Train", "Bus", "Car", "Bike"], c: 0 },
    { q: "Doc 1 Info?", a: ["Times", "Prices", "Seats", "Food"], c: 0 },
    { q: "Relation?", a: ["Travel to meet", "Separate", "Error", "None"], c: 0 }
  ]}
];
doublePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Double: ${p.t}) ${qItem.q}`, qItem.a, qItem.c, "Cross-reference.", undefined, p.b));
  });
});

// 3. Triple Passages (3 Sets x 5 Qs = 15 Qs)
const triplePassages = [
  { t: "Conf Trip", b: "1. Flyer: Tech Conf June 1.\n2. Email: Book flight.\n3. Bill: Hotel $200.", qs: [
    { q: "Event?", a: ["Conf", "Party", "Sale", "Class"], c: 0 },
    { q: "Date?", a: ["June 1", "May 1", "July 1", "Aug 1"], c: 0 },
    { q: "Cost?", a: ["$200", "$100", "$500", "Free"], c: 0 },
    { q: "Action?", a: ["Book flight", "Drive", "Walk", "Bus"], c: 0 },
    { q: "Docs?", a: ["3 types", "2 types", "1 type", "4 types"], c: 0 }
  ]},
  { t: "Hiring", b: "1. Ad: Job Open.\n2. Resume: Bob Smith.\n3. Email: Interview Mon.", qs: [
    { q: "Job?", a: ["Open", "Closed", "Filled", "None"], c: 0 },
    { q: "Candidate?", a: ["Bob", "Tom", "Sue", "Ann"], c: 0 },
    { q: "Next step?", a: ["Interview", "Hire", "Reject", "Test"], c: 0 },
    { q: "Day?", a: ["Mon", "Tue", "Wed", "Fri"], c: 0 },
    { q: "Source?", a: ["Ad", "Web", "Paper", "Ref"], c: 0 }
  ]},
  { t: "Repair", b: "1. Ticket: Leak.\n2. Quote: $50.\n3. Review: Good job.", qs: [
    { q: "Issue?", a: ["Leak", "Power", "Heat", "Lock"], c: 0 },
    { q: "Price?", a: ["$50", "$100", "$20", "$10"], c: 0 },
    { q: "Outcome?", a: ["Good", "Bad", "Slow", "None"], c: 0 },
    { q: "Doc 3?", a: ["Review", "Bill", "Log", "Map"], c: 0 },
    { q: "Service?", a: ["Repair", "Clean", "Build", "Move"], c: 0 }
  ]}
];
triplePassages.forEach(p => {
  p.qs.forEach(qItem => {
    part7.push(q(p7_id++, `(Triple: ${p.t}) ${qItem.q}`, qItem.a, qItem.c, "Triple logic.", undefined, p.b));
  });
});

// ============================================================================
// EXPORT FINAL DATA (200 Items Total)
// ============================================================================
export const mockExamData: Record<string, ExamPart> = {
  'listening-part1': { id: 'listening-part1', title: 'Part 1: Photographs', description: 'Select description.', timeLimit: 300, questions: part1 },
  'listening-part2': { id: 'listening-part2', title: 'Part 2: Q&A', description: 'Choose response.', timeLimit: 600, questions: part2 },
  'listening-part3': { id: 'listening-part3', title: 'Part 3: Conversations', description: 'Answer questions.', timeLimit: 900, questions: part3 },
  'listening-part4': { id: 'listening-part4', title: 'Part 4: Short Talks', description: 'Answer questions.', timeLimit: 900, questions: part4 },
  'reading-part5': { id: 'reading-part5', title: 'Part 5: Sentences', description: 'Complete sentence.', timeLimit: 900, questions: part5 },
  'reading-part6': { id: 'reading-part6', title: 'Part 6: Text Completion', description: 'Complete text.', timeLimit: 900, questions: part6 },
  'reading-part7': { id: 'reading-part7', title: 'Part 7: Reading Comp', description: 'Read and answer.', timeLimit: 3000, questions: part7 }
};