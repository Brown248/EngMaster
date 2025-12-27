// frontend/src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'; // เพิ่ม useLocation
import { AnimatePresence } from 'framer-motion'; // เพิ่ม AnimatePresence
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// ... (Imports เดิมคงไว้) ...
const Home = lazy(() => import('./pages/Home'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TensesQuiz = lazy(() => import('./pages/quizzes/TensesQuiz'));
const PartsOfSpeechQuiz = lazy(() => import('./pages/quizzes/PartsOfSpeechQui'));
const VoiceQuiz = lazy(() => import('./pages/quizzes/VoiceQuiz'));
const MoodQuiz = lazy(() => import('./pages/quizzes/MoodQuiz'));
const SentenceStructureQuiz = lazy(() => import('./pages/quizzes/SentenceStructureQuiz'));
const ClausesQuiz = lazy(() => import('./pages/quizzes/ClausesQuiz'));
const ConditionalsQuiz = lazy(() => import('./pages/quizzes/ConditionalsQuiz'));
const ModalVerbsQuiz = lazy(() => import('./pages/quizzes/ModalVerbsQuiz'));
const GerundInfinitiveQuiz = lazy(() => import('./pages/quizzes/GerundInfinitiveQuiz'));

// ✅ สร้าง Component แยกเพื่อจัดการ Animation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        
        {/* Grammar Section */}
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/grammar/:topicId" element={<Grammar />} />
        
        {/* Quizzes */}
        <Route path="/grammar/quiz" element={<TensesQuiz />} />
        <Route path="/grammar/parts-of-speech-quiz" element={<PartsOfSpeechQuiz />} />
        <Route path="/grammar/voice-quiz" element={<VoiceQuiz />} />
        <Route path="/grammar/mood-quiz" element={<MoodQuiz />} />
        <Route path="/grammar/sentence-structure-quiz" element={<SentenceStructureQuiz />} />
        <Route path="/grammar/clauses-quiz" element={<ClausesQuiz />} />
        <Route path="/grammar/conditionals-quiz" element={<ConditionalsQuiz />} />
        <Route path="/grammar/modal-verbs-quiz" element={<ModalVerbsQuiz />} />
        <Route path="/grammar/gerund-infinitive-quiz" element={<GerundInfinitiveQuiz />} />

        {/* Vocabulary Section */}
        <Route path="/vocabulary" element={<Vocabulary />} />
        
        {/* 404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            {/* ปรับ Loading ให้ดูดีขึ้น */}
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
                <p className="text-indigo-600 font-bold text-sm animate-pulse">Loading...</p>
            </div>
          </div>
        }>
          <AnimatedRoutes /> {/* เรียกใช้ Component ใหม่ตรงนี้ */}
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;