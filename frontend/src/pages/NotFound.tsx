// frontend/src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
// ✅ Import AdBanner
import AdBanner from '../components/AdBanner';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
      <div className="text-9xl font-black text-slate-100 mb-4">404</div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Page Not Found</h1>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        ขออภัย ไม่พบหน้าที่คุณต้องการ อาจเป็นเพราะลิงก์ผิดหรือหน้าเพจถูกลบไปแล้ว
      </p>
      
      {/* ✅ พื้นที่โฆษณา (AdBanner) */}
      <div className="w-full max-w-md mb-8">
        <AdBanner />
      </div>

      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
      >
        <Home size={20} />
        กลับหน้าหลัก
      </Link>
    </div>
  );
}