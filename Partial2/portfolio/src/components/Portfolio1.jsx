import React from 'react';
import './Portfolios.css';
import annia from '../assets/annia.jpg';

function Portfolio1() {
  return (
    <div>
      <div className="section">
        <img className="Pimage" src={annia} alt="Imagen 1" />
        <h2 className="tittle">Annia Navarro</h2>
      </div>
      <p>Descripción</p>
      <div className="projects">
      
      </div>
    </div>
  );
}

export default Portfolio1;