import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import ExternalLink from './ExternalLink';
import envelopeIcon from '../svgs/envelope-solid 2.svg';
import githubIcon from '../svgs/github.svg';
import linkedinIcon from '../svgs/linkedin.svg';

function Footer() {
  const { pathname } = useLocation();
  const isBlog = pathname.startsWith('/blog');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-text">
            © 2026 Alexander Sangurima
          </p>
          <div className="footer-links">
            <ExternalLink href="mailto:contact@mail.alehxs.com" className="footer-link">
              <img src={envelopeIcon} alt="Email" className="footer-icon" />
            </ExternalLink>
            <ExternalLink href="https://github.com/alehxs" className="footer-link">
              <img src={githubIcon} alt="GitHub" className="footer-icon" />
            </ExternalLink>
            <ExternalLink href="https://linkedin.com/in/sangurima" className="footer-link">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
            </ExternalLink>
          </div>
        </div>
        <div className="footer-bottom-links">
          {!isBlog && (
            <Link to="/blog" className="footer-blog-link">
              Read the Blog
            </Link>
          )}
          <Link
            to="/asombro"
            className="footer-asombro-link"
            title="奇 · wonder, the marvelous"
            aria-label="Asombro — word of the day, wonder"
          >
            奇
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
