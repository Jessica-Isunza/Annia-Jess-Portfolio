import React from 'react';
import './Portfolios.css';
import jess from '../assets/jess.jpg';

function Portfolio2() {
  return (
    <div>
      <div className="section">
        <img className="Pimage" src={jess} alt="Imagen 1" />
        <h2 className="tittle">Jessica Isunza</h2>
      </div>
      <p>Descripción</p>
      <div className="projects">
      
      </div>
    </div>
  );
}

export default Portfolio2;