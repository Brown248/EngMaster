// frontend/src/data/vocabularyData.ts
import { Book, Layers, MessageCircle, Star, Zap } from 'lucide-react';

// 1. อัปเดต Interface เพื่อรองรับหมวดหมู่ใหม่
export interface VocabWord {
  word: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  category?: 'General' | 'Academic' | 'Business'; 
  topic?: string;       
  usage?: string;       
  level?: string;       
  special?: string;     
}

// 2. สร้างโครงสร้างข้อมูลสำหรับ UI หมวดหมู่
export interface SubCategory {
  id: string;
  label: string;
}

export interface MainCategory {
  id: string;
  label: string;
  icon: any;
  subCategories: SubCategory[];
}

export const VOCAB_CATEGORIES: MainCategory[] = [
  {
    id: 'Topic',
    label: 'หมวดตามหัวข้อ (Topics)',
    icon: Layers,
    subCategories: [
      { id: 'Food & Drink', label: 'อาหารและเครื่องดื่ม' },
      { id: 'Animals', label: 'สัตว์' },
      { id: 'Body & Health', label: 'ร่างกายและสุขภาพ' },
      { id: 'Clothes & Fashion', label: 'เสื้อผ้าและแฟชั่น' },
      { id: 'House & Furniture', label: 'บ้านและของใช้' },
      { id: 'Transportation', label: 'การเดินทาง' },
      { id: 'Places', label: 'สถานที่' },
      { id: 'Jobs', label: 'อาชีพ' },
      { id: 'Nature', label: 'ธรรมชาติและอากาศ' },
      { id: 'Technology', label: 'เทคโนโลยี' },
      { id: 'Business', label: 'ธุรกิจและการเงิน' },
    ]
  },
  {
    id: 'POS',
    label: 'หน้าที่คำ (Grammar)',
    icon: Book,
    subCategories: [
      { id: 'n.', label: 'Noun (คำนาม)' },
      { id: 'v.', label: 'Verb (คำกริยา)' },
      { id: 'adj.', label: 'Adjective (คำคุณศัพท์)' },
      { id: 'adv.', label: 'Adverb (คำวิเศษณ์)' },
      { id: 'prep.', label: 'Preposition (คำบุพบท)' },
      { id: 'conj.', label: 'Conjunction (คำเชื่อม)' },
      { id: 'pron.', label: 'Pronoun (คำสรรพนาม)' },
    ]
  },
  {
    id: 'Usage',
    label: 'การใช้งานจริง (Usage)',
    icon: MessageCircle,
    subCategories: [
      { id: 'Daily Life', label: 'ชีวิตประจำวัน' },
      { id: 'Conversation', label: 'บทสนทนา' },
      { id: 'Travel', label: 'การท่องเที่ยว' },
      { id: 'Work', label: 'การทำงาน' },
      { id: 'Feelings', label: 'ความรู้สึก' },
      { id: 'Shopping', label: 'การซื้อของ' },
    ]
  },
  {
    id: 'Level',
    label: 'ระดับความยาก (Level)',
    icon: Zap,
    subCategories: [
      { id: 'Beginner', label: 'ระดับต้น (Beginner)' },
      { id: 'Intermediate', label: 'ระดับกลาง (Intermediate)' },
      { id: 'Advanced', label: 'ระดับสูง (Advanced)' },
    ]
  },
  {
    id: 'Special',
    label: 'คำพิเศษ (Special)',
    icon: Star,
    subCategories: [
      { id: 'Idioms', label: 'สำนวน (Idioms)' },
      { id: 'Phrasal Verbs', label: 'กริยาวลี' },
      { id: 'Slang', label: 'คำสแลง' },
      { id: 'Academic', label: 'คำศัพท์วิชาการ' },
      { id: 'TOEIC', label: 'คำศัพท์ TOEIC' },
    ]
  }
];

// ตัวอย่างข้อมูล (ต้องไปไล่อัปเดตข้อมูลจริงให้ครบตาม Fields ใหม่)
export const vocabularyData: VocabWord[] = [
  { 
    word: "Ability", 
    meaning: "ความสามารถ", 
    partOfSpeech: "n.", 
    example: "She has the ability to learn quickly.", 
    category: "General",
    topic: "Body & Health", // ตัวอย่างการใส่ Topic
    level: "Beginner",
    usage: "Daily Life"
  },
  { 
    word: "Account", 
    meaning: "บัญชี", 
    partOfSpeech: "n.", 
    example: "I opened a new bank account.", 
    category: "Business",
    topic: "Business",
    usage: "Work"
  },
  // ... (ข้อมูลอื่นๆ)
  // หมายเหตุ: สำหรับข้อมูลเดิมที่ยังไม่ได้ใส่ topic/level/usage ระบบจะยังแสดงผลได้แต่อาจจะไม่ถูกกรองในหมวดใหม่
    // =================================================================
  // A
  // =================================================================
  { word: "Above", meaning: "เหนือ, ข้างบน", partOfSpeech: "prep.", example: "The plane flew above the clouds.", category: "General" },
  { word: "Abroad", meaning: "ต่างประเทศ", partOfSpeech: "adv.", example: "He lived abroad for ten years.", category: "General" },
  { word: "Absorb", meaning: "ดูดซึม", partOfSpeech: "v.", example: "Plants absorb sunlight.", category: "General" },
  { word: "Accept", meaning: "ยอมรับ", partOfSpeech: "v.", example: "I accept your apology.", category: "General" },
  { word: "Acquisition", meaning: "การเข้าซื้อกิจการ", partOfSpeech: "n.", example: "The acquisition was finalized yesterday.", category: "Business" },
  { word: "Agenda", meaning: "วาระการประชุม", partOfSpeech: "n.", example: "What's on the agenda today?", category: "Business" },
  { word: "Asset", meaning: "ทรัพย์สิน", partOfSpeech: "n.", example: "Data is a valuable asset.", category: "Business" },
  { word: "Abstract", meaning: "นามธรรม", partOfSpeech: "adj.", example: "Abstract art is open to interpretation.", category: "Academic" },
  { word: "Accumulate", meaning: "สะสม", partOfSpeech: "v.", example: "Evidence tends to accumulate over time.", category: "Academic" },
  { word: "Accuracy", meaning: "ความแม่นยำ", partOfSpeech: "n.", example: "Check the accuracy of the results.", category: "Academic" },
  { word: "Analyze", meaning: "วิเคราะห์", partOfSpeech: "v.", example: "We need to analyze the data.", category: "Academic" },

  // =================================================================
  // B
  // =================================================================
  { word: "Balance", meaning: "สมดุล", partOfSpeech: "n.", example: "Keep your balance.", category: "General" },
  { word: "Basic", meaning: "พื้นฐาน", partOfSpeech: "adj.", example: "It is a basic need.", category: "General" },
  { word: "Beautiful", meaning: "สวยงาม", partOfSpeech: "adj.", example: "What a beautiful view.", category: "General" },
  { word: "Behavior", meaning: "พฤติกรรม", partOfSpeech: "n.", example: "Good behavior is rewarded.", category: "General" },
  { word: "Believe", meaning: "เชื่อ", partOfSpeech: "v.", example: "I believe in miracles.", category: "General" },
  { word: "Bankruptcy", meaning: "การล้มละลาย", partOfSpeech: "n.", example: "The firm faced bankruptcy.", category: "Business" },
  { word: "Benchmark", meaning: "เกณฑ์มาตรฐาน", partOfSpeech: "n.", example: "This is the industry benchmark.", category: "Business" },
  { word: "Bid", meaning: "ประมูล", partOfSpeech: "v.", example: "They bid for the contract.", category: "Business" },
  { word: "Brand", meaning: "แบรนด์", partOfSpeech: "n.", example: "They launched a new brand.", category: "Business" },
  { word: "Bias", meaning: "อคติ", partOfSpeech: "n.", example: "Avoid bias in your research.", category: "Academic" },
  { word: "Bibliography", meaning: "บรรณานุกรม", partOfSpeech: "n.", example: "Include a bibliography at the end.", category: "Academic" },
  { word: "Biology", meaning: "ชีววิทยา", partOfSpeech: "n.", example: "Biology is the study of life.", category: "Academic" },
  { word: "Brief", meaning: "สรุปย่อ", partOfSpeech: "adj.", example: "Give a brief summary.", category: "Academic" },

  // =================================================================
  // C
  // =================================================================
  { word: "Calculate", meaning: "คำนวณ", partOfSpeech: "v.", example: "Calculate the total cost.", category: "General" },
  { word: "Calm", meaning: "สงบ", partOfSpeech: "adj.", example: "Stay calm.", category: "General" },
  { word: "Careful", meaning: "ระมัดระวัง", partOfSpeech: "adj.", example: "Be careful with that glass.", category: "General" },
  { word: "Cause", meaning: "สาเหตุ", partOfSpeech: "n.", example: "The cause of the fire is unknown.", category: "General" },
  { word: "Challenge", meaning: "ความท้าทาย", partOfSpeech: "n.", example: "I like a challenge.", category: "General" },
  { word: "Capital", meaning: "เงินทุน", partOfSpeech: "n.", example: "They raised capital for the startup.", category: "Business" },
  { word: "Client", meaning: "ลูกค้า", partOfSpeech: "n.", example: "The client is very happy.", category: "Business" },
  { word: "Competitor", meaning: "คู่แข่ง", partOfSpeech: "n.", example: "Know your competitor.", category: "Business" },
  { word: "Consumer", meaning: "ผู้บริโภค", partOfSpeech: "n.", example: "Consumer confidence is up.", category: "Business" },
  { word: "Category", meaning: "หมวดหมู่", partOfSpeech: "n.", example: "Sort items by category.", category: "Academic" },
  { word: "Chronological", meaning: "ตามลำดับเวลา", partOfSpeech: "adj.", example: "In chronological order.", category: "Academic" },
  { word: "Citation", meaning: "การอ้างอิง", partOfSpeech: "n.", example: "Correct citation is important.", category: "Academic" },
  { word: "Clarify", meaning: "ทำให้กระจ่าง", partOfSpeech: "v.", example: "Please clarify your point.", category: "Academic" },

  // =================================================================
  // D
  // =================================================================
  { word: "Damage", meaning: "ความเสียหาย", partOfSpeech: "n.", example: "The storm caused damage.", category: "General" },
  { word: "Dangerous", meaning: "อันตราย", partOfSpeech: "adj.", example: "It is dangerous to touch.", category: "General" },
  { word: "Decide", meaning: "ตัดสินใจ", partOfSpeech: "v.", example: "I cannot decide yet.", category: "General" },
  { word: "Describe", meaning: "บรรยาย", partOfSpeech: "v.", example: "Describe what you saw.", category: "General" },
  { word: "Difficult", meaning: "ยาก", partOfSpeech: "adj.", example: "The test was difficult.", category: "General" },
  { word: "Deadline", meaning: "วันกำหนดส่ง", partOfSpeech: "n.", example: "The deadline is tomorrow.", category: "Business" },
  { word: "Debt", meaning: "หนี้สิน", partOfSpeech: "n.", example: "They are in debt.", category: "Business" },
  { word: "Deficit", meaning: "การขาดดุล", partOfSpeech: "n.", example: "Budget deficit.", category: "Business" },
  { word: "Demand", meaning: "อุปสงค์, ความต้องการ", partOfSpeech: "n.", example: "Supply and demand.", category: "Business" },
  { word: "Data", meaning: "ข้อมูล", partOfSpeech: "n.", example: "Collect the data.", category: "Academic" },
  { word: "Debate", meaning: "การถกเถียง", partOfSpeech: "n.", example: "A heated debate.", category: "Academic" },
  { word: "Define", meaning: "นิยาม", partOfSpeech: "v.", example: "Define the term clearly.", category: "Academic" },
  { word: "Demonstrate", meaning: "สาธิต", partOfSpeech: "v.", example: "Demonstrate how it works.", category: "Academic" },

  // =================================================================
  // E
  // =================================================================
  { word: "Early", meaning: "เช้า, ก่อนเวลา", partOfSpeech: "adv.", example: "I woke up early.", category: "General" },
  { word: "Easy", meaning: "ง่าย", partOfSpeech: "adj.", example: "This game is easy.", category: "General" },
  { word: "Effect", meaning: "ผลกระทบ", partOfSpeech: "n.", example: "The effect was immediate.", category: "General" },
  { word: "Energy", meaning: "พลังงาน", partOfSpeech: "n.", example: "Save energy.", category: "General" },
  { word: "Enjoy", meaning: "สนุก", partOfSpeech: "v.", example: "Enjoy the party.", category: "General" },
  { word: "Earnings", meaning: "รายได้", partOfSpeech: "n.", example: "Report your earnings.", category: "Business" },
  { word: "Economy", meaning: "เศรษฐกิจ", partOfSpeech: "n.", example: "The global economy.", category: "Business" },
  { word: "Efficiency", meaning: "ประสิทธิภาพ", partOfSpeech: "n.", example: "Improve efficiency.", category: "Business" },
  { word: "Entrepreneur", meaning: "ผู้ประกอบการ", partOfSpeech: "n.", example: "He is a young entrepreneur.", category: "Business" },
  { word: "Element", meaning: "องค์ประกอบ", partOfSpeech: "n.", example: "A key element of the story.", category: "Academic" },
  { word: "Empirical", meaning: "เชิงประจักษ์", partOfSpeech: "adj.", example: "Empirical evidence.", category: "Academic" },
  { word: "Evaluate", meaning: "ประเมิน", partOfSpeech: "v.", example: "Evaluate the student's progress.", category: "Academic" },
  { word: "Evidence", meaning: "หลักฐาน", partOfSpeech: "n.", example: "There is no evidence.", category: "Academic" },

  // =================================================================
  // F
  // =================================================================
  { word: "Face", meaning: "เผชิญหน้า", partOfSpeech: "v.", example: "Face your fears.", category: "General" },
  { word: "Fact", meaning: "ข้อเท็จจริง", partOfSpeech: "n.", example: "Is that a fact?", category: "General" },
  { word: "Fail", meaning: "ล้มเหลว", partOfSpeech: "v.", example: "Don't be afraid to fail.", category: "General" },
  { word: "Famous", meaning: "มีชื่อเสียง", partOfSpeech: "adj.", example: "A famous actor.", category: "General" },
  { word: "Favorite", meaning: "ที่ชอบที่สุด", partOfSpeech: "adj.", example: "My favorite color is blue.", category: "General" },
  { word: "Facility", meaning: "สิ่งอำนวยความสะดวก", partOfSpeech: "n.", example: "New manufacturing facility.", category: "Business" },
  { word: "Finance", meaning: "การเงิน", partOfSpeech: "n.", example: "Corporate finance.", category: "Business" },
  { word: "Fiscal", meaning: "งบประมาณ", partOfSpeech: "adj.", example: "Fiscal year.", category: "Business" },
  { word: "Forecast", meaning: "พยากรณ์", partOfSpeech: "n.", example: "Sales forecast.", category: "Business" },
  { word: "Factor", meaning: "ปัจจัย", partOfSpeech: "n.", example: "A contributing factor.", category: "Academic" },
  { word: "Formula", meaning: "สูตร", partOfSpeech: "n.", example: "Mathematical formula.", category: "Academic" },
  { word: "Foundation", meaning: "พื้นฐาน", partOfSpeech: "n.", example: "Lay the foundation.", category: "Academic" },
  { word: "Function", meaning: "หน้าที่", partOfSpeech: "n.", example: "The function of the heart.", category: "Academic" },

  // =================================================================
  // G
  // =================================================================
  { word: "Gain", meaning: "ได้รับ", partOfSpeech: "v.", example: "Gain weight.", category: "General" },
  { word: "General", meaning: "ทั่วไป", partOfSpeech: "adj.", example: "In general.", category: "General" },
  { word: "Generous", meaning: "ใจกว้าง", partOfSpeech: "adj.", example: "He is very generous.", category: "General" },
  { word: "Gift", meaning: "ของขวัญ", partOfSpeech: "n.", example: "A birthday gift.", category: "General" },
  { word: "Goal", meaning: "เป้าหมาย", partOfSpeech: "n.", example: "Score a goal.", category: "General" },
  { word: "Global", meaning: "ระดับโลก", partOfSpeech: "adj.", example: "Global market.", category: "Business" },
  { word: "Goods", meaning: "สินค้า", partOfSpeech: "n.", example: "Imported goods.", category: "Business" },
  { word: "Gross", meaning: "รวม", partOfSpeech: "adj.", example: "Gross income.", category: "Business" },
  { word: "Growth", meaning: "การเติบโต", partOfSpeech: "n.", example: "Business growth.", category: "Business" },
  { word: "Gap", meaning: "ช่องว่าง", partOfSpeech: "n.", example: "Generation gap.", category: "Academic" },
  { word: "Generate", meaning: "สร้าง", partOfSpeech: "v.", example: "Generate ideas.", category: "Academic" },
  { word: "Genetic", meaning: "ทางพันธุกรรม", partOfSpeech: "adj.", example: "Genetic disorder.", category: "Academic" },
  { word: "Graph", meaning: "กราฟ", partOfSpeech: "n.", example: "Plot the graph.", category: "Academic" },

  // =================================================================
  // H
  // =================================================================
  { word: "Habit", meaning: "นิสัย", partOfSpeech: "n.", example: "Break a bad habit.", category: "General" },
  { word: "Happen", meaning: "เกิดขึ้น", partOfSpeech: "v.", example: "What happened?", category: "General" },
  { word: "Happy", meaning: "มีความสุข", partOfSpeech: "adj.", example: "I am happy.", category: "General" },
  { word: "Healthy", meaning: "สุขภาพดี", partOfSpeech: "adj.", example: "Healthy food.", category: "General" },
  { word: "Helpful", meaning: "มีประโยชน์", partOfSpeech: "adj.", example: "Thank you, that was helpful.", category: "General" },
  { word: "Headquarters", meaning: "สำนักงานใหญ่", partOfSpeech: "n.", example: "Based at headquarters.", category: "Business" },
  { word: "Hire", meaning: "จ้าง", partOfSpeech: "v.", example: "You're hired.", category: "Business" },
  { word: "Human Resources", meaning: "ทรัพยากรบุคคล", partOfSpeech: "n.", example: "Talk to HR.", category: "Business" },
  { word: "Hype", meaning: "การสร้างกระแส", partOfSpeech: "n.", example: "Marketing hype.", category: "Business" },
  { word: "Hierarchy", meaning: "ลำดับชั้น", partOfSpeech: "n.", example: "Social hierarchy.", category: "Academic" },
  { word: "History", meaning: "ประวัติศาสตร์", partOfSpeech: "n.", example: "Ancient history.", category: "Academic" },
  { word: "Hypothesis", meaning: "สมมติฐาน", partOfSpeech: "n.", example: "Test the hypothesis.", category: "Academic" },
  { word: "Horizontal", meaning: "แนวนอน", partOfSpeech: "adj.", example: "Horizontal line.", category: "Academic" },

  // =================================================================
  // I
  // =================================================================
  { word: "Idea", meaning: "ความคิด", partOfSpeech: "n.", example: "I have an idea.", category: "General" },
  { word: "Ignore", meaning: "เพิกเฉย", partOfSpeech: "v.", example: "Don't ignore me.", category: "General" },
  { word: "Imagine", meaning: "จินตนาการ", partOfSpeech: "v.", example: "Imagine a world without war.", category: "General" },
  { word: "Important", meaning: "สำคัญ", partOfSpeech: "adj.", example: "It is very important.", category: "General" },
  { word: "Improve", meaning: "ปรับปรุง", partOfSpeech: "v.", example: "Improve your skills.", category: "General" },
  { word: "Import", meaning: "นำเข้า", partOfSpeech: "v.", example: "Import goods.", category: "Business" },
  { word: "Incentive", meaning: "แรงจูงใจ", partOfSpeech: "n.", example: "Bonus incentive.", category: "Business" },
  { word: "Income", meaning: "รายได้", partOfSpeech: "n.", example: "Annual income.", category: "Business" },
  { word: "Investment", meaning: "การลงทุน", partOfSpeech: "n.", example: "Return on investment.", category: "Business" },
  { word: "Identify", meaning: "ระบุ", partOfSpeech: "v.", example: "Identify the problem.", category: "Academic" },
  { word: "Illustrate", meaning: "แสดงให้เห็น", partOfSpeech: "v.", example: "This example illustrates the point.", category: "Academic" },
  { word: "Imply", meaning: "นัย", partOfSpeech: "v.", example: "What do you imply?", category: "Academic" },
  { word: "Indicate", meaning: "บ่งชี้", partOfSpeech: "v.", example: "Studies indicate that...", category: "Academic" },

  // =================================================================
  // J
  // =================================================================
  { word: "Job", meaning: "งาน", partOfSpeech: "n.", example: "I need a job.", category: "General" },
  { word: "Join", meaning: "เข้าร่วม", partOfSpeech: "v.", example: "Join the club.", category: "General" },
  { word: "Joke", meaning: "เรื่องตลก", partOfSpeech: "n.", example: "Tell a joke.", category: "General" },
  { word: "Journey", meaning: "การเดินทาง", partOfSpeech: "n.", example: "Safe journey.", category: "General" },
  { word: "Joy", meaning: "ความปิติ", partOfSpeech: "n.", example: "Jump for joy.", category: "General" },
  { word: "Joint Venture", meaning: "การร่วมทุน", partOfSpeech: "n.", example: "Form a joint venture.", category: "Business" },
  { word: "Journal", meaning: "บันทึกรายวัน", partOfSpeech: "n.", example: "Keep a business journal.", category: "Business" },
  { word: "Junior", meaning: "ระดับต้น", partOfSpeech: "adj.", example: "Junior executive.", category: "Business" },
  { word: "Jurisdiction", meaning: "เขตอำนาจศาล", partOfSpeech: "n.", example: "Legal jurisdiction.", category: "Business" },
  { word: "Journal", meaning: "วารสารวิชาการ", partOfSpeech: "n.", example: "Published in a journal.", category: "Academic" },
  { word: "Judgement", meaning: "การพิจารณา", partOfSpeech: "n.", example: "Use your best judgement.", category: "Academic" },
  { word: "Justify", meaning: "ให้เหตุผล", partOfSpeech: "v.", example: "Justify your answer.", category: "Academic" },
  { word: "Juvenile", meaning: "เยาวชน", partOfSpeech: "adj.", example: "Juvenile delinquent.", category: "Academic" },

  // =================================================================
  // K
  // =================================================================
  { word: "Keep", meaning: "เก็บ", partOfSpeech: "v.", example: "Keep it safe.", category: "General" },
  { word: "Key", meaning: "กุญแจ", partOfSpeech: "n.", example: "Lost my key.", category: "General" },
  { word: "Kind", meaning: "ใจดี", partOfSpeech: "adj.", example: "Be kind to others.", category: "General" },
  { word: "Know", meaning: "รู้", partOfSpeech: "v.", example: "I don't know.", category: "General" },
  { word: "Knowledge", meaning: "ความรู้", partOfSpeech: "n.", example: "Knowledge is power.", category: "General" },
  { word: "Kickoff", meaning: "เริ่มต้น", partOfSpeech: "n.", example: "Project kickoff.", category: "Business" },
  { word: "KPI", meaning: "ดัชนีชี้วัด", partOfSpeech: "n.", example: "Meet the KPIs.", category: "Business" },
  { word: "Keynote", meaning: "ปาฐกถา", partOfSpeech: "n.", example: "Keynote speaker.", category: "Business" },
  { word: "Keyword", meaning: "คำหลัก", partOfSpeech: "n.", example: "SEO keywords.", category: "Business" },
  { word: "Kinetic", meaning: "จลน์", partOfSpeech: "adj.", example: "Kinetic energy.", category: "Academic" },
  { word: "Kingdom", meaning: "อาณาจักร", partOfSpeech: "n.", example: "Animal kingdom.", category: "Academic" },
  { word: "Knowledgeable", meaning: "รอบรู้", partOfSpeech: "adj.", example: "He is knowledgeable.", category: "Academic" },

  // =================================================================
  // L
  // =================================================================
  { word: "Language", meaning: "ภาษา", partOfSpeech: "n.", example: "English language.", category: "General" },
  { word: "Large", meaning: "ใหญ่", partOfSpeech: "adj.", example: "A large pizza.", category: "General" },
  { word: "Late", meaning: "สาย", partOfSpeech: "adj.", example: "Don't be late.", category: "General" },
  { word: "Laugh", meaning: "หัวเราะ", partOfSpeech: "v.", example: "Laugh out loud.", category: "General" },
  { word: "Learn", meaning: "เรียนรู้", partOfSpeech: "v.", example: "Learn to swim.", category: "General" },
  { word: "Launch", meaning: "เปิดตัว", partOfSpeech: "v.", example: "Product launch.", category: "Business" },
  { word: "Leadership", meaning: "ความเป็นผู้นำ", partOfSpeech: "n.", example: "Strong leadership.", category: "Business" },
  { word: "Lease", meaning: "เช่า", partOfSpeech: "v.", example: "Lease an office.", category: "Business" },
  { word: "Liability", meaning: "หนี้สิน, ความรับผิดชอบ", partOfSpeech: "n.", example: "Limited liability.", category: "Business" },
  { word: "Laboratory", meaning: "ห้องแล็บ", partOfSpeech: "n.", example: "Science laboratory.", category: "Academic" },
  { word: "Legal", meaning: "ทางกฎหมาย", partOfSpeech: "adj.", example: "Legal action.", category: "Academic" },
  { word: "Literature", meaning: "วรรณกรรม", partOfSpeech: "n.", example: "English literature.", category: "Academic" },
  { word: "Logic", meaning: "ตรรกะ", partOfSpeech: "n.", example: "Use logic.", category: "Academic" },

  // =================================================================
  // M
  // =================================================================
  { word: "Machine", meaning: "เครื่องจักร", partOfSpeech: "n.", example: "Washing machine.", category: "General" },
  { word: "Make", meaning: "ทำ", partOfSpeech: "v.", example: "Make a cake.", category: "General" },
  { word: "Manage", meaning: "จัดการ", partOfSpeech: "v.", example: "Manage your time.", category: "General" },
  { word: "Many", meaning: "มาก", partOfSpeech: "adj.", example: "Many friends.", category: "General" },
  { word: "Memory", meaning: "ความทรงจำ", partOfSpeech: "n.", example: "Good memory.", category: "General" },
  { word: "Management", meaning: "การจัดการ", partOfSpeech: "n.", example: "Project management.", category: "Business" },
  { word: "Market", meaning: "ตลาด", partOfSpeech: "n.", example: "Stock market.", category: "Business" },
  { word: "Marketing", meaning: "การตลาด", partOfSpeech: "n.", example: "Digital marketing.", category: "Business" },
  { word: "Merger", meaning: "การควบรวม", partOfSpeech: "n.", example: "Merger and acquisition.", category: "Business" },
  { word: "Major", meaning: "หลัก, ใหญ่", partOfSpeech: "adj.", example: "Major problem.", category: "Academic" },
  { word: "Maximum", meaning: "สูงสุด", partOfSpeech: "n.", example: "The maximum value.", category: "Academic" },
  { word: "Mechanism", meaning: "กลไก", partOfSpeech: "n.", example: "Defense mechanism.", category: "Academic" },
  { word: "Method", meaning: "วิธีการ", partOfSpeech: "n.", example: "Scientific method.", category: "Academic" },

  // =================================================================
  // N
  // =================================================================
  { word: "Name", meaning: "ชื่อ", partOfSpeech: "n.", example: "What is your name?", category: "General" },
  { word: "Narrow", meaning: "แคบ", partOfSpeech: "adj.", example: "Narrow street.", category: "General" },
  { word: "Nature", meaning: "ธรรมชาติ", partOfSpeech: "n.", example: "Mother nature.", category: "General" },
  { word: "Near", meaning: "ใกล้", partOfSpeech: "prep.", example: "Near the park.", category: "General" },
  { word: "New", meaning: "ใหม่", partOfSpeech: "adj.", example: "Happy new year.", category: "General" },
  { word: "Negotiate", meaning: "เจรจา", partOfSpeech: "v.", example: "Negotiate a deal.", category: "Business" },
  { word: "Net", meaning: "สุทธิ", partOfSpeech: "adj.", example: "Net worth.", category: "Business" },
  { word: "Network", meaning: "เครือข่าย", partOfSpeech: "n.", example: "Computer network.", category: "Business" },
  { word: "Niche", meaning: "ตลาดเฉพาะกลุ่ม", partOfSpeech: "n.", example: "Niche market.", category: "Business" },
  { word: "Negative", meaning: "เชิงลบ", partOfSpeech: "adj.", example: "Negative result.", category: "Academic" },
  { word: "Normal", meaning: "ปกติ", partOfSpeech: "adj.", example: "Normal distribution.", category: "Academic" },
  { word: "Notation", meaning: "สัญลักษณ์", partOfSpeech: "n.", example: "Musical notation.", category: "Academic" },
  { word: "Notion", meaning: "แนวคิด", partOfSpeech: "n.", example: "The notion of freedom.", category: "Academic" },

  // =================================================================
  // O
  // =================================================================
  { word: "Object", meaning: "วัตถุ", partOfSpeech: "n.", example: "Unknown object.", category: "General" },
  { word: "Observe", meaning: "สังเกต", partOfSpeech: "v.", example: "Observe the stars.", category: "General" },
  { word: "Obvious", meaning: "ชัดเจน", partOfSpeech: "adj.", example: "It's obvious.", category: "General" },
  { word: "Often", meaning: "บ่อยๆ", partOfSpeech: "adv.", example: "I come here often.", category: "General" },
  { word: "Old", meaning: "แก่, เก่า", partOfSpeech: "adj.", example: "Old house.", category: "General" },
  { word: "Objective", meaning: "วัตถุประสงค์", partOfSpeech: "n.", example: "Business objective.", category: "Business" },
  { word: "Offer", meaning: "เสนอ", partOfSpeech: "v.", example: "Make an offer.", category: "Business" },
  { word: "Office", meaning: "สำนักงาน", partOfSpeech: "n.", example: "Head office.", category: "Business" },
  { word: "Opportunity", meaning: "โอกาส", partOfSpeech: "n.", example: "Job opportunity.", category: "Business" },
  { word: "Occur", meaning: "เกิดขึ้น", partOfSpeech: "v.", example: "Mistakes occur.", category: "Academic" },
  { word: "Odd", meaning: "แปลก, เลขคี่", partOfSpeech: "adj.", example: "Odd number.", category: "Academic" },
  { word: "Opposite", meaning: "ตรงข้าม", partOfSpeech: "adj.", example: "Opposite direction.", category: "Academic" },
  { word: "Outcome", meaning: "ผลลัพธ์", partOfSpeech: "n.", example: "Final outcome.", category: "Academic" },

  // =================================================================
  // P
  // =================================================================
  { word: "Pain", meaning: "ความเจ็บปวด", partOfSpeech: "n.", example: "No pain, no gain.", category: "General" },
  { word: "Paint", meaning: "ทาสี", partOfSpeech: "v.", example: "Paint the wall.", category: "General" },
  { word: "Paper", meaning: "กระดาษ", partOfSpeech: "n.", example: "Piece of paper.", category: "General" },
  { word: "Part", meaning: "ส่วน", partOfSpeech: "n.", example: "Part of the team.", category: "General" },
  { word: "Patient", meaning: "อดทน", partOfSpeech: "adj.", example: "Be patient.", category: "General" },
  { word: "Partner", meaning: "หุ้นส่วน", partOfSpeech: "n.", example: "Business partner.", category: "Business" },
  { word: "Payment", meaning: "การชำระเงิน", partOfSpeech: "n.", example: "Payment due.", category: "Business" },
  { word: "Plan", meaning: "แผน", partOfSpeech: "n.", example: "Business plan.", category: "Business" },
  { word: "Profit", meaning: "กำไร", partOfSpeech: "n.", example: "Net profit.", category: "Business" },
  { word: "Parallel", meaning: "ขนาน", partOfSpeech: "adj.", example: "Parallel lines.", category: "Academic" },
  { word: "Percent", meaning: "ร้อยละ", partOfSpeech: "n.", example: "Ten percent.", category: "Academic" },
  { word: "Period", meaning: "ช่วงเวลา", partOfSpeech: "n.", example: "Time period.", category: "Academic" },
  { word: "Phase", meaning: "ระยะ", partOfSpeech: "n.", example: "Phase one.", category: "Academic" },

  // =================================================================
  // Q
  // =================================================================
  { word: "Quality", meaning: "คุณภาพ", partOfSpeech: "n.", example: "High quality.", category: "General" },
  { word: "Quantity", meaning: "ปริมาณ", partOfSpeech: "n.", example: "Large quantity.", category: "General" },
  { word: "Quick", meaning: "เร็ว", partOfSpeech: "adj.", example: "Quick snack.", category: "General" },
  { word: "Quiet", meaning: "เงียบ", partOfSpeech: "adj.", example: "Keep quiet.", category: "General" },
  { word: "Quit", meaning: "เลิก", partOfSpeech: "v.", example: "Don't quit.", category: "General" },
  { word: "Qualification", meaning: "คุณสมบัติ", partOfSpeech: "n.", example: "Job qualifications.", category: "Business" },
  { word: "Quarter", meaning: "ไตรมาส", partOfSpeech: "n.", example: "First quarter earnings.", category: "Business" },
  { word: "Quota", meaning: "โควต้า", partOfSpeech: "n.", example: "Sales quota.", category: "Business" },
  { word: "Quote", meaning: "ใบเสนอราคา", partOfSpeech: "n.", example: "Price quote.", category: "Business" },
  { word: "Qualitative", meaning: "เชิงคุณภาพ", partOfSpeech: "adj.", example: "Qualitative research.", category: "Academic" },
  { word: "Quantitative", meaning: "เชิงปริมาณ", partOfSpeech: "adj.", example: "Quantitative data.", category: "Academic" },
  { word: "Questionnaire", meaning: "แบบสอบถาม", partOfSpeech: "n.", example: "Fill out the questionnaire.", category: "Academic" },
  { word: "Quotient", meaning: "ผลหาร", partOfSpeech: "n.", example: "Intelligence quotient.", category: "Academic" },

  // =================================================================
  // R
  // =================================================================
  { word: "Rain", meaning: "ฝน", partOfSpeech: "n.", example: "Heavy rain.", category: "General" },
  { word: "Raise", meaning: "ยกขึ้น", partOfSpeech: "v.", example: "Raise your hand.", category: "General" },
  { word: "Rare", meaning: "หายาก", partOfSpeech: "adj.", example: "Rare gem.", category: "General" },
  { word: "Reach", meaning: "เอื้อมถึง", partOfSpeech: "v.", example: "Reach for the stars.", category: "General" },
  { word: "Read", meaning: "อ่าน", partOfSpeech: "v.", example: "Read a book.", category: "General" },
  { word: "Rate", meaning: "อัตรา", partOfSpeech: "n.", example: "Interest rate.", category: "Business" },
  { word: "Recruit", meaning: "รับสมัคร", partOfSpeech: "v.", example: "Recruit new staff.", category: "Business" },
  { word: "Refund", meaning: "คืนเงิน", partOfSpeech: "n.", example: "Ask for a refund.", category: "Business" },
  { word: "Retail", meaning: "ค้าปลีก", partOfSpeech: "n.", example: "Retail store.", category: "Business" },
  { word: "Random", meaning: "สุ่ม", partOfSpeech: "adj.", example: "Random selection.", category: "Academic" },
  { word: "Range", meaning: "ช่วง", partOfSpeech: "n.", example: "Range of motion.", category: "Academic" },
  { word: "Reaction", meaning: "ปฏิกิริยา", partOfSpeech: "n.", example: "Chemical reaction.", category: "Academic" },
  { word: "Research", meaning: "วิจัย", partOfSpeech: "n.", example: "Do research.", category: "Academic" },

  // =================================================================
  // S
  // =================================================================
  { word: "Safe", meaning: "ปลอดภัย", partOfSpeech: "adj.", example: "Safe trip.", category: "General" },
  { word: "Same", meaning: "เหมือนกัน", partOfSpeech: "adj.", example: "Same to you.", category: "General" },
  { word: "Save", meaning: "บันทึก, ประหยัด", partOfSpeech: "v.", example: "Save money.", category: "General" },
  { word: "Say", meaning: "พูด", partOfSpeech: "v.", example: "Say hello.", category: "General" },
  { word: "School", meaning: "โรงเรียน", partOfSpeech: "n.", example: "Go to school.", category: "General" },
  { word: "Sale", meaning: "การขาย", partOfSpeech: "n.", example: "For sale.", category: "Business" },
  { word: "Salary", meaning: "เงินเดือน", partOfSpeech: "n.", example: "High salary.", category: "Business" },
  { word: "Share", meaning: "หุ้น", partOfSpeech: "n.", example: "Buy shares.", category: "Business" },
  { word: "Strategy", meaning: "กลยุทธ์", partOfSpeech: "n.", example: "Marketing strategy.", category: "Business" },
  { word: "Sample", meaning: "ตัวอย่าง", partOfSpeech: "n.", example: "Blood sample.", category: "Academic" },
  { word: "Science", meaning: "วิทยาศาสตร์", partOfSpeech: "n.", example: "Social science.", category: "Academic" },
  { word: "Section", meaning: "ส่วน", partOfSpeech: "n.", example: "Section one.", category: "Academic" },
  { word: "Significant", meaning: "สำคัญ", partOfSpeech: "adj.", example: "Significant change.", category: "Academic" },

  // =================================================================
  // T
  // =================================================================
  { word: "Talk", meaning: "คุย", partOfSpeech: "v.", example: "Talk to me.", category: "General" },
  { word: "Tall", meaning: "สูง", partOfSpeech: "adj.", example: "Tall building.", category: "General" },
  { word: "Taste", meaning: "รสชาติ", partOfSpeech: "n.", example: "Good taste.", category: "General" },
  { word: "Teach", meaning: "สอน", partOfSpeech: "v.", example: "Teach English.", category: "General" },
  { word: "Team", meaning: "ทีม", partOfSpeech: "n.", example: "Team work.", category: "General" },
  { word: "Target", meaning: "เป้าหมาย", partOfSpeech: "n.", example: "Sales target.", category: "Business" },
  { word: "Tax", meaning: "ภาษี", partOfSpeech: "n.", example: "Pay tax.", category: "Business" },
  { word: "Terms", meaning: "ข้อตกลง", partOfSpeech: "n.", example: "Terms and conditions.", category: "Business" },
  { word: "Trade", meaning: "การค้า", partOfSpeech: "n.", example: "Free trade.", category: "Business" },
  { word: "Table", meaning: "ตาราง", partOfSpeech: "n.", example: "Data table.", category: "Academic" },
  { word: "Technique", meaning: "เทคนิค", partOfSpeech: "n.", example: "New technique.", category: "Academic" },
  { word: "Theory", meaning: "ทฤษฎี", partOfSpeech: "n.", example: "Big Bang theory.", category: "Academic" },
  { word: "Thesis", meaning: "วิทยานิพนธ์", partOfSpeech: "n.", example: "Master's thesis.", category: "Academic" },

  // =================================================================
  // U
  // =================================================================
  { word: "Ugly", meaning: "น่าเกลียด", partOfSpeech: "adj.", example: "Ugly duckling.", category: "General" },
  { word: "Umbrella", meaning: "ร่ม", partOfSpeech: "n.", example: "Take an umbrella.", category: "General" },
  { word: "Uncle", meaning: "ลุง", partOfSpeech: "n.", example: "My uncle is nice.", category: "General" },
  { word: "Understand", meaning: "เข้าใจ", partOfSpeech: "v.", example: "I understand.", category: "General" },
  { word: "Use", meaning: "ใช้", partOfSpeech: "v.", example: "Use a pen.", category: "General" },
  { word: "Unemployment", meaning: "การว่างงาน", partOfSpeech: "n.", example: "High unemployment.", category: "Business" },
  { word: "Union", meaning: "สหภาพ", partOfSpeech: "n.", example: "Labor union.", category: "Business" },
  { word: "Update", meaning: "อัปเดต", partOfSpeech: "v.", example: "Update the software.", category: "Business" },
  { word: "User", meaning: "ผู้ใช้", partOfSpeech: "n.", example: "End user.", category: "Business" },
  { word: "Ultimate", meaning: "ที่สุด", partOfSpeech: "adj.", example: "Ultimate goal.", category: "Academic" },
  { word: "Undergo", meaning: "ประสบ", partOfSpeech: "v.", example: "Undergo surgery.", category: "Academic" },
  { word: "Unique", meaning: "เป็นเอกลักษณ์", partOfSpeech: "adj.", example: "Unique species.", category: "Academic" },
  { word: "Unit", meaning: "หน่วย", partOfSpeech: "n.", example: "Unit of measure.", category: "Academic" },

  // =================================================================
  // V
  // =================================================================
  { word: "Vacation", meaning: "วันหยุด", partOfSpeech: "n.", example: "Summer vacation.", category: "General" },
  { word: "Value", meaning: "ค่า", partOfSpeech: "n.", example: "Good value.", category: "General" },
  { word: "Vegetable", meaning: "ผัก", partOfSpeech: "n.", example: "Eat vegetables.", category: "General" },
  { word: "Very", meaning: "มาก", partOfSpeech: "adv.", example: "Very good.", category: "General" },
  { word: "Visit", meaning: "เยี่ยม", partOfSpeech: "v.", example: "Visit a museum.", category: "General" },
  { word: "Vacancy", meaning: "ตำแหน่งว่าง", partOfSpeech: "n.", example: "Job vacancy.", category: "Business" },
  { word: "Valid", meaning: "ถูกต้อง", partOfSpeech: "adj.", example: "Valid ticket.", category: "Business" },
  { word: "Vendor", meaning: "ผู้ขาย", partOfSpeech: "n.", example: "Street vendor.", category: "Business" },
  { word: "Venture", meaning: "กิจการ", partOfSpeech: "n.", example: "Joint venture.", category: "Business" },
  { word: "Variable", meaning: "ตัวแปร", partOfSpeech: "n.", example: "Independent variable.", category: "Academic" },
  { word: "Variation", meaning: "ความแปรปรวน", partOfSpeech: "n.", example: "Genetic variation.", category: "Academic" },
  { word: "Verify", meaning: "ตรวจสอบ", partOfSpeech: "v.", example: "Verify the facts.", category: "Academic" },
  { word: "Volume", meaning: "ปริมาตร", partOfSpeech: "n.", example: "High volume.", category: "Academic" },

  // =================================================================
  // W
  // =================================================================
  { word: "Wait", meaning: "รอ", partOfSpeech: "v.", example: "Wait for me.", category: "General" },
  { word: "Wake", meaning: "ตื่น", partOfSpeech: "v.", example: "Wake up.", category: "General" },
  { word: "Walk", meaning: "เดิน", partOfSpeech: "v.", example: "Walk the dog.", category: "General" },
  { word: "Want", meaning: "ต้องการ", partOfSpeech: "v.", example: "I want water.", category: "General" },
  { word: "Watch", meaning: "ดู", partOfSpeech: "v.", example: "Watch TV.", category: "General" },
  { word: "Wage", meaning: "ค่าจ้าง", partOfSpeech: "n.", example: "Minimum wage.", category: "Business" },
  { word: "Warehouse", meaning: "โกดัง", partOfSpeech: "n.", example: "Store in warehouse.", category: "Business" },
  { word: "Warranty", meaning: "การรับประกัน", partOfSpeech: "n.", example: "Under warranty.", category: "Business" },
  { word: "Wealth", meaning: "ความมั่งคั่ง", partOfSpeech: "n.", example: "Build wealth.", category: "Business" },
  { word: "Weight", meaning: "น้ำหนัก", partOfSpeech: "n.", example: "Lose weight.", category: "Academic" },
  { word: "Welfare", meaning: "สวัสดิการ", partOfSpeech: "n.", example: "Social welfare.", category: "Academic" },
  { word: "Wide", meaning: "กว้าง", partOfSpeech: "adj.", example: "Wide angle.", category: "Academic" },
  { word: "Widespread", meaning: "แพร่หลาย", partOfSpeech: "adj.", example: "Widespread panic.", category: "Academic" },

  // =================================================================
  // X
  // =================================================================
  { word: "X-ray", meaning: "รังสีเอกซ์", partOfSpeech: "n.", example: "Take an X-ray.", category: "General" },
  { word: "Xylophone", meaning: "ระนาดฝรั่ง", partOfSpeech: "n.", example: "Play the xylophone.", category: "General" },
  { word: "Xenophobia", meaning: "ความกลัวคนต่างชาติ", partOfSpeech: "n.", example: "Combat xenophobia.", category: "General" },
  { word: "Xmas", meaning: "คริสต์มาส", partOfSpeech: "n.", example: "Merry Xmas.", category: "General" },
  { word: "X-factor", meaning: "ปัจจัยพิเศษ", partOfSpeech: "n.", example: "She has the X-factor.", category: "General" },
  { word: "Xerox", meaning: "ถ่ายเอกสาร", partOfSpeech: "v.", example: "Xerox the report.", category: "Business" },
  { word: "Xenocurrency", meaning: "เงินตราต่างประเทศ", partOfSpeech: "n.", example: "Trade in xenocurrency.", category: "Business" },
  { word: "X-axis", meaning: "แกน X", partOfSpeech: "n.", example: "Plot on the X-axis.", category: "Academic" },
  { word: "Xenon", meaning: "ก๊าซซีนอน", partOfSpeech: "n.", example: "Xenon gas.", category: "Academic" },

  // =================================================================
  // Y
  // =================================================================
  { word: "Year", meaning: "ปี", partOfSpeech: "n.", example: "Happy new year.", category: "General" },
  { word: "Yellow", meaning: "สีเหลือง", partOfSpeech: "adj.", example: "Yellow submarine.", category: "General" },
  { word: "Yes", meaning: "ใช่", partOfSpeech: "adv.", example: "Say yes.", category: "General" },
  { word: "Yesterday", meaning: "เมื่อวาน", partOfSpeech: "n.", example: "Yesterday was fun.", category: "General" },
  { word: "Young", meaning: "หนุ่มสาว", partOfSpeech: "adj.", example: "Young at heart.", category: "General" },
  { word: "Yearly", meaning: "รายปี", partOfSpeech: "adj.", example: "Yearly meeting.", category: "Business" },
  { word: "Yield", meaning: "ผลตอบแทน", partOfSpeech: "n.", example: "High yield.", category: "Business" },
  { word: "Yuan", meaning: "เงินหยวน", partOfSpeech: "n.", example: "Chinese Yuan.", category: "Business" },
  { word: "Y-axis", meaning: "แกน Y", partOfSpeech: "n.", example: "Graph Y-axis.", category: "Academic" },
  { word: "Year-round", meaning: "ตลอดปี", partOfSpeech: "adj.", example: "Year-round study.", category: "Academic" },

  // =================================================================
  // Z
  // =================================================================
  { word: "Zero", meaning: "ศูนย์", partOfSpeech: "n.", example: "Zero tolerance.", category: "General" },
  { word: "Zoo", meaning: "สวนสัตว์", partOfSpeech: "n.", example: "Visit the zoo.", category: "General" },
  { word: "Zoom", meaning: "ซูม", partOfSpeech: "v.", example: "Zoom in.", category: "General" },
  { word: "Zone", meaning: "โซน", partOfSpeech: "n.", example: "Time zone.", category: "General" },
  { word: "Zebra", meaning: "ม้าลาย", partOfSpeech: "n.", example: "Black and white zebra.", category: "General" },
  { word: "Zip code", meaning: "รหัสไปรษณีย์", partOfSpeech: "n.", example: "Enter zip code.", category: "Business" },
  { word: "Zoning", meaning: "การแบ่งเขต", partOfSpeech: "n.", example: "Zoning laws.", category: "Business" },
  { word: "Zenith", meaning: "จุดสูงสุด", partOfSpeech: "n.", example: "Zenith of power.", category: "Academic" },
  { word: "Zinc", meaning: "สังกะสี", partOfSpeech: "n.", example: "Zinc supplement.", category: "Academic" },
  { word: "Zoology", meaning: "สัตววิทยา", partOfSpeech: "n.", example: "Study zoology.", category: "Academic" }
];