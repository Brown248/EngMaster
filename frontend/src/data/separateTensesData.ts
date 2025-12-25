import { TenseTopicData } from '../types';

export const separateTensesData: TenseTopicData[] = [
  // --------------------------------------------------------
  // 1. PRESENT SIMPLE (20 ข้อ)
  // --------------------------------------------------------
  {
    id: 'present-simple',
    name: 'Present Simple',
    description: 'เหตุการณ์ที่เป็นความจริงเสมอ กิจวัตร หรือตารางเวลา',
    questions: [
      // -- 5 Choice --
      {
        id: 1, type: 'choice',
        question: "The sun ______ in the east.",
        options: ["rise", "rises", "is rising", "rose"],
        correctAnswer: 1,
        explanation: "ความจริงตามธรรมชาติ (Fact) ประธานเอกพจน์ กริยาเติม s"
      },
      {
        id: 2, type: 'choice',
        question: "______ she play the piano?",
        options: ["Do", "Does", "Is", "Has"],
        correctAnswer: 1,
        explanation: "คำถาม Present Simple ประธาน She ใช้ Does"
      },
      {
        id: 3, type: 'choice',
        question: "They ______ watch TV often.",
        options: ["doesn't", "don't", "aren't", "not"],
        correctAnswer: 1,
        explanation: "รูปปฏิเสธ Present Simple ประธาน They ใช้ don't"
      },
      {
        id: 4, type: 'choice',
        question: "Water ______ at 100 degrees Celsius.",
        options: ["boil", "boils", "boiling", "boiled"],
        correctAnswer: 1,
        explanation: "ความจริงทางวิทยาศาสตร์ ใช้ Present Simple"
      },
      {
        id: 5, type: 'choice',
        question: "I usually ______ coffee in the morning.",
        options: ["drink", "drinks", "drinking", "drank"],
        correctAnswer: 0,
        explanation: "กิจวัตร (usually) ประธาน I กริยาไม่เติม s"
      },
      // -- 5 True/False --
      {
        id: 6, type: 'true-false',
        question: "Correct or Incorrect: 'He go to school by bus.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1,
        explanation: "ผิด: He เป็นเอกพจน์ กริยาต้องเติม es (goes)"
      },
      {
        id: 7, type: 'true-false',
        question: "Correct or Incorrect: 'Do you like pizza?'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 0,
        explanation: "ถูกต้อง: โครงสร้าง Do + Subj + V1"
      },
      {
        id: 8, type: 'true-false',
        question: "Correct or Incorrect: 'She don't know him.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1,
        explanation: "ผิด: She ต้องใช้ doesn't"
      },
      {
        id: 9, type: 'true-false',
        question: "Correct or Incorrect: 'I am agree with you.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 1,
        explanation: "ผิด: Agree เป็นกริยาแท้ ไม่ใช้ verb to be นำหน้า (ต้องเป็น I agree)"
      },
      {
        id: 10, type: 'true-false',
        question: "Correct or Incorrect: 'Birds fly.'",
        options: ["Correct", "Incorrect"],
        correctAnswer: 0,
        explanation: "ถูกต้อง: Fact ตามธรรมชาติ"
      },
      // -- 5 Reorder --
      {
        id: 11, type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["always", "early", "up", "I", "get"],
        correctAnswer: ["I", "always", "get", "up", "early"],
        explanation: "Subj + Adverb + Verb"
      },
      {
        id: 12, type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["English", "speak", "they", "do", "?"],
        correctAnswer: ["do", "they", "speak", "English", "?"],
        explanation: "Question: Do + S + V1?"
      },
      {
        id: 13, type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["not", "does", "she", "work", "here"],
        correctAnswer: ["she", "does", "not", "work", "here"],
        explanation: "Negative: S + does not + V1"
      },
      {
        id: 14, type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["work", "bank", "in", "works", "a", "he"],
        correctAnswer: ["he", "works", "in", "a", "bank"],
        explanation: "S + V(s) + Object/Place"
      },
      {
        id: 15, type: 'reorder',
        question: "Rearrange the sentence:",
        options: ["often", "how", "you", "travel", "do", "?"],
        correctAnswer: ["how", "often", "do", "you", "travel", "?"],
        explanation: "Wh-Question"
      },
      // -- 5 Fill Blank --
      {
        id: 16, type: 'fill-blank',
        question: "My father ______ (teach) math.",
        correctAnswer: "teaches",
        explanation: "ลงท้ายด้วย ch เติม es"
      },
      {
        id: 17, type: 'fill-blank',
        question: "We ______ (not / know) the answer.",
        correctAnswer: "do not know",
        explanation: "ปฏิเสธ Present Simple ใช้ do not (หรือ don't)"
      },
      {
        id: 18, type: 'fill-blank',
        question: "______ (be) she a doctor?",
        correctAnswer: "is",
        explanation: "Verb to be กับ She คือ Is"
      },
      {
        id: 19, type: 'fill-blank',
        question: "Tom and Jerry ______ (fight) all the time.",
        correctAnswer: "fight",
        explanation: "ประธานพหูพจน์ กริยาไม่ต้องเติม s"
      },
      {
        id: 20, type: 'fill-blank',
        question: "It ______ (rain) a lot in June.",
        correctAnswer: "rains",
        explanation: "It เป็นเอกพจน์ กริยาเติม s"
      }
    ]
  },

  // --------------------------------------------------------
  // 2. PAST SIMPLE (20 ข้อ)
  // --------------------------------------------------------
  {
    id: 'past-simple',
    name: 'Past Simple',
    description: 'เหตุการณ์ที่จบลงแล้วในอดีต (Completed Action)',
    questions: [
      // -- Choice --
      { id: 1, type: 'choice', question: "I ______ him yesterday.", options: ["see", "saw", "seen", "seeing"], correctAnswer: 1, explanation: "Yesterday = Past Simple (V2)" },
      { id: 2, type: 'choice', question: "______ you go to the party?", options: ["Do", "Did", "Were", "Had"], correctAnswer: 1, explanation: "คำถามอดีตใช้ Did" },
      { id: 3, type: 'choice', question: "She ______ happy last night.", options: ["wasn't", "didn't", "isn't", "weren't"], correctAnswer: 0, explanation: "Happy เป็น Adj ต้องใช้ Verb to be (Was/Were)" },
      { id: 4, type: 'choice', question: "We ______ pizza for dinner.", options: ["eat", "ated", "ate", "eaten"], correctAnswer: 2, explanation: "V2 ของ eat คือ ate" },
      { id: 5, type: 'choice', question: "Where ______ she live in 2010?", options: ["did", "do", "does", "was"], correctAnswer: 0, explanation: "Wh + did + S + V1" },
      // -- T/F --
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I didn't went to school.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "ผิด: หลัง didn't ต้องเป็น V1 (go) ไม่ใช่ went" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She was tired yesterday.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "ถูก: She was..." },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Did he played football?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "ผิด: หลัง Did กริยาห้ามเติม ed" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'They were at home.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "ถูก: They were..." },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'I buyed a new car.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "ผิด: V2 ของ buy คือ bought" },
      // -- Reorder --
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["Paris", "to", "last", "went", "I", "year"], correctAnswer: ["I", "went", "to", "Paris", "last", "year"], explanation: "S + V2 + Place + Time" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["did", "what", "buy", "you", "?"], correctAnswer: ["what", "did", "you", "buy", "?"], explanation: "Wh + did + S + V1" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["not", "come", "did", "she", "party", "to", "the"], correctAnswer: ["she", "did", "not", "come", "to", "the", "party"], explanation: "Negative statement" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["was", "yesterday", "cold", "it", "very"], correctAnswer: ["it", "was", "very", "cold", "yesterday"], explanation: "It was + adj" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["ago", "two", "died", "years", "he"], correctAnswer: ["he", "died", "two", "years", "ago"], explanation: "Time expression at end" },
      // -- Fill --
      { id: 16, type: 'fill-blank', question: "I ______ (find) my keys under the sofa.", correctAnswer: "found", explanation: "V2 find -> found" },
      { id: 17, type: 'fill-blank', question: "They ______ (be) friends in high school.", correctAnswer: "were", explanation: "They were" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / sleep) well last night.", correctAnswer: "did not sleep", explanation: "หรือ didn't sleep" },
      { id: 19, type: 'fill-blank', question: "______ (did) you see the movie?", correctAnswer: "did", explanation: "Auxiliary verb" },
      { id: 20, type: 'fill-blank', question: "He ______ (cut) his finger.", correctAnswer: "cut", explanation: "V2 ของ cut คือ cut (รูปเดิม)" }
    ]
  },

  // --------------------------------------------------------
  // 3. FUTURE SIMPLE (20 ข้อ)
  // --------------------------------------------------------
  {
    id: 'future-simple',
    name: 'Future Simple',
    description: 'การคาดเดา, คำสัญญา, หรือการตัดสินใจทันที',
    questions: [
      // -- Choice --
      { id: 1, type: 'choice', question: "I think it ______ rain soon.", options: ["will", "is", "wills", "going to"], correctAnswer: 0, explanation: "Prediction with 'think' usually uses 'will'" },
      { id: 2, type: 'choice', question: "We ______ help you with your homework.", options: ["will", "are", "do", "have"], correctAnswer: 0, explanation: "Offer/Promise uses Will" },
      { id: 3, type: 'choice', question: "She ______ come to the party.", options: ["won't", "isn't", "don't", "didn't"], correctAnswer: 0, explanation: "Won't = Will not" },
      { id: 4, type: 'choice', question: "Look at the clouds! It ______ rain.", options: ["will", "is going to", "shalls", "wills"], correctAnswer: 1, explanation: "Evidence based prediction (มีหลักฐาน) -> is going to" },
      { id: 5, type: 'choice', question: "______ you marry me?", options: ["Do", "Are", "Will", "Have"], correctAnswer: 2, explanation: "Proposal/Request" },
       // -- T/F --
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I will goes there.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "ผิด: หลัง Will ต้องเป็น V.Infinitive (go)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She is going to buy a car.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "ถูก: Plan/Intention" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Will they arrives on time?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "ผิด: Arrive ห้ามเติม s หลัง Will" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'I won't tell anyone.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "ถูก: Promise" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'It will be fun.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "ถูก: Will + be + adj" },
      // -- Reorder --
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["will", "always", "you", "love", "I"], correctAnswer: ["I", "will", "always", "love", "you"], explanation: "S + will + adv + V1" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["tomorrow", "call", "I", "you", "will"], correctAnswer: ["I", "will", "call", "you", "tomorrow"], explanation: "Instant decision" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["going", "is", "fall", "he", "to"], correctAnswer: ["he", "is", "going", "to", "fall"], explanation: "Prediction with evidence" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["pass", "she", "exam", "won't", "the"], correctAnswer: ["she", "won't", "pass", "the", "exam"], explanation: "Negative prediction" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["world", "change", "the", "will", "robots", "?"], correctAnswer: ["will", "robots", "change", "the", "world", "?"], explanation: "Question form" },
      // -- Fill --
      { id: 16, type: 'fill-blank', question: "Don't worry, I ______ (pay) for the dinner.", correctAnswer: "will pay", explanation: "Offer/Volunteer" },
      { id: 17, type: 'fill-blank', question: "______ (will) you open the window, please?", correctAnswer: "will", explanation: "Request" },
      { id: 18, type: 'fill-blank', question: "I promise I ______ (not / be) late.", correctAnswer: "will not be", explanation: "Promise (or won't be)" },
      { id: 19, type: 'fill-blank', question: "Next year, I ______ (be) 25 years old.", correctAnswer: "will be", explanation: "Future Fact" },
      { id: 20, type: 'fill-blank', question: "Look out! You ______ (crash)!", correctAnswer: "are going to crash", explanation: "Immediate danger -> going to" }
    ]
  },

  // --------------------------------------------------------
  // Placeholder for remaining Tenses (คุณสามารถเติมโจทย์ได้ที่นี่)
  // --------------------------------------------------------
  { id: 'present-continuous', name: 'Present Continuous', description: 'Actions happening right now.', questions: [] },
  { id: 'past-continuous', name: 'Past Continuous', description: 'Actions in progress in the past.', questions: [] },
  { id: 'future-continuous', name: 'Future Continuous', description: 'Actions in progress in the future.', questions: [] },
  { id: 'present-perfect', name: 'Present Perfect', description: 'Past actions with present results.', questions: [] },
  { id: 'past-perfect', name: 'Past Perfect', description: 'Action before another past action.', questions: [] },
  { id: 'future-perfect', name: 'Future Perfect', description: 'Actions completed by a future time.', questions: [] },
  { id: 'present-perfect-continuous', name: 'Present Perfect Cont.', description: 'Duration of present actions.', questions: [] },
  { id: 'past-perfect-continuous', name: 'Past Perfect Cont.', description: 'Duration before past actions.', questions: [] },
  { id: 'future-perfect-continuous', name: 'Future Perfect Cont.', description: 'Duration before future actions.', questions: [] },
];