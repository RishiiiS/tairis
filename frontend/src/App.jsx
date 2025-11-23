import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/startpage.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
