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
    <aside className="hidden md:flex flex-col w-72 p-4 h-screen z-20 fixed left-0 top-0">
      <div className="bg-white rounded-[30px] shadow-lg h-full flex flex-col overflow-hidden border border-slate-100">
        {/* Logo Area */}
        <div className="p-8 flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="bg-blue-600 text-white p-2 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-blue-200"
          >
            <span className="font-extrabold text-xl">E</span>
          </motion.div>
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">EngMaster</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`w-8 flex justify-center transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                    <item.icon size={24} />
                  </div>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeDot"
                      className="absolute right-4 w-2 h-2 bg-blue-500 rounded-full" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}