import React from 'react';
import './Principal.css';
import jess from '../assets/jess.jpg';
import annia from '../assets/annia.jpg';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Principal() {

    const navigate = useNavigate();

    const navigateToP1 = () => {
        navigate('/Portfolio1'); 
    };

    const navigateToP2 = () => {
        navigate('/Portfolio2'); 
    };

    const navigateToR1 = () => {
      navigate('/AnniaResume'); 
  };

  const navigateToR2 = () => {
      navigate('/JessResume'); 
  };


  return (
    <div className="App">
    <div className="header">
    </div>
    <div className='companyname'>
      <div className='companyname-t'>J-Annia</div>
    </div>
    <div>
      <div className='about'> <PersonIcon className='icon-t'></PersonIcon>  About us:</div>
    </div>
    <div className="sectionp">
      <img className="Pimagep" src={annia} alt="Annia Navarro" />
      <h2 className="tittlep">Annia Navarro</h2>
      <div className="descriptionp">
        <p className='aboutme'>I am a Digital Animation Engineering student who really likes 
        to learn new things. It amazes me what we as humans can do when we 
        combine creativity and technology. I am really keen on art, 
        storytelling and imagination. Want to know a little better about my work? 
        Click the button below!<br></br></p>
       </div>
       <div className='invisible'>invisible</div>
      <button className="goButton" onClick={navigateToP1}>Visit Projects</button>
      <button className="goButton" onClick={navigateToR1}>Resume</button>
    </div>
    <div className="sectionp">
      <img className="Pimagep" src={jess} alt="Imagen 2" />
      <h2 className="tittlep">Jessica Isunza</h2>
      <div className="descriptionp">
        <p>I am a systems engineering student specializing in app, 
          video game, website, and Unity environment development. 
          My work blends code with creativity to deliver innovative 
          and interactive experiences.
          Click below to see my projects!</p>
        </div>
        <div className='invisible'>invisible</div>
      <button className="goButton" onClick={navigateToP2}>Visit Projects</button>
      <button className="goButton" onClick={navigateToR2}>Resume</button>
    </div>
    <div className="footer">
      <p className='logo'>J-Annia</p>
    </div>
  </div>
  );
}

export default Principal;