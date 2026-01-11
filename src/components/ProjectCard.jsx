import './ProjectCard.css';
import githubIcon from '../svgs/github.svg';
import linkIcon from '../svgs/link.svg';

function ProjectCard({ image, title, description, githubLink, websiteLink }) {
  return websiteLink ? (
    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={githubIcon} alt="GitHub" className="link-icon" />
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={linkIcon} alt="Website" className="link-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </a>
  ) : (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={githubIcon} alt="GitHub" className="link-icon" />
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={linkIcon} alt="Website" className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;