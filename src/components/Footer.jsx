import { Link } from 'react-router-dom';
import './Footer.css';
import envelopeIcon from '../svgs/envelope-solid 2.svg';
import githubIcon from '../svgs/github.svg';
import linkedinIcon from '../svgs/linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
            © 2026 Alexander Sangurima
          </p>
          <Link to="/blog" className="footer-blog-link">
            Read the Blog
          </Link>
        </div>
        <div className="footer-links">
          <a href="mailto:alex@sangurima.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={envelopeIcon} alt="Email" className="footer-icon" />
          </a>
          <a href="https://github.com/alehxs" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/asangurima" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
