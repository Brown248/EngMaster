import { Home, Book, Layers, Gamepad2 } from 'lucide-react';
import { MenuItem } from '../../types';

export const menuItems: MenuItem[] = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/grammar', label: 'Grammar', icon: Layers },
  { path: '/game', label: 'Game', icon: Gamepad2 },
];