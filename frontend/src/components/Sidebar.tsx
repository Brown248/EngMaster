import { NavLink } from 'react-router-dom';
import { Home, Book, Flame, Layers, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/slang', label: 'Slang', icon: Flame },
  { path: '/grammar', label: 'Grammar', icon: Layers },
  { path: '/toeic', label: 'TOEIC', icon: GraduationCap },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-xl shadow-gray-100 z-50 flex flex-col rounded-r-3xl overflow-hidden">
      {/* Logo */}
      <div className="p-8 flex items-center gap-3">
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200"
        >
          E
        </motion.div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">EngMaster</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-2 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:bg-gray-50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Background Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-50 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                {/* Icon & Text */}
                <span className="relative z-10">
                  <item.icon size={22} className={`transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                </span>
                <span className="relative z-10 text-sm">{item.label}</span>

                {/* Active Dot */}
                {isActive && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative z-10 ml-auto w-2 h-2 rounded-full bg-blue-600 shadow-sm" 
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Version */}
      <div className="p-6">
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
           <p className="text-xs text-gray-400">EngMaster v1.0</p>
           <p className="text-[10px] text-gray-300 mt-1">No Login Required</p>
        </div>
      </div>
    </aside>
  );
}