// frontend/src/pages/PrivacyPolicy.tsx
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Cookie, ArrowLeft, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ เพิ่ม Helmet

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <Eye className="text-blue-500" />,
      title: "การเก็บรวบรวมข้อมูล",
      content: "เรามีการเก็บรวบรวมข้อมูลพื้นฐานเมื่อท่านเข้าใช้งานเว็บไซต์ เช่น ที่อยู่ IP, ประเภทของเบราว์เซอร์ และพฤติกรรมการใช้งาน เพื่อนำมาปรับปรุงประสบการณ์การเรียนรู้ให้ดียิ่งขึ้น"
    },
    {
      icon: <Cookie className="text-orange-500" />,
      title: "นโยบายคุกกี้ (Cookies) และ Google AdSense",
      content: "เว็บไซต์นี้ใช้คุกกี้เพื่อแสดงโฆษณา โดย Google ในฐานะผู้ให้บริการภายนอก จะใช้คุกกี้เพื่อแสดงโฆษณาตามการเยี่ยมชมเว็บไซต์ของท่านและเว็บไซต์อื่นๆ บนอินเทอร์เน็ต ท่านสามารถเลือกไม่รับการใช้งาน DART cookie ได้โดยไปที่นโยบายความเป็นส่วนตัวของเครือข่ายโฆษณาและเนื้อหาของ Google"
    },
    {
      icon: <Lock className="text-emerald-500" />,
      title: "การรักษาความปลอดภัย",
      content: "เราให้ความสำคัญกับความปลอดภัยของข้อมูลส่วนบุคคลของท่าน และใช้มาตรการทางเทคนิคที่เหมาะสมเพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต"
    },
    {
      icon: <UserCheck className="text-purple-500" />,
      title: "สิทธิของท่าน (User Rights)",
      content: "ท่านมีสิทธิในการขอเข้าถึง ขอรับสำเนา ขอแก้ไข หรือขอให้ลบข้อมูลส่วนบุคคลของท่าน รวมถึงสิทธิในการคัดค้านการประมวลผลข้อมูล หากท่านต้องการใช้สิทธิเหล่านี้ สามารถติดต่อเราได้ผ่านช่องทางที่ระบุไว้ในเว็บไซต์"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* ✅ เพิ่ม Meta Tags สำหรับหน้า Policy */}
      <Helmet>
        <title>นโยบายความเป็นส่วนตัว (Privacy Policy) - EngMaster</title>
        <meta name="description" content="นโยบายความเป็นส่วนตัวของ EngMaster การเก็บรวบรวมข้อมูล การใช้งานคุกกี้ และสิทธิของผู้ใช้งาน" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 pt-10">
        
        {/* ปุ่มย้อนกลับ */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back
        </button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              นโยบายความเป็นส่วนตัวของ EngMaster เรายึดมั่นในการปกป้องข้อมูลและความเป็นส่วนตัวของผู้ใช้งานทุกท่าน
            </p>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg pl-2">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-slate-400 text-sm font-medium"
        >
          อัปเดตล่าสุดเมื่อ: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
        </motion.div>
      </div>
    </div>
  );
}