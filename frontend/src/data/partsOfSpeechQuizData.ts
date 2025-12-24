import { QuizQuestion } from '../types';

export const partsOfSpeechQuizData: QuizQuestion[] = [
  // --- Noun ---
  {
    id: 1,
    question: "Identify the type of the bold word: 'The **team** is celebrating their victory.'",
    options: ["Proper Noun", "Collective Noun", "Abstract Noun", "Compound Noun"],
    correctAnswer: 1,
    explanation: "'Team' คือกลุ่มคนหรือคณะ จึงเป็น Collective Noun (สมุหนาม)."
  },
  {
    id: 2,
    question: "Which word is an Abstract Noun?",
    options: ["Table", "Bangkok", "Freedom", "Teacher"],
    correctAnswer: 2,
    explanation: "'Freedom' (เสรีภาพ) เป็นสิ่งที่จับต้องไม่ได้ เป็นความคิดหรือความรู้สึก จึงเป็น Abstract Noun."
  },
  {
    id: 3,
    question: "Identify the Compound Noun: 'I need some toothpaste for my trip.'",
    options: ["Need", "Toothpaste", "Trip", "Some"],
    correctAnswer: 1,
    explanation: "'Toothpaste' เกิดจาก Tooth + Paste มารวมกันเป็นคำใหม่ จึงเป็น Compound Noun."
  },
  
  // --- Pronoun ---
  {
    id: 4,
    question: "Choose the correct Reflexive Pronoun: 'He hurt ______ while playing football.'",
    options: ["him", "his", "himself", "he"],
    correctAnswer: 2,
    explanation: "ประธานเป็น He (เขาผู้ชาย) ทำกริยากับตัวเอง ต้องใช้ Reflexive Pronoun คือ 'himself'."
  },
  {
    id: 5,
    question: "Which of these is a Demonstrative Pronoun?",
    options: ["Who", "This", "My", "Myself"],
    correctAnswer: 1,
    explanation: "'This' (นี้) ใช้ชี้เฉพาะเจาะจงสิ่งที่อยู่ใกล้ เป็น Demonstrative Pronoun."
  },
  {
    id: 6,
    question: "'**Who** called you last night?' - What type of pronoun is 'Who'?",
    options: ["Relative Pronoun", "Interrogative Pronoun", "Indefinite Pronoun", "Subject Pronoun"],
    correctAnswer: 1,
    explanation: "'Who' ในบริบทนี้ใช้ขึ้นต้นประโยคคำถาม จึงเป็น Interrogative Pronoun."
  },

  // --- Verb ---
  {
    id: 7,
    question: "Identify the Stative Verb: 'I **know** the answer.'",
    options: ["Know", "Answer", "The", "I"],
    correctAnswer: 0,
    explanation: "'Know' (รู้) เป็นกริยาแสดงสภาวะทางความคิด ไม่ใช่การกระทำทางร่างกาย จึงเป็น Stative Verb."
  },
  {
    id: 8,
    question: "She **can** swim very fast. 'Can' is a/an ...",
    options: ["Action Verb", "Modal Verb", "Linking Verb", "Transitive Verb"],
    correctAnswer: 1,
    explanation: "'Can' เป็น Modal Verb ที่บอกความสามารถ (Ability)."
  },
  {
    id: 9,
    question: "Which sentence contains a Transitive Verb?",
    options: ["She sleeps.", "He eats an apple.", "They run.", "Birds fly."],
    correctAnswer: 1,
    explanation: "'Eats' ในประโยค 'He eats an apple' ต้องการกรรม (an apple) มารองรับ จึงเป็น Transitive Verb."
  },

  // --- Adjective ---
  {
    id: 10,
    question: "Choose the correct order of adjectives: 'A ______ car.'",
    options: ["red big Italian", "big red Italian", "Italian big red", "red Italian big"],
    correctAnswer: 1,
    explanation: "ลำดับ Adjective: Size (big) -> Color (red) -> Origin (Italian)."
  },
  {
    id: 11,
    question: "Which word is a Comparative Adjective?",
    options: ["Good", "Better", "Best", "Bad"],
    correctAnswer: 1,
    explanation: "'Better' (ดีกว่า) เป็นขั้นกว่าของ Good."
  },
  {
    id: 12,
    question: "'This is **my** book.' - What type of adjective is 'my'?",
    options: ["Descriptive", "Demonstrative", "Possessive", "Quantitative"],
    correctAnswer: 2,
    explanation: "'My' แสดงความเป็นเจ้าของ จึงเป็น Possessive Adjective."
  },

  // --- Adverb ---
  {
    id: 13,
    question: "Identify the Adverb of Frequency: 'She **always** arrives on time.'",
    options: ["She", "Arrives", "Always", "Time"],
    correctAnswer: 2,
    explanation: "'Always' (เสมอ) บอกความถี่ของการกระทำ."
  },
  {
    id: 14,
    question: "He speaks English **fluently**. 'Fluently' is an adverb of...",
    options: ["Time", "Place", "Manner", "Degree"],
    correctAnswer: 2,
    explanation: "'Fluently' (อย่างคล่องแคล่ว) ขยายว่าพูดอย่างไร จึงเป็น Adverb of Manner."
  },
  {
    id: 15,
    question: "It is **very** hot today. 'Very' is an adverb of...",
    options: ["Degree", "Manner", "Place", "Time"],
    correctAnswer: 0,
    explanation: "'Very' (มาก) ขยายคำคุณศัพท์ hot เพื่อบอกระดับความเข้มข้น จึงเป็น Adverb of Degree."
  },

  // --- Preposition ---
  {
    id: 16,
    question: "The cat is hiding ______ the table.",
    options: ["in", "at", "under", "of"],
    correctAnswer: 2,
    explanation: "'Under' (ใต้) บอกตำแหน่งที่ตั้ง จึงเหมาะสมที่สุดในบริบทนี้."
  },
  {
    id: 17,
    question: "We have a meeting ______ Monday.",
    options: ["in", "at", "on", "to"],
    correctAnswer: 2,
    explanation: "ใช้นำหน้าวัน (Days of the week) ต้องใช้ Preposition 'on'."
  },
  {
    id: 18,
    question: "She walked ______ the room.",
    options: ["into", "at", "on", "during"],
    correctAnswer: 0,
    explanation: "'Into' (เข้าไปข้างใน) บอกการเคลื่อนที่ (Movement) เข้าสู่สถานที่."
  },

  // --- Conjunction ---
  {
    id: 19,
    question: "I wanted to buy it, ______ I didn't have enough money.",
    options: ["and", "but", "so", "or"],
    correctAnswer: 1,
    explanation: "ประโยคหน้าและหลังขัดแย้งกัน (อยากซื้อ แต่ไม่มีเงิน) ต้องใช้ 'but'."
  },
  {
    id: 20,
    question: "______ it rained, we played football.",
    options: ["Because", "Although", "If", "So"],
    correctAnswer: 1,
    explanation: "ประโยคแสดงความขัดแย้ง (ฝนตก แต่ก็ยังเล่น) ใช้ 'Although' (แม้ว่า)."
  },
  {
    id: 21,
    question: "Which word is a Coordinating Conjunction (FANBOYS)?",
    options: ["Because", "Although", "Yet", "Unless"],
    correctAnswer: 2,
    explanation: "'Yet' (แต่กระนั้น) เป็นหนึ่งใน FANBOYS (For, And, Nor, But, Or, Yet, So)."
  },

  // --- Determiner ---
  {
    id: 22,
    question: "I need ______ help with this problem.",
    options: ["a", "an", "some", "many"],
    correctAnswer: 2,
    explanation: "'Help' เป็นนามนับไม่ได้ ในประโยคบอกเล่ามักใช้ 'some'."
  },
  {
    id: 23,
    question: "______ car over there is mine.",
    options: ["This", "That", "These", "Those"],
    correctAnswer: 1,
    explanation: "ชี้สิ่งที่อยู่ไกล (over there) และเป็นเอกพจน์ (car) ใช้ 'That'."
  },
  {
    id: 24,
    question: "Do you have ______ brothers or sisters?",
    options: ["some", "any", "the", "a"],
    correctAnswer: 1,
    explanation: "ในประโยคคำถามและปฏิเสธ มักใช้ 'any' นำหน้านามนับได้พหูพจน์."
  },

  // --- Interjection ---
  {
    id: 25,
    question: "______, that hurt! (Expression of pain)",
    options: ["Wow", "Ouch", "Hey", "Yum"],
    correctAnswer: 1,
    explanation: "'Ouch' เป็นคำอุทานที่ใช้เมื่อรู้สึกเจ็บปวด."
  },
  {
    id: 26,
    question: "Which word is an Interjection?",
    options: ["Run", "Beautiful", "Alas", "Under"],
    correctAnswer: 2,
    explanation: "'Alas' เป็นคำอุทานโบราณ (แสดงความเศร้า/เสียดาย)."
  },

  // --- Mixed Identification ---
  {
    id: 27,
    question: "Identify the part of speech of 'quickly' in 'He runs quickly.'",
    options: ["Adjective", "Adverb", "Verb", "Noun"],
    correctAnswer: 1,
    explanation: "ลงท้ายด้วย -ly และขยายกริยา runs คือ Adverb."
  },
  {
    id: 28,
    question: "Identify the part of speech of 'smart' in 'She is a smart student.'",
    options: ["Noun", "Verb", "Adjective", "Pronoun"],
    correctAnswer: 2,
    explanation: "ขยายคำนาม student บอกลักษณะ คือ Adjective."
  },
  {
    id: 29,
    question: "Identify the part of speech of 'between' in 'Sit between us.'",
    options: ["Conjunction", "Preposition", "Adverb", "Adjective"],
    correctAnswer: 1,
    explanation: "บอกตำแหน่งความสัมพันธ์ระหว่างคำนาม (us) คือ Preposition."
  },
  {
    id: 30,
    question: "Identify the part of speech of 'swim' in 'I like to swim.'",
    options: ["Noun", "Adjective", "Verb", "Preposition"],
    correctAnswer: 2,
    explanation: "แสดงการกระทำ คือ Verb."
  }
];