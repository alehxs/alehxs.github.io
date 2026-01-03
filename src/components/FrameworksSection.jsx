import './SkillsSection.css';
import reactIcon from '../svgs/react.svg';
import nextjsIcon from '../svgs/nextjs.svg';
import djangoIcon from '../svgs/django.svg';
import expressIcon from '../svgs/express.svg';

function FrameworksSection() {
  return (
    <div className="skill-block skill-block--center">
      <div className="skill-header-group">
        <h2 className="skill-headline">FRAMEWORKS & LIBRARIES</h2>
        <div className="skill-divider"></div>
      </div>
      <div className="skill-icons-row">
        <img src={reactIcon} alt="React" className="skill-icon" />
        <img src={nextjsIcon} alt="Next.js" className="skill-icon" />
        <img src={djangoIcon} alt="Django" className="skill-icon" />
        <img src={expressIcon} alt="Express" className="skill-icon" />
      </div>
    </div>
  );
}

export default FrameworksSection;
