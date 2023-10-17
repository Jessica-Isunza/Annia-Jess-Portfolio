import React from 'react';
import './AnniaResume.css';
import anniacv from '../assets/AnniaCv.png';
import annia from '../assets/annia.jpg';

function AnniaResume() {
  const personalInfo = {
    name: 'Tu Nombre',
    title: 'Título Profesional',
    address: '@annia_nav',
    email: 'anninavarromedina@gmail.com',
    phone: '378-115-1040',
  };

  const experience = [
    {
      jobTitle: 'Puesto 1',
      company: 'Compañía 1',
      date: 'Ene 2018 - Dic 2020',
      description: 'Descripción del trabajo en la Compañía 1.',
    },
    {
      jobTitle: 'Puesto 2',
      company: 'Compañía 2',
      date: 'Mar 2016 - Nov 2017',
      description: 'Descripción del trabajo en la Compañía 2.',
    },
  ];

  const education = [
    {
      degree: 'Título Universitario',
      institution: 'Nombre de la Universidad',
      date: 'Ago 2012 - Jun 2016',
    },
  ];

  const skills = ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'];

  const achievements = [
    'Logro 1',
    'Logro 2',
    'Logro 3',
  ];

  const languages = [
    {
      language: 'Inglés: Avanzado',
    },
    {
      language: 'Español: Nativo',
    },
  ];
  return (
    <div>
      <div className="sectionr">
        <img className="Pimager" src={annia} alt="Imagen 1" />
        <h2 className="tittler">Annia Navarro</h2>
      </div>
      <div className="cv-container">

      <div className="cv-section">
        <h2 className="title-section">Experiencia Laboral</h2>
        {experience.map((job, index) => (
          <div className="cv-item" key={index}>
            <h3>{job.jobTitle}</h3>
            <p>{job.company}</p>
            <p>{job.date}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2 className="title-section">Educación</h2>
        {education.map((edu, index) => (
          <div className="cv-item" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2 className="title-section">Habilidades</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="cv-section">
        <h2 className="title-section">Logros Académicos</h2>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="cv-section">
        <h2 className="title-section">Idiomas</h2>
        {languages.map((lang, index) => (
          <div className="cv-item" key={index}>
            <p>{lang.language}</p>
          </div>
        ))}
      </div>

      <div className="cv-contact">
        <p>{personalInfo.address}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Teléfono: {personalInfo.phone}</p>
      </div>
    </div>
    </div>
  );
}

export default AnniaResume;