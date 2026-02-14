import { MainCategory } from '../../types';

// เปลี่ยนวิธี Import (เอาปีกกา {} ออก สำหรับ nounsCategory)
import nounsCategory from './parts/pos_nouns'; 
import { verbsCategory } from './parts/pos_verbs';
import { adjectivesCategory } from './parts/pos_adjectives';
import { adverbsCategory } from './parts/pos_adverbs';
import { othersCategories } from './parts/pos_others';

export const vocabularyCategories: MainCategory[] = [
  nounsCategory, // เรียกใช้ได้เลย
  verbsCategory,
  adjectivesCategory,
  adverbsCategory,
  ...othersCategories
];