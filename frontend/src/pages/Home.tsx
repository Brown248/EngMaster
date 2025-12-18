import { Link } from 'react-router-dom';
import { Book, Flame, Layers, GraduationCap, ArrowRight, Trophy, Star, Clock } from 'lucide-react';

const features = [
  {
    title: 'Vocabulary Bank',
    desc: 'คลังคำศัพท์ A-Z พร้อมคำแปล',
    icon: Book,
    color: 'bg-blue-500',
    path: '/vocabulary',
    stat: '3,000+ Words'
  },
  {
    title: 'Slang of the Day',
    desc: 'ศัพท์วัยรุ่นและสำนวนสุดฮิต',
    icon: Flame,
    color: 'bg-orange-500',
    path: '/slang',
    stat: 'Daily Update'
  },
  {
    title: 'Grammar Station',
    desc: 'สรุปหลักไวยากรณ์เข้าใจง่าย',
    icon: Layers,
    color: 'bg-purple-500',
    path: '/grammar',
    stat: '12 Topics'
  },
  {
    title: 'TOEIC Arena',
    desc: 'จำลองข้อสอบเสมือนจริง',
    icon: GraduationCap,
    color: 'bg-emerald-500',
    path: '/toeic',
    stat: 'Mock Tests'
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back! 👋</h1>
          <p className="text-gray-500 mt-2">พร้อมฝึกภาษาอังกฤษวันนี้หรือยัง?</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm flex items-center gap-2 text-sm text-gray-600">
            <Trophy size={18} className="text-yellow-500" />
            <span>Streak: 0 Days</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (Optional) */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">Goal of the day 🎯</h2>
          <p className="text-blue-100 mb-6">เรียนรู้คำศัพท์ใหม่ 5 คำ และทำแบบทดสอบ Grammar 1 บท</p>
          <button className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            เริ่มฝึกทันที
          </button>
        </div>
        {/* Decorate Circles */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute right-20 bottom-0 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-xl"></div>
      </div>

      {/* Feature Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Star size={20} className="text-yellow-500 fill-yellow-500" />
          โหมดการฝึกฝน
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 mb-4 h-10">{item.desc}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {item.stat}
                </span>
                <span className="group-hover:translate-x-1 transition-transform text-primary font-medium flex items-center gap-1">
                  Start <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}