import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder Pages for routing testing
const Vocabulary = () => <h1 className="text-2xl font-bold">Vocabulary Page (Coming Soon)</h1>;
const Slang = () => <h1 className="text-2xl font-bold">Slang Page (Coming Soon)</h1>;
const Grammar = () => <h1 className="text-2xl font-bold">Grammar Page (Coming Soon)</h1>;
const Toeic = () => <h1 className="text-2xl font-bold">TOEIC Page (Coming Soon)</h1>;

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