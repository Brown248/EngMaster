import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import usePageTitle from './hooks/usePageTitle';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const Slang = lazy(() => import('./pages/Slang'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Toeic = lazy(() => import('./pages/Toeic'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ToeicExam = lazy(() => import('./pages/ToeicExam'));

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
            <Route path="slang" element={<Slang />} />
            <Route path="grammar" element={<Grammar />} />
            <Route path="toeic" element={<Toeic />} />
            <Route path="toeic/exam/:partId" element={<ToeicExam />} />
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