import { Home, Book, Layers } from 'lucide-react';
import { MenuItem } from '../../types';

export const menuItems: MenuItem[] = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/grammar', label: 'Grammar', icon: Layers },
];