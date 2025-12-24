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

// ✅ Grammar Types (อัปเดตให้รองรับ Structure และ Usage)
export interface GrammarSubtopic {
  name: string;
  explanation?: string; // รองรับของเดิม
  usage?: string;       // เพิ่มใหม่: วิธีใช้
  structure?: string;   // เพิ่มใหม่: โครงสร้างประโยค
  examples: string[];
}

export interface GrammarDetail {
  title: string;
  description?: string; // เพิ่ม description หัวข้อหลัก
  subtopics: GrammarSubtopic[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  icon: string; // Emoji
  color: 'emerald' | 'amber' | 'indigo' | 'blue' | 'rose' | 'purple' | 'orange' | 'teal' | 'cyan' | 'slate' | 'fuchsia' | 'lime';
  details: GrammarDetail;
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

// เพิ่ม Quiz Question Interface สำหรับ Tenses
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
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