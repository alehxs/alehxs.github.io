import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import HeroSection from './components/HeroSection';
import WhoAmICard from './components/WhoAmICard';
import ContactCard from './components/ContactCard';
import LanguagesSection from './components/LanguagesSection';
import FrameworksSection from './components/FrameworksSection';
import ToolsSection from './components/ToolsSection';
import FeaturedProjectMagazine from './components/FeaturedProjectMagazine';
import ProjectsMagazineLayout from './components/ProjectsMagazineLayout';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function Home() {
  // Remaining projects (excluding Telemetrics which is featured)
  const remainingProjects = [
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
      websiteLink: 'https://alsan.me/coogzoo/'
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
    <div className="magazine-container">
      {/* HERO SPREAD - Full width dramatic intro */}
      <section className="magazine-hero-section">
        <HeroSection />
        <WhoAmICard />
      </section>

      {/* CONTACT SECTION - Accessible contact card */}
      <section className="magazine-contact-section">
        <ContactCard />
      </section>

      {/* SKILLS BREAKDOWN - Separate sections for each category */}
      <section className="magazine-skills-section">
        <LanguagesSection />
        <FrameworksSection />
        <ToolsSection />
      </section>

      {/* FEATURED PROJECT - Full bleed layout */}
      <section className="magazine-projects-section">
        <FeaturedProjectMagazine />
      </section>

      {/* OTHER PROJECTS - Asymmetric scattered layout */}
      <section className="magazine-projects-section">
        <ProjectsMagazineLayout projects={remainingProjects} />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </div>
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