// frontend/src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const TensesQuiz = lazy(() => import('./pages/TensesQuiz'));
const PartsOfSpeechQuiz = lazy(() => import('./pages/PartsOfSpeechQui'));
const VoiceQuiz = lazy(() => import('./pages/VoiceQuiz'));
const MoodQuiz = lazy(() => import('./pages/MoodQuiz'));
const SentenceStructureQuiz = lazy(() => import('./pages/SentenceStructureQuiz'));
const ClausesQuiz = lazy(() => import('./pages/ClausesQuiz')); // [New] Import
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
            
            {/* Quizzes */}
            <Route path="/grammar/quiz" element={<TensesQuiz />} />
            <Route path="/grammar/parts-of-speech-quiz" element={<PartsOfSpeechQuiz />} />
            <Route path="/grammar/voice-quiz" element={<VoiceQuiz />} />
            <Route path="/grammar/mood-quiz" element={<MoodQuiz />} />
            <Route path="/grammar/sentence-structure-quiz" element={<SentenceStructureQuiz />} />
            <Route path="/grammar/clauses-quiz" element={<ClausesQuiz />} /> {/* [New] Route */}

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