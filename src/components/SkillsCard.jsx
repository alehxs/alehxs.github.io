import BentoCard from './BentoCard';
import awsIcon from '../svgs/aws.svg';
import bashIcon from '../svgs/bash.svg';
import cplusplusIcon from '../svgs/cplusplus.svg';
import djangoIcon from '../svgs/django.svg';
import dockerIcon from '../svgs/docker.svg';
import expressIcon from '../svgs/express.svg';
import javascriptIcon from '../svgs/javascript.svg';
import jenkinsIcon from '../svgs/jenkins.svg';
import linuxIcon from '../svgs/linux.svg';
import mongodbIcon from '../svgs/mongodb.svg';
import mysqlIcon from '../svgs/mysql.svg';
import nextjsIcon from '../svgs/nextjs.svg';
import pythonIcon from '../svgs/python.svg';
import reactIcon from '../svgs/react.svg';
import swiftIcon from '../svgs/swift.svg';
import postgre from '../svgs/postgresql.svg';
import supabase from '../svgs/supabase.svg';

function SkillsCard() {
  return (
    <BentoCard gridArea="3 / 1 / 6 / 8">
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-4xl)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-lg)',
      }}>
        Skills
      </h2>
      <div className="skills-categories">
        <SkillsCategory title="Programming Languages">
          <SkillIcon src={pythonIcon} alt="Python" />
          <SkillIcon src={javascriptIcon} alt="JavaScript" />
          <SkillIcon src={swiftIcon} alt="Swift" />
          <SkillIcon src={cplusplusIcon} alt="C++" />
          <SkillIcon src={bashIcon} alt="Bash" />
        </SkillsCategory>

        <SkillsCategory title="Frameworks & Libraries">
          <SkillIcon src={reactIcon} alt="React" />
          <SkillIcon src={nextjsIcon} alt="Next.js" />
          <SkillIcon src={djangoIcon} alt="Django" />
          <SkillIcon src={expressIcon} alt="Express" />
        </SkillsCategory>

        <SkillsCategory title="Tools & Platforms">
          <SkillIcon src={linuxIcon} alt="Linux" />
          <SkillIcon src={awsIcon} alt="AWS" />
          <SkillIcon src={dockerIcon} alt="Docker" />
          <SkillIcon src={jenkinsIcon} alt="Jenkins" />
          <SkillIcon src={mysqlIcon} alt="MySQL" />
          <SkillIcon src={postgre} alt="PostgreSQL" />
          <SkillIcon src={supabase} alt="Supabase" />
          <SkillIcon src={mongodbIcon} alt="MongoDB" />
        </SkillsCategory>
      </div>
    </BentoCard>
  );
}

function SkillsCategory({ title, children }) {
  return (
    <div className="skills-category">
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-medium)',
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-sm)',
      }}>
        {title}
      </h3>
      <div className="skills-icons">{children}</div>
    </div>
  );
}

function SkillIcon({ src, alt }) {
  return <img src={src} alt={alt} title={alt} className="skill-icon" />;
}

export default SkillsCard;
