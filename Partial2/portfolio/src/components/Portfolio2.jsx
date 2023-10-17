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

export default Portfolio2;