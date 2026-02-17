// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom';
// ✅ เพิ่ม Info และ Mail ในการ import
import { X, MessageSquarePlus, ShieldCheck, Info, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/core/menuData'; 
import AdBanner from './AdBanner';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ... (ส่วน Backdrop และ Header เหมือนเดิม ไม่ต้องแก้) ... */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-white">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EngMaster
              </span>
              <button 
                onClick={onClose} 
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`
                  }
                >
                  <item.icon size={22} strokeWidth={2.5} />
                  {item.label}
                </NavLink>
              ))}

              {/* ✅ เพิ่มส่วนนี้: เมนู About และ Contact */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  ข้อมูลทั่วไป
                </p>
                <NavLink
                  to="/about"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`
                  }
                >
                  <Info size={20} />
                  เกี่ยวกับเรา
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`
                  }
                >
                  <Mail size={20} />
                  ติดต่อเรา
                </NavLink>
                <NavLink
                  to="/privacy-policy"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`
                  }
                >
                  <ShieldCheck size={20} />
                  นโยบายความเป็นส่วนตัว
                </NavLink>
              </div>
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
               {/* ... (ส่วน Footer เดิม ไม่ต้องแก้) ... */}
               {/* หมายเหตุ: คุณอาจจะเอาปุ่ม "แจ้งปัญหา / แนะนำ" ด้านล่างนี้ออกก็ได้ 
                   เพราะเรามีหน้า Contact แล้ว แต่ถ้าเก็บไว้ก็ไม่เสียหายครับ */}
               <div className="mb-4 rounded-xl overflow-hidden shadow-sm bg-white min-h-[250px] max-h-[250px] flex items-center justify-center">
                 <AdBanner dataAdFormat="rectangle" />
              </div>

               {/* ... (Code เดิม) ... */}
               <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeJqpXVQ-kir08pEsSKhX0xsfs_nEAfhMRY0bVd_9TTGQcJFg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-3 mb-4 bg-white border border-slate-200 text-slate-600 rounded-xl transition-all shadow-sm hover:border-blue-300 hover:shadow-md hover:text-blue-700 group"
              >
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                   <MessageSquarePlus size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold">แจ้งปัญหา / แนะนำ</span>
                  <span className="text-[10px] text-slate-400 font-medium">ช่วยให้เราพัฒนาขึ้น</span>
                </div>
              </a>

              <div className="text-center">
                 <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">© 2024 EngMaster App</p>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}