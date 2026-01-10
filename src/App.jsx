import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
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
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function Home() {
  const [contactRef, contactVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [featuredRef, featuredVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  // Remaining projects (excluding Telemetrics which is featured)
  const remainingProjects = [
    {
      image: '/projects/portfolio.png',
      title: 'Portfolio Website',
      description: 'A modern portfolio showcasing my work',
    },
    {
      image: '/projects/coogzoo.png',
      title: 'CoogZoo',
      description: 'Full-stack zoo management with CRUD for animals, exhibits, and tickets',
      githubLink: 'https://github.com/alehxs/coog-zoo',
      websiteLink: 'https://alehxs.com/coogzoo/'
    },
    {
      image: '/projects/predictify.png',
      title: 'Predictify',
      description: 'A full-stack web application aiming to reduce carbon emissions',
      githubLink: 'https://github.com/jaykeburger/climate-predictive-modeling',
    },
    {
      image: '/projects/wordle.png',
      title: 'Wordle',
      description: 'A wordle desktop application built with Python',
      githubLink: 'https://github.com/alehxs/wordle'
    }
  ];

  return (
    <>
      <div className="magazine-container">
        {/* HERO SPREAD - Full width dramatic intro */}
        <section className="magazine-hero-section">
          <HeroSection />
          <ContactCard />
        </section>

        {/* ABOUT ME SECTION - Personal introduction */}
        <section
          ref={contactRef}
          className={`magazine-contact-section scroll-animate ${contactVisible ? 'visible' : ''}`}
        >
          <WhoAmICard />
        </section>

        {/* SKILLS BREAKDOWN - Separate sections for each category */}
        <section
          ref={skillsRef}
          className={`magazine-skills-section scroll-animate ${skillsVisible ? 'visible' : ''}`}
        >
          <LanguagesSection />
          <FrameworksSection />
          <ToolsSection />
        </section>

        {/* FEATURED PROJECT - Full bleed layout */}
        <section
          ref={featuredRef}
          className={`magazine-projects-section scroll-animate ${featuredVisible ? 'visible' : ''}`}
        >
          <FeaturedProjectMagazine />
        </section>

        {/* OTHER PROJECTS - Asymmetric scattered layout */}
        <section
          ref={projectsRef}
          className={`magazine-projects-section scroll-animate ${projectsVisible ? 'visible' : ''}`}
        >
          <ProjectsMagazineLayout projects={remainingProjects} />
        </section>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* SCROLL TO TOP BUTTON - Outside container for viewport-fixed positioning */}
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;