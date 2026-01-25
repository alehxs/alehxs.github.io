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
      image: '/projects/menui.png',
      title: 'Menui',
      description: 'An iOS app using OCR to scan and digitize restaurant menus, extracting dish names and images for easy browsing',
      githubLink: 'https://github.com/alehxs/menui',
    },
    {
      image: '/projects/brain-web.png',
      title: 'The BRAIN Center Website',
      description: 'Redesigned an NSF research center\'s website, migrating from legacy Wordpress to a modern Next.js stack',
      githubLink: 'https://github.com/alehxs/brain-web',
      websiteLink: 'https://brain-web-rho.vercel.app/'
    },
    {
      image: '/projects/coogzoo.png',
      title: 'CoogZoo',
      description: 'A zoo management system with React, Node.js, and MySQL featuring role-based access for managers, employees, and customers',
      githubLink: 'https://github.com/alehxs/coog-zoo',
      websiteLink: 'https://alehxs.com/coogzoo/'
    },
    {
      image: '/projects/predictify.png',
      title: 'Predictify',
      description: 'A machine learning app using Python and React to predict CO2 emissions with interactive visualizations (won 1st place at CodeRED)',
      githubLink: 'https://github.com/jaykeburger/climate-predictive-modeling',
    },
    {
      image: '/projects/wordle.png',
      title: 'Wordle',
      description: 'A pygame-powered Wordle replica built with test-driven development and comprehensive unit tests',
      githubLink: 'https://github.com/alehxs/wordle'
    },
    {
      image: '/projects/portfolio.png',
      title: 'Portfolio Website',
      description: 'A React-based portfolio with a magazine-inspired layout and smooth scroll animations (you\'re looking at it right now)',
    },
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