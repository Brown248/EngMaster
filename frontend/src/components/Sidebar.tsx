// frontend/src/components/Sidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  BookOpen, 
  Library, 
  Home, 
  MessageSquare, 
  GraduationCap,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: 'home', title: 'หน้าแรก', path: '/', icon: Home, color: 'text-blue-500' },
  { id: 'grammar', title: 'ไวยากรณ์', path: '/grammar', icon: BookOpen, color: 'text-purple-500' },
  { id: 'vocabulary', title: 'คำศัพท์', path: '/vocabulary', icon: Library, color: 'text-orange-500' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[280px] bg-white shadow-2xl z-50 flex flex-col border-r border-slate-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                  <GraduationCap size={24} />
                </div>
                <span className="font-black text-xl text-slate-800 tracking-tight">EngMaster</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 hover:text-slate-600 shadow-sm border border-transparent hover:border-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold group
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                  >
                    <item.icon size={22} className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
                    <span className="flex-1">{item.title}</span>
                    {isActive && <motion.div layoutId="active" className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                  </Link>
                );
              })}

              {/* ✅ ส่วนล่างสุด: ลิงก์นโยบายความเป็นส่วนตัว */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  to="/privacy-policy"
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold group
                    ${location.pathname === '/privacy-policy'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-400 hover:bg-slate-50 hover:text-indigo-600'
                    }
                  `}
                >
                  <ShieldCheck size={22} />
                  <span className="flex-1">Privacy Policy</span>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </nav>

            {/* Footer Information */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-100">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <MessageSquare size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Community</span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  เข้าร่วมกลุ่มผู้เรียนเพื่อแลกเปลี่ยนเทคนิคการเรียนภาษาอังกฤษ
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}