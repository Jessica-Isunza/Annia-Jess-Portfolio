import React from 'react';
import './PortfolioAnnia.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhone from '@mui/icons-material/LocalPhone';
import monsters from '../assets/monsters1.png';
import monsters2 from '../assets/monsters2.png';
import capin1 from '../assets/capin1.png';
import capin2 from '../assets/capin2.png';
import animals1 from '../assets/animals1.png';
import animals2 from '../assets/animals2.png';
import pins1 from '../assets/pins1.png';
import pins2 from '../assets/pins2.png';
import { Link } from "react-router-dom";

function Portfolio1() {
  return (
    <div>
      <div className="header">
      <button className="goButton">Home</button>
      </div>
      <div className="name">
        <h2>Annia Navarro</h2>
        <div className='subt'>Some of my outstanding projects!</div>
      </div>
      <div className='project-cont'>
          <p className='proj-title'>A MONSTERS HOUSE ON CHRISTMAS EVE</p>
          <p className='desc'>Merry Christmas, y'all! Shelby and Shelly live peacefully <br></br>
            in a cabin in the woods.A scene-design project that shows <br></br>
            how a monster would <br></br>
            prepare for Christmas <br></br>
            on its house.</p>
          <div className='cards'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front-c">
                  <div className='proj-img'>
                    <img className="imgex" src={monsters} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
                <div className="back">
                  <div className='proj-img'>
                    <img className="imgex" src={monsters2} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-cont'>
          <p className='proj-title'>IAD PINS</p>
          <p className='desc'>Some graphic design? This is a set of pins I <br></br>
          designed as an intern for my degree! <br></br>
            Some character design and illustration <br></br>
            representing the main aspects of the career.</p>
          <div className='cards'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front-c">
                  <div className='proj-img'>
                    <img className="imgex" src={pins2} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
                <div className="back">
                  <div className='proj-img'>
                    <img className="imgex" src={pins1} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-cont'>
          <p className='proj-title'>CAPIN VYBORNY</p>
          <p className='desc'>A graphic design campaign for a company I <br></br>
          worked for. Some social media content, <br></br>
          specialized images for special events, <br></br>
          invitations and web assets, all according <br></br>
          to the brand´s coorporate image.</p>
          <div className='cards'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front-c">
                  <div className='proj-img'>
                    <img className="imgex" src={capin2} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
                <div className="back">
                  <div className='proj-img'>
                    <img className="imgex" src={capin1} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-cont'>
          <p className='proj-title'>WHEN ANIMALS RULE THE WORLD</p>
          <p className='desc'>What do you think would happen if humans <br></br>
          suddenly disappeared? This is my take. <br></br>
            A scene design project illustrating 4 <br></br>
            speed-drawings of a medieval war - directed <br></br>
            by animals.</p>
          <div className='cards'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front-c">
                  <div className='proj-img'>
                    <img className="imgex" src={animals1} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
                <div className="back">
                  <div className='proj-img'>
                    <img className="imgex" src={animals2} alt="A monsters house on Christmas Eve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-contact">
          <div className='icon'>
            <InstagramIcon></InstagramIcon>
            <p className='invisible'>aaa</p>
            <a href='https://www.instagram.com/annia_nav' target="_blank">@annia_nav</a>
          </div>
          <div className='icon'>
            <MailOutlineIcon></MailOutlineIcon>
            <p className='invisible'>aaa</p>
            <a href='mailto:anninavarromedina@gmail.com' target="_blank">anninavarromedina@gmail.com</a>
          </div>
          <div className='icon'>
            <LocalPhone></LocalPhone>
            <p className='invisible'>aaa</p>
            <p>378-115-1040</p>
          </div>
        </div>
    </div>
  );
}

export default Portfolio1;