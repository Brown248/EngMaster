// frontend/src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import Vocabulary from './pages/Vocabulary';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy'; // ✅ เพิ่มการนำเข้าหน้า Privacy Policy
import ScrollToTop from './components/ScrollToTop';
import usePageTitle from './hooks/usePageTitle';

function App() {
  usePageTitle();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="grammar/:topicId" element={<Grammar />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          
          {/* ✅ เพิ่ม Route สำหรับหน้า Privacy Policy */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;