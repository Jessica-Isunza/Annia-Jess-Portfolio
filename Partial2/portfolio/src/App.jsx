import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //import for calling routes
import Principal from './components/Principal';//pages
import Page1 from './components/Portfolio1';
import Page2 from './components/Portfolio2';
import Page3 from './components/AnniaResume';
import Page4 from './components/JessResume';
import WelcomePage from './components/WelcomeAnim';
import './App.css'; //style

/*
 
   This class includes all the directories used to navigate the whole website
   it includes a function to display a welcome animation that lasts 2.3s
 
*/

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  //calls animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {showWelcomePage ? (
          <WelcomePage />
        ) : (
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/Portfolio1" element={<Page1 />} />
            <Route path="/Portfolio2" element={<Page2 />} />
            <Route path="/AnniaResume" element={<Page3 />} />
            <Route path="/JessResume" element={<Page4 />} />
            <Route path="/Principal" element={<Principal />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
