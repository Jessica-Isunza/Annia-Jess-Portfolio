import React from 'react';
import './Portfolio2.css';
import strakh1 from '../assets/strakh1.png';
import strakh2 from '../assets/strakh2.png';
import poke1 from '../assets/pokedex1.png';
import poke2 from '../assets/pokedex2.png';
import avon1 from '../assets/avon1.png';
import avon2 from '../assets/avon2.png';
import webgl1 from '../assets/webgl1.png';
import webgl2 from '../assets/webgl2.png';
import inst from '../assets/inst.png';
import git from '../assets/git.png';

function Portfolio2() {
  return (
    <div>
      <div className="section">
        <h2 className="tittle">Jessica Isunza</h2>
        <p className='proj'>Favorite projects:</p>
      </div>
        <div className='projects'>
          <p className='proj-tittle'>STRAKH videogame</p>
          <p>bajbwcbcjlnjebcvjknhvjkcwebvjklcwebh</p>
          <div className='containers'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                  <div className='img-cont'>
                    <img className="proyi" src={strakh1} alt="Imagen 1" />
                  </div>
                </div>
                <div className="back">
                  <div className='img-cont'>
                    <img className="proyi" src={strakh2} alt="Imagen 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <p className='proj-tittle'>Pokedex</p>
          <div className='containers'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                  <div className='img-cont'>
                    <img className="proyi" src={poke2} alt="Imagen 1" />
                  </div>
                </div>
                <div className="back">
                  <div className='img-cont'>
                    <img className="proyi" src={poke1} alt="Imagen 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <p className='proj-tittle'>AR catalogue</p>
          <div className='containers'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                  <div className='img-cont'>
                    <img className="proyi" src={avon2} alt="Imagen 1" />
                  </div>
                </div>
                <div className="back">
                  <div className='img-cont'>
                    <img className="proyi" src={avon1} alt="Imagen 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <p className='proj-tittle'>WebGl 3D modeling software</p>
          <div className='containers'>
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <div className='img-cont'>
                  <img className="proyi" src={webgl1} alt="Imagen 1" />
                </div>
              </div>
              <div className="back">
                <div className='img-cont'>
                  <img className="proyi" src={webgl2} alt="Imagen 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
          <img className="conti" src={inst} alt="Imagen 1" />
          <p class="cont">Instagram: @glitching.child</p>
          <img className="conti" src={git} alt="Imagen 1" />
          <p class="cont">Github: Jessica-Isunza</p>
        </footer>
    </div>
  );
}

export default Portfolio2;