import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Image from './components/Image';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Image />} />
        <Route path="/" element={<Slideshow />} />
      </Routes>
    </Router>
  );
}

export default App;
