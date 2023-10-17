import React from 'react';
import './resumes.css';
import anniacv from '../assets/AnniaCv.png';
import annia from '../assets/annia.jpg';

function AnniaResume() {
  return (
    <div>
      <div className="sectionr">
        <img className="Pimager" src={annia} alt="Imagen 1" />
        <h2 className="tittler">Annia Navarro</h2>
      </div>
      <img className="cvImage" src={anniacv} alt="Imagen 1" />
    </div>
  );
}

export default AnniaResume;