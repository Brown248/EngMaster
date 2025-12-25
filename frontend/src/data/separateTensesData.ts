import { TenseTopicData } from '../types';

export const separateTensesData: TenseTopicData[] = [
  // ==========================================
  // 1. Present Simple
  // ==========================================
  {
    id: 'present-simple',
    name: 'Present Simple',
    description: 'Facts, Habits, Routines (S + V1)',
    questions: [
      // Choice
      { id: 1, type: 'choice', question: "The sun ______ in the east.", options: ["rise", "rises", "is rising", "rose"], correctAnswer: 1, explanation: "Fact: ประธานเอกพจน์ กริยาเติม s" },
      { id: 2, type: 'choice', question: "______ she like coffee?", options: ["Do", "Does", "Is", "Has"], correctAnswer: 1, explanation: "Question: Does + She + V1" },
      { id: 3, type: 'choice', question: "They usually ______ football on Sundays.", options: ["play", "plays", "playing", "played"], correctAnswer: 0, explanation: "Routine: They ใช้กริยาไม่ผัน" },
      { id: 4, type: 'choice', question: "Water ______ at 100°C.", options: ["boil", "boils", "boiling", "boiled"], correctAnswer: 1, explanation: "Scientific Truth" },
      { id: 5, type: 'choice', question: "He ______ work here anymore.", options: ["don't", "doesn't", "isn't", "not"], correctAnswer: 1, explanation: "Negative: He doesn't" },
      // T/F
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I goes to school.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: I ใช้ go (ไม่ต้องเติม es)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She has a dog.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: She uses has" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Do they lives here?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: หลัง Do กริยาต้องไม่เติม s (live)" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'The train leaves at 9 PM.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Schedule ใช้ Present Simple ได้" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'I am agree.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องใช้ 'I agree' (agree เป็น verb)" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["always", "early", "up", "I", "get"], correctAnswer: ["I", "always", "get", "up", "early"], explanation: "Adverb frequency อยู่หน้ากริยาแท้" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["English", "speak", "they", "do", "?"], correctAnswer: ["do", "they", "speak", "English", "?"], explanation: "Question form" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["not", "does", "she", "meat", "eat"], correctAnswer: ["she", "does", "not", "eat", "meat"], explanation: "Negative form" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["earth", "round", "is", "the"], correctAnswer: ["the", "earth", "is", "round"], explanation: "Fact with verb to be" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["often", "how", "you", "travel", "do", "?"], correctAnswer: ["how", "often", "do", "you", "travel", "?"], explanation: "Wh-Question" },
      // Fill Blank
      { id: 16, type: 'fill-blank', question: "My dad ______ (wash) his car every week.", correctAnswer: "washes", explanation: "ลงท้าย sh เติม es" },
      { id: 17, type: 'fill-blank', question: "We ______ (not / know) the answer.", correctAnswer: "do not know", explanation: "ใช้ do not หรือ don't ก็ได้" },
      { id: 18, type: 'fill-blank', question: "______ (be) you hungry?", correctAnswer: "are", explanation: "You ใช้ Are" },
      { id: 19, type: 'fill-blank', question: "The baby ______ (cry) when he is hungry.", correctAnswer: "cries", explanation: "เปลี่ยน y เป็น i แล้วเติม es" },
      { id: 20, type: 'fill-blank', question: "It ______ (rain) a lot here.", correctAnswer: "rains", explanation: "It rains" }
    ]
  },

  // ==========================================
  // 2. Present Continuous
  // ==========================================
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    description: 'Happening Now (is/am/are + V-ing)',
    questions: [
      { id: 1, type: 'choice', question: "Listen! Someone ______ the guitar.", options: ["play", "plays", "is playing", "played"], correctAnswer: 2, explanation: "Happening now (Listen!)" },
      { id: 2, type: 'choice', question: "We ______ dinner right now.", options: ["have", "are having", "had", "having"], correctAnswer: 1, explanation: "Right now = Present Cont." },
      { id: 3, type: 'choice', question: "______ you listening to me?", options: ["Do", "Are", "Have", "Will"], correctAnswer: 1, explanation: "Are + V-ing" },
      { id: 4, type: 'choice', question: "She ______ working today.", options: ["isn't", "don't", "doesn't", "not"], correctAnswer: 0, explanation: "is not + V-ing" },
      { id: 5, type: 'choice', question: "They ______ to London next week.", options: ["fly", "are flying", "flown", "flying"], correctAnswer: 1, explanation: "Future plan using Present Cont." },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I am loving this pizza.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Love เป็น Stative Verb ไม่ใช้ ing" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'Look! It is snowing.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'She is runing fast.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Running ต้องเบิ้ล n" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'Are they coming?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'He is study now.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องเป็น studying" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["is", "she", "what", "doing", "?"], correctAnswer: ["what", "is", "she", "doing", "?"], explanation: "Wh + is/am/are + S + Ving" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["not", "I", "sleeping", "am"], correctAnswer: ["I", "am", "not", "sleeping"], explanation: "Negative" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["waiting", "bus", "for", "we", "are", "the"], correctAnswer: ["we", "are", "waiting", "for", "the", "bus"], explanation: "S + are + Ving" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["is", "moment", "at", "raining", "it", "the"], correctAnswer: ["it", "is", "raining", "at", "the", "moment"], explanation: "Time expression at end" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["wearing", "you", "are", "why", "coat", "a", "?"], correctAnswer: ["why", "are", "you", "wearing", "a", "coat", "?"], explanation: "Wh Question" },
      // Fill
      { id: 16, type: 'fill-blank', question: "He ______ (sit) on the chair.", correctAnswer: "is sitting", explanation: "sit -> sitting (เบิ้ล t)" },
      { id: 17, type: 'fill-blank', question: "I ______ (write) a letter.", correctAnswer: "am writing", explanation: "ตัด e ออกเติม ing" },
      { id: 18, type: 'fill-blank', question: "They ______ (not / play) games.", correctAnswer: "are not playing", explanation: "หรือ aren't playing" },
      { id: 19, type: 'fill-blank', question: "______ (be) you watching TV?", correctAnswer: "are", explanation: "Are you..." },
      { id: 20, type: 'fill-blank', question: "She ______ (lie) on the bed.", correctAnswer: "is lying", explanation: "lie -> lying" }
    ]
  },

  // ==========================================
  // 3. Present Perfect
  // ==========================================
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    description: 'Experience, Unspecified Past (Has/Have + V3)',
    questions: [
      { id: 1, type: 'choice', question: "I ______ that movie already.", options: ["see", "saw", "have seen", "had seen"], correctAnswer: 2, explanation: "Already = Present Perfect" },
      { id: 2, type: 'choice', question: "She ______ to Japan twice.", options: ["go", "went", "has gone", "has been"], correctAnswer: 3, explanation: "Has been = เคยไป (กลับมาแล้ว)" },
      { id: 3, type: 'choice', question: "We ______ him since 2010.", options: ["know", "knew", "have known", "knowing"], correctAnswer: 2, explanation: "Since + Time = Present Perfect" },
      { id: 4, type: 'choice', question: "______ you finished your homework?", options: ["Do", "Did", "Have", "Are"], correctAnswer: 2, explanation: "Have + V3" },
      { id: 5, type: 'choice', question: "He ______ just arrived.", options: ["is", "has", "did", "was"], correctAnswer: 1, explanation: "Just + Present Perfect" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I have ate breakfast.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องใช้ eaten (V3)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She has lived here for 10 years.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'I have seen him yesterday.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Yesterday ระบุเวลาอดีตชัดเจน ต้องใช้ Past Simple" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'Have you ever been to Paris?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct: Asking experience" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'We has done it.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: We ใช้ Have" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["never", "I", "sushi", "eaten", "have"], correctAnswer: ["I", "have", "never", "eaten", "sushi"], explanation: "I have never V3" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["just", "has", "she", "out", "gone"], correctAnswer: ["she", "has", "just", "gone", "out"], explanation: "Has just V3" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["long", "have", "you", "here", "lived", "how", "?"], correctAnswer: ["how", "long", "have", "you", "lived", "here", "?"], explanation: "Wh question" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["yet", "finished", "not", "have", "they"], correctAnswer: ["they", "have", "not", "finished", "yet"], explanation: "Yet อยู่ท้ายประโยค" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["lost", "my", "I", "have", "keys"], correctAnswer: ["I", "have", "lost", "my", "keys"], explanation: "S + have + V3" },
      // Fill
      { id: 16, type: 'fill-blank', question: "I ______ (buy) a new car.", correctAnswer: "have bought", explanation: "Recent action" },
      { id: 17, type: 'fill-blank', question: "She ______ (not / see) him for ages.", correctAnswer: "has not seen", explanation: "หรือ hasn't seen" },
      { id: 18, type: 'fill-blank', question: "______ (have) you read this book?", correctAnswer: "have", explanation: "Have you..." },
      { id: 19, type: 'fill-blank', question: "We ______ (visit) Thailand many times.", correctAnswer: "have visited", explanation: "Repeat action" },
      { id: 20, type: 'fill-blank', question: "He ______ (break) his leg.", correctAnswer: "has broken", explanation: "Result in present" }
    ]
  },

  // ==========================================
  // 4. Present Perfect Continuous
  // ==========================================
  {
    id: 'present-perfect-continuous',
    name: 'Present Perfect Cont.',
    description: 'Started in past, continuing now (Have been + V-ing)',
    questions: [
      { id: 1, type: 'choice', question: "I ______ for you for 2 hours.", options: ["wait", "am waiting", "have been waiting", "waited"], correctAnswer: 2, explanation: "Duration (for 2 hours) continuing to now" },
      { id: 2, type: 'choice', question: "It ______ all day.", options: ["rains", "has been raining", "is raining", "rained"], correctAnswer: 1, explanation: "All day = continuous duration" },
      { id: 3, type: 'choice', question: "She looks tired. She ______.", options: ["has been running", "is running", "runs", "ran"], correctAnswer: 0, explanation: "Evidence of recent continuous activity" },
      { id: 4, type: 'choice', question: "How long ______ you ______ English?", options: ["are/learning", "have/been learning", "do/learn", "did/learn"], correctAnswer: 1, explanation: "How long implies duration" },
      { id: 5, type: 'choice', question: "They ______ TV since morning.", options: ["watch", "are watching", "have been watching", "watched"], correctAnswer: 2, explanation: "Since morning" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I have been knowing him for years.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Know เป็น Stative verb ไม่ใช้ Continuous" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She has been sleeping all day.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'They have been played football.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องเป็น playing" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'We have been waiting since 2 PM.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'He is been working hard.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: ต้องใช้ He has been" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["been", "working", "I", "have", "morning", "since"], correctAnswer: ["I", "have", "been", "working", "since", "morning"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["living", "here", "how", "have", "you", "long", "been", "?"], correctAnswer: ["how", "long", "have", "you", "been", "living", "here", "?"], explanation: "Question" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["tired", "is", "he", "working", "been", "he", "has", "because"], correctAnswer: ["he", "is", "tired", "because", "he", "has", "been", "working"], explanation: "Reason" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["dating", "been", "they", "have", "years", "for", "two"], correctAnswer: ["they", "have", "been", "dating", "for", "two", "years"], explanation: "Duration" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["not", "feeling", "well", "she", "been", "has"], correctAnswer: ["she", "has", "not", "been", "feeling", "well"], explanation: "Negative" },
      // Fill
      { id: 16, type: 'fill-blank', question: "We ______ (wait) here for ages.", correctAnswer: "have been waiting", explanation: "Emphasize duration" },
      { id: 17, type: 'fill-blank', question: "My eyes are red because I ______ (cry).", correctAnswer: "have been crying", explanation: "Recent continuous action result" },
      { id: 18, type: 'fill-blank', question: "He ______ (learn) Spanish for 3 months.", correctAnswer: "has been learning", explanation: "Ongoing process" },
      { id: 19, type: 'fill-blank', question: "______ (have) you been running?", correctAnswer: "have", explanation: "Auxiliary" },
      { id: 20, type: 'fill-blank', question: "It ______ (snow) since last night.", correctAnswer: "has been snowing", explanation: "Started past, continues now" }
    ]
  },

  // ==========================================
  // 5. Past Simple
  // ==========================================
  {
    id: 'past-simple',
    name: 'Past Simple',
    description: 'Completed Actions in Past (V2)',
    questions: [
      { id: 1, type: 'choice', question: "I ______ him yesterday.", options: ["see", "saw", "seen", "seeing"], correctAnswer: 1, explanation: "Yesterday = V2" },
      { id: 2, type: 'choice', question: "______ you go to school?", options: ["Do", "Did", "Were", "Had"], correctAnswer: 1, explanation: "Did for Past Question" },
      { id: 3, type: 'choice', question: "She ______ happy last night.", options: ["wasn't", "didn't", "isn't", "weren't"], correctAnswer: 0, explanation: "Adjective uses Was/Were" },
      { id: 4, type: 'choice', question: "We ______ pizza last week.", options: ["eat", "ated", "ate", "eaten"], correctAnswer: 2, explanation: "Irregular verb eat -> ate" },
      { id: 5, type: 'choice', question: "Where ______ she live in 2010?", options: ["did", "do", "does", "was"], correctAnswer: 0, explanation: "Did + S + V1" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I didn't went there.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: didn't + go (V1)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She was tired.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Did he played football?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: Did + play (no ed)" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'They were at home.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'I buyed a car.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: bought" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["Paris", "to", "last", "went", "I", "year"], correctAnswer: ["I", "went", "to", "Paris", "last", "year"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["did", "what", "buy", "you", "?"], correctAnswer: ["what", "did", "you", "buy", "?"], explanation: "Wh Question" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["not", "come", "did", "she", "party", "to", "the"], correctAnswer: ["she", "did", "not", "come", "to", "the", "party"], explanation: "Negative" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["was", "yesterday", "cold", "it", "very"], correctAnswer: ["it", "was", "very", "cold", "yesterday"], explanation: "It was..." },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["ago", "two", "died", "years", "he"], correctAnswer: ["he", "died", "two", "years", "ago"], explanation: "Ago at end" },
      // Fill
      { id: 16, type: 'fill-blank', question: "I ______ (find) my keys.", correctAnswer: "found", explanation: "find -> found" },
      { id: 17, type: 'fill-blank', question: "They ______ (be) friends.", correctAnswer: "were", explanation: "They were" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / sleep) well.", correctAnswer: "did not sleep", explanation: "or didn't sleep" },
      { id: 19, type: 'fill-blank', question: "______ (did) you see it?", correctAnswer: "did", explanation: "Did you..." },
      { id: 20, type: 'fill-blank', question: "He ______ (cut) his finger.", correctAnswer: "cut", explanation: "cut -> cut" }
    ]
  },

  // ==========================================
  // 6. Past Continuous
  // ==========================================
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    description: 'Was/Were + V-ing in the past',
    questions: [
      { id: 1, type: 'choice', question: "I ______ when you called.", options: ["slept", "was sleeping", "am sleeping", "have slept"], correctAnswer: 1, explanation: "Interrupted action" },
      { id: 2, type: 'choice', question: "They ______ TV at 8 PM yesterday.", options: ["watched", "were watching", "are watching", "watch"], correctAnswer: 1, explanation: "Specific time in past" },
      { id: 3, type: 'choice', question: "What ______ you doing?", options: ["did", "were", "are", "had"], correctAnswer: 1, explanation: "Were doing" },
      { id: 4, type: 'choice', question: "While I was cooking, he ______ reading.", options: ["is", "was", "did", "were"], correctAnswer: 1, explanation: "Parallel actions" },
      { id: 5, type: 'choice', question: "She ______ listening.", options: ["wasn't", "didn't", "isn't", "weren't"], correctAnswer: 0, explanation: "Was not" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I were playing.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: I was" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She was working all night.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'While I studied, mom was cooking.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: While usually follows continuous (While I was studying...)" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'They were fight.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: fighting" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'He was eating dinner.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["was", "she", "homework", "doing", "her"], correctAnswer: ["she", "was", "doing", "her", "homework"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["doing", "what", "were", "yesterday", "you", "?"], correctAnswer: ["what", "were", "you", "doing", "yesterday", "?"], explanation: "Question" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["sleeping", "was", "baby", "the", "not"], correctAnswer: ["the", "baby", "was", "not", "sleeping"], explanation: "Negative" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["walking", "were", "home", "we", "when", "rained", "it"], correctAnswer: ["we", "were", "walking", "home", "when", "it", "rained"], explanation: "Interrupted" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["all", "snowing", "was", "day", "it"], correctAnswer: ["it", "was", "snowing", "all", "day"], explanation: "Duration" },
      // Fill
      { id: 16, type: 'fill-blank', question: "He ______ (run) when he fell.", correctAnswer: "was running", explanation: "Continuous" },
      { id: 17, type: 'fill-blank', question: "We ______ (not / watch) TV.", correctAnswer: "were not watching", explanation: "Negative" },
      { id: 18, type: 'fill-blank', question: "______ (be) you sleeping?", correctAnswer: "were", explanation: "Were you..." },
      { id: 19, type: 'fill-blank', question: "They ______ (play) chess.", correctAnswer: "were playing", explanation: "Plural were" },
      { id: 20, type: 'fill-blank', question: "It ______ (get) dark.", correctAnswer: "was getting", explanation: "Change in progress" }
    ]
  },

  // ==========================================
  // 7. Past Perfect
  // ==========================================
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    description: 'Completed before another past action (Had + V3)',
    questions: [
      { id: 1, type: 'choice', question: "The train ______ already left when we arrived.", options: ["has", "had", "was", "did"], correctAnswer: 1, explanation: "Action before another past action" },
      { id: 2, type: 'choice', question: "I realized I ______ my keys.", options: ["forget", "forgot", "have forgotten", "had forgotten"], correctAnswer: 3, explanation: "Forgotten before realized" },
      { id: 3, type: 'choice', question: "She was hungry because she ______ eaten.", options: ["hadn't", "hasn't", "didn't", "wasn't"], correctAnswer: 0, explanation: "Cause in the past" },
      { id: 4, type: 'choice', question: "After he ______ his homework, he went to bed.", options: ["finishes", "finished", "had finished", "has finished"], correctAnswer: 2, explanation: "After + Past Perfect" },
      { id: 5, type: 'choice', question: "We ______ never seen it before.", options: ["have", "did", "had", "were"], correctAnswer: 2, explanation: "Past context" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I had went home.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: had gone (V3)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She had already left.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'When I arrived, they had finish.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: had finished" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'He had not done it.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'Had you seen him?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["left", "had", "train", "the", "already"], correctAnswer: ["the", "train", "had", "already", "left"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["done", "work", "she", "had", "her", "before", "left", "she"], correctAnswer: ["she", "had", "done", "her", "work", "before", "she", "left"], explanation: "Before + Past Simple" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["never", "I", "met", "had", "before", "him"], correctAnswer: ["I", "had", "never", "met", "him", "before"], explanation: "Never" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["had", "why", "he", "left", "?"], correctAnswer: ["why", "had", "he", "left", "?"], explanation: "Question" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["not", "had", "rain", "stopped", "the"], correctAnswer: ["the", "rain", "had", "not", "stopped"], explanation: "Negative" },
      // Fill
      { id: 16, type: 'fill-blank', question: "By the time I arrived, the movie ______ (start).", correctAnswer: "had started", explanation: "Before a past time" },
      { id: 17, type: 'fill-blank', question: "She told me she ______ (lose) her bag.", correctAnswer: "had lost", explanation: "Reported speech/Prior action" },
      { id: 18, type: 'fill-blank', question: "I ______ (not / see) the sign.", correctAnswer: "had not seen", explanation: "Negative" },
      { id: 19, type: 'fill-blank', question: "______ (have) you eaten?", correctAnswer: "had", explanation: "Had you..." },
      { id: 20, type: 'fill-blank', question: "They ______ (live) there for years before moving.", correctAnswer: "had lived", explanation: "Duration before past" }
    ]
  },

  // ==========================================
  // 8. Past Perfect Continuous
  // ==========================================
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Cont.',
    description: 'Duration before another past action (Had been + V-ing)',
    questions: [
      { id: 1, type: 'choice', question: "He was tired because he ______ running.", options: ["has been", "had been", "is", "was"], correctAnswer: 1, explanation: "Reason in past" },
      { id: 2, type: 'choice', question: "They ______ for 2 hours when the bus came.", options: ["waited", "were waiting", "had been waiting", "wait"], correctAnswer: 2, explanation: "Duration before past event" },
      { id: 3, type: 'choice', question: "I ______ working there since 2005.", options: ["have been", "had been", "was", "am"], correctAnswer: 1, explanation: "Context usually implies before a past date" },
      { id: 4, type: 'choice', question: "She ______ crying.", options: ["had been", "has been", "is", "are"], correctAnswer: 0, explanation: "Past evidence" },
      { id: 5, type: 'choice', question: "How long ______ you ______ driving?", options: ["had/been", "have/been", "were/being", "did/be"], correctAnswer: 0, explanation: "Past duration" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I had been working hard.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She had been sleep.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: sleeping" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'They had been waiting long.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'We has been trying.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: had been" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'Had you been crying?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["been", "waiting", "had", "I", "long"], correctAnswer: ["I", "had", "been", "waiting", "long"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["raining", "it", "been", "had", "night", "all"], correctAnswer: ["it", "had", "been", "raining", "all", "night"], explanation: "Duration" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["long", "how", "waiting", "been", "you", "had", "?"], correctAnswer: ["how", "long", "had", "you", "been", "waiting", "?"], explanation: "Question" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["not", "had", "he", "paying", "attention", "been"], correctAnswer: ["he", "had", "not", "been", "paying", "attention"], explanation: "Negative" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["trying", "they", "been", "had", "fix", "to", "it"], correctAnswer: ["they", "had", "been", "trying", "to", "fix", "it"], explanation: "Complex sentence" },
      // Fill
      { id: 16, type: 'fill-blank', question: "The road was wet. It ______ (rain).", correctAnswer: "had been raining", explanation: "Evidence in past" },
      { id: 17, type: 'fill-blank', question: "We ______ (play) for an hour when it started to rain.", correctAnswer: "had been playing", explanation: "Duration interrupted" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / sleep) well.", correctAnswer: "had not been sleeping", explanation: "Negative duration" },
      { id: 19, type: 'fill-blank', question: "______ (have) they been fighting?", correctAnswer: "had", explanation: "Had they..." },
      { id: 20, type: 'fill-blank', question: "I ______ (dream) about it.", correctAnswer: "had been dreaming", explanation: "Process" }
    ]
  },

  // ==========================================
  // 9. Future Simple
  // ==========================================
  {
    id: 'future-simple',
    name: 'Future Simple',
    description: 'Predictions, Decisions (Will + V1)',
    questions: [
      { id: 1, type: 'choice', question: "I think it ______ rain.", options: ["will", "is", "going to", "wills"], correctAnswer: 0, explanation: "Prediction with think" },
      { id: 2, type: 'choice', question: "We ______ help you.", options: ["will", "are", "do", "have"], correctAnswer: 0, explanation: "Promise/Offer" },
      { id: 3, type: 'choice', question: "She ______ come.", options: ["won't", "isn't", "don't", "didn't"], correctAnswer: 0, explanation: "Won't = Will not" },
      { id: 4, type: 'choice', question: "Look at the clouds! It ______ rain.", options: ["will", "is going to", "shall", "wills"], correctAnswer: 1, explanation: "Evidence -> Going to" },
      { id: 5, type: 'choice', question: "______ you marry me?", options: ["Do", "Are", "Will", "Have"], correctAnswer: 2, explanation: "Proposal" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I will goes.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: will go (infinitive)" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She is going to buy it.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Will they arrives?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: arrive" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'I won't tell anyone.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'It will be fun.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["always", "love", "you", "will", "I"], correctAnswer: ["I", "will", "always", "love", "you"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["call", "you", "will", "later", "I"], correctAnswer: ["I", "will", "call", "you", "later"], explanation: "Decision" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["going", "fall", "is", "he", "to"], correctAnswer: ["he", "is", "going", "to", "fall"], explanation: "Prediction" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["won't", "pass", "she", "exam", "the"], correctAnswer: ["she", "won't", "pass", "the", "exam"], explanation: "Negative" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["do", "will", "what", "you", "?"], correctAnswer: ["what", "will", "you", "do", "?"], explanation: "Wh question" },
      // Fill
      { id: 16, type: 'fill-blank', question: "I ______ (pay) for dinner.", correctAnswer: "will pay", explanation: "Offer" },
      { id: 17, type: 'fill-blank', question: "______ (will) you open the door?", correctAnswer: "will", explanation: "Request" },
      { id: 18, type: 'fill-blank', question: "I promise I ______ (not / be) late.", correctAnswer: "will not be", explanation: "Promise" },
      { id: 19, type: 'fill-blank', question: "Next year I ______ (be) 20.", correctAnswer: "will be", explanation: "Future fact" },
      { id: 20, type: 'fill-blank', question: "Watch out! You ______ (fall).", correctAnswer: "are going to fall", explanation: "Imminent event" }
    ]
  },

  // ==========================================
  // 10. Future Continuous
  // ==========================================
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    description: 'In progress at future time (Will be + V-ing)',
    questions: [
      { id: 1, type: 'choice', question: "At 8 PM, I ______ watching TV.", options: ["will", "will be", "am", "was"], correctAnswer: 1, explanation: "Will be watching" },
      { id: 2, type: 'choice', question: "Don't call me. I ______ sleeping.", options: ["will be", "will", "am", "have"], correctAnswer: 0, explanation: "In progress future" },
      { id: 3, type: 'choice', question: "______ you be using the car?", options: ["Will", "Do", "Are", "Have"], correctAnswer: 0, explanation: "Polite inquiry" },
      { id: 4, type: 'choice', question: "She ______ working tomorrow.", options: ["won't be", "won't", "isn't", "doesn't"], correctAnswer: 0, explanation: "Negative future cont." },
      { id: 5, type: 'choice', question: "They will be ______ to London.", options: ["fly", "flying", "flew", "flown"], correctAnswer: 1, explanation: "Will be + ing" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I will be wait for you.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: waiting" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She will be sleeping.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Will you be passing the post office?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'He won't be coming.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'They will be eat dinner.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: eating" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["be", "working", "I", "will", "tomorrow"], correctAnswer: ["I", "will", "be", "working", "tomorrow"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["will", "doing", "what", "be", "you", "?"], correctAnswer: ["what", "will", "you", "be", "doing", "?"], explanation: "Wh Question" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["staying", "be", "here", "won't", "we"], correctAnswer: ["we", "won't", "be", "staying", "here"], explanation: "Negative" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["be", "she", "waiting", "will", "us", "for"], correctAnswer: ["she", "will", "be", "waiting", "for", "us"], explanation: "Structure" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["using", "be", "you", "will", "computer", "the", "?"], correctAnswer: ["will", "you", "be", "using", "the", "computer", "?"], explanation: "Yes/No Question" },
      // Fill
      { id: 16, type: 'fill-blank', question: "This time next week, I ______ (lie) on the beach.", correctAnswer: "will be lying", explanation: "Specific future time" },
      { id: 17, type: 'fill-blank', question: "We ______ (have) dinner at 8.", correctAnswer: "will be having", explanation: "Future plan/progress" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / work) tomorrow.", correctAnswer: "will not be working", explanation: "Negative" },
      { id: 19, type: 'fill-blank', question: "______ (will) you be staying long?", correctAnswer: "will", explanation: "Auxiliary" },
      { id: 20, type: 'fill-blank', question: "See you! I ______ (think) of you.", correctAnswer: "will be thinking", explanation: "Future state" }
    ]
  },

  // ==========================================
  // 11. Future Perfect
  // ==========================================
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    description: 'Completed by a future time (Will have + V3)',
    questions: [
      { id: 1, type: 'choice', question: "By 2025, I ______ graduated.", options: ["will have", "will be", "have", "had"], correctAnswer: 0, explanation: "By + Time = Future Perfect" },
      { id: 2, type: 'choice', question: "She will have ______ the report by 5 PM.", options: ["finish", "finishing", "finished", "finishes"], correctAnswer: 2, explanation: "V3 required" },
      { id: 3, type: 'choice', question: "They ______ arrived by then.", options: ["won't have", "won't be", "don't have", "didn't"], correctAnswer: 0, explanation: "Negative Future Perfect" },
      { id: 4, type: 'choice', question: "How many pages will you ______ read?", options: ["has", "have", "had", "are"], correctAnswer: 1, explanation: "Will + Have + V3" },
      { id: 5, type: 'choice', question: "We will have ______ home.", options: ["go", "went", "gone", "going"], correctAnswer: 2, explanation: "Gone (V3)" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I will have finish.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: finished" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She will have left by now.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Will they have done it?'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'He will has eaten.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: will have (เสมอ)" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'By Friday, I will have left.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["finished", "will", "have", "I", "Monday", "by"], correctAnswer: ["I", "will", "have", "finished", "by", "Monday"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["gone", "will", "she", "have", "then", "by"], correctAnswer: ["she", "will", "have", "gone", "by", "then"], explanation: "By then" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["you", "finished", "will", "have", "?"], correctAnswer: ["will", "you", "have", "finished", "?"], explanation: "Question" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["not", "have", "we", "arrived", "will", "yet"], correctAnswer: ["we", "will", "not", "have", "arrived", "yet"], explanation: "Negative" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["married", "been", "have", "will", "they", "year", "a", "for"], correctAnswer: ["they", "will", "have", "been", "married", "for", "a", "year"], explanation: "Duration by future" },
      // Fill
      { id: 16, type: 'fill-blank', question: "By next year, we ______ (build) the house.", correctAnswer: "will have built", explanation: "Completed by future" },
      { id: 17, type: 'fill-blank', question: "I ______ (finish) my work by 6 PM.", correctAnswer: "will have finished", explanation: "Deadline" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / leave) yet.", correctAnswer: "will not have left", explanation: "Negative" },
      { id: 19, type: 'fill-blank', question: "______ (will) you have done it?", correctAnswer: "will", explanation: "Auxiliary" },
      { id: 20, type: 'fill-blank', question: "They ______ (arrive) by dinner time.", correctAnswer: "will have arrived", explanation: "Prediction of completion" }
    ]
  },

  // ==========================================
  // 12. Future Perfect Continuous
  // ==========================================
  {
    id: 'future-perfect-continuous',
    name: 'Future Perfect Cont.',
    description: 'Duration until a future time (Will have been + V-ing)',
    questions: [
      { id: 1, type: 'choice', question: "By next year, I will have been ______ here for 10 years.", options: ["live", "living", "lived", "lives"], correctAnswer: 1, explanation: "Duration to future" },
      { id: 2, type: 'choice', question: "She will have ______ working for 5 hours.", options: ["be", "been", "being", "is"], correctAnswer: 1, explanation: "Will have been" },
      { id: 3, type: 'choice', question: "We ______ have been waiting long.", options: ["won't", "don't", "didn't", "haven't"], correctAnswer: 0, explanation: "Negative future" },
      { id: 4, type: 'choice', question: "______ you have been sleeping?", options: ["Will", "Do", "Are", "Have"], correctAnswer: 0, explanation: "Question" },
      { id: 5, type: 'choice', question: "They will have been ______ all day.", options: ["travel", "traveling", "traveled", "travels"], correctAnswer: 1, explanation: "Continuous" },
      // TF
      { id: 6, type: 'true-false', question: "Correct/Incorrect: 'I will has been working.'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: will have" },
      { id: 7, type: 'true-false', question: "Correct/Incorrect: 'She will have been sleeping.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 8, type: 'true-false', question: "Correct/Incorrect: 'Will they have been wait?'", options: ["Correct", "Incorrect"], correctAnswer: 1, explanation: "Incorrect: waiting" },
      { id: 9, type: 'true-false', question: "Correct/Incorrect: 'We won't have been playing.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      { id: 10, type: 'true-false', question: "Correct/Incorrect: 'By 5 PM, I will have been driving for 6 hours.'", options: ["Correct", "Incorrect"], correctAnswer: 0, explanation: "Correct" },
      // Reorder
      { id: 11, type: 'reorder', question: "Rearrange:", options: ["been", "working", "will", "have", "I", "years", "for", "two"], correctAnswer: ["I", "will", "have", "been", "working", "for", "two", "years"], explanation: "Structure" },
      { id: 12, type: 'reorder', question: "Rearrange:", options: ["living", "have", "been", "will", "she", "here"], correctAnswer: ["she", "will", "have", "been", "living", "here"], explanation: "Structure" },
      { id: 13, type: 'reorder', question: "Rearrange:", options: ["long", "how", "will", "you", "been", "have", "waiting", "?"], correctAnswer: ["how", "long", "will", "you", "have", "been", "waiting", "?"], explanation: "Question" },
      { id: 14, type: 'reorder', question: "Rearrange:", options: ["not", "have", "been", "they", "will", "sleeping"], correctAnswer: ["they", "will", "not", "have", "been", "sleeping"], explanation: "Negative" },
      { id: 15, type: 'reorder', question: "Rearrange:", options: ["studying", "will", "he", "been", "have", "all", "day"], correctAnswer: ["he", "will", "have", "been", "studying", "all", "day"], explanation: "Duration" },
      // Fill
      { id: 16, type: 'fill-blank', question: "By next month, I ______ (teach) for 20 years.", correctAnswer: "will have been teaching", explanation: "Future duration" },
      { id: 17, type: 'fill-blank', question: "They ______ (travel) for days by the time they arrive.", correctAnswer: "will have been traveling", explanation: "Duration" },
      { id: 18, type: 'fill-blank', question: "She ______ (not / sleep).", correctAnswer: "will not have been sleeping", explanation: "Negative" },
      { id: 19, type: 'fill-blank', question: "______ (will) you have been waiting?", correctAnswer: "will", explanation: "Auxiliary" },
      { id: 20, type: 'fill-blank', question: "We ______ (live) here for a decade.", correctAnswer: "will have been living", explanation: "Future milestone" }
    ]
  }
];