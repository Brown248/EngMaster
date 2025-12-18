import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vocabulary from './pages/Vocabulary';
import Slang from './pages/Slang';
import Grammar from './pages/Grammar';
import Toeic from './pages/Toeic';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="slang" element={<Slang />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="toeic" element={<Toeic />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;