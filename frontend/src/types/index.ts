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
  // [Fix] เปลี่ยน emerald -> green และ rose -> pink เพื่อให้ตรงกับ QuizEngine และ grammarData
  color: 'green' | 'amber' | 'indigo' | 'blue' | 'pink' | 'purple' | 'orange' | 'teal' | 'cyan' | 'slate' | 'fuchsia' | 'lime' | 'red';
  details: GrammarDetail;
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