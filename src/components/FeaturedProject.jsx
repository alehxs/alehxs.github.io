import BentoCard from './BentoCard';
import githubIcon from '../svgs/github.svg';
import linkIcon from '../svgs/link.svg';
import './FeaturedProject.css';

function FeaturedProject() {
  const project = {
    image: '/telemetricsSC.png',
    title: 'Telemetrics',
    description: 'Full-stack Formula 1 dashboard visualizing session telemetry, tyre strategy, and driver performance across seasons',
    githubLink: 'https://github.com/alehxs/telemetrics',
    websiteLink: 'https://alsan.me/telemetrics/'
  };

  return (
    <BentoCard gridArea="3 / 8 / 6 / 13" variant="elevated">
      <div className="featured-project">
        <div className="featured-image-container">
          <img src={project.image} alt={project.title} className="featured-image" />
        </div>
        <div className="featured-content">
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--font-semibold)',
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-sm)',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: 'var(--spacing-md)',
          }}>
            {project.description}
          </p>
          <div className="featured-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="featured-link">
                <img src={githubIcon} alt="GitHub" />
              </a>
            )}
            {project.websiteLink && (
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="featured-link">
                <img src={linkIcon} alt="Website" />
              </a>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

export default FeaturedProject;
