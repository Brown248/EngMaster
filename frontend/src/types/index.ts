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

// --- Grammar Types ---
export interface GrammarSubtopic {
  name: string;
  explanation?: string;
  usage?: string;
  structure?: string;
  examples: string[];
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
  color: 'emerald' | 'amber' | 'indigo' | 'blue' | 'rose' | 'purple' | 'orange' | 'teal' | 'cyan' | 'slate' | 'fuchsia' | 'lime';
  details: GrammarDetail;
}

// --- Quiz Types (Updated) ---
// รองรับประเภทคำถาม 5 แบบ
export type QuestionType = 'choice' | 'true-false' | 'matching' | 'reorder' | 'fill-blank';

export interface QuizQuestion {
  id: number;
  type: QuestionType; // ระบุประเภท
  question: string;
  options?: string[]; // ตัวเลือก (สำหรับ choice, matching, reorder)
  correctAnswer: string | number | string[]; // คำตอบ (รองรับ index, string, หรือ array ของ string)
  explanation: string;
  tenseTopic?: string; // ระบุหัวข้อ Tense
}