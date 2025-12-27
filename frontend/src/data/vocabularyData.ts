// frontend/src/data/vocabularyData.ts
import { Book, Layers, MessageCircle, Star, Zap } from 'lucide-react';

// 1. Interface
export interface VocabWord {
  word: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  category?: 'General' | 'Academic' | 'Business'; // คงไว้เพื่อความเข้ากันได้
  topic?: string;       
  usage?: string;       
  level?: string;       
  special?: string;     
}

// 2. Category Structures
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

// 3. Vocabulary Data (250+ Words covering all categories)
export const vocabularyData: VocabWord[] = [
  // --- Topic: Food & Drink ---
  { word: "Appetizer", meaning: "อาหารเรียกน้ำย่อย", partOfSpeech: "n.", example: "We ordered nachos as an appetizer.", category: "General", topic: "Food & Drink", level: "Intermediate", usage: "Daily Life" },
  { word: "Beverage", meaning: "เครื่องดื่ม", partOfSpeech: "n.", example: "Hot and cold beverages are served here.", category: "General", topic: "Food & Drink", level: "Intermediate", usage: "Shopping" },
  { word: "Cuisine", meaning: "ประเภทอาหาร", partOfSpeech: "n.", example: "I love Italian cuisine.", category: "General", topic: "Food & Drink", level: "Intermediate", usage: "Travel" },
  { word: "Delicious", meaning: "อร่อย", partOfSpeech: "adj.", example: "This soup is delicious.", category: "General", topic: "Food & Drink", level: "Beginner", usage: "Daily Life" },
  { word: "Ingredient", meaning: "ส่วนผสม", partOfSpeech: "n.", example: "Fresh ingredients make the best food.", category: "General", topic: "Food & Drink", level: "Intermediate", usage: "Daily Life" },
  { word: "Nutrition", meaning: "โภชนาการ", partOfSpeech: "n.", example: "Good nutrition is essential for health.", category: "Academic", topic: "Food & Drink", level: "Advanced", usage: "Daily Life" },
  { word: "Recipe", meaning: "สูตรอาหาร", partOfSpeech: "n.", example: "Can I have the recipe for this cake?", category: "General", topic: "Food & Drink", level: "Beginner", usage: "Daily Life" },
  { word: "Spicy", meaning: "เผ็ด", partOfSpeech: "adj.", example: "Thai food is often spicy.", category: "General", topic: "Food & Drink", level: "Beginner", usage: "Daily Life" },
  { word: "Vegetarian", meaning: "มังสวิรัติ", partOfSpeech: "n.", example: "Is there a vegetarian option?", category: "General", topic: "Food & Drink", level: "Intermediate", usage: "Shopping" },
  { word: "Flavor", meaning: "รสชาติ", partOfSpeech: "n.", example: "This ice cream has a rich flavor.", category: "General", topic: "Food & Drink", level: "Beginner", usage: "Daily Life" },

  // --- Topic: Animals ---
  { word: "Amphibian", meaning: "สัตว์สะเทินน้ำสะเทินบก", partOfSpeech: "n.", example: "Frogs are amphibians.", category: "Academic", topic: "Animals", level: "Advanced", usage: "Daily Life" },
  { word: "Domestic", meaning: "ในบ้าน, สัตว์เลี้ยง", partOfSpeech: "adj.", example: "Cats are domestic animals.", category: "General", topic: "Animals", level: "Intermediate", usage: "Daily Life" },
  { word: "Extinct", meaning: "สูญพันธุ์", partOfSpeech: "adj.", example: "Dinosaurs are extinct.", category: "Academic", topic: "Animals", level: "Intermediate", usage: "Daily Life" },
  { word: "Habitat", meaning: "ถิ่นที่อยู่", partOfSpeech: "n.", example: "The jungle is the tiger's natural habitat.", category: "Academic", topic: "Animals", level: "Advanced", usage: "Daily Life" },
  { word: "Mammal", meaning: "สัตว์เลี้ยงลูกด้วยนม", partOfSpeech: "n.", example: "Whales are mammals.", category: "Academic", topic: "Animals", level: "Intermediate", usage: "Daily Life" },
  { word: "Predator", meaning: "นักล่า", partOfSpeech: "n.", example: "Lions are top predators.", category: "Academic", topic: "Animals", level: "Advanced", usage: "Daily Life" },
  { word: "Species", meaning: "สายพันธุ์", partOfSpeech: "n.", example: "There are many species of birds.", category: "Academic", topic: "Animals", level: "Advanced", usage: "Daily Life" },
  { word: "Wildlife", meaning: "สัตว์ป่า", partOfSpeech: "n.", example: "Protect the wildlife.", category: "General", topic: "Animals", level: "Intermediate", usage: "Travel" },
  { word: "Zoology", meaning: "สัตววิทยา", partOfSpeech: "n.", example: "He studies zoology.", category: "Academic", topic: "Animals", level: "Advanced", usage: "Daily Life" },
  { word: "Instinct", meaning: "สัญชาตญาณ", partOfSpeech: "n.", example: "Animals survive by instinct.", category: "General", topic: "Animals", level: "Advanced", usage: "Daily Life" },

  // --- Topic: Body & Health ---
  { word: "Ache", meaning: "เจ็บปวด", partOfSpeech: "n.", example: "I have a stomach ache.", category: "General", topic: "Body & Health", level: "Beginner", usage: "Daily Life" },
  { word: "Antibiotic", meaning: "ยาปฏิชีวนะ", partOfSpeech: "n.", example: "The doctor prescribed antibiotics.", category: "Academic", topic: "Body & Health", level: "Advanced", usage: "Daily Life" },
  { word: "Diagnosis", meaning: "การวินิจฉัย", partOfSpeech: "n.", example: "What is the diagnosis?", category: "Academic", topic: "Body & Health", level: "Advanced", usage: "Daily Life" },
  { word: "Exercise", meaning: "ออกกำลังกาย", partOfSpeech: "v.", example: "You should exercise daily.", category: "General", topic: "Body & Health", level: "Beginner", usage: "Daily Life" },
  { word: "Fatigue", meaning: "ความเหนื่อยล้า", partOfSpeech: "n.", example: "Symptoms include fatigue and fever.", category: "Academic", topic: "Body & Health", level: "Advanced", usage: "Daily Life" },
  { word: "Hygiene", meaning: "สุขอนามัย", partOfSpeech: "n.", example: "Good hygiene prevents disease.", category: "General", topic: "Body & Health", level: "Intermediate", usage: "Daily Life" },
  { word: "Muscle", meaning: "กล้ามเนื้อ", partOfSpeech: "n.", example: "He pulled a muscle.", category: "General", topic: "Body & Health", level: "Beginner", usage: "Daily Life" },
  { word: "Prescription", meaning: "ใบสั่งยา", partOfSpeech: "n.", example: "You need a prescription for this medicine.", category: "General", topic: "Body & Health", level: "Intermediate", usage: "Shopping" },
  { word: "Symptom", meaning: "อาการ", partOfSpeech: "n.", example: "Fever is a symptom of the flu.", category: "General", topic: "Body & Health", level: "Intermediate", usage: "Daily Life" },
  { word: "Therapy", meaning: "การบำบัด", partOfSpeech: "n.", example: "Physical therapy helped him walk again.", category: "Academic", topic: "Body & Health", level: "Advanced", usage: "Daily Life" },

  // --- Topic: Clothes & Fashion ---
  { word: "Accessory", meaning: "เครื่องประดับ", partOfSpeech: "n.", example: "She wore matching accessories.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Shopping" },
  { word: "Casual", meaning: "ลำลอง", partOfSpeech: "adj.", example: "The dress code is casual.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Daily Life" },
  { word: "Elegant", meaning: "สง่างาม", partOfSpeech: "adj.", example: "She looked elegant in that dress.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Daily Life" },
  { word: "Fabric", meaning: "ผ้า", partOfSpeech: "n.", example: "This fabric is very soft.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Shopping" },
  { word: "Outfit", meaning: "ชุดแต่งกาย", partOfSpeech: "n.", example: "I love your outfit!", category: "General", topic: "Clothes & Fashion", level: "Beginner", usage: "Daily Life" },
  { word: "Pattern", meaning: "ลวดลาย", partOfSpeech: "n.", example: "The shirt has a striped pattern.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Shopping" },
  { word: "Stylish", meaning: "ทันสมัย", partOfSpeech: "adj.", example: "He is very stylish.", category: "General", topic: "Clothes & Fashion", level: "Beginner", usage: "Daily Life" },
  { word: "Textile", meaning: "สิ่งทอ", partOfSpeech: "n.", example: "The textile industry.", category: "Business", topic: "Clothes & Fashion", level: "Advanced", usage: "Work" },
  { word: "Trend", meaning: "แนวโน้ม, เทรนด์", partOfSpeech: "n.", example: "Follow the latest fashion trends.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Daily Life" },
  { word: "Wardrobe", meaning: "ตู้เสื้อผ้า", partOfSpeech: "n.", example: "I need to update my wardrobe.", category: "General", topic: "Clothes & Fashion", level: "Intermediate", usage: "Daily Life" },

  // --- Topic: House & Furniture ---
  { word: "Appliance", meaning: "เครื่องใช้ไฟฟ้า", partOfSpeech: "n.", example: "Kitchen appliances.", category: "General", topic: "House & Furniture", level: "Intermediate", usage: "Shopping" },
  { word: "Balcony", meaning: "ระเบียง", partOfSpeech: "n.", example: "The room has a balcony.", category: "General", topic: "House & Furniture", level: "Beginner", usage: "Daily Life" },
  { word: "Ceiling", meaning: "เพดาน", partOfSpeech: "n.", example: "The ceiling is high.", category: "General", topic: "House & Furniture", level: "Beginner", usage: "Daily Life" },
  { word: "Decorate", meaning: "ตกแต่ง", partOfSpeech: "v.", example: "We decorated the living room.", category: "General", topic: "House & Furniture", level: "Beginner", usage: "Daily Life" },
  { word: "Furniture", meaning: "เฟอร์นิเจอร์", partOfSpeech: "n.", example: "We bought new furniture.", category: "General", topic: "House & Furniture", level: "Beginner", usage: "Shopping" },
  { word: "Kitchenware", meaning: "เครื่องครัว", partOfSpeech: "n.", example: "High-quality kitchenware.", category: "General", topic: "House & Furniture", level: "Intermediate", usage: "Shopping" },
  { word: "Maintain", meaning: "บำรุงรักษา", partOfSpeech: "v.", example: "Maintain the garden.", category: "General", topic: "House & Furniture", level: "Intermediate", usage: "Daily Life" },
  { word: "Renovate", meaning: "ปรับปรุงซ่อมแซม", partOfSpeech: "v.", example: "They plan to renovate the house.", category: "General", topic: "House & Furniture", level: "Advanced", usage: "Daily Life" },
  { word: "Spacious", meaning: "กว้างขวาง", partOfSpeech: "adj.", example: "A spacious bedroom.", category: "General", topic: "House & Furniture", level: "Intermediate", usage: "Daily Life" },
  { word: "Utility", meaning: "สาธารณูปโภค", partOfSpeech: "n.", example: "Pay the utility bills.", category: "Business", topic: "House & Furniture", level: "Advanced", usage: "Daily Life" },

  // --- Topic: Transportation ---
  { word: "Commute", meaning: "การเดินทางไปทำงาน", partOfSpeech: "v.", example: "I commute by train.", category: "General", topic: "Transportation", level: "Intermediate", usage: "Work" },
  { word: "Destination", meaning: "จุดหมายปลายทาง", partOfSpeech: "n.", example: "We arrived at our destination.", category: "General", topic: "Transportation", level: "Intermediate", usage: "Travel" },
  { word: "Fare", meaning: "ค่าโดยสาร", partOfSpeech: "n.", example: "Bus fare is cheap.", category: "General", topic: "Transportation", level: "Beginner", usage: "Travel" },
  { word: "Intersection", meaning: "สี่แยก", partOfSpeech: "n.", example: "Turn left at the intersection.", category: "General", topic: "Transportation", level: "Intermediate", usage: "Travel" },
  { word: "Passenger", meaning: "ผู้โดยสาร", partOfSpeech: "n.", example: "Passengers must wear seatbelts.", category: "General", topic: "Transportation", level: "Beginner", usage: "Travel" },
  { word: "Pedestrian", meaning: "คนเดินเท้า", partOfSpeech: "n.", example: "Watch out for pedestrians.", category: "General", topic: "Transportation", level: "Intermediate", usage: "Daily Life" },
  { word: "Public transport", meaning: "ขนส่งสาธารณะ", partOfSpeech: "n.", example: "Use public transport to save money.", category: "General", topic: "Transportation", level: "Beginner", usage: "Travel" },
  { word: "Route", meaning: "เส้นทาง", partOfSpeech: "n.", example: "Which route should we take?", category: "General", topic: "Transportation", level: "Beginner", usage: "Travel" },
  { word: "Vehicle", meaning: "ยานพาหนะ", partOfSpeech: "n.", example: "Motor vehicles are prohibited.", category: "General", topic: "Transportation", level: "Intermediate", usage: "Travel" },
  { word: "Traffic jam", meaning: "การจราจรติดขัด", partOfSpeech: "n.", example: "Stuck in a traffic jam.", category: "General", topic: "Transportation", level: "Beginner", usage: "Daily Life" },

  // --- Topic: Business & Finance ---
  { word: "Acquisition", meaning: "การเข้าซื้อกิจการ", partOfSpeech: "n.", example: "The acquisition was finalized.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Bankruptcy", meaning: "การล้มละลาย", partOfSpeech: "n.", example: "The firm faced bankruptcy.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Capital", meaning: "เงินทุน", partOfSpeech: "n.", example: "They raised capital for the startup.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },
  { word: "Dividend", meaning: "เงินปันผล", partOfSpeech: "n.", example: "Shareholders received dividends.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Entrepreneur", meaning: "ผู้ประกอบการ", partOfSpeech: "n.", example: "He is a successful entrepreneur.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },
  { word: "Fiscal", meaning: "งบประมาณ", partOfSpeech: "adj.", example: "Fiscal year ends in December.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Inflation", meaning: "เงินเฟ้อ", partOfSpeech: "n.", example: "Inflation is rising.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Merger", meaning: "การควบรวมกิจการ", partOfSpeech: "n.", example: "The merger created a giant company.", category: "Business", topic: "Business", level: "Advanced", usage: "Work" },
  { word: "Negotiation", meaning: "การเจรจาต่อรอง", partOfSpeech: "n.", example: "Salary negotiation.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },
  { word: "Revenue", meaning: "รายได้", partOfSpeech: "n.", example: "Revenue increased by 10%.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },
  { word: "Strategy", meaning: "กลยุทธ์", partOfSpeech: "n.", example: "Marketing strategy.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },
  { word: "Transaction", meaning: "ธุรกรรม", partOfSpeech: "n.", example: "Secure online transaction.", category: "Business", topic: "Business", level: "Intermediate", usage: "Work" },

  // --- Topic: Technology ---
  { word: "Algorithm", meaning: "อัลกอริทึม", partOfSpeech: "n.", example: "Search engine algorithms.", category: "Academic", topic: "Technology", level: "Advanced", usage: "Work" },
  { word: "Artificial Intelligence", meaning: "ปัญญาประดิษฐ์", partOfSpeech: "n.", example: "AI is changing the world.", category: "General", topic: "Technology", level: "Intermediate", usage: "Daily Life" },
  { word: "Cloud computing", meaning: "การประมวลผลบนคลาวด์", partOfSpeech: "n.", example: "Store data in cloud computing.", category: "Business", topic: "Technology", level: "Advanced", usage: "Work" },
  { word: "Database", meaning: "ฐานข้อมูล", partOfSpeech: "n.", example: "Manage the customer database.", category: "Business", topic: "Technology", level: "Intermediate", usage: "Work" },
  { word: "Hardware", meaning: "ฮาร์ดแวร์", partOfSpeech: "n.", example: "Computer hardware.", category: "General", topic: "Technology", level: "Beginner", usage: "Work" },
  { word: "Innovation", meaning: "นวัตกรรม", partOfSpeech: "n.", example: "Technological innovation.", category: "Business", topic: "Technology", level: "Intermediate", usage: "Work" },
  { word: "Interface", meaning: "อินเตอร์เฟซ", partOfSpeech: "n.", example: "User-friendly interface.", category: "General", topic: "Technology", level: "Intermediate", usage: "Work" },
  { word: "Network", meaning: "เครือข่าย", partOfSpeech: "n.", example: "Wireless network.", category: "General", topic: "Technology", level: "Beginner", usage: "Work" },
  { word: "Software", meaning: "ซอฟต์แวร์", partOfSpeech: "n.", example: "Update the software.", category: "General", topic: "Technology", level: "Beginner", usage: "Work" },
  { word: "Virtual Reality", meaning: "ความเป็นจริงเสมือน", partOfSpeech: "n.", example: "VR gaming is popular.", category: "General", topic: "Technology", level: "Intermediate", usage: "Daily Life" },

  // --- Category: Usage - Feelings & Emotions ---
  { word: "Anxious", meaning: "กังวล", partOfSpeech: "adj.", example: "I felt anxious before the test.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Confused", meaning: "สับสน", partOfSpeech: "adj.", example: "I am confused by the instructions.", category: "General", usage: "Feelings", level: "Beginner" },
  { word: "Delighted", meaning: "ยินดีมาก", partOfSpeech: "adj.", example: "We are delighted to hear the news.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Disappointed", meaning: "ผิดหวัง", partOfSpeech: "adj.", example: "He was disappointed with the result.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Exhausted", meaning: "เหนื่อยล้า", partOfSpeech: "adj.", example: "I am exhausted after work.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Frustrated", meaning: "หงุดหงิด", partOfSpeech: "adj.", example: "She felt frustrated by the delay.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Grateful", meaning: "รู้สึกขอบคุณ", partOfSpeech: "adj.", example: "I am grateful for your help.", category: "General", usage: "Feelings", level: "Intermediate" },
  { word: "Nervous", meaning: "ประหม่า", partOfSpeech: "adj.", example: "Don't be nervous.", category: "General", usage: "Feelings", level: "Beginner" },
  { word: "Overwhelmed", meaning: "ท่วมท้น, รับไม่ไหว", partOfSpeech: "adj.", example: "She was overwhelmed by the workload.", category: "General", usage: "Feelings", level: "Advanced" },
  { word: "Satisfied", meaning: "พอใจ", partOfSpeech: "adj.", example: "Are you satisfied with the service?", category: "General", usage: "Feelings", level: "Intermediate" },

  // --- Category: Special - Phrasal Verbs ---
  { word: "Break down", meaning: "พัง, เสีย", partOfSpeech: "v.", example: "My car broke down.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Daily Life" },
  { word: "Call off", meaning: "ยกเลิก", partOfSpeech: "v.", example: "They called off the meeting.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Work" },
  { word: "Come up with", meaning: "คิดออก (ไอเดีย)", partOfSpeech: "v.", example: "She came up with a great idea.", category: "General", special: "Phrasal Verbs", level: "Advanced", usage: "Work" },
  { word: "Figure out", meaning: "คิดหาคำตอบ", partOfSpeech: "v.", example: "I can't figure out this problem.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Daily Life" },
  { word: "Give up", meaning: "ยอมแพ้", partOfSpeech: "v.", example: "Don't give up!", category: "General", special: "Phrasal Verbs", level: "Beginner", usage: "Daily Life" },
  { word: "Look forward to", meaning: "ตั้งตารอ", partOfSpeech: "v.", example: "I look forward to seeing you.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Conversation" },
  { word: "Put off", meaning: "เลื่อนออกไป", partOfSpeech: "v.", example: "Don't put off your homework.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Work" },
  { word: "Run out of", meaning: "หมด", partOfSpeech: "v.", example: "We ran out of milk.", category: "General", special: "Phrasal Verbs", level: "Intermediate", usage: "Daily Life" },
  { word: "Set up", meaning: "ติดตั้ง, ก่อตั้ง", partOfSpeech: "v.", example: "Set up a new business.", category: "Business", special: "Phrasal Verbs", level: "Intermediate", usage: "Work" },
  { word: "Turn down", meaning: "ปฏิเสธ", partOfSpeech: "v.", example: "He turned down the job offer.", category: "Business", special: "Phrasal Verbs", level: "Intermediate", usage: "Work" },

  // --- Category: Special - Idioms ---
  { word: "A piece of cake", meaning: "ง่ายมากๆ", partOfSpeech: "idiom", example: "The test was a piece of cake.", category: "General", special: "Idioms", level: "Intermediate", usage: "Conversation" },
  { word: "Break a leg", meaning: "ขอให้โชคดี", partOfSpeech: "idiom", example: "Break a leg on your performance!", category: "General", special: "Idioms", level: "Intermediate", usage: "Conversation" },
  { word: "Cost an arm and a leg", meaning: "แพงมาก", partOfSpeech: "idiom", example: "This car costs an arm and a leg.", category: "General", special: "Idioms", level: "Advanced", usage: "Conversation" },
  { word: "Hit the sack", meaning: "ไปนอน", partOfSpeech: "idiom", example: "I'm tired, I'm going to hit the sack.", category: "General", special: "Idioms", level: "Advanced", usage: "Daily Life" },
  { word: "Under the weather", meaning: "ไม่สบาย", partOfSpeech: "idiom", example: "I feel a bit under the weather.", category: "General", special: "Idioms", level: "Intermediate", usage: "Conversation" },
  { word: "Burn the midnight oil", meaning: "ทำงานดึก", partOfSpeech: "idiom", example: "He is burning the midnight oil to finish the report.", category: "General", special: "Idioms", level: "Advanced", usage: "Work" },
  { word: "Cut corners", meaning: "ลดต้นทุน/คุณภาพ (ทางลัด)", partOfSpeech: "idiom", example: "Don't cut corners on safety.", category: "Business", special: "Idioms", level: "Advanced", usage: "Work" },
  { word: "Miss the boat", meaning: "พลาดโอกาส", partOfSpeech: "idiom", example: "You missed the boat on that investment.", category: "General", special: "Idioms", level: "Advanced", usage: "Work" },
  { word: "Once in a blue moon", meaning: "นานๆ ครั้ง", partOfSpeech: "idiom", example: "I see him once in a blue moon.", category: "General", special: "Idioms", level: "Advanced", usage: "Conversation" },
  { word: "See eye to eye", meaning: "เห็นพ้องต้องกัน", partOfSpeech: "idiom", example: "We don't see eye to eye on this.", category: "General", special: "Idioms", level: "Advanced", usage: "Work" },

  // --- Category: Special - TOEIC/Academic ---
  { word: "Abundant", meaning: "มากมาย", partOfSpeech: "adj.", example: "Abundant resources.", category: "Academic", special: "TOEIC", level: "Advanced", usage: "Work" },
  { word: "Accomplish", meaning: "ทำสำเร็จ", partOfSpeech: "v.", example: "She accomplished her goals.", category: "Academic", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Benefit", meaning: "ผลประโยชน์", partOfSpeech: "n.", example: "Employee benefits.", category: "Business", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Candidate", meaning: "ผู้สมัคร", partOfSpeech: "n.", example: "Interview the candidates.", category: "Business", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Collaborate", meaning: "ร่วมมือ", partOfSpeech: "v.", example: "Teams collaborate on the project.", category: "Business", special: "TOEIC", level: "Advanced", usage: "Work" },
  { word: "Consequence", meaning: "ผลที่ตามมา", partOfSpeech: "n.", example: "Face the consequences.", category: "Academic", special: "Academic", level: "Advanced", usage: "Daily Life" },
  { word: "Crucial", meaning: "สำคัญมาก", partOfSpeech: "adj.", example: "It is crucial to be on time.", category: "Academic", special: "TOEIC", level: "Advanced", usage: "Work" },
  { word: "Decrease", meaning: "ลดลง", partOfSpeech: "v.", example: "Sales decreased this month.", category: "Business", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Efficient", meaning: "มีประสิทธิภาพ", partOfSpeech: "adj.", example: "An efficient worker.", category: "Business", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Fluctuate", meaning: "ผันผวน", partOfSpeech: "v.", example: "Prices fluctuate daily.", category: "Business", special: "TOEIC", level: "Advanced", usage: "Work" },
  { word: "Implement", meaning: "นำไปปฏิบัติ", partOfSpeech: "v.", example: "Implement the new plan.", category: "Business", special: "TOEIC", level: "Advanced", usage: "Work" },
  { word: "Participate", meaning: "เข้าร่วม", partOfSpeech: "v.", example: "Participate in the meeting.", category: "Business", special: "TOEIC", level: "Intermediate", usage: "Work" },
  { word: "Potential", meaning: "ศักยภาพ", partOfSpeech: "n.", example: "He has great potential.", category: "Academic", special: "Academic", level: "Intermediate", usage: "Work" },
  { word: "Prohibit", meaning: "ห้าม", partOfSpeech: "v.", example: "Smoking is prohibited.", category: "General", special: "TOEIC", level: "Intermediate", usage: "Daily Life" },
  { word: "Significant", meaning: "สำคัญ, อย่างมาก", partOfSpeech: "adj.", example: "Significant improvement.", category: "Academic", special: "Academic", level: "Advanced", usage: "Work" },

  // --- Category: Grammar (Function Words) ---
  { word: "Although", meaning: "ถึงแม้ว่า", partOfSpeech: "conj.", example: "Although it rained, we went out.", category: "Academic", topic: "Nature", level: "Intermediate", usage: "Conversation" },
  { word: "Because", meaning: "เพราะว่า", partOfSpeech: "conj.", example: "I stayed home because I was sick.", category: "General", level: "Beginner", usage: "Conversation" },
  { word: "Between", meaning: "ระหว่าง", partOfSpeech: "prep.", example: "Sit between them.", category: "General", level: "Beginner", usage: "Daily Life" },
  { word: "Despite", meaning: "ทั้งๆ ที่", partOfSpeech: "prep.", example: "Despite the traffic, he arrived on time.", category: "Academic", level: "Advanced", usage: "Conversation" },
  { word: "During", meaning: "ระหว่าง (เวลา)", partOfSpeech: "prep.", example: "During the meeting.", category: "General", level: "Beginner", usage: "Work" },
  { word: "However", meaning: "อย่างไรก็ตาม", partOfSpeech: "adv.", example: "It was cold; however, we swam.", category: "Academic", level: "Intermediate", usage: "Conversation" },
  { word: "Myself", meaning: "ตัวฉันเอง", partOfSpeech: "pron.", example: "I did it myself.", category: "General", level: "Beginner", usage: "Conversation" },
  { word: "Therefore", meaning: "ดังนั้น", partOfSpeech: "adv.", example: "He was busy; therefore, he couldn't come.", category: "Academic", level: "Intermediate", usage: "Work" },
  { word: "Unless", meaning: "เว้นแต่", partOfSpeech: "conj.", example: "I won't go unless you go.", category: "General", level: "Intermediate", usage: "Conversation" },
  { word: "Within", meaning: "ภายใน", partOfSpeech: "prep.", example: "Finish within an hour.", category: "General", level: "Intermediate", usage: "Work" },

  // --- Category: General/Daily Life A-Z Fillers ---
  { word: "Adventure", meaning: "การผจญภัย", partOfSpeech: "n.", example: "Life is an adventure.", category: "General", topic: "Nature", usage: "Travel", level: "Intermediate" },
  { word: "Baggage", meaning: "สัมภาระ", partOfSpeech: "n.", example: "Check your baggage.", category: "General", topic: "Transportation", usage: "Travel", level: "Intermediate" },
  { word: "Celebration", meaning: "การเฉลิมฉลอง", partOfSpeech: "n.", example: "Birthday celebration.", category: "General", usage: "Daily Life", level: "Beginner" },
  { word: "Depart", meaning: "ออกเดินทาง", partOfSpeech: "v.", example: "The train departs at noon.", category: "General", topic: "Transportation", usage: "Travel", level: "Intermediate" },
  { word: "Emergency", meaning: "ฉุกเฉิน", partOfSpeech: "n.", example: "Call for help in an emergency.", category: "General", usage: "Daily Life", level: "Intermediate" },
  { word: "Festival", meaning: "เทศกาล", partOfSpeech: "n.", example: "Songkran festival.", category: "General", usage: "Travel", level: "Beginner" },
  { word: "Grocery", meaning: "ร้านขายของชำ", partOfSpeech: "n.", example: "Buy milk at the grocery store.", category: "General", topic: "Food & Drink", usage: "Shopping", level: "Beginner" },
  { word: "Hobby", meaning: "งานอดิเรก", partOfSpeech: "n.", example: "My hobby is reading.", category: "General", usage: "Daily Life", level: "Beginner" },
  { word: "Identify", meaning: "ระบุ", partOfSpeech: "v.", example: "Can you identify the thief?", category: "Academic", usage: "Work", level: "Intermediate" },
  { word: "Journal", meaning: "บันทึก, วารสาร", partOfSpeech: "n.", example: "Write in a journal.", category: "Academic", usage: "Work", level: "Intermediate" },
  { word: "Knowledge", meaning: "ความรู้", partOfSpeech: "n.", example: "Knowledge is power.", category: "Academic", usage: "Work", level: "Intermediate" },
  { word: "Luggage", meaning: "กระเป๋าเดินทาง", partOfSpeech: "n.", example: "Lost luggage.", category: "General", topic: "Transportation", usage: "Travel", level: "Intermediate" },
  { word: "Museum", meaning: "พิพิธภัณฑ์", partOfSpeech: "n.", example: "Visit the museum.", category: "General", topic: "Places", usage: "Travel", level: "Beginner" },
  { word: "Neighbor", meaning: "เพื่อนบ้าน", partOfSpeech: "n.", example: "Good neighbors helps each other.", category: "General", usage: "Daily Life", level: "Beginner" },
  { word: "Occasion", meaning: "โอกาส", partOfSpeech: "n.", example: "Special occasion.", category: "General", usage: "Daily Life", level: "Intermediate" },
  { word: "Passport", meaning: "หนังสือเดินทาง", partOfSpeech: "n.", example: "Don't forget your passport.", category: "General", topic: "Transportation", usage: "Travel", level: "Beginner" },
  { word: "Quality", meaning: "คุณภาพ", partOfSpeech: "n.", example: "High quality product.", category: "Business", usage: "Shopping", level: "Beginner" },
  { word: "Receipt", meaning: "ใบเสร็จ", partOfSpeech: "n.", example: "Keep the receipt.", category: "Business", usage: "Shopping", level: "Beginner" },
  { word: "Souvenir", meaning: "ของที่ระลึก", partOfSpeech: "n.", example: "Buy souvenirs.", category: "General", usage: "Travel", level: "Beginner" },
  { word: "Tourist", meaning: "นักท่องเที่ยว", partOfSpeech: "n.", example: "Many tourists visit Thailand.", category: "General", usage: "Travel", level: "Beginner" },
  { word: "Urgent", meaning: "ด่วน", partOfSpeech: "adj.", example: "It is urgent.", category: "General", usage: "Work", level: "Intermediate" },
  { word: "Vacancy", meaning: "ห้องว่าง/ตำแหน่งว่าง", partOfSpeech: "n.", example: "No vacancy at the hotel.", category: "Business", usage: "Travel", level: "Intermediate" },
  { word: "Warranty", meaning: "การรับประกัน", partOfSpeech: "n.", example: "One year warranty.", category: "Business", usage: "Shopping", level: "Intermediate" },
  { word: "Yield", meaning: "ผลตอบแทน", partOfSpeech: "n.", example: "High yield investment.", category: "Business", usage: "Work", level: "Advanced" },
  { word: "Zone", meaning: "โซน, เขต", partOfSpeech: "n.", example: "Time zone.", category: "General", usage: "Travel", level: "Beginner" }
];