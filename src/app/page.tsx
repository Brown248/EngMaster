import Link from "next/link";
import { Book, Flame, Layers, GraduationCap, ChevronRight, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-end bg-white p-8 rounded-3xl shadow-sm relative overflow-hidden border border-slate-100">
        <div className="z-10 relative">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
            👋 สวัสดีครับ, ยินดีต้อนรับ!
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">วันนี้อยากเก่งเรื่องอะไร?</h1>
          <p className="text-slate-500">EngMaster พร้อมช่วยอัพสกิลภาษาอังกฤษของคุณให้เป๊ะปัง</p>
        </div>
        <div className="text-6xl absolute right-8 bottom-4 opacity-100 transform scale-150">
          🦉
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Vocabulary", sub: "คลังศัพท์ A-Z", icon: Book, color: "bg-orange-100 text-orange-600", href: "/vocabulary", btn: "เริ่มท่องศัพท์" },
          { title: "Slang", sub: "ศัพท์วัยรุ่นอินเทรนด์", icon: Flame, color: "bg-red-100 text-red-600", href: "/slang", btn: "อัปเดตศัพท์" },
          { title: "12 Tenses", sub: "ไวยากรณ์เข้าใจง่าย", icon: Layers, color: "bg-purple-100 text-purple-600", href: "/grammar", btn: "ดูโครงสร้าง" },
          { title: "TOEIC Exam", sub: "ข้อสอบเสมือนจริง", icon: GraduationCap, color: "bg-blue-100 text-blue-600", href: "/toeic", btn: "ลุยข้อสอบ" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-64 border border-slate-100">
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.sub}</p>
            </div>
            <Link href={item.href} className={`flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full w-max ${item.color.replace('text', 'bg').replace('100', '50')} hover:opacity-80`}>
              {item.btn} <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      {/* Quote of the Day */}
      <div className="bg-teal-500 rounded-3xl p-8 text-white flex justify-between items-center shadow-lg shadow-teal-100/50">
        <div>
          <h2 className="text-2xl font-bold mb-2">Quote of the Day</h2>
          <p className="text-lg opacity-90 italic">"Practice makes progress, not perfection."</p>
        </div>
        <button className="bg-white text-teal-600 px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-teal-50 transition">
          <Share2 size={18} /> แชร์ให้เพื่อน
        </button>
      </div>
    </div>
  );
}