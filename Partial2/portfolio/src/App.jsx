import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Principal from './components/Principal';
import Page1 from './components/Portfolio1';
import Page2 from './components/Portfolio2';
import Page3 from './components/AnniaResume';
import Page4 from './components/JessResume';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/Portfolio1" element={<Page1 />} />
          <Route path="/Portfolio2" element={<Page2 />} />
          <Route path="/AnniaResume" element={<Page3 />} />
          <Route path="/JessResume" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
