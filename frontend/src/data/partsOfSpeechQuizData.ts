import { QuizQuestion } from '../types';

export const partsOfSpeechQuizData: QuizQuestion[] = [
  // --- Noun (1-4) ---
  {
    id: 1,
    question: "Identify the **Collective Noun** in this sentence: 'The team celebrated their victory.'",
    options: ["Team", "Victory", "Celebrated", "Their"],
    correctAnswer: 0,
    explanation: "'Team' คือกลุ่มคนหรือคณะบุคคล จึงเป็น Collective Noun (สมุหนาม)."
  },
  {
    id: 2,
    question: "Which of the following is an **Abstract Noun**?",
    options: ["Table", "Happiness", "School", "Doctor"],
    correctAnswer: 1,
    explanation: "'Happiness' (ความสุข) เป็นสิ่งที่จับต้องไม่ได้ เป็นความรู้สึก จึงเป็น Abstract Noun."
  },
  {
    id: 3,
    question: "Identify the **Compound Noun**.",
    options: ["Toothpaste", "Tooth", "Paste", "Big"],
    correctAnswer: 0,
    explanation: "'Toothpaste' เกิดจากคำว่า Tooth + Paste มารวมกันเป็นคำใหม่."
  },
  {
    id: 4,
    question: "'Bangkok' is an example of a/an ...",
    options: ["Common Noun", "Proper Noun", "Abstract Noun", "Collective Noun"],
    correctAnswer: 1,
    explanation: "'Bangkok' เป็นชื่อเฉพาะของสถานที่ ขึ้นต้นด้วยตัวพิมพ์ใหญ่ จึงเป็น Proper Noun."
  },

  // --- Pronoun (5-9) ---
  {
    id: 5,
    question: "She taught **herself** to play the guitar. The bold word is a...",
    options: ["Possessive Pronoun", "Reflexive Pronoun", "Object Pronoun", "Relative Pronoun"],
    correctAnswer: 1,
    explanation: "'Herself' สะท้อนการกระทำกลับเข้าหาประธาน (She) จึงเป็น Reflexive Pronoun."
  },
  {
    id: 6,
    question: "They looked at **each other** in surprise.",
    options: ["Reflexive Pronoun", "Reciprocal Pronoun", "Indefinite Pronoun", "Demonstrative Pronoun"],
    correctAnswer: 1,
    explanation: "'Each other' แปลว่า 'ซึ่งกันและกัน' แสดงความสัมพันธ์ระหว่างกัน จึงเป็น Reciprocal Pronoun."
  },
  {
    id: 7,
    question: "**Who** is calling? The bold word is a/an...",
    options: ["Interrogative Pronoun", "Relative Pronoun", "Demonstrative Pronoun", "Indefinite Pronoun"],
    correctAnswer: 0,
    explanation: "'Who' ในบริบทนี้ใช้ขึ้นต้นประโยคคำถาม จึงเป็น Interrogative Pronoun."
  },
  {
    id: 8,
    question: "This is the book **which** I bought yesterday.",
    options: ["Interrogative Pronoun", "Relative Pronoun", "Subject Pronoun", "Object Pronoun"],
    correctAnswer: 1,
    explanation: "'Which' ในที่นี้ทำหน้าที่เชื่อมประโยคและขยายคำนามข้างหน้า (book) จึงเป็น Relative Pronoun."
  },
  {
    id: 9,
    question: "**Someone** is knocking at the door.",
    options: ["Definite Pronoun", "Indefinite Pronoun", "Personal Pronoun", "Possessive Pronoun"],
    correctAnswer: 1,
    explanation: "'Someone' (บางคน) ไม่ได้ระบุเจาะจงว่าเป็นใคร จึงเป็น Indefinite Pronoun."
  },

  // --- Verb (10-13) ---
  {
    id: 10,
    question: "I **know** the answer. The verb 'know' is a...",
    options: ["Action Verb", "Stative Verb", "Linking Verb", "Auxiliary Verb"],
    correctAnswer: 1,
    explanation: "'Know' แสดงสภาวะทางความคิด ไม่ใช่การกระทำทางร่างกาย จึงเป็น Stative Verb."
  },
  {
    id: 11,
    question: "She **can** speak three languages.",
    options: ["Action Verb", "Modal Verb", "Linking Verb", "Intransitive Verb"],
    correctAnswer: 1,
    explanation: "'Can' เป็น Modal Verb ที่บอกความสามารถ (Ability)."
  },
  {
    id: 12,
    question: "He **sleeps** early. The verb 'sleeps' is...",
    options: ["Transitive", "Intransitive", "Linking", "Auxiliary"],
    correctAnswer: 1,
    explanation: "'Sleeps' ไม่ต้องการกรรมมารองรับ (เราไม่พูดว่า sleeps something) จึงเป็น Intransitive Verb."
  },
  {
    id: 13,
    question: "She **eats** an apple. The verb 'eats' is...",
    options: ["Transitive", "Intransitive", "Linking", "Modal"],
    correctAnswer: 0,
    explanation: "'Eats' ต้องการกรรม (an apple) มารองรับเพื่อให้ได้ใจความสมบูรณ์ จึงเป็น Transitive Verb."
  },

  // --- Adjective (14-16) ---
  {
    id: 14,
    question: "Choose the correct order of adjectives: 'A ______ house.'",
    options: ["beautiful small old", "small beautiful old", "old beautiful small", "small old beautiful"],
    correctAnswer: 0,
    explanation: "ลำดับ: Opinion (beautiful) -> Size (small) -> Age (old)."
  },
  {
    id: 15,
    question: "**This** car is mine. 'This' functions as a...",
    options: ["Descriptive Adjective", "Demonstrative Adjective", "Quantitative Adjective", "Possessive Adjective"],
    correctAnswer: 1,
    explanation: "'This' ใช้ชี้เฉพาะเจาะจงคำนาม (car) จึงเป็น Demonstrative Adjective."
  },
  {
    id: 16,
    question: "She is the **smartest** student in class.",
    options: ["Comparative Adjective", "Superlative Adjective", "Descriptive Adjective", "Proper Adjective"],
    correctAnswer: 1,
    explanation: "'Smartest' (ฉลาดที่สุด) เป็นการเปรียบเทียบขั้นสูงสุด (Superlative)."
  },

  // --- Adverb (17-19) ---
  {
    id: 17,
    question: "He speaks **slowly**. 'Slowly' is an Adverb of...",
    options: ["Time", "Place", "Manner", "Frequency"],
    correctAnswer: 2,
    explanation: "'Slowly' (อย่างช้าๆ) ขยายกริยาเพื่อบอกอาการว่าทำอย่างไร (Manner)."
  },
  {
    id: 18,
    question: "She **always** drinks coffee in the morning.",
    options: ["Adverb of Degree", "Adverb of Time", "Adverb of Frequency", "Adverb of Place"],
    correctAnswer: 2,
    explanation: "'Always' (เสมอ/เป็นประจำ) บอกความถี่ (Frequency)."
  },
  {
    id: 19,
    question: "It is **very** hot today. 'Very' is an Adverb of...",
    options: ["Degree", "Manner", "Place", "Time"],
    correctAnswer: 0,
    explanation: "'Very' (มาก) ขยายคำคุณศัพท์ hot เพื่อบอกระดับความเข้มข้น (Degree)."
  },

  // --- Preposition (20-22) ---
  {
    id: 20,
    question: "The cat is **under** the table.",
    options: ["Preposition of Time", "Preposition of Place", "Preposition of Movement", "Preposition of Cause"],
    correctAnswer: 1,
    explanation: "'Under' (ข้างใต้) บอกตำแหน่งสถานที่ (Place)."
  },
  {
    id: 21,
    question: "We will meet **at** 5 PM.",
    options: ["Preposition of Place", "Preposition of Time", "Preposition of Movement", "Preposition of Agent"],
    correctAnswer: 1,
    explanation: "'At' เมื่อนำหน้าเวลาตามนาฬิกา ถือเป็น Preposition of Time."
  },
  {
    id: 22,
    question: "He walked **into** the room.",
    options: ["Preposition of Place", "Preposition of Movement", "Preposition of Time", "Preposition of Manner"],
    correctAnswer: 1,
    explanation: "'Into' (เข้าไปใน) แสดงการเคลื่อนที่ (Movement)."
  },

  // --- Conjunction (23-25) ---
  {
    id: 23,
    question: "I like coffee, **but** my sister likes tea.",
    options: ["Subordinating Conjunction", "Coordinating Conjunction", "Correlative Conjunction", "Adverbial Conjunction"],
    correctAnswer: 1,
    explanation: "'But' เป็นหนึ่งใน FANBOYS ซึ่งเป็น Coordinating Conjunction เชื่อมประโยคที่มีความสำคัญเท่ากัน."
  },
  {
    id: 24,
    question: "I stayed home **because** it was raining.",
    options: ["Coordinating Conjunction", "Subordinating Conjunction", "Correlative Conjunction", "Relative Pronoun"],
    correctAnswer: 1,
    explanation: "'Because' เชื่อมประโยคเหตุผล (ประโยคย่อย) เข้ากับประโยคหลัก จึงเป็น Subordinating Conjunction."
  },
  {
    id: 25,
    question: "**Both** Tom **and** Jerry are here.",
    options: ["Coordinating Conjunction", "Subordinating Conjunction", "Correlative Conjunction", "Preposition"],
    correctAnswer: 2,
    explanation: "'Both...and' มาเป็นคู่กันเสมอ จึงเป็น Correlative Conjunction."
  },

  // --- Determiner (26-28) ---
  {
    id: 26,
    question: "I have **an** apple.",
    options: ["Demonstrative", "Quantifier", "Article", "Possessive"],
    correctAnswer: 2,
    explanation: "'An' เป็น Article (คำนำหน้านาม) ใช้นำหน้านามนับได้เอกพจน์ที่ขึ้นต้นด้วยเสียงสระ."
  },
  {
    id: 27,
    question: "Do you have **any** money?",
    options: ["Article", "Demonstrative", "Quantifier", "Interjection"],
    correctAnswer: 2,
    explanation: "'Any' เป็น Quantifier บอกปริมาณ (ใช้ในประโยคคำถาม/ปฏิเสธ)."
  },
  {
    id: 28,
    question: "**My** car is red.",
    options: ["Possessive Determiner", "Demonstrative Determiner", "Article", "Quantifier"],
    correctAnswer: 0,
    explanation: "'My' แสดงความเป็นเจ้าของและนำหน้าคำนาม จึงเป็น Possessive Determiner."
  },

  // --- Interjection (29-30) ---
  {
    id: 29,
    question: "**Wow!** That looks amazing.",
    options: ["Conjunction", "Preposition", "Interjection", "Adverb"],
    correctAnswer: 2,
    explanation: "'Wow!' เป็นคำอุทานแสดงความรู้สึกประหลาดใจ."
  },
  {
    id: 30,
    question: "Which word is an Interjection? 'Hey! Come here.'",
    options: ["Come", "Here", "Hey", "None"],
    correctAnswer: 2,
    explanation: "'Hey!' เป็นคำอุทานที่ใช้เรียกความสนใจ."
  }
];