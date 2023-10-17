import React from 'react';
import './Portfolios.css';
import jess from '../assets/jess.jpg';
import strakh1 from '../assets/strakh1.png';
import strakh2 from '../assets/strakh2.png';

function Portfolio2() {
  return (
    <div>
      <div className="section">
        <img className="Pimage" src={jess} alt="Imagen 1" />
        <h2 className="tittle">Jessica Isunza</h2>
      </div>
      <p>Descripción</p>
      <div className="projects">
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <img className="proy1" src={strakh1} alt="Imagen 1" />
            </div>
            <div className="back">
              <img className="proy1" src={strakh2} alt="Imagen 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio2;