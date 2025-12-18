import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vocabulary from './pages/Vocabulary';
import Slang from './pages/Slang';
import Grammar from './pages/Grammar';
import Toeic from './pages/Toeic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="slang" element={<Slang />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="toeic" element={<Toeic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;