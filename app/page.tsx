import { Book, Clock, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="text-center py-10">
        <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-2xl mb-4">
          <span className="text-blue-600 font-bold px-3 py-1 text-xs uppercase tracking-wider">New Version 2.0</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          เก่งภาษาอังกฤษ <span className="text-blue-600">ฉบับเรียนด้วยตัวเอง</span>
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-lg mb-8">
          คลังความรู้ที่รวมทุกอย่างที่คุณต้องรู้ สรุปย่อเข้าใจง่าย ไม่มีน้ำ เหมาะสำหรับคนเวลาน้อย
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/vocab" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
            เริ่มเรียนเลย
          </Link>
          <Link href="/grammar" className="px-6 py-3 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition">
            ดูบทเรียนทั้งหมด
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { 
            title: "คลังศัพท์ 3,000 คำ", 
            desc: "รวมศัพท์ที่ใช้บ่อยที่สุด แยกหมวดหมู่ชัดเจน", 
            icon: Book, 
            color: "text-orange-500", 
            bg: "bg-orange-50",
            href: "/vocab"
          },
          { 
            title: "สรุป 12 Tenses", 
            desc: "อ่านจบใน 5 นาที พร้อมสูตรจำที่ใช้ได้จริง", 
            icon: Clock, 
            color: "text-blue-500", 
            bg: "bg-blue-50",
            href: "/grammar"
          },
          { 
            title: "ข้อสอบ TOEIC", 
            desc: "จำลองสนามสอบจริง พร้อมเฉลยละเอียด", 
            icon: Target, 
            color: "text-red-500", 
            bg: "bg-red-50",
            href: "/toeic"
          }
        ].map((item, i) => (
          <Link key={i} href={item.href} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
            <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
            <div className="flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              เรียนเลย <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}