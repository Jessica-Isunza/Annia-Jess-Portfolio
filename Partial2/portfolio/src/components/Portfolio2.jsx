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
import { useNavigate } from 'react-router-dom';


function Portfolio2() {
  const navigate = useNavigate();

  const navigateToPrinc = () => {
    navigate('/Principal'); 
  };

  return (
    <div>
      <div className="section">
        <h2 className="tittle">Jessica Isunza</h2>
        <p className='proj'>Favorite projects:</p>
        <button className="goButtonH2" onClick={navigateToPrinc}>Home</button>
      </div>
        <div className='projects'>
          <p className='proj-tittle'>STRAKH videogame</p>
          <p className='descript-projects'>"STRAKH" is a horror game I created, inspired by the Cold War<br/> 
             experiments conducted in Russia. The game was developed using Unity,<br/> 
             and the majority of the assets were created by my team. This includes <br/> 
             a custom light shader resembling a guiding ray, aiding our character through <br/> 
             the pitch-black building by functioning as echolocation.</p>
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
          <p className='descript-projects'>Pokedex was a project I created using HTML, CSS, and JavaScript. It involved <br/>
            making calls to the PokeAPI to display information, closely resembling a real-life <br/>
            Pokedex. The design was inspired by the Pokedex featured in the anime.</p>
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
          <p className='descript-projects'>"Avon AR Catalogue" is a project I developed, involving an app created with Unity, <br/>
          utilizing the Vuforia database. I designed custom image targets from scratch to showcase video tutorials and product <br/>
          catalogues. Additionally, I integrated interactive 3D models of the products, allowing users to switch between different <br/>
          product variants and customize their colors through intuitive button controls. This app was adapted to work seamlessly on both <br/>
          desktop and mobile platforms, providing a user-friendly experience across devices.</p>
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
          <p className='descript-projects'>In this project, I developed modeling software from scratch, creating points and using <br/>
          their intersections to generate shapes. I incorporated the ability to apply colors and perform rotation, scale, and position transformations.<br/>
           Additionally, I included features for selecting specific shapes, deleting shapes, and changing their colors.</p>
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