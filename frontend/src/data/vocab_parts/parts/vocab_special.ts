import { VocabWord } from '../../../types';

export const vocab_special: VocabWord[] = [
  // --- Group 1: Confusing Words (คำที่มักสับสน) ---
  { 
    id: 'cw1', 
    word: "Affect vs Effect", 
    meaning: "Affect (v. ส่งผลกระทบ) / Effect (n. ผลกระทบ)", 
    partOfSpeech: "Confusing", 
    example: "The weather affected his mood. / The effect was immediate.", 
    category: "Confusing Words" 
  },
  { 
    id: 'cw2', 
    word: "Borrow vs Lend", 
    meaning: "Borrow (ขอยืม - เข้าตัว) / Lend (ให้ยืม - ออกจากตัว)", 
    partOfSpeech: "Confusing", 
    example: "Can I borrow your pen? / I will lend you money.", 
    category: "Confusing Words" 
  },
  { 
    id: 'cw3', 
    word: "Say vs Tell", 
    meaning: "Say (พูดออกมา) / Tell (บอกใครสักคน)", 
    partOfSpeech: "Confusing", 
    example: "She said hello. / She told me the truth.", 
    category: "Confusing Words" 
  },

  // --- Group 2: Collocations (คำที่ใช้คู่กันเสมอ) ---
  { 
    id: 'col1', 
    word: "Make a decision", 
    meaning: "ตัดสินใจ (ห้ามใช้ Do)", 
    partOfSpeech: "Collocation", 
    example: "I need to make a decision quickly.", 
    category: "Collocations" 
  },
  { 
    id: 'col2', 
    word: "Do a favor", 
    meaning: "ช่วยเหลือ/ทำคุณประโยชน์ (ห้ามใช้ Make)", 
    partOfSpeech: "Collocation", 
    example: "Can you do me a favor?", 
    category: "Collocations" 
  },
  { 
    id: 'col3', 
    word: "Take a break", 
    meaning: "พักเบรก", 
    partOfSpeech: "Collocation", 
    example: "Let's take a break for 10 minutes.", 
    category: "Collocations" 
  },

  // ... (Idioms, Phrasal Verbs เดิมของคุณ) ...
  { id: 's1', word: "Piece of cake", meaning: "ง่ายมาก (หมูๆ)", partOfSpeech: "idiom", example: "The test was a piece of cake.", category: "Idioms" },
];