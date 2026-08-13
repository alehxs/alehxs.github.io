import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const LOGO_PHASE_STEP_MS = 500;

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [logoPhase, setLogoPhase] = useState(0);
  const logoIntervalRef = useRef(null);

  useEffect(() => () => clearInterval(logoIntervalRef.current), []);

  const startLogoCycle = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(logoIntervalRef.current);
    logoIntervalRef.current = setInterval(() => {
      setLogoPhase((phase) => (phase + 1) % 3);
    }, LOGO_PHASE_STEP_MS);
  };

  const stopLogoCycle = () => {
    clearInterval(logoIntervalRef.current);
    setLogoPhase(0);
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-logo"
        onMouseEnter={startLogoCycle}
        onMouseLeave={stopLogoCycle}
      >
        <Logo className="navbar-logo-img" phase={logoPhase} />
      </Link>
      <div className="navbar-links">
        <a href={isHome ? '#about' : '/#about'} className="navbar-link">About</a>
        <a href={isHome ? '#skills' : '/#skills'} className="navbar-link">Skills</a>
        <a href={isHome ? '#projects' : '/#projects'} className="navbar-link">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
