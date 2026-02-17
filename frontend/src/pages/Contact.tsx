// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  usePageTitle('ติดต่อเรา (Contact Us) | EngMaster');

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-black text-slate-800">
            ติดต่อ <span className="text-blue-600">เรา</span>
          </h1>
          <p className="text-slate-600">
            มีข้อสงสัย แจ้งปัญหาการใช้งาน หรือต้องการแนะนำติชม?
          </p>
        </div>

        {/* Email Contact */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                <Mail size={24} />
            </div>
            <div>
                <h3 className="font-bold text-slate-800">อีเมล</h3>
                {/* เปลี่ยนเป็นอีเมลจริงของคุณ */}
                <p className="text-slate-600 select-all">eng.master17@gmail.com</p> 
            </div>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <MessageSquare size={18} className="text-slate-500"/>
                <span className="font-semibold text-slate-700">แบบฟอร์มติดต่อสอบถาม</span>
            </div>
            <div className="w-full aspect-[1/1.5] md:aspect-[1/1] bg-slate-50">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeJqpXVQ-kir08pEsSKhX0xsfs_nEAfhMRY0bVd_9TTGQcJFg/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    className="border-0"
                    title="EngMaster Contact Form"
                >
                    กำลังโหลด…
                </iframe>
            </div>
        </div>

      </motion.div>
    </div>
  );
}