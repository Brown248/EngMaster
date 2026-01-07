// frontend/src/data/vocab_parts/vocabularyData.ts
import { MainCategory } from '../../types';
import { Layers, Book, MessageCircle, Zap, Star } from 'lucide-react';

import { vocab_topics } from './parts/vocab_topics';
import { vocab_grammar } from './parts/vocab_grammar';
import { vocab_usage } from './parts/vocab_usage';
// import { vocab_levels } from './parts/vocab_levels'; // ถ้ามีไฟล์นี้ค่อยเปิด
import { vocab_special } from './parts/vocab_special';

export const VOCAB_CATEGORIES: MainCategory[] = [
  {
    id: 'topics',
    title: 'หมวดหมู่ตามหัวข้อ',
    icon: Layers,
    color: 'indigo',
    subCategories: [
      { id: 'Food & Drink', title: 'อาหารและเครื่องดื่ม', words: vocab_topics.filter(w => w.topic === 'Food & Drink') },
      { id: 'Animals', title: 'สัตว์', words: vocab_topics.filter(w => w.topic === 'Animals') },
      { id: 'Body & Health', title: 'ร่างกายและสุขภาพ', words: vocab_topics.filter(w => w.topic === 'Body & Health') },
      { id: 'Clothes & Fashion', title: 'เสื้อผ้าและแฟชั่น', words: vocab_topics.filter(w => w.topic === 'Clothes & Fashion') },
      { id: 'House & Furniture', title: 'บ้านและของใช้', words: vocab_topics.filter(w => w.topic === 'House & Furniture') },
      { id: 'Transportation', title: 'การเดินทาง', words: vocab_topics.filter(w => w.topic === 'Transportation') },
      { id: 'Places', title: 'สถานที่', words: vocab_topics.filter(w => w.topic === 'Places') },
      { id: 'Jobs', title: 'อาชีพ', words: vocab_topics.filter(w => w.topic === 'Jobs') },
      { id: 'Nature', title: 'ธรรมชาติและอากาศ', words: vocab_topics.filter(w => w.topic === 'Nature') },
      { id: 'Technology', title: 'เทคโนโลยี', words: vocab_topics.filter(w => w.topic === 'Technology') },
      { id: 'Business', title: 'ธุรกิจและการเงิน', words: vocab_topics.filter(w => w.topic === 'Business') },
    ]
  },
  {
    id: 'grammar',
    title: 'หมวดหมู่ตามไวยากรณ์',
    icon: Book,
    color: 'blue',
    subCategories: [
      { id: 'n.', title: 'Noun (คำนาม)', words: vocab_grammar.filter(w => w.partOfSpeech === 'n.') },
      { id: 'v.', title: 'Verb (คำกริยา)', words: vocab_grammar.filter(w => w.partOfSpeech === 'v.') },
      { id: 'adj.', title: 'Adjective (คำคุณศัพท์)', words: vocab_grammar.filter(w => w.partOfSpeech === 'adj.') },
      { id: 'adv.', title: 'Adverb (คำวิเศษณ์)', words: vocab_grammar.filter(w => w.partOfSpeech === 'adv.') },
      { id: 'prep.', title: 'Preposition (คำบุพบท)', words: vocab_grammar.filter(w => w.partOfSpeech === 'prep.') },
      { id: 'conj.', title: 'Conjunction (คำเชื่อม)', words: vocab_grammar.filter(w => w.partOfSpeech === 'conj.') },
      { id: 'pron.', title: 'Pronoun (คำสรรพนาม)', words: vocab_grammar.filter(w => w.partOfSpeech === 'pron.') },
    ]
  },
  {
    id: 'usage',
    title: 'หมวดหมู่ตามการใช้งาน',
    icon: MessageCircle,
    color: 'green',
    subCategories: [
      { id: 'Daily Life', title: 'ชีวิตประจำวัน', words: vocab_usage.filter(w => w.usage === 'Daily Life') },
      { id: 'Conversation', title: 'บทสนทนา', words: vocab_usage.filter(w => w.usage === 'Conversation') },
      { id: 'Travel', title: 'การท่องเที่ยว', words: vocab_usage.filter(w => w.usage === 'Travel') },
      { id: 'Work', title: 'การทำงาน', words: vocab_usage.filter(w => w.usage === 'Work') },
      { id: 'Feelings', title: 'ความรู้สึก', words: vocab_usage.filter(w => w.usage === 'Feelings') },
      { id: 'Shopping', title: 'การซื้อของ', words: vocab_usage.filter(w => w.usage === 'Shopping') },
    ]
  },
  {
    id: 'levels',
    title: 'หมวดหมู่ตามระดับ',
    icon: Zap,
    color: 'orange',
    subCategories: [
      { id: 'Beginner', title: 'ระดับต้น (Beginner)', words: vocab_topics.filter(w => w.level === 'Beginner') },
      { id: 'Intermediate', title: 'ระดับกลาง (Intermediate)', words: vocab_topics.filter(w => w.level === 'Intermediate') },
      { id: 'Advanced', title: 'ระดับสูง (Advanced)', words: vocab_topics.filter(w => w.level === 'Advanced') },
    ]
  },
  {
    id: 'special',
    title: 'หมวดหมู่พิเศษ',
    icon: Star,
    color: 'purple',
    subCategories: [
      { id: 'Idioms', title: 'สำนวน (Idioms)', words: vocab_special.filter(w => w.category === 'Idioms') },
      { id: 'Phrasal Verbs', title: 'กริยาวลี', words: vocab_special.filter(w => w.category === 'Phrasal Verbs') },
      { id: 'Slang', title: 'คำสแลง', words: vocab_special.filter(w => w.category === 'Slang') },
      { id: 'Academic', title: 'คำศัพท์วิชาการ', words: vocab_special.filter(w => w.category === 'Academic') },
      { id: 'TOEIC', title: 'คำศัพท์ TOEIC', words: vocab_special.filter(w => w.category === 'TOEIC') },
    ]
  }
];