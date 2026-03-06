import './FeaturedProjectMagazine.css';

function FeaturedProjectMagazine() {
  return (
    <div className="project-feature">
      <div className="feature-label">FEATURED PROJECT</div>

      <div className="feature-layout">
        <div className="feature-image-wrapper">
          <img src="/projects/brain-web.webp" alt="The BRAIN Center Website" className="feature-image" width="800" height="450" />
        </div>

        <div className="feature-content">
          <h2 className="feature-headline">THE BRAIN CENTER</h2>
          <div className="feature-deck">
            Full Website Redesign for an NSF Neurotechnology Research Center
          </div>
          <p className="feature-description">
            Migrated from a legacy WordPress site to Next.js 14 with a custom design system,
            cutting load times by over 60% and shipping a fully accessible, production-ready
            site for an active NSF-funded research lab.
          </p>
          <div className="feature-buttons">
            <a
              href="https://github.com/alehxs/brain-web"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-btn"
            >
              <span>VIEW CODE</span>
            </a>
            <a
              href="https://nsfbrain.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-btn feature-btn--primary"
            >
              <span>LIVE SITE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectMagazine;
