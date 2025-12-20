import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TitleStudy from './pages/TitleStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/estudio-titulos" element={<TitleStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
