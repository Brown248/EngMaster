import { Question } from '../types';

export const tensesQuizData: Question[] = [
  {
    id: 1,
    text: "She ______ usually ______ coffee, but today she ______ tea.",
    choices: [
      "doesn't drink / is drinking",
      "isn't drinking / drinks",
      "don't drink / is drinking",
      "didn't drink / drank"
    ],
    correctAnswer: 0,
    explanation: "ใช้ Present Simple (doesn't drink) กับนิสัยปกติ (usually) และ Present Continuous (is drinking) กับเหตุการณ์ที่เกิดขึ้นเฉพาะวันนี้ (today)"
  },
  {
    id: 2,
    text: "Look! The bus ______.",
    choices: [
      "come",
      "comes",
      "is coming",
      "came"
    ],
    correctAnswer: 2,
    explanation: "มีคำว่า 'Look!' เป็นสัญญาณบอกว่าเหตุการณ์กำลังเกิดขึ้นขณะพูด จึงใช้ Present Continuous (is coming)"
  },
  {
    id: 3,
    text: "I ______ my homework yet.",
    choices: [
      "didn't finish",
      "haven't finished",
      "don't finish",
      "won't finish"
    ],
    correctAnswer: 1,
    explanation: "มีคำว่า 'yet' (ยัง) ในประโยคปฏิเสธ มักใช้กับ Present Perfect (haven't finished)"
  },
  {
    id: 4,
    text: "By this time next year, I ______ form university.",
    choices: [
      "will graduate",
      "am graduating",
      "will have graduated",
      "have graduated"
    ],
    correctAnswer: 2,
    explanation: "โครงสร้าง 'By + เวลาในอนาคต' บ่งบอกถึงความสมบูรณ์ของการกระทำในอนาคต ใช้ Future Perfect (will have graduated)"
  },
  {
    id: 5,
    text: "While I ______ TV, the lights went out.",
    choices: [
      "watch",
      "watched",
      "am watching",
      "was watching"
    ],
    correctAnswer: 3,
    explanation: "เหตุการณ์ที่กำลังดำเนินอยู่ในอดีต (Past Continuous) แล้วมีอีกเหตุการณ์แทรก (Past Simple)"
  },
  {
    id: 6,
    text: "He ______ in London for 10 years before he moved to Paris.",
    choices: [
      "lived",
      "has lived",
      "had lived",
      "was living"
    ],
    correctAnswer: 2,
    explanation: "เหตุการณ์ที่เกิดขึ้นก่อนอีกเหตุการณ์หนึ่งในอดีต (moved) ต้องใช้ Past Perfect (had lived)"
  },
  {
    id: 7,
    text: "If it rains, we ______ at home.",
    choices: [
      "stay",
      "would stay",
      "will stay",
      "stayed"
    ],
    correctAnswer: 2,
    explanation: "First Conditional (If + Present Simple, Future Simple) ใช้กับเหตุการณ์ที่เป็นไปได้ในอนาคต"
  },
  {
    id: 8,
    text: "Water ______ at 100 degrees Celsius.",
    choices: [
      "boil",
      "boils",
      "is boiling",
      "boiled"
    ],
    correctAnswer: 1,
    explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ (Scientific Fact) ใช้ Present Simple เสมอ"
  },
  {
    id: 9,
    text: "They ______ dinner when I arrived.",
    choices: [
      "had",
      "have had",
      "were having",
      "are having"
    ],
    correctAnswer: 2,
    explanation: "เหตุการณ์กำลังดำเนินอยู่ในอดีต (were having) เมื่อมีการกระทำอื่นเข้ามาแทรก (arrived)"
  },
  {
    id: 10,
    text: "I ______ him since we were in high school.",
    choices: [
      "know",
      "knew",
      "have known",
      "am knowing"
    ],
    correctAnswer: 2,
    explanation: "ใช้ Present Perfect กับเหตุการณ์ที่เริ่มในอดีตและดำเนินถึงปัจจุบัน (since...)"
  },
  {
    id: 11,
    text: "At 9 AM tomorrow, I ______ an exam.",
    choices: [
      "will take",
      "will be taking",
      "take",
      "took"
    ],
    correctAnswer: 1,
    explanation: "ระบุเวลาที่แน่นอนในอนาคต (At 9 AM tomorrow) ว่าจะกำลังทำอะไรอยู่ ใช้ Future Continuous"
  },
  {
    id: 12,
    text: "She said she ______ help me.",
    choices: [
      "will",
      "would",
      "can",
      "may"
    ],
    correctAnswer: 1,
    explanation: "Reported Speech: เมื่อกริยานำเป็นอดีต (said) กริยาตามต้องเปลี่ยนเป็นอดีต (will -> would)"
  },
  {
    id: 13,
    text: "How long ______ you ______ waiting for the bus?",
    choices: [
      "have / been",
      "are / X",
      "do / X",
      "did / X"
    ],
    correctAnswer: 0,
    explanation: "ถามถึงระยะเวลาของการกระทำที่ต่อเนื่องจากอดีตถึงปัจจุบัน ใช้ Present Perfect Continuous"
  },
  {
    id: 14,
    text: "When I got to the station, the train ______.",
    choices: [
      "left",
      "has left",
      "had left",
      "leaves"
    ],
    correctAnswer: 2,
    explanation: "รถไฟออกไป 'ก่อน' ที่จะมาถึงสถานี (อดีตซ้อนอดีต) ใช้ Past Perfect"
  },
  {
    id: 15,
    text: "I promise I ______ late again.",
    choices: [
      "am not",
      "won't be",
      "don't be",
      "haven't been"
    ],
    correctAnswer: 1,
    explanation: "การให้คำสัญญา (Promise) ใช้ Future Simple (will/won't)"
  },
  {
    id: 16,
    text: "He ______ working on this project for 5 hours by the time the boss arrives.",
    choices: [
      "will work",
      "will be working",
      "will have been",
      "is working"
    ],
    correctAnswer: 2,
    explanation: "เน้นความต่อเนื่องของการกระทำที่จะดำเนินไปถึงจุดหนึ่งในอนาคต ใช้ Future Perfect Continuous"
  },
  {
    id: 17,
    text: "Last night, I ______ very tired, so I ______ to bed early.",
    choices: [
      "feel / go",
      "felt / went",
      "felt / go",
      "feel / went"
    ],
    correctAnswer: 1,
    explanation: "เล่าเหตุการณ์ในอดีต (Last night) ใช้ Past Simple ทั้งคู่"
  },
  {
    id: 18,
    text: "______ you ever ______ to Japan?",
    choices: [
      "Did / go",
      "Have / been",
      "Were / going",
      "Do / go"
    ],
    correctAnswer: 1,
    explanation: "ถามประสบการณ์ที่ผ่านมา (ever) ใช้ Present Perfect (Have you ever been...)"
  },
  {
    id: 19,
    text: "Next week, we ______ a party.",
    choices: [
      "have",
      "had",
      "are having",
      "have had"
    ],
    correctAnswer: 2,
    explanation: "แผนการในอนาคตที่เตรียมการไว้แล้ว สามารถใช้ Present Continuous ได้ (are having)"
  },
  {
    id: 20,
    text: "The phone rang while I ______ a shower.",
    choices: [
      "took",
      "was taking",
      "am taking",
      "had taken"
    ],
    correctAnswer: 1,
    explanation: "เหตุการณ์ที่กำลังดำเนินอยู่ (was taking) ถูกขัดจังหวะ (rang)"
  }
];