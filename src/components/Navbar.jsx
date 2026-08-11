import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <Logo className="navbar-logo-img" />
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
