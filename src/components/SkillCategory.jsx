import './SkillsSection.css';

function SkillCategory({ heading, modifier, skills }) {
  return (
    <div className={`skill-block skill-block--${modifier}`}>
      <div className="skill-header-group">
        <h2 className="skill-headline">{heading}</h2>
        <div className="skill-divider"></div>
      </div>
      <div className="skill-icons-row">
        {skills.map(({ icon, name }) => (
          <div key={name} className="skill-icon-item">
            <img src={icon} alt="" role="presentation" className="skill-icon" />
            <span className="skill-icon-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
