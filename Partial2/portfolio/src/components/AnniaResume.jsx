import React from 'react';
import './AnniaResume.css';

function AnniaResume() {
  const personalInfo = {
    address: '@annia_nav',
    email: 'anninavarromedina@gmail.com',
    phone: '378-115-1040',
  };

  const experience = [
    {
      jobTitle: 'Disney College Program',
      date: 'May 2023 - Aug 2023',
      description: 'Selling merchandise at Walt Disney World, guest service, communication and punctuality',
    },
    {
      jobTitle: 'Capin-Vyborny LLC',
      date: 'May 2022 - May 2023',
      description: 'Write and upload blog articles, design and post content for social media, design needed graphic assets.',
    },
    {
      jobTitle: 'Social Media: UP',
      date: 'May 2021 - Dec 2021',
      description: 'Designing dynamic content for my university´s social media',
    },
  ];

  const education = [
    {
      degree: 'Digital Animation Engineering',
      institution: 'Universidad Panamericana',
      date: 'Ago 2020 - Today',
    },
    {
      degree: 'High School',
      institution: 'Colegio Morelos',
      date: 'Ago 2017 - Jun 2020',
    },
  ];

  const skills = ['Creative', 'Fast learner', 'Good time management', 'Organized', 'Responsible'];

  const achievements = [
    'Academic Excellence award in High School (2020)',
    'Academic Excellence scolarship for univerity (2020)',
  ];

  const languages = [
    {
      language: 'English: Advanced',
    },
    {
      language: 'Spanish: Native',
    },
  ];

  return (
    <div>
      <div className="name">
        <h2>Annia Navarro</h2>
      </div>
      <div className="cv-container">
        <div className="cv-section">
          <h2 className="title-section">Experience:</h2>
          {experience.map((job, index) => (
            <div className="cv-item" key={index}>
              <h3 className='job-title'>{job.jobTitle}</h3>
              <p>{job.company}</p>
              <p>{job.date}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h2 className="title-section">Education:</h2>
          {education.map((edu, index) => (
            <div className="cv-item" key={index}>
              <br></br>
              <h3 className='job-title'>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.date}</p>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h2 className="title-section">Skills:</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="cv-section">
          <h2 className="title-section">Academic achievements:</h2>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="cv-section">
          <h2 className="title-section">Languages:</h2>
          {languages.map((lang, index) => (
            <div className="cv-item" key={index}>
              <p>{lang.language}</p>
            </div>
          ))}
        </div>

        <div className="cv-contact">
          <p>{personalInfo.address}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default AnniaResume;