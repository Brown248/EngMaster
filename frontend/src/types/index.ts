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

export interface SlangItem {
  word: string;
  meaning: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
}

export interface GrammarDetail {
  structure: string;
  concept: string;
  examples: string[];
}

export interface GrammarTopic {
  title: string;
  icon: string;
  // ✅ แก้ไข: เพิ่มสีที่ขาดหายไปตรงนี้
  color: 'emerald' | 'amber' | 'indigo' | 'blue' | 'rose' | 'purple';
  items: string[];
}

// --- Exam Types ---
export interface Question {
  id: number;
  text: string;
  passage?: string;
  image?: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ExamPart {
  id: string;
  title: string;
  description: string;
  timeLimit: number; 
  questions: Question[];
}