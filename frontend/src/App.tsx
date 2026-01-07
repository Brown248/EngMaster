// frontend/src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy Load Quizzes
const TensesQuiz = lazy(() => import('./pages/quizzes/TensesQuiz'));
const PartsOfSpeechQuiz = lazy(() => import('./pages/quizzes/PartsOfSpeechQui'));
const VoiceQuiz = lazy(() => import('./pages/quizzes/VoiceQuiz'));
const MoodQuiz = lazy(() => import('./pages/quizzes/MoodQuiz'));
const SentenceStructureQuiz = lazy(() => import('./pages/quizzes/SentenceStructureQuiz'));
const ClausesQuiz = lazy(() => import('./pages/quizzes/ClausesQuiz'));
const ConditionalsQuiz = lazy(() => import('./pages/quizzes/ConditionalsQuiz'));
const ModalVerbsQuiz = lazy(() => import('./pages/quizzes/ModalVerbsQuiz'));
const GerundInfinitiveQuiz = lazy(() => import('./pages/quizzes/GerundInfinitiveQuiz'));

// ✅ New Quizzes Imports
const ReportedSpeechQuiz = lazy(() => import('./pages/quizzes/ReportedSpeechQuiz'));
const QuestionFormsQuiz = lazy(() => import('./pages/quizzes/QuestionFormsQuiz'));

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
        
        {/* ✅ New Quizzes Routes */}
        <Route path="/grammar/reported-speech-quiz" element={<ReportedSpeechQuiz />} />
        <Route path="/grammar/question-forms-quiz" element={<QuestionFormsQuiz />} />

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
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
                <p className="text-indigo-600 font-bold text-sm animate-pulse">Loading...</p>
            </div>
          </div>
        }>
          <AnimatedRoutes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;