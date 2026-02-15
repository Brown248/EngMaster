// frontend/src/components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // เช็คว่าเคยยอมรับไปหรือยัง
    const consented = localStorage.getItem('cookieConsent');
    if (!consented) {
      // ถ้ายั่งไม่เคย ให้แสดง banner หลังจากผ่านไป 1 วินาที
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative">
            
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 md:hidden"
            >
                <X size={20} />
            </button>

            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
              <Cookie size={32} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-1">เว็บไซต์นี้ใช้คุกกี้</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ รวมถึงเพื่อวิเคราะห์การเข้าใช้งาน ท่านสามารถศึกษารายละเอียดเพิ่มเติมได้ที่ <Link to="/privacy-policy" className="text-indigo-600 font-bold hover:underline">นโยบายความเป็นส่วนตัว</Link>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                ยอมรับทั้งหมด
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}