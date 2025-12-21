import { Book, Flame, Brain, GraduationCap } from 'lucide-react';
import { CourseCard } from '../types';

export const coursesData: CourseCard[] = [
  { id: 'vocabulary', title: 'Vocabulary', sub: 'คลังศัพท์ A-Z', icon: Book, color: 'orange' },
  { id: 'slang', title: 'Slang', sub: 'ศัพท์วัยรุ่น', icon: Flame, color: 'pink' },
  { id: 'grammar', title: 'Grammar', sub: '12 Tenses', icon: Brain, color: 'purple' },
  { id: 'toeic', title: 'TOEIC Exam', sub: 'ข้อสอบจำลอง', icon: GraduationCap, color: 'blue' },
];