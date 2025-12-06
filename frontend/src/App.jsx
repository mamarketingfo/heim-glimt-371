import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Boking from './pages/Boking';
import MinarTaenastur from './pages/MinarTaenastur';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boking" element={<Boking />} />
        <Route path="/minar-taenastur" element={<MinarTaenastur />} />
      </Routes>
    </div>
  );
}

export default App;