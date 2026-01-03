import './SkillsSection.css';
import pythonIcon from '../svgs/python.svg';
import javascriptIcon from '../svgs/javascript.svg';
import swiftIcon from '../svgs/swift.svg';
import cplusplusIcon from '../svgs/cplusplus.svg';
import bashIcon from '../svgs/bash.svg';

function LanguagesSection() {
  return (
    <div className="skill-block skill-block--left">
      <div className="skill-header-group">
        <h2 className="skill-headline">PROGRAMMING LANGUAGES</h2>
        <div className="skill-divider"></div>
      </div>
      <div className="skill-icons-row">
        <img src={pythonIcon} alt="Python" className="skill-icon" />
        <img src={javascriptIcon} alt="JavaScript" className="skill-icon" />
        <img src={swiftIcon} alt="Swift" className="skill-icon" />
        <img src={cplusplusIcon} alt="C++" className="skill-icon" />
        <img src={bashIcon} alt="Bash" className="skill-icon" />
      </div>
    </div>
  );
}

export default LanguagesSection;
