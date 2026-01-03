import './SkillsSection.css';
import linuxIcon from '../svgs/linux.svg';
import awsIcon from '../svgs/aws.svg';
import dockerIcon from '../svgs/docker.svg';
import jenkinsIcon from '../svgs/jenkins.svg';
import mysqlIcon from '../svgs/mysql.svg';
import postgresqlIcon from '../svgs/postgresql.svg';
import supabaseIcon from '../svgs/supabase.svg';
import mongodbIcon from '../svgs/mongodb.svg';

function ToolsSection() {
  return (
    <div className="skill-block skill-block--right">
      <div className="skill-header-group">
        <h2 className="skill-headline">TOOLS & PLATFORMS</h2>
        <div className="skill-divider"></div>
      </div>
      <div className="skill-icons-row">
        <img src={linuxIcon} alt="Linux" className="skill-icon" />
        <img src={awsIcon} alt="AWS" className="skill-icon" />
        <img src={dockerIcon} alt="Docker" className="skill-icon" />
        <img src={jenkinsIcon} alt="Jenkins" className="skill-icon" />
        <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
        <img src={postgresqlIcon} alt="PostgreSQL" className="skill-icon" />
        <img src={supabaseIcon} alt="Supabase" className="skill-icon" />
        <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />
      </div>
    </div>
  );
}

export default ToolsSection;
