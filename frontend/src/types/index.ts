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

export interface GrammarSubtopic {
  name: string;
  structure?: string; // โครงสร้างประโยค (เขียนเต็ม)
  usage: string;      // วิธีใช้แบบละเอียด
  examples: string[]; // ตัวอย่างประโยค
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
  // เพิ่มเฉดสีให้ครบถ้วนสำหรับการตกแต่ง
  color: 'emerald' | 'amber' | 'indigo' | 'blue' | 'rose' | 'purple' | 'orange' | 'teal' | 'cyan' | 'slate' | 'fuchsia' | 'lime';
  details: GrammarDetail;
}

// --- Exam Types (คงเดิมไว้เผื่ออนาคต) ---
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