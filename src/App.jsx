import './App.css';
import Converter from './components/dataConverter/Converter';
import Main from './components/HomePage/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/HomePage/Nav';
import Base64 from './components/Base64/Base64';
import JsonValidator from './components/JsonValidator/JsonValidator';
import DiffChecker from './components/DiffChecker/DiffChecker';

function App() {
  return (
    
  
 <BrowserRouter>
    <Nav />
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/base64" element={<Base64 />} />
        <Route path="/json/validator" element={<JsonValidator />} />
        <Route path="/diff-checker" element={<DiffChecker />} />
        {/* Add more tool routes here */}
      </Routes>
    </BrowserRouter>      
   
  );
}

export default App;