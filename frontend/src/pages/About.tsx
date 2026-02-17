// src/pages/About.tsx
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import { BookOpen, Target, User, Heart } from 'lucide-react';

export default function About() {
  usePageTitle('เกี่ยวกับเรา (About Us) | EngMaster');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800">
            เกี่ยวกับ <span className="text-blue-600">EngMaster</span>
          </h1>
          <p className="text-slate-600 text-lg">
            แพลตฟอร์มเรียนภาษาอังกฤษด้วยตัวเอง พัฒนาโดยคนไทย เพื่อคนไทย
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Target size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">ความตั้งใจของผม</h2>
            <p className="text-slate-600 leading-relaxed">
              ผมเชื่อว่าการศึกษาควรเป็นสิ่งที่ทุกคนเข้าถึงได้ง่ายและฟรี EngMaster จึงถูกสร้างขึ้นด้วยความตั้งใจที่จะรวบรวมความรู้ภาษาอังกฤษ ทั้ง Grammar และคำศัพท์ มาย่อยให้เข้าใจง่ายที่สุด เพื่อให้เพื่อนๆ ทุกคนเก่งขึ้นได้ด้วยตัวเอง
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">เนื้อหาในเว็บ</h2>
            <p className="text-slate-600 leading-relaxed">
              เน้นสิ่งที่ "ใช้จริง" ในชีวิตประจำวันและการสอบ ทุกบทเรียนผมพยายามเรียบเรียงให้กระชับ ไม่ยืดเยื้อ พร้อมตัวอย่างประกอบ เพื่อให้ผู้อ่านนำไปใช้ต่อได้ทันที ไม่ว่าจะเพื่อการเรียน การทำงาน หรือการสื่อสาร
            </p>
          </div>
        </div>

        {/* Solo Developer Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-3xl text-center border border-slate-200/60">
          <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-700 mx-auto mb-4 relative">
             <User size={32} />
             <div className="absolute bottom-0 right-0 bg-red-500 text-white p-1 rounded-full border-2 border-white">
                <Heart size={12} fill="currentColor" />
             </div>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">พัฒนาโดย Developer คนเดียว</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            สวัสดีครับ! เว็บไซต์นี้พัฒนาขึ้นโดยผมเอง (Full Stack Developer) ตั้งแต่การออกแบบ เขียนโค้ด ไปจนถึงการเรียบเรียงเนื้อหา <br/>
            แม้อาจจะยังไม่สมบูรณ์แบบที่สุด แต่ผมสัญญาว่าจะพัฒนา EngMaster ให้ดียิ่งขึ้นเรื่อยๆ ครับ <br/>
            <span className="text-sm text-slate-500 mt-2 block">(ถ้าเจอจุดผิดพลาด แจ้งได้เลยนะครับ ยินดีแก้ไขทันที!)</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}