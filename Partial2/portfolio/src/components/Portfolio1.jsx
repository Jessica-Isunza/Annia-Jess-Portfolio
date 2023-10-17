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
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <h3 className="titles">img1</h3>
            </div>
            <div className="back">
              <h3 className="titles">img2</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio1;