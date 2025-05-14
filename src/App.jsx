import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import NotFound from './pages/404';
import ProjectCard from './components/ProjectCard';
import './App.css';

import envelopeIcon from './svgs/envelope-solid 2.svg';
import githubIcon from './svgs/github.svg';
import linkedinIcon from './svgs/linkedin.svg';
import awsIcon from './svgs/aws.svg';
import bashIcon from './svgs/bash.svg';
import cplusplusIcon from './svgs/cplusplus.svg';
import djangoIcon from './svgs/django.svg';
import dockerIcon from './svgs/docker.svg';
import expressIcon from './svgs/express.svg';
import javascriptIcon from './svgs/javascript.svg';
import jenkinsIcon from './svgs/jenkins.svg';
import linuxIcon from './svgs/linux.svg';
import mongodbIcon from './svgs/mongodb.svg';
import mysqlIcon from './svgs/mysql.svg';
import nextjsIcon from './svgs/nextjs.svg';
import pythonIcon from './svgs/python.svg';
import reactIcon from './svgs/react.svg';
import swiftIcon from './svgs/swift.svg';
import linkIcon from './svgs/link.svg';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <WhoAmI />
      <Skills />
      <Projects />
    </div>
  );
}

function Header() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <>
      <h1>
        <Typewriter
          words={["Hi, I'm Alexander."]}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={50}
          onLoopDone={() => setShowCursor(false)} // Correctly sets cursor to false
        />
      </h1>
      <div className="icon-container">
        <IconLink href="mailto:asangur@pm.me" src={envelopeIcon} alt="Email" />
        <IconLink href="https://github.com/alehxs" src={githubIcon} alt="GitHub" />
        <IconLink href="https://linkedin.com/in/asangurima" src={linkedinIcon} alt="LinkedIn" />
      </div>
    </>
  );
}

function IconLink({ href, src, alt }) {
  return (
    <div className="icon-wrapper" data-tooltip={alt}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className="icon" />
      </a>
    </div>
  );
}

function WhoAmI() {
  return (
    <section className="section-header">
      <h2>
        <span>&gt; </span>
        <Typewriter words={["whoami"]} loop={1} typeSpeed={100} />
      </h2>
      <p className="description">
        I'm a <strong>Software Engineer</strong> based in Houston, passionate about{' '}
        <strong>full-stack development</strong>, <strong>app development</strong>, and{' '}
        <strong>cybersecurity</strong>.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-header">
      <h2>
        <span>&gt; </span>
        <Typewriter words={["ls skills"]} loop={1} typeSpeed={100} />
      </h2>
      <div className="skills-categories">
        <SkillsCategory title="Programming Languages">
          <SkillIcon src={pythonIcon} alt="Python" />
          <SkillIcon src={javascriptIcon} alt="JavaScript" />
          <SkillIcon src={swiftIcon} alt="Swift" />
          <SkillIcon src={cplusplusIcon} alt="C++" />
          <SkillIcon src={bashIcon} alt="Bash" />
        </SkillsCategory>

        <SkillsCategory title="Frameworks & Libraries">
          <SkillIcon src={reactIcon} alt="React" />
          <SkillIcon src={nextjsIcon} alt="Next.js" />
          <SkillIcon src={djangoIcon} alt="Django" />
          <SkillIcon src={expressIcon} alt="Express" />
        </SkillsCategory>
        
        <SkillsCategory title="Tools & Platforms">
          <SkillIcon src={linuxIcon} alt="Linux" />
          <SkillIcon src={awsIcon} alt="AWS" />
          <SkillIcon src={dockerIcon} alt="Docker" />
          <SkillIcon src={jenkinsIcon} alt="Jenkins" />
          <SkillIcon src={mysqlIcon} alt="MySQL" />
          <SkillIcon src={mongodbIcon} alt="MongoDB" />
        </SkillsCategory>
      </div>
    </section>
  );
}

function SkillsCategory({ title, children }) {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-icons">{children}</div>
    </div>
  );
}

function SkillIcon({ src, alt }) {
  return <img src={src} alt={alt} title={alt} className="skill-icon" />;
}

function Projects() {
  const projectData = [
    {
      image: '/telemetricsSC.png',
      title: '(WIP 🚧) Telemetrics',
      description: 'A Formula 1 telemetry dashboard with data visuals',
      githubLink: 'https://github.com/alehxs/telemetrics',
    },
    {
      image: 'portfolioSC.png', 
      title: 'Portfolio Website',
      description: 'A modern portfolio showcasing my work',
    },
    {
      image: '/coogzooSC.png',
      title: 'CoogZoo',
      description: 'Full-stack zoo management with CRUD for animals, exhibits, and tickets',
      githubLink: 'https://github.com/alehxs/coog-zoo',
    },
    {
      image: '/predictifySC.png',
      title: 'Predictify',
      description: 'A full-stack web application aiming to reduce carbon emissions',
      githubLink: 'https://github.com/jaykeburger/climate-predictive-modeling',
    },
    {
      image: '/wordleSC.png',
      title: 'Wordle',
      description: 'A wordle desktop application built with Python',
      githubLink: 'https://github.com/alehxs/wordle'
    }
  ];

  return (
    <section className="section-header">
      <h2>
        <span>&gt; </span>
        <Typewriter words={["ls projects"]} loop={1} typeSpeed={100} />
      </h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;