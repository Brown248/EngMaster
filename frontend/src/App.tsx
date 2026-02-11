// frontend/src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const TensesQuiz = lazy(() => import('./pages/quizzes/TensesQuiz'));
const PartsOfSpeechQuiz = lazy(() => import('./pages/quizzes/PartsOfSpeechQui'));
const VoiceQuiz = lazy(() => import('./pages/quizzes/VoiceQuiz'));
const MoodQuiz = lazy(() => import('./pages/quizzes/MoodQuiz'));
const SentenceStructureQuiz = lazy(() => import('./pages/quizzes/SentenceStructureQuiz'));
const ClausesQuiz = lazy(() => import('./pages/quizzes/ClausesQuiz'));
const ConditionalsQuiz = lazy(() => import('./pages/quizzes/ConditionalsQuiz'));
const ModalVerbsQuiz = lazy(() => import('./pages/quizzes/ModalVerbsQuiz'));
const GerundInfinitiveQuiz = lazy(() => import('./pages/quizzes/GerundInfinitiveQuiz'));
const ReportedSpeechQuiz = lazy(() => import('./pages/quizzes/ReportedSpeechQuiz')); // [New]
const QuestionFormsQuiz = lazy(() => import('./pages/quizzes/QuestionFormsQuiz')); // [New]
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Grammar Section */}
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/:topicId" element={<Grammar />} />
            
            {/* Vocabulary Section */}
            <Route path="/vocabulary" element={<Vocabulary />} />
            
            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;