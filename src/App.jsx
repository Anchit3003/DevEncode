import './App.css';
import Converter from './components/dataConverter/Converter';
import Main from './components/HomePage/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/HomePage/Nav';
function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Converter />} />
        {/* Add more tool routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;