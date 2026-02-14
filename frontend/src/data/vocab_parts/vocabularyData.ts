// frontend/src/data/vocab_parts/vocabularyData.ts
import { MainCategory } from '../../types';

// Import ข้อมูลจากไฟล์ย่อยที่เราแยกไว้
import { nounsCategory } from './parts/pos_nouns';
import { verbsCategory } from './parts/pos_verbs';
import { adjectivesCategory } from './parts/pos_adjectives';
import { adverbsCategory } from './parts/pos_adverbs';
import { othersCategories } from './parts/pos_others';

// รวมข้อมูลทั้งหมดเข้าด้วยกัน
export const vocabularyCategories: MainCategory[] = [
  nounsCategory,
  verbsCategory,
  adjectivesCategory,
  adverbsCategory,
  ...othersCategories // others เป็น Array อยู่แล้ว เลยต้องใช้ ... เพื่อกระจายออกมา
];