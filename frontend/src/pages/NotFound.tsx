import { motion } from 'framer-motion';
import { Home, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center max-w-lg w-full">
        {/* Animation Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

          {/* 404 Text */}
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, bounce: 0.5 }}
            className="text-9xl font-black text-slate-200 select-none mb-4"
          >
            404
          </motion.h1>

          {/* Mascot or Icon */}
          <div className="text-8xl mb-6 animate-bounce">🦉</div>

          <h2 className="text-3xl font-black text-slate-800 mb-3">Oops! Page Not Found</h2>
          <p className="text-slate-500 font-medium text-lg mb-8">
            หาหน้านี้ไม่เจอครับ... น้องนกฮูกอาจจะคาบไปซ่อนแล้ว ลองกลับไปหน้าแรกกันดีกว่า!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <MoveLeft size={20} />
              Go Back
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}