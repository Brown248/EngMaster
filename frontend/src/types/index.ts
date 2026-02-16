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

// --- Grammar Types (Enhanced for Self-Learning) ---

export interface CommonMistake {
  wrong: string;
  right: string;
  explanation?: string;
}

export interface GrammarStructure {
  positive: string;
  negative?: string;
  question?: string;
}

export interface GrammarTypeDetail {
  name: string;
  usage: string;
  structure?: string | GrammarStructure; // รองรับทั้งแบบข้อความเดียวและแบบแยกประเภท
  vocabulary?: string[];
  examples: string[];
  commonMistakes?: CommonMistake[]; // [New] จุดที่มักผิด
  tips?: string; // [New] เกร็ดความรู้
}

export interface GrammarSubtopic {
  id: string;
  name: string;
  usage?: string;
  structure?: string | GrammarStructure; // รองรับทั้งแบบข้อความเดียวและแบบแยกประเภท
  vocabulary?: string[];
  examples?: string[];
  types?: GrammarTypeDetail[];
  commonMistakes?: CommonMistake[]; // [New]
  tips?: string; // [New]
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

// --- Vocabulary Types ---
export interface VocabWord {
  id: number | string;
  word: string;
  meaning: string;
  partOfSpeech?: string;
  example?: string;
  synonyms?: string[];
  category?: string;
  topic?: string;
  level?: string;
  usage?: string;
}

export interface SubCategory {
  id: string;
  title: string;
  words: VocabWord[];
}

export interface MainCategory {
  id: string;
  title: string;
  icon: any; 
  color: 'indigo' | 'blue' | 'purple' | 'orange' | 'green' | 'pink' | 'cyan' | 'teal' | 'red' | 'amber' | 'fuchsia' | 'lime' | 'violet';
  subCategories: SubCategory[];
}

export interface MenuItem {
  path: string;
  label: string;  // 👈 ใช้ชื่อ property ว่า "label"
  icon: LucideIcon;
}