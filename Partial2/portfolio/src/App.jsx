import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiamos "Switch" por "Routes"
import Principal from './components/Principal';
import Page1 from './components/Portfolio1';
import Page2 from './components/Portfolio2';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/Portfolio1" element={<Page1 />} />
          <Route path="/Portfolio2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
