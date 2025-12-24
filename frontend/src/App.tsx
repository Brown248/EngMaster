import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import usePageTitle from './hooks/usePageTitle';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const Grammar = lazy(() => import('./pages/Grammar'));
const TensesQuiz = lazy(() => import('./pages/TensesQuiz'));
const PartsOfSpeechQuiz = lazy(() => import('./pages/PartsOfSpeechQui')); 
const VoiceQuiz = lazy(() => import('./pages/VoiceQuiz')); // ✅ Import ใหม่
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  usePageTitle(); 

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vocabulary" element={<Vocabulary />} />
            <Route path="grammar" element={<Grammar />} />
            <Route path="grammar/quiz" element={<TensesQuiz />} />
            <Route path="grammar/parts-of-speech-quiz" element={<PartsOfSpeechQuiz />} />
            <Route path="grammar/voice-quiz" element={<VoiceQuiz />} /> {/* ✅ Route ใหม่ */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;