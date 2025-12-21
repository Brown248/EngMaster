import { Home, Book, Flame, Layers, GraduationCap } from 'lucide-react';
import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/slang', label: 'Slang', icon: Flame },
  { path: '/grammar', label: 'Grammar', icon: Layers },
  { path: '/toeic', label: 'TOEIC', icon: GraduationCap },
];