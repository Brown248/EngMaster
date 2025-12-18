import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, Flame, Layers, GraduationCap } from 'lucide-react';

const menuItems = [
  { path: '/', label: 'หน้าแรก', icon: Home },
  { path: '/vocabulary', label: 'Vocabulary', icon: Book },
  { path: '/slang', label: 'Slang', icon: Flame },
  { path: '/grammar', label: 'Grammar', icon: Layers },
  { path: '/toeic', label: 'TOEIC', icon: GraduationCap },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // ใช้ min-h-screen เพื่อให้ background เต็มจอ แต่ยอมให้สูงเกินได้ถ้าเนื้อหาเยอะ
    <div className="min-h-screen bg-[#f0f4f8] font-sans flex relative">
      <Sidebar />
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-6 pt-20 animate-in fade-in slide-in-from-bottom-10">
           <nav className="space-y-3">
              {menuItems.map((item) => (
                  <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                          isActive
                              ? 'bg-blue-50 text-blue-600 font-bold shadow-sm'
                              : 'bg-slate-50 text-slate-500'
                      }`}
                  >
                      <item.icon size={24} />
                      <span className="font-bold text-lg">{item.label}</span>
                  </NavLink>
              ))}
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Main Content Area */}
      {/* ลบ overflow-y-auto ออกจากตรงนี้ เพื่อให้ใช้ Scroll ของ Browser หลักแทน */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 sticky top-4 z-40">
           <div className="flex items-center gap-2">
               <div className="bg-blue-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold">E</div>
               <span className="font-extrabold text-lg text-slate-800">EngMaster</span>
           </div>
           <button onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={24} className="text-slate-600" />
           </button>
        </div>

        <div className="max-w-6xl mx-auto pb-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}