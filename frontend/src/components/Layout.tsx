// frontend/src/components/Layout.tsx
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Header แบบ Ultra Compact */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200/50 px-3 py-2 shadow-sm transition-all h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-2">
          
          {/* ปุ่มเมนู */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95 flex-shrink-0"
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>

          {/* โลโก้ */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer select-none">
            <img 
              src="/logo.png" 
              alt="EngMaster Logo" 
              className="w-8 h-8 rounded-lg shadow-md shadow-blue-200/50 group-hover:scale-105 transition-transform flex-shrink-0 object-cover" 
            />
            <span className="font-extrabold text-lg text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors leading-none pt-0.5">
              EngMaster
            </span>
          </Link>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pb-6 pt-2 md:px-6">
        {children || <Outlet />}
      </main>

      {/* ✅ เพิ่ม Footer เพื่อวางลิงก์ Privacy Policy ให้เข้าถึงได้จากทุกหน้า */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            © 2024 EngMaster. All rights reserved.
          </div>
          <div className="flex gap-6 font-medium">
            <Link to="/privacy-policy" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}