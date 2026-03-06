import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">A.S.</a>
      <div className="navbar-links">
        <a href="#about" className="navbar-link">About</a>
        <a href="#skills" className="navbar-link">Skills</a>
        <a href="#projects" className="navbar-link">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
