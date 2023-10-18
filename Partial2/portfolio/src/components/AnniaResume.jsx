import React from 'react';
import './AnniaResume.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhone from '@mui/icons-material/LocalPhone';
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useNavigate } from 'react-router-dom';


function AnniaResume() {
  const navigate = useNavigate();

  const navigateToPrinc = () => {
    navigate('/Principal'); 
  };

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
      <div className="header">
      <button className="goButton" onClick={navigateToPrinc}>Home</button>
      </div>
      <div className="name">
        <h2>Annia Navarro</h2>
        <div className='subt'>This is me!</div>
      </div>
      <div className="cv-container">
        <div className="cv-section">
          <h2 className="title-section">EXPERIENCE:</h2>
          {experience.map((job, index) => (
            <div className="cv-item" key={index}>
              <h3 className='job-title'>{job.jobTitle}</h3>
              <p>{job.company}</p>
              <p className='date-title'>{job.date}</p>
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
              <p className='date-title'>{edu.institution}</p>
              <p>{edu.date}</p>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h2 className="title-section">Skills:</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}><LightbulbIcon/>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="cv-section">
          <h2 className="title-section"> <SchoolIcon/> Academic achievements:</h2>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="cv-section">
          <h2 className="title-section"><TranslateIcon/> Languages:</h2>
          {languages.map((lang, index) => (
            <div className="cv-item" key={index}>
              <p>{lang.language}</p>
            </div>
          ))}
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
            <p>{personalInfo.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnniaResume;