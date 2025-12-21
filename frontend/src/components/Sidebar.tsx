import { NavLink, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuData'; // เรียกใช้ data
import { cn } from '../utils/cn'; // เรียกใช้ utils

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col h-full border-r border-slate-100"
          >
            {/* Header - Compact */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-slate-50">
              <Link to="/" onClick={onClose} className="flex items-center gap-2 group">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg w-8 h-8 flex items-center justify-center shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
                  <span className="font-extrabold text-lg">E</span>
                </div>
                <h1 className="text-lg font-extrabold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">EngMaster</h1>
              </Link>
              
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "bg-blue-50 text-blue-600 font-bold" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <div className={cn(
                        "w-5 flex justify-center transition-transform",
                        isActive ? "scale-110" : "group-hover:scale-110"
                      )}>
                        <item.icon size={18} />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="activeDot"
                          className="absolute right-3 w-1.5 h-1.5 bg-blue-500 rounded-full" 
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-3 text-center text-slate-400 text-[10px] font-medium border-t border-slate-50">
              © 2024 EngMaster App
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}