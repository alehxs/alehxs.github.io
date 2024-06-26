// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AS</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;