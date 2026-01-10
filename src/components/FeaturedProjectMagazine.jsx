import './FeaturedProjectMagazine.css';

function FeaturedProjectMagazine() {
  return (
    <div className="project-feature">
      <div className="feature-label">FEATURED PROJECT</div>

      <div className="feature-layout">
        <div className="feature-image-wrapper">
          <img src="/projects/telemetrics.png" alt="Telemetrics Dashboard" className="feature-image" />
        </div>

        <div className="feature-content">
          <h2 className="feature-headline">TELEMETRICS</h2>
          <div className="feature-deck">
            Formula 1 Dashboard Visualizing Session Telemetry
          </div>
          <p className="feature-description">
            Full-stack Formula 1 dashboard visualizing session telemetry,
            tyre strategy, and driver performance across seasons
          </p>
          <div className="feature-buttons">
            <a
              href="https://github.com/alehxs/telemetrics"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-btn"
            >
              <span>VIEW CODE</span>
            </a>
            <a
              href="https://alehxs.com/telemetrics/"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-btn feature-btn--primary"
            >
              <span>LIVE DEMO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectMagazine;
