import { NavLink } from 'react-router-dom';
import { Home, Book, Flame, Layers, GraduationCap } from 'lucide-react';

const menuItems = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/slang', label: 'Slang', icon: Flame },
  { path: '/grammar', label: 'Grammar', icon: Layers },
  { path: '/toeic', label: 'TOEIC', icon: GraduationCap },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col rounded-r-3xl">
      {/* Logo Section */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">
          E
        </div>
        <span className="text-2xl font-bold text-gray-800 tracking-tight">EngMaster</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? 'bg-primary-light text-primary font-semibold shadow-sm'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  size={22}
                  className={`transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                />
                <span className="text-base">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Version info (Optional) */}
      <div className="p-6 text-center text-xs text-gray-400">
        <p>EngMaster v1.0.0</p>
        <p className="mt-1">Practice everyday</p>
      </div>
    </aside>
  );
}