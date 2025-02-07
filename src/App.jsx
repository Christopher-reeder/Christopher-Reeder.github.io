import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Programming from './components/Programming';
import Drawing from './components/Drawing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/drawing" element={<Drawing />} />        
      </Routes>
    </Router>
  );
}

export default App;