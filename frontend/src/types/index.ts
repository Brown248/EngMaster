// frontend/src/types/index.ts
import { LucideIcon } from 'lucide-react';

// --- Shared Types ---
export interface MenuItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export interface CourseCard {
  id: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  color: 'orange' | 'pink' | 'purple' | 'blue';
}

// --- Grammar Types (Updated for Deep Dive + Vocab) ---
export interface GrammarTypeDetail {
  name: string;
  usage: string;
  structure?: string;
  vocabulary?: string[];
  examples: string[];
}

export interface GrammarSubtopic {
  id: string;
  name: string;
  usage?: string;
  structure?: string;
  vocabulary?: string[];
  examples?: string[];
  types?: GrammarTypeDetail[];
}

export interface GrammarDetail {
  title: string;
  description?: string;
  subtopics: GrammarSubtopic[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  icon: string;
  color: 'green' | 'amber' | 'indigo' | 'blue' | 'pink' | 'purple' | 'orange' | 'teal' | 'cyan' | 'slate' | 'fuchsia' | 'lime' | 'red' | 'violet';
  details: GrammarDetail;
}

// --- Vocabulary Types (Updated) ---
export interface VocabWord {
  id: number | string;
  word: string;
  meaning: string;
  partOfSpeech?: string;
  example?: string;
  synonyms?: string[];
  // [Fix] เพิ่ม property เหล่านี้ให้เป็น optional เพื่อรองรับข้อมูลจากไฟล์ย่อย
  category?: string;
  topic?: string;
  level?: string;
  usage?: string;
}

export interface SubCategory {
  id: string;
  title: string; // ใช้ title ให้ตรงกับ Data
  words: VocabWord[];
}

export interface MainCategory {
  id: string;
  title: string;
  // [Fix] เปลี่ยนเป็น any เพื่อรองรับ LucideIcon object โดยไม่ต้อง strict มากเกินไป
  icon: any; 
  color: 'indigo' | 'blue' | 'purple' | 'orange' | 'green' | 'pink' | 'cyan' | 'teal' | 'red' | 'amber' | 'fuchsia' | 'lime' | 'violet';
  subCategories: SubCategory[];
}

// --- Quiz Types ---
export type QuestionType = 'choice' | 'true-false' | 'matching' | 'reorder' | 'fill-blank';

export interface QuizQuestion {
  id: number;
  type: QuestionType; 
  question: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  tenseTopic?: string;
}

export interface TenseTopicData {
  id: string;
  name: string;
  description: string;
  questions: QuizQuestion[];
}