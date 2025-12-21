import { LucideIcon } from 'lucide-react';

// สำหรับ Sidebar Menu
export interface MenuItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

// สำหรับ Home Cards
export interface CourseCard {
  id: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  color: 'orange' | 'pink' | 'purple' | 'blue'; // ระบุสีที่อนุญาตให้ชัดเจน
}

// สำหรับ Slang items
export interface SlangItem {
  word: string;
  meaning: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
}

// สำหรับ Grammar items
export interface GrammarTopic {
  title: string;
  icon: string;
  color: 'emerald' | 'amber' | 'indigo';
  items: string[];
}

export interface GrammarDetail {
  structure: string;
  concept: string;
  examples: string[];
}

// --- Exam Types ---
export interface Question {
  id: number;
  text: string;
  image?: string; // รองรับรูปภาพโจทย์ (ถ้ามี)
  audio?: string; // รองรับไฟล์เสียง (ถ้ามี)
  choices: string[];
  correctAnswer: number; // เก็บเป็น index (0, 1, 2, 3)
  explanation: string; // คำอธิบายเฉลย
}

export interface ExamPart {
  id: string;
  title: string;
  description: string;
  timeLimit: number; // หน่วยเป็นวินาที
  questions: Question[];
}