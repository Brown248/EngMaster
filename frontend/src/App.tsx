// frontend/src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';


// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Grammar = lazy(() => import('./pages/Grammar'));
const Vocabulary = lazy(() => import('./pages/Vocabulary'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Game = lazy(() => import('./pages/Game'));

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
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/:topicId" element={<Grammar />} />       
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/game" element={<Game />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
        
        {/* ✅ วาง CookieConsent ไว้ตรงนี้ (นอก Routes แต่ใน Layout) */}
        <CookieConsent />
        
      </Layout>
    </BrowserRouter>
  );
}

export default App;