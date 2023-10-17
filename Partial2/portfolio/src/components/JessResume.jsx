import React from 'react';
import './resumes.css';
import jess from '../assets/jess.jpg';

function JessResume() {
  return (
    <div>
      <div className="sectionr">
        <img className="Pimager" src={jess} alt="Imagen 1" />
        <h2 className="tittler">Jessica Isunza</h2>
        <p className='contactr'>milaymichi@hotmail.com | 6691-23-21-91 </p>
        </div>
        <h2 className='tittles'>EDUCATION</h2>
        <p>Universidad Panamericana Guadalajara. 	 2018 - 2025 <br/>
        Computer graphics and system’s engineering</p>
        <h2 className='tittles'>PROFESSIONAL EXPERIENCE </h2>
        <p>NETBIS marketing analytics 	 December 2022
            Web developer
        </p>
        <ul>
            <li>Designed and developed a web page from scratch for a marketing analytics company using htlm, css and javascript. </li>
            <li>Designed and created all the assets from scratch using tools as Photoshop, Illustrator and Inkscape.</li>
            <li>Talked with the customer and brought the customers’ marketing strategy to life.</li>
        </ul>
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
  );
}

export default JessResume;