import { QuizQuestion } from '../../types';

export const questionFormsQuizData: QuizQuestion[] = [
  // --- Part 1: Choice (5) ---
  { id: 1, type: 'choice', question: "______ you like coffee?", options: ["Do", "Does", "Are", "Is"], correctAnswer: 0, explanation: "You uses Do." },
  { id: 2, type: 'choice', question: "______ is your teacher?", options: ["Who", "What", "When", "Where"], correctAnswer: 0, explanation: "Person = Who." },
  { id: 3, type: 'choice', question: "She is happy, ______?", options: ["isn't she", "is she", "doesn't she", "didn't she"], correctAnswer: 0, explanation: "Tag: Positive (is) -> Negative (isn't)." },
  { id: 4, type: 'choice', question: "______ car is this?", options: ["Who", "Whose", "Whom", "Where"], correctAnswer: 1, explanation: "Ownership = Whose." },
  { id: 5, type: 'choice', question: "______ she go to school yesterday?", options: ["Do", "Does", "Did", "Is"], correctAnswer: 2, explanation: "Past tense = Did." },

  // --- Part 2: True/False (5) ---
  { id: 6, type: 'true-false', question: "Correct/Incorrect: Where you are going?", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. Inversion needed: Where are you going?" },
  { id: 7, type: 'true-false', question: "Correct/Incorrect: Do he like pizza?", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. He uses Does." },
  { id: 8, type: 'true-false', question: "Correct/Incorrect: You can swim, can't you?", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct tag structure." },
  { id: 9, type: 'true-false', question: "Correct/Incorrect: Why are you crying?", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct Wh-question structure." },
  { id: 10, type: 'true-false', question: "Correct/Incorrect: How long have you lived here?", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct Present Perfect question." },

  // --- Part 3: Reorder (5) ---
  { id: 11, type: 'reorder', question: "Rearrange:", options: ["name", "what", "is", "your", "?"], correctAnswer: ["what", "is", "your", "name", "?"], explanation: "What is your name?" },
  { id: 12, type: 'reorder', question: "Rearrange:", options: ["live", "where", "do", "you", "?"], correctAnswer: ["where", "do", "you", "live", "?"], explanation: "Where do you live?" },
  { id: 13, type: 'reorder', question: "Rearrange:", options: ["go", "did", "you", "yesterday", "where"], correctAnswer: ["where", "did", "you", "go", "yesterday"], explanation: "Where did you go yesterday?" },
  { id: 14, type: 'reorder', question: "Rearrange:", options: ["can", "play", "she", "piano", "the", "?"], correctAnswer: ["can", "she", "play", "the", "piano", "?"], explanation: "Can she play the piano?" },
  { id: 15, type: 'reorder', question: "Rearrange:", options: ["old", "how", "are", "you", "?"], correctAnswer: ["how", "old", "are", "you", "?"], explanation: "How old are you?" },

  // --- Part 4: Fill-in-the-blank (5) ---
  { id: 16, type: 'fill-blank', question: "______ (Do/Does) she know him?", correctAnswer: "Does", explanation: "She uses Does." },
  { id: 17, type: 'fill-blank', question: "______ time is it?", correctAnswer: "What", explanation: "What time..." },
  { id: 18, type: 'fill-blank', question: "They are students, ______ (be) they?", correctAnswer: "aren't", explanation: "Tag for 'are' is 'aren't'." },
  { id: 19, type: 'fill-blank', question: "______ (be) you ready?", correctAnswer: "Are", explanation: "You uses Are." },
  { id: 20, type: 'fill-blank', question: "______ did you buy that?", correctAnswer: "Where", explanation: "Asking for place (Where) or time (When)." }
];