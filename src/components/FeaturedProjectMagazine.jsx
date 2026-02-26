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
            A full website redesign for an NSF neurotechnology research center,
            migrating from WordPress to a modern Next.js stack and shipped to production
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
