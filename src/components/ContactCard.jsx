import './ContactCard.css';
import envelopeIcon from '../svgs/envelope-solid 2.svg';
import githubIcon from '../svgs/github.svg';
import linkedinIcon from '../svgs/linkedin.svg';

function ContactCard() {
  return (
    <div className="contact-stamp">
      <div className="stamp-content">
        <h2 className="stamp-header">CONNECT</h2>
        <div className="stamp-links">
          <StampLink href="mailto:alex@sangurima.com" icon={envelopeIcon} label="Email" />
          <StampLink href="https://github.com/alehxs" icon={githubIcon} label="GitHub" />
          <StampLink href="https://linkedin.com/in/asangurima" icon={linkedinIcon} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
}

function StampLink({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="stamp-link">
      <img src={icon} alt={label} className="stamp-icon" />
      <span className="stamp-label">{label}</span>
    </a>
  );
}

export default ContactCard;
