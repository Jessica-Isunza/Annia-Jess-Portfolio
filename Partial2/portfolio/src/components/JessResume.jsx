import React from 'react';
import './JessResume.css';
import inst from '../assets/inst.png';
import git from '../assets/git.png';

function JessResume() {
  return (
    <div>
      <div className="sectionr">
        <h2 className="tittler">Jessica Isunza</h2>
        <p className='contactr'>milaymichi@hotmail.com | 6691-23-21-91 </p>
        </div>
        <div className='content'>
        <h2 className='tittles'>EDUCATION</h2>
        <p>Universidad Panamericana Guadalajara. 	 2018 - 2025 <br/>
        Computer graphics and system’s engineering</p>
        </div>
        <div className='content'><h2 className='tittles'>PROFESSIONAL EXPERIENCE </h2>
        <p>NETBIS marketing analytics 	 December 2022 <br/>
            Web developer
        </p>
        <ul>
            <li>Designed and developed a web page from scratch for a marketing analytics company using htlm, css and javascript. </li>
            <li>Designed and created all the assets from scratch using tools as Photoshop, Illustrator and Inkscape.</li>
            <li>Talked with the customer and brought the customers’ marketing strategy to life.</li>
        </ul>
        </div>
        <div className='skills'>
        <div  className='skills-languages'>
        <h2 className='tittles'>LANGUAGES</h2>
        <ul>
            <li>Spanish: Mother language. </li>
            <li>English: Mother language/ Certified by Cambridge.</li>
            <li>French: Intermediate. </li>
        </ul>
        </div>
        <div  className='skills-languages'>
        <h2 className='tittles'>SKILLS</h2>
        <ul>
            <li>Design.</li>
            <li>Writing.</li>
            <li>Quick Learning.</li>
        </ul>
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

export default JessResume;