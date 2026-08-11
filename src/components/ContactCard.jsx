import './ContactCard.css';
import ExternalLink from './ExternalLink';
import envelopeIcon from '../svgs/envelope-solid 2.svg';
import githubIcon from '../svgs/github.svg';
import linkedinIcon from '../svgs/linkedin.svg';

function ContactCard() {
  return (
    <div className="contact-stamp">
      <div className="stamp-content">
        <h2 className="stamp-header">CONNECT</h2>
        <div className="stamp-links">
          <StampLink href="mailto:contact@mail.alehxs.com" icon={envelopeIcon} label="Email" />
          <StampLink href="https://github.com/alehxs" icon={githubIcon} label="GitHub" />
          <StampLink href="https://linkedin.com/in/sangurima" icon={linkedinIcon} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
}

function StampLink({ href, icon, label }) {
  return (
    <ExternalLink href={href} className="stamp-link">
      <img src={icon} alt="" className="stamp-icon" width="28" height="28" />
      <span className="stamp-label">{label}</span>
    </ExternalLink>
  );
}

export default ContactCard;
