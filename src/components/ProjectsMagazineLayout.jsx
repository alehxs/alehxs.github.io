import './ProjectsMagazineLayout.css';

function ProjectPolaroid({ project, rotation }) {
  return (
    <div
      className="polaroid"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="polaroid-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="polaroid-caption">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {(project.githubLink || project.websiteLink) && (
          <div className="polaroid-links">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsMagazineLayout({ projects }) {
  const rotations = [-2, 3, -3, 2];

  return (
    <div className="projects-scatter">
      <h2 className="scatter-headline">OTHER PROJECTS</h2>
      <div className="scatter-grid">
        {projects.map((project, index) => (
          <ProjectPolaroid
            key={index}
            project={project}
            rotation={rotations[index % rotations.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsMagazineLayout;
