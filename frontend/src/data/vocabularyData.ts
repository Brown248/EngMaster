import { Book, Layers, MessageCircle, Star, Zap } from 'lucide-react';
import { MainCategory, VocabWord } from '../types';

// Import ข้อมูลจากไฟล์ย่อย
import { topicWords } from './vocab_parts/vocab_topics';
import { grammarWords } from './vocab_parts/vocab_grammar';
import { usageWords } from './vocab_parts/vocab_usage';
import { specialWords } from './vocab_parts/vocab_special';

// ข้อมูล Categories สำหรับหน้า UI
export const VOCAB_CATEGORIES: MainCategory[] = [
  {
    id: 'Topic',
    label: 'หมวดตามหัวข้อ (Topics)',
    icon: Layers,
    subCategories: [
      { id: 'Food & Drink', label: 'อาหารและเครื่องดื่ม' },
      { id: 'Animals', label: 'สัตว์' },
      { id: 'Body & Health', label: 'ร่างกายและสุขภาพ' },
      { id: 'Clothes & Fashion', label: 'เสื้อผ้าและแฟชั่น' },
      { id: 'House & Furniture', label: 'บ้านและของใช้' },
      { id: 'Transportation', label: 'การเดินทาง' },
      { id: 'Places', label: 'สถานที่' },
      { id: 'Jobs', label: 'อาชีพ' },
      { id: 'Nature', label: 'ธรรมชาติและอากาศ' },
      { id: 'Technology', label: 'เทคโนโลยี' },
      { id: 'Business', label: 'ธุรกิจและการเงิน' },
    ]
  },
  {
    id: 'POS',
    label: 'หน้าที่คำ (Grammar)',
    icon: Book,
    subCategories: [
      { id: 'n.', label: 'Noun (คำนาม)' },
      { id: 'v.', label: 'Verb (คำกริยา)' },
      { id: 'adj.', label: 'Adjective (คำคุณศัพท์)' },
      { id: 'adv.', label: 'Adverb (คำวิเศษณ์)' },
      { id: 'prep.', label: 'Preposition (คำบุพบท)' },
      { id: 'conj.', label: 'Conjunction (คำเชื่อม)' },
      { id: 'pron.', label: 'Pronoun (คำสรรพนาม)' },
    ]
  },
  {
    id: 'Usage',
    label: 'การใช้งานจริง (Usage)',
    icon: MessageCircle,
    subCategories: [
      { id: 'Daily Life', label: 'ชีวิตประจำวัน' },
      { id: 'Conversation', label: 'บทสนทนา' },
      { id: 'Travel', label: 'การท่องเที่ยว' },
      { id: 'Work', label: 'การทำงาน' },
      { id: 'Feelings', label: 'ความรู้สึก' },
      { id: 'Shopping', label: 'การซื้อของ' },
    ]
  },
  {
    id: 'Level',
    label: 'ระดับความยาก (Level)',
    icon: Zap,
    subCategories: [
      { id: 'Beginner', label: 'ระดับต้น (Beginner)' },
      { id: 'Intermediate', label: 'ระดับกลาง (Intermediate)' },
      { id: 'Advanced', label: 'ระดับสูง (Advanced)' },
    ]
  },
  {
    id: 'Special',
    label: 'คำพิเศษ (Special)',
    icon: Star,
    subCategories: [
      { id: 'Idioms', label: 'สำนวน (Idioms)' },
      { id: 'Phrasal Verbs', label: 'กริยาวลี' },
      { id: 'Slang', label: 'คำสแลง' },
      { id: 'Academic', label: 'คำศัพท์วิชาการ' },
      { id: 'TOEIC', label: 'คำศัพท์ TOEIC' },
    ]
  }
];

// รวมข้อมูลทั้งหมดเข้าด้วยกัน พร้อม Export
export const vocabularyData: VocabWord[] = [
  ...topicWords,
  ...grammarWords,
  ...usageWords,
  ...specialWords
];