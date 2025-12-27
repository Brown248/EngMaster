// frontend/src/data/separatePartsOfSpeechData.ts
import { QuizQuestion } from '../../types';

export interface PartOfSpeechTopic {
  id: string;
  name: string;
  description?: string;
  questions: QuizQuestion[];
}

export const separatePartsOfSpeechData: PartOfSpeechTopic[] = [
  // --- 1. Noun ---
  {
    id: 'noun',
    name: 'Noun (คำนาม)',
    description: 'แบบทดสอบคำนามทั่วไป, นามเฉพาะ, นามนับได้/ไม่ได้',
    questions: [
      { id: 1, type: 'choice', question: "Which word is a **Common Noun**?", options: ["London", "Dog", "Monday", "Toyota"], correctAnswer: 1, explanation: "Dog เป็นคำนามทั่วไป ไม่ได้เจาะจงชื่อ" },
      { id: 2, type: 'choice', question: "Find the **Abstract Noun**.", options: ["Table", "Water", "Freedom", "Teacher"], correctAnswer: 2, explanation: "Freedom (เสรีภาพ) เป็นนามธรรม จับต้องไม่ได้" },
      { id: 3, type: 'choice', question: "Which is a **Collective Noun**?", options: ["Team", "Player", "Ball", "Stadium"], correctAnswer: 0, explanation: "Team หมายถึงกลุ่มคน (คณะ)" },
      { id: 4, type: 'choice', question: "Which noun is **Uncountable**?", options: ["Book", "Car", "Water", "Pen"], correctAnswer: 2, explanation: "Water (น้ำ) นับเป็นชิ้นไม่ได้ เป็น Uncountable" },
      { id: 5, type: 'choice', question: "'Toothpaste' is an example of...", options: ["Proper Noun", "Compound Noun", "Abstract Noun", "Collective Noun"], correctAnswer: 1, explanation: "Tooth + Paste = Compound Noun" },
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'Bangkok is a Common Noun.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Bangkok เป็น Proper Noun (ชื่อเฉพาะ)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'Rice is an Uncountable Noun.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: ข้าวสารนับเม็ดไม่ได้ (ปกติ)" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'I have two moneys.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Money เป็น Uncountable เติม s ไม่ได้" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'The jury is making a decision.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Jury เป็น Collective Noun ใช้กับกริยาเอกพจน์ได้" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'Love is a Concrete Noun.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Love เป็น Abstract Noun" },
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["won", "team", "the", "match"], correctAnswer: ["the", "team", "won", "the", "match"], explanation: "Collective Noun Subject" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["Bangkok", "live", "I", "in"], correctAnswer: ["I", "live", "in", "Bangkok"], explanation: "Proper Noun" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["need", "some", "I", "water"], correctAnswer: ["I", "need", "some", "water"], explanation: "Uncountable Noun" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["intelligence", "showed", "he", "great"], correctAnswer: ["he", "showed", "great", "intelligence"], explanation: "Abstract Noun" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["brush", "toothpaste", "use", "to", "teeth", "your"], correctAnswer: ["use", "toothpaste", "to", "brush", "your", "teeth"], explanation: "Compound Noun" },
      { id: 16, type: 'fill-blank', question: "A ______ (flock/herd) of birds flew over.", correctAnswer: "flock", explanation: "ฝูงนกใช้ Flock" },
      { id: 17, type: 'fill-blank', question: "Please give me a glass of ______ (water).", correctAnswer: "water", explanation: "Noun" },
      { id: 18, type: 'fill-blank', question: "______ (Honesty) is the best policy.", correctAnswer: "honesty", explanation: "Abstract Noun" },
      { id: 19, type: 'fill-blank', question: "My ______ (cat) likes fish.", correctAnswer: "cat", explanation: "Common Noun" },
      { id: 20, type: 'fill-blank', question: "We went to ______ (London).", correctAnswer: "london", explanation: "Proper Noun" }
    ]
  },
  // --- 2. Pronoun ---
  {
    id: 'pronoun',
    name: 'Pronoun (สรรพนาม)',
    description: 'ทดสอบการใช้ Subject, Object, Possessive Pronoun ฯลฯ',
    questions: [
      { id: 1, type: 'choice', question: "'**She** eats.' 'She' is a...", options: ["Object Pronoun", "Subject Pronoun", "Possessive Pronoun", "Reflexive Pronoun"], correctAnswer: 1, explanation: "ทำหน้าที่เป็นประธาน" },
      { id: 2, type: 'choice', question: "I did it **myself**.", options: ["Reflexive", "Reciprocal", "Relative", "Indefinite"], correctAnswer: 0, explanation: "Reflexive สะท้อนเข้าตัว" },
      { id: 3, type: 'choice', question: "This book is **mine**.", options: ["Possessive Adjective", "Possessive Pronoun", "Object", "Subject"], correctAnswer: 1, explanation: "Mine (ของฉัน) ไม่ต้องมีนามตามหลัง" },
      { id: 4, type: 'choice', question: "**Who** called you?", options: ["Relative", "Interrogative", "Demonstrative", "Indefinite"], correctAnswer: 1, explanation: "ใช้ถามคำถาม" },
      { id: 5, type: 'choice', question: "They love **each other**.", options: ["Reflexive", "Reciprocal", "Indefinite", "Relative"], correctAnswer: 1, explanation: "ซึ่งกันและกัน (Reciprocal)" },
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'Him goes to school.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องใช้ He (Subject)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'Is this yours?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'I saw myself in the mirror.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'Someone are here.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Someone เป็นเอกพจน์ ใช้ is" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'This is the man which I met.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: คนใช้ who/whom" },
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["loves", "she", "him"], correctAnswer: ["she", "loves", "him"], explanation: "S + V + O" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["taught", "English", "herself", "she"], correctAnswer: ["she", "taught", "herself", "English"], explanation: "Reflexive" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["knocking", "someone", "door", "at", "is", "the"], correctAnswer: ["someone", "is", "knocking", "at", "the", "door"], explanation: "Indefinite" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["yours", "is", "book", "this", "?"], correctAnswer: ["is", "this", "book", "yours", "?"], explanation: "Possessive" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["help", "we", "other", "each"], correctAnswer: ["we", "help", "each", "other"], explanation: "Reciprocal" },
      { id: 16, type: 'fill-blank', question: "My brother is tall. ______ (He/Him) plays basketball.", correctAnswer: "he", explanation: "Subject Pronoun" },
      { id: 17, type: 'fill-blank', question: "I cut ______ (me/myself) while cooking.", correctAnswer: "myself", explanation: "Reflexive" },
      { id: 18, type: 'fill-blank', question: "Is this pen ______ (your/yours)?", correctAnswer: "yours", explanation: "Possessive Pronoun" },
      { id: 19, type: 'fill-blank', question: "______ (Who/Which) is your best friend?", correctAnswer: "who", explanation: "Interrogative" },
      { id: 20, type: 'fill-blank', question: "I don't know ______ (anyone/someone) here.", correctAnswer: "anyone", explanation: "Indefinite (negative)" }
    ]
  },
  // --- 3. Verb ---
  {
    id: 'verb',
    name: 'Verb (กริยา)',
    description: 'ทดสอบ Action verb, Linking verb, Modal verb',
    questions: [
      { id: 1, type: 'choice', question: "I **run** every day.", options: ["Action Verb", "Linking Verb", "Modal Verb", "Auxiliary Verb"], correctAnswer: 0, explanation: "Run คือการกระทำ" },
      { id: 2, type: 'choice', question: "She **is** a doctor.", options: ["Action", "Linking", "Transitive", "Modal"], correctAnswer: 1, explanation: "Verb to be บอกสถานะ (Linking)" },
      { id: 3, type: 'choice', question: "He **can** swim.", options: ["Main Verb", "Modal Verb", "Linking Verb", "Transitive"], correctAnswer: 1, explanation: "Can บอกความสามารถ (Modal)" },
      { id: 4, type: 'choice', question: "She **eats** an apple.", options: ["Intransitive", "Transitive", "Linking", "Auxiliary"], correctAnswer: 1, explanation: "Eats ต้องการกรรม (apple)" },
      { id: 5, type: 'choice', question: "They **sleep**.", options: ["Transitive", "Intransitive", "Modal", "Linking"], correctAnswer: 1, explanation: "Sleep ไม่ต้องการกรรม" },
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'She must goes.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: หลัง Modal (must) ต้องเป็น Infinitive (go)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'I am agree.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Agree เป็น verb อยู่แล้ว ไม่ใช้ am agree -> I agree" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'He seems happy.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Seem เป็น Linking Verb" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'I have done it.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Have เป็น Auxiliary" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'She kicks.' (Transitive needs object)", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Kick เป็น Transitive ควรมีกรรม เช่น She kicks the ball." },
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["should", "you", "home", "go"], correctAnswer: ["you", "should", "go", "home"], explanation: "Modal" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["tastes", "soup", "good", "the"], correctAnswer: ["the", "soup", "tastes", "good"], explanation: "Linking Verb" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["football", "play", "they"], correctAnswer: ["they", "play", "football"], explanation: "Action Transitive" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["laughing", "is", "she"], correctAnswer: ["she", "is", "laughing"], explanation: "Aux + Action" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["speak", "can", "English", "I"], correctAnswer: ["I", "can", "speak", "English"], explanation: "Modal" },
      { id: 16, type: 'fill-blank', question: "She ______ (is/has) beautiful.", correctAnswer: "is", explanation: "Linking Verb" },
      { id: 17, type: 'fill-blank', question: "I ______ (do/can) drive a car.", correctAnswer: "can", explanation: "Modal (Ability)" },
      { id: 18, type: 'fill-blank', question: "He ______ (looks/watches) tired.", correctAnswer: "looks", explanation: "Linking Verb" },
      { id: 19, type: 'fill-blank', question: "We ______ (are/do) running.", correctAnswer: "are", explanation: "Auxiliary for Continuous" },
      { id: 20, type: 'fill-blank', question: "They ______ (eat/sleep) pizza.", correctAnswer: "eat", explanation: "Transitive Verb" }
    ]
  },
  // --- 4. Adjective (Data moved here) ---
  {
    id: 'adjective',
    name: 'Adjective (คำคุณศัพท์)',
    description: 'คำขยายคำนาม, บอกลักษณะ, บอกสี',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "This car is ______ than that one.",
        options: ["fast", "faster", "fastest", "more fast"],
        correctAnswer: 1,
        explanation: "Comparative: มีคำว่า 'than' แสดงว่าเป็นขั้นกว่า คำว่า fast พยางค์เดียวเติม -er ได้เลย"
      },
      {
        id: 2,
        type: 'choice',
        question: "She is the ______ student in the class.",
        options: ["smart", "smarter", "smartest", "most smart"],
        correctAnswer: 2,
        explanation: "Superlative: มีคำว่า 'the' และบริบท 'in the class' แสดงว่าเป็นขั้นสุด smart เติม -est"
      },
      {
        id: 3,
        type: 'choice',
        question: "This puzzle is ______ than the last one.",
        options: ["difficult", "difficulter", "more difficult", "most difficult"],
        correctAnswer: 2,
        explanation: "Difficult มี 3 พยางค์ ขั้นกว่าต้องใช้ 'more' นำหน้า"
      },
      {
        id: 4,
        type: 'choice',
        question: "Who is the ______ football player in the world?",
        options: ["good", "better", "best", "goodest"],
        correctAnswer: 2,
        explanation: "Irregular: Good เป็นคำยกเว้น ขั้นสุดคือ 'best'"
      },
      {
        id: 5,
        type: 'choice',
        question: "My house is ______ than yours.",
        options: ["big", "biger", "bigger", "more big"],
        correctAnswer: 2,
        explanation: "Big เป็นสระเสียงสั้นตัวเดียว (Short Vowel) ต้องเบิ้ลตัวสะกด (g) ก่อนเติม er เป็น bigger"
      },
      // --- Part 2: True / False ---
      {
        id: 6,
        type: 'true-false',
        question: "Correct or Incorrect: 'He is more tall than me.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1, // Incorrect
        explanation: "ผิด: Tall เป็นคำพยางค์เดียว ต้องใช้ taller ไม่ใช่ more tall"
      },
      {
        id: 7,
        type: 'true-false',
        question: "Correct or Incorrect: 'This is the most expensive bag.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 0, // Correct
        explanation: "ถูก: Expensive มี 3 พยางค์ ใช้ the most ถูกต้องแล้ว"
      },
      {
        id: 8,
        type: 'true-false',
        question: "Correct or Incorrect: 'Today is badder than yesterday.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1, // Incorrect
        explanation: "ผิด: Bad เป็นคำยกเว้น (Irregular) ขั้นกว่าคือ 'worse' ไม่ใช่ badder"
      },
      {
        id: 9,
        type: 'true-false',
        question: "Correct or Incorrect: 'She is the happiest girl.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 0, // Correct
        explanation: "ถูก: Happy ลงท้าย y เปลี่ยนเป็น i แล้วเติม est"
      },
      {
        id: 10,
        type: 'true-false',
        question: "Correct or Incorrect: 'Jupiter is the bigest planet.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1, // Incorrect
        explanation: "ผิด: Bigest สะกดผิด ต้องเบิ้ล g เป็น 'biggest'"
      },
      // --- Part 3: Reordering ---
      {
        id: 11,
        type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["is", "cheetah", "faster", "a", "turtle", "than", "a"],
        correctAnswer: ["a", "cheetah", "is", "faster", "than", "a", "turtle"],
        explanation: "Structure: Noun 1 + is + adj-er + than + Noun 2"
      },
      {
        id: 12,
        type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["beautiful", "most", "she", "the", "is", "girl"],
        correctAnswer: ["she", "is", "the", "most", "beautiful", "girl"],
        explanation: "Structure: Subject + is + the most + adj + Noun"
      },
      {
        id: 13,
        type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["weather", "today", "worse", "yesterday", "is", "than"],
        correctAnswer: ["today", "weather", "is", "worse", "than", "yesterday"],
        explanation: "Comparison: worse than (แย่กว่า)"
      },
      {
        id: 14,
        type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["English", "math", "is", "easier", "than"],
        correctAnswer: ["English", "is", "easier", "than", "math"],
        explanation: "Comparison: easier than (ง่ายกว่า)"
      },
      {
        id: 15,
        type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["building", "tallest", "this", "the", "is", "city", "in", "the"],
        correctAnswer: ["this", "is", "the", "tallest", "building", "in", "the", "city"],
        explanation: "Superlative: The tallest building"
      },
      // --- Part 4: Fill in the blank ---
      {
        id: 16,
        type: 'fill-blank',
        question: "Elephants are ______ (heavy) than lions.",
        correctAnswer: "heavier",
        explanation: "Heavy ลงท้าย y เปลี่ยนเป็น i แล้วเติม er"
      },
      {
        id: 17,
        type: 'fill-blank',
        question: "This is the ______ (bad) movie I have ever seen.",
        correctAnswer: "worst",
        explanation: "ขั้นสุดของ bad คือ worst"
      },
      {
        id: 18,
        type: 'fill-blank',
        question: "My brother is ______ (old) than me.",
        correctAnswer: "older",
        explanation: "ขั้นกว่าของ old คือ older"
      },
      {
        id: 19,
        type: 'fill-blank',
        question: "Summer is the ______ (hot) season.",
        correctAnswer: "hottest",
        explanation: "Hot สระเสียงสั้น ต้องเบิ้ล t เป็น hottest"
      },
      {
        id: 20,
        type: 'fill-blank',
        question: "This phone is ______ (expensive) than that one.",
        correctAnswer: "more expensive",
        explanation: "Expensive มีหลายพยางค์ ใช้ more นำหน้า"
      }
    ]
  },
  // --- 5. Adverb ---
  {
    id: 'adverb',
    name: 'Adverb (คำวิเศษณ์)',
    description: 'ขยายกริยา, ขยายคุณศัพท์, บอกความถี่',
    questions: [
      { id: 1, type: 'choice', question: "He runs **quickly**.", options: ["Manner", "Time", "Place", "Frequency"], correctAnswer: 0, explanation: "บอกอาการ (อย่างไร)" },
      { id: 2, type: 'choice', question: "I **always** eat breakfast.", options: ["Manner", "Frequency", "Degree", "Place"], correctAnswer: 1, explanation: "บอกความถี่" },
      { id: 3, type: 'choice', question: "She is **very** beautiful.", options: ["Time", "Place", "Degree", "Manner"], correctAnswer: 2, explanation: "บอกระดับ (มาก)" },
      { id: 4, type: 'choice', question: "Come **here**.", options: ["Place", "Time", "Manner", "Frequency"], correctAnswer: 0, explanation: "บอกสถานที่" },
      { id: 5, type: 'choice', question: "See you **tomorrow**.", options: ["Place", "Time", "Degree", "Manner"], correctAnswer: 1, explanation: "บอกเวลา" },
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'She sings good.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องใช้ well (Adverb) ขยาย sing" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'He speaks fast.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Fast เป็นได้ทั้ง Adj และ Adv" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'I hardly ever see him.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'She is extremely smart.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'He walks slow.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ควรใช้ slowly (ทางการ)" },
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["fluently", "speaks", "he", "English"], correctAnswer: ["he", "speaks", "English", "fluently"], explanation: "Manner หลัง Object" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["always", "late", "is", "she"], correctAnswer: ["she", "is", "always", "late"], explanation: "Frequency หลัง Verb to be" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["coffee", "drinks", "never", "he"], correctAnswer: ["he", "never", "drinks", "coffee"], explanation: "Frequency หน้า Main Verb" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["outside", "playing", "are", "they"], correctAnswer: ["they", "are", "playing", "outside"], explanation: "Place" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["so", "is", "it", "hot", "today"], correctAnswer: ["it", "is", "so", "hot", "today"], explanation: "Degree + Time" },
      { id: 16, type: 'fill-blank', question: "Please drive ______ (careful/carefully).", correctAnswer: "carefully", explanation: "Adverb manner" },
      { id: 17, type: 'fill-blank', question: "I ______ (usual/usually) go by bus.", correctAnswer: "usually", explanation: "Frequency" },
      { id: 18, type: 'fill-blank', question: "He works ______ (hard/hardly).", correctAnswer: "hard", explanation: "Hard = หนัก, Hardly = แทบจะไม่" },
      { id: 19, type: 'fill-blank', question: "She sings ______ (beautiful/beautifully).", correctAnswer: "beautifully", explanation: "Manner" },
      { id: 20, type: 'fill-blank', question: "It is ______ (too/two) expensive.", correctAnswer: "too", explanation: "Degree" }
    ]
  },
  // --- 6. Preposition ---
  {
    id: 'preposition',
    name: 'Preposition (คำบุพบท)',
    description: 'บอกตำแหน่ง (in/on/at), เวลา, ทิศทาง',
    questions: [
        { id: 1, type: 'choice', question: "The book is **on** the table.", options: ["Time", "Place", "Movement", "Cause"], correctAnswer: 1, explanation: "บอกตำแหน่ง" },
        { id: 2, type: 'choice', question: "We met **at** 9 AM.", options: ["Place", "Time", "Movement", "Agent"], correctAnswer: 1, explanation: "บอกเวลา" },
        { id: 3, type: 'choice', question: "He walked **into** the room.", options: ["Place", "Time", "Movement", "Cause"], correctAnswer: 2, explanation: "บอกการเคลื่อนที่" },
        { id: 4, type: 'choice', question: "I did it **for** you.", options: ["Place", "Purpose/Reason", "Time", "Movement"], correctAnswer: 1, explanation: "เพื่อ (จุดประสงค์)" },
        { id: 5, type: 'choice', question: "The cat is **under** the chair.", options: ["Place", "Time", "Cause", "Movement"], correctAnswer: 0, explanation: "ข้างใต้ (ตำแหน่ง)" },
        { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I was born in Monday.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: วันใช้ On Monday" },
        { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She looks at me.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 8, type: 'true-false', question: "Correct/Incorrect: 'We go to home.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: go home (ไม่มี to)" },
        { id: 9, type: 'true-false', question: "Correct/Incorrect: 'The plane flew over the city.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 10, type: 'true-false', question: "Correct/Incorrect: 'I am good in math.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: good at math" },
        { id: 11, type: 'reorder', question: "Rearrange:", options: ["table", "the", "on", "is", "pen", "the"], correctAnswer: ["the", "pen", "is", "on", "the", "table"], explanation: "Place" },
        { id: 12, type: 'reorder', question: "Rearrange:", options: ["school", "to", "go", "I"], correctAnswer: ["I", "go", "to", "school"], explanation: "Movement" },
        { id: 13, type: 'reorder', question: "Rearrange:", options: ["morning", "in", "the", "run", "I"], correctAnswer: ["I", "run", "in", "the", "morning"], explanation: "Time" },
        { id: 14, type: 'reorder', question: "Rearrange:", options: ["me", "listen", "to"], correctAnswer: ["listen", "to", "me"], explanation: "Phrasal" },
        { id: 15, type: 'reorder', question: "Rearrange:", options: ["us", "between", "sit", "come"], correctAnswer: ["come", "sit", "between", "us"], explanation: "Place" },
        { id: 16, type: 'fill-blank', question: "I live ______ (in/at) Thailand.", correctAnswer: "in", explanation: "ประเทศใช้ in" },
        { id: 17, type: 'fill-blank', question: "See you ______ (on/in) Friday.", correctAnswer: "on", explanation: "วันใช้ on" },
        { id: 18, type: 'fill-blank', question: "Look ______ (at/in) the picture.", correctAnswer: "at", explanation: "look at" },
        { id: 19, type: 'fill-blank', question: "He is afraid ______ (of/with) dogs.", correctAnswer: "of", explanation: "afraid of" },
        { id: 20, type: 'fill-blank', question: "Wait ______ (for/to) me.", correctAnswer: "for", explanation: "wait for" }
    ]
  },
  // --- 7. Conjunction ---
  {
    id: 'conjunction',
    name: 'Conjunction (คำสันธาน)',
    description: 'คำเชื่อมประโยค (and, but, or, because)',
    questions: [
        { id: 1, type: 'choice', question: "I like tea **and** coffee.", options: ["Coordinating", "Subordinating", "Correlative", "Adverb"], correctAnswer: 0, explanation: "เชื่อมคำประเภทเดียวกัน" },
        { id: 2, type: 'choice', question: "I stayed home **because** it rained.", options: ["Coordinating", "Subordinating", "Correlative", "Preposition"], correctAnswer: 1, explanation: "เชื่อมประโยคเหตุผล (Subordinating)" },
        { id: 3, type: 'choice', question: "**Both** Tom **and** Jerry.", options: ["Coordinating", "Correlative", "Subordinating", "Relative"], correctAnswer: 1, explanation: "มาเป็นคู่ (Both...and)" },
        { id: 4, type: 'choice', question: "She is poor **but** happy.", options: ["Coordinating", "Subordinating", "Correlative", "Noun"], correctAnswer: 0, explanation: "ขัดแย้ง (FANBOYS)" },
        { id: 5, type: 'choice', question: "Do you want tea **or** coffee?", options: ["Coordinating", "Subordinating", "Correlative", "Verb"], correctAnswer: 0, explanation: "ให้เลือก (FANBOYS)" },
        { id: 6, type: 'true-false', question: "Correct/Incorrect: 'Although it rained, but I went out.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Although ห้ามใช้คู่กับ but" },
        { id: 7, type: 'true-false', question: "Correct/Incorrect: 'I like him because he is kind.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Neither Tom nor I are going.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Verb ผันตามประธานตัวหลัง (I) -> am going" },
        { id: 9, type: 'true-false', question: "Correct/Incorrect: 'Study hard, so you will pass.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 10, type: 'true-false', question: "Correct/Incorrect: 'I eat rice and I eat bread.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 11, type: 'reorder', question: "Rearrange:", options: ["tired", "but", "happy", "I", "am"], correctAnswer: ["I", "am", "tired", "but", "happy"], explanation: "Structure" },
        { id: 12, type: 'reorder', question: "Rearrange:", options: ["because", "cried", "she", "sad", "was", "she"], correctAnswer: ["she", "cried", "because", "she", "was", "sad"], explanation: "Reason" },
        { id: 13, type: 'reorder', question: "Rearrange:", options: ["or", "coffee", "tea", "want", "you", "do", "?"], correctAnswer: ["do", "you", "want", "tea", "or", "coffee", "?"], explanation: "Choice" },
        { id: 14, type: 'reorder', question: "Rearrange:", options: ["neither", "know", "nor", "I", "care"], correctAnswer: ["I", "neither", "know", "nor", "care"], explanation: "Correlative" },
        { id: 15, type: 'reorder', question: "Rearrange:", options: ["rich", "although", "is", "he", "is", "he", "unhappy"], correctAnswer: ["although", "he", "is", "rich", "he", "is", "unhappy"], explanation: "Concession" },
        { id: 16, type: 'fill-blank', question: "I want to go, ______ (but/and) I am tired.", correctAnswer: "but", explanation: "Contrast" },
        { id: 17, type: 'fill-blank', question: "______ (Because/Although) it was raining, we went out.", correctAnswer: "although", explanation: "Contrast situation" },
        { id: 18, type: 'fill-blank', question: "He is ______ (not only/neither) smart but also funny.", correctAnswer: "not only", explanation: "Not only...but also" },
        { id: 19, type: 'fill-blank', question: "You can have cake ______ (or/nor) ice cream.", correctAnswer: "or", explanation: "Choice" },
        { id: 20, type: 'fill-blank', question: "I study ______ (so/because) I want to learn.", correctAnswer: "because", explanation: "Reason" }
    ]
  },
  // --- 8. Determiner ---
  {
    id: 'determiner',
    name: 'Determiner (คำนำหน้านาม)',
    description: 'Articles (a/an/the), Demonstrative (this/that)',
    questions: [
        { id: 1, type: 'choice', question: "I have **an** apple.", options: ["Article", "Demonstrative", "Quantifier", "Possessive"], correctAnswer: 0, explanation: "a, an, the คือ Article" },
        { id: 2, type: 'choice', question: "**This** book is mine.", options: ["Article", "Demonstrative", "Quantifier", "Possessive"], correctAnswer: 1, explanation: "ชี้เฉพาะ (This/That)" },
        { id: 3, type: 'choice', question: "I have **some** money.", options: ["Article", "Demonstrative", "Quantifier", "Possessive"], correctAnswer: 2, explanation: "บอกปริมาณ (Quantifier)" },
        { id: 4, type: 'choice', question: "**My** car is red.", options: ["Article", "Demonstrative", "Quantifier", "Possessive"], correctAnswer: 3, explanation: "แสดงความเป็นเจ้าของ" },
        { id: 5, type: 'choice', question: "Do you have **any** friends?", options: ["Quantifier", "Article", "Demonstrative", "Interjection"], correctAnswer: 0, explanation: "ปริมาณในประโยคคำถาม" },
        { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I have a hour.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Hour ออกเสียง อ.อ่าง ต้องใช้ an hour" },
        { id: 7, type: 'true-false', question: "Correct/Incorrect: 'Look at the sun.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: สิ่งที่มีหนึ่งเดียวใช้ the" },
        { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Those girl is pretty.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Those ใช้กับพหูพจน์ (girls)" },
        { id: 9, type: 'true-false', question: "Correct/Incorrect: 'I don't have some money.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ปฏิเสธใช้ any" },
        { id: 10, type: 'true-false', question: "Correct/Incorrect: 'That is my pen.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 11, type: 'reorder', question: "Rearrange:", options: ["is", "apple", "an", "this"], correctAnswer: ["this", "is", "an", "apple"], explanation: "Article" },
        { id: 12, type: 'reorder', question: "Rearrange:", options: ["many", "have", "friends", "I"], correctAnswer: ["I", "have", "many", "friends"], explanation: "Quantifier" },
        { id: 13, type: 'reorder', question: "Rearrange:", options: ["pen", "is", "my", "blue"], correctAnswer: ["my", "pen", "is", "blue"], explanation: "Possessive" },
        { id: 14, type: 'reorder', question: "Rearrange:", options: ["these", "are", "books", "mine"], correctAnswer: ["these", "books", "are", "mine"], explanation: "Demonstrative" },
        { id: 15, type: 'reorder', question: "Rearrange:", options: ["sun", "the", "hot", "is"], correctAnswer: ["the", "sun", "is", "hot"], explanation: "Definite Article" },
        { id: 16, type: 'fill-blank', question: "I saw ______ (a/an) elephant.", correctAnswer: "an", explanation: "Vowel sound" },
        { id: 17, type: 'fill-blank', question: "______ (This/These) books are heavy.", correctAnswer: "these", explanation: "Plural" },
        { id: 18, type: 'fill-blank', question: "I don't have ______ (some/any) water.", correctAnswer: "any", explanation: "Negative" },
        { id: 19, type: 'fill-blank', question: "______ (The/A) moon is bright.", correctAnswer: "the", explanation: "Unique object" },
        { id: 20, type: 'fill-blank', question: "Is this ______ (you/your) car?", correctAnswer: "your", explanation: "Possessive" }
    ]
  },
  // --- 9. Interjection ---
  {
    id: 'interjection',
    name: 'Interjection (คำอุทาน)',
    description: 'Wow!, Ouch!, Hey! (บอกอารมณ์)',
    questions: [
        { id: 1, type: 'choice', question: "**Wow!** It's beautiful.", options: ["Interjection", "Noun", "Verb", "Adjective"], correctAnswer: 0, explanation: "คำอุทาน" },
        { id: 2, type: 'choice', question: "**Ouch!** That hurts.", options: ["Happiness", "Pain", "Surprise", "Greeting"], correctAnswer: 1, explanation: "เจ็บปวด" },
        { id: 3, type: 'choice', question: "**Hey!** Look here.", options: ["Greeting/Attention", "Sadness", "Pain", "Fear"], correctAnswer: 0, explanation: "เรียกความสนใจ" },
        { id: 4, type: 'choice', question: "**Oh!** I see.", options: ["Understanding/Surprise", "Anger", "Hunger", "Sleep"], correctAnswer: 0, explanation: "เข้าใจ/ตกใจ" },
        { id: 5, type: 'choice', question: "**Eww!** It's gross.", options: ["Disgust", "Joy", "Love", "Hope"], correctAnswer: 0, explanation: "รังเกียจ/ขยะแขยง" },
        { id: 6, type: 'true-false', question: "Correct/Incorrect: 'Wow. is an interjection.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct (Usually with ! but . is possible)" },
        { id: 7, type: 'true-false', question: "Correct/Incorrect: 'Stop! is a verb acting as interjection.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Cat! is an interjection.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Cat is a noun" },
        { id: 9, type: 'true-false', question: "Correct/Incorrect: 'Alas! He is gone.' (Sadness)", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
        { id: 10, type: 'true-false', question: "Correct/Incorrect: 'Run! is an adjective.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Verb" },
        { id: 11, type: 'reorder', question: "Rearrange:", options: ["won", "we", "yay", "!"], correctAnswer: ["yay", "!", "we", "won"], explanation: "Interjection first" },
        { id: 12, type: 'reorder', question: "Rearrange:", options: ["no", "!", "don't", "that", "do"], correctAnswer: ["no", "!", "don't", "do", "that"], explanation: "Warning" },
        { id: 13, type: 'reorder', question: "Rearrange:", options: ["god", "oh", "my", "!"], correctAnswer: ["oh", "my", "god", "!"], explanation: "Phrase" },
        { id: 14, type: 'reorder', question: "Rearrange:", options: ["hey", "!", "are", "how", "you", "?"], correctAnswer: ["hey", "!", "how", "are", "you", "?"], explanation: "Greeting" },
        { id: 15, type: 'reorder', question: "Rearrange:", options: ["wow", "!", "great", "is", "that"], correctAnswer: ["wow", "!", "that", "is", "great"], explanation: "Surprise" },
        { id: 16, type: 'fill-blank', question: "______! (Ouch/Wow) I cut my finger.", correctAnswer: "ouch", explanation: "Pain" },
        { id: 17, type: 'fill-blank', question: "______! (Hi/Boo) Nice to meet you.", correctAnswer: "hi", explanation: "Greeting" },
        { id: 18, type: 'fill-blank', question: "______! (Shh/Yay) Be quiet.", correctAnswer: "shh", explanation: "Silence" },
        { id: 19, type: 'fill-blank', question: "______! (Yuck/Yum) This tastes bad.", correctAnswer: "yuck", explanation: "Disgust" },
        { id: 20, type: 'fill-blank', question: "______! (Bravo/Alas) You did a great job.", correctAnswer: "bravo", explanation: "Praise" }
    ]
  }
];