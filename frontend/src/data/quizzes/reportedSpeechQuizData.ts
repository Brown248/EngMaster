import { QuizQuestion } from '../../types';

export const reportedSpeechQuizData: QuizQuestion[] = [
  // --- Part 1: Choice (5) ---
  { id: 1, type: 'choice', question: "Direct: 'I am happy.' -> Indirect: He said that he ______ happy.", options: ["is", "was", "were", "been"], correctAnswer: 1, explanation: "Present (am) -> Past (was)" },
  { id: 2, type: 'choice', question: "She said, 'I will go.' -> She said she ______ go.", options: ["will", "would", "can", "could"], correctAnswer: 1, explanation: "Will -> Would" },
  { id: 3, type: 'choice', question: "He asked, 'Do you like it?' -> He asked if I ______ it.", options: ["like", "liked", "likes", "had liked"], correctAnswer: 1, explanation: "Present Simple -> Past Simple" },
  { id: 4, type: 'choice', question: "Mom said, 'Clean your room.' -> Mom told me ______ my room.", options: ["clean", "to clean", "cleaned", "cleaning"], correctAnswer: 1, explanation: "Imperative -> to + infinitive" },
  { id: 5, type: 'choice', question: "'Don't touch it!' -> He told me ______ touch it.", options: ["not to", "don't", "not", "no"], correctAnswer: 0, explanation: "Negative Imperative -> not to" },

  // --- Part 2: True/False (5) ---
  { id: 6, type: 'true-false', question: "Correct/Incorrect: He said me that he was tired.", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. Use 'He told me' or 'He said to me'." },
  { id: 7, type: 'true-false', question: "Correct/Incorrect: She asked where did I live.", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. Indirect question word order: 'where I lived'." },
  { id: 8, type: 'true-false', question: "Correct/Incorrect: He said he had finished the work.", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct. Past/Perfect changes to Past Perfect." },
  { id: 9, type: 'true-false', question: "Correct/Incorrect: Dad told me to study hard.", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct usage of 'told me to'." },
  { id: 10, type: 'true-false', question: "Correct/Incorrect: She asked if I was ready.", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct usage of 'if' for Yes/No questions." },

  // --- Part 3: Reorder (5) ---
  { id: 11, type: 'reorder', question: "Rearrange:", options: ["said", "he", "tired", "was", "that", "he"], correctAnswer: ["he", "said", "that", "he", "was", "tired"], explanation: "He said that he was tired." },
  { id: 12, type: 'reorder', question: "Rearrange:", options: ["me", "asked", "she", "where", "I", "was"], correctAnswer: ["she", "asked", "me", "where", "I", "was"], explanation: "She asked me where I was." },
  { id: 13, type: 'reorder', question: "Rearrange:", options: ["told", "doctor", "the", "him", "stop", "to"], correctAnswer: ["the", "doctor", "told", "him", "to", "stop"], explanation: "The doctor told him to stop." },
  { id: 14, type: 'reorder', question: "Rearrange:", options: ["said", "they", "would", "come", "they"], correctAnswer: ["they", "said", "they", "would", "come"], explanation: "They said they would come." },
  { id: 15, type: 'reorder', question: "Rearrange:", options: ["if", "he", "asked", "I", "knew", "her"], correctAnswer: ["he", "asked", "if", "I", "knew", "her"], explanation: "He asked if I knew her." },

  // --- Part 4: Fill-in-the-blank (5) ---
  { id: 16, type: 'fill-blank', question: "He said, 'I can swim.' -> He said he ______ (can->past) swim.", correctAnswer: "could", explanation: "Can becomes Could." },
  { id: 17, type: 'fill-blank', question: "She said to me -> She ______ me.", correctAnswer: "told", explanation: "'Said to' becomes 'told'." },
  { id: 18, type: 'fill-blank', question: "'Are you okay?' -> He asked ______ I was okay.", correctAnswer: "if", explanation: "Use 'if' or 'whether'." },
  { id: 19, type: 'fill-blank', question: "tomorrow -> the ______ day.", correctAnswer: "next", explanation: "Tomorrow becomes 'the next day' or 'the following day'." },
  { id: 20, type: 'fill-blank', question: "this -> ______.", correctAnswer: "that", explanation: "This becomes That." }
];