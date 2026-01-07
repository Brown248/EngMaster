import { QuizQuestion } from '../../types';

export const mixedGrammarQuizData: QuizQuestion[] = [
  // --- Part 1: Choice (10) ---
  { id: 1, type: 'choice', question: "I ______ to the market yesterday.", options: ["go", "went", "gone", "going"], correctAnswer: 1, explanation: "Past Simple (yesterday) uses V2." },
  { id: 2, type: 'choice', question: "She ______ English now.", options: ["studies", "is studying", "studied", "has studied"], correctAnswer: 1, explanation: "Present Continuous (now)." },
  { id: 3, type: 'choice', question: "If it rains, I ______ home.", options: ["stay", "will stay", "would stay", "stayed"], correctAnswer: 1, explanation: "First Conditional." },
  { id: 4, type: 'choice', question: "The book ______ by John.", options: ["wrote", "was written", "writes", "is writing"], correctAnswer: 1, explanation: "Passive Voice." },
  { id: 5, type: 'choice', question: "I enjoy ______.", options: ["swim", "to swim", "swimming", "swam"], correctAnswer: 2, explanation: "Enjoy + Gerund." },
  { id: 6, type: 'choice', question: "He said that he ______ tired.", options: ["is", "was", "were", "been"], correctAnswer: 1, explanation: "Reported Speech backshift." },
  { id: 7, type: 'choice', question: "______ you like coffee?", options: ["Do", "Does", "Are", "Is"], correctAnswer: 0, explanation: "Question Form." },
  { id: 8, type: 'choice', question: "I wish I ______ a bird.", options: ["am", "was", "were", "be"], correctAnswer: 2, explanation: "Subjunctive Mood." },
  { id: 9, type: 'choice', question: "You ______ smoke here. It's illegal.", options: ["must not", "don't have to", "should not", "might not"], correctAnswer: 0, explanation: "Prohibition (Modal)." },
  { id: 10, type: 'choice', question: "He speaks ______.", options: ["quick", "quickly", "good", "bad"], correctAnswer: 1, explanation: "Adverb modifies Verb." },

  // --- Part 2: True/False (5) ---
  { id: 11, type: 'true-false', question: "Correct/Incorrect: She don't like cats.", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. She doesn't." },
  { id: 12, type: 'true-false', question: "Correct/Incorrect: I have lived here for 10 years.", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct Present Perfect." },
  { id: 13, type: 'true-false', question: "Correct/Incorrect: If I were you, I would go.", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct Second Conditional." },
  { id: 14, type: 'true-false', question: "Correct/Incorrect: Where you are going?", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect word order." },
  { id: 15, type: 'true-false', question: "Correct/Incorrect: He said me to go.", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect. He told me to go." },

  // --- Part 3: Matching Tense (5) ---
  { id: 16, type: 'choice', question: "Tense?: 'She eats rice.'", options: ["Present Simple", "Present Cont.", "Past Simple", "Future Simple"], correctAnswer: 0, explanation: "Fact/Habit = Present Simple." },
  { id: 17, type: 'choice', question: "Tense?: 'They are playing.'", options: ["Present Simple", "Present Cont.", "Past Cont.", "Future Cont."], correctAnswer: 1, explanation: "Is/am/are + V-ing = Present Cont." },
  { id: 18, type: 'choice', question: "Tense?: 'We went to school.'", options: ["Present Simple", "Present Perfect", "Past Simple", "Past Perfect"], correctAnswer: 2, explanation: "V2 = Past Simple." },
  { id: 19, type: 'choice', question: "Tense?: 'I have finished.'", options: ["Past Simple", "Present Perfect", "Past Perfect", "Future Perfect"], correctAnswer: 1, explanation: "Have/Has + V3 = Present Perfect." },
  { id: 20, type: 'choice', question: "Tense?: 'She will arrive soon.'", options: ["Future Simple", "Present Simple", "Future Continuous", "Present Continuous"], correctAnswer: 0, explanation: "Will + V1 = Future Simple." },

  // --- Part 4: Reorder (5) ---
  { id: 21, type: 'reorder', question: "Rearrange:", options: ["beautiful", "is", "she", "girl", "a"], correctAnswer: ["she", "is", "a", "beautiful", "girl"], explanation: "She is a beautiful girl." },
  { id: 22, type: 'reorder', question: "Rearrange:", options: ["often", "do", "how", "you", "exercise", "?"], correctAnswer: ["how", "often", "do", "you", "exercise", "?"], explanation: "How often do you exercise?" },
  { id: 23, type: 'reorder', question: "Rearrange:", options: ["homework", "must", "you", "do", "your"], correctAnswer: ["you", "must", "do", "your", "homework"], explanation: "You must do your homework." },
  { id: 24, type: 'reorder', question: "Rearrange:", options: ["car", "was", "stolen", "my", "yesterday"], correctAnswer: ["my", "car", "was", "stolen", "yesterday"], explanation: "My car was stolen yesterday." },
  { id: 25, type: 'reorder', question: "Rearrange:", options: ["if", "rains", "it", "will", "stay", "I"], correctAnswer: ["if", "it", "rains", "I", "will", "stay"], explanation: "If it rains I will stay." },

  // --- Part 5: Fill-in-the-blank (5) ---
  { id: 26, type: 'fill-blank', question: "I want ______ (go) home.", correctAnswer: "to go", explanation: "Want + to infinitive." },
  { id: 27, type: 'fill-blank', question: "She is good ______ (at/in) math.", correctAnswer: "at", explanation: "Good at." },
  { id: 28, type: 'fill-blank', question: "______ (be) you tired?", correctAnswer: "Are", explanation: "Are you tired?" },
  { id: 29, type: 'fill-blank', question: "He ran ______ (quick) to catch the bus.", correctAnswer: "quickly", explanation: "Adverb." },
  { id: 30, type: 'fill-blank', question: "This is the man ______ (who/which) helped me.", correctAnswer: "who", explanation: "Who for people." }
];