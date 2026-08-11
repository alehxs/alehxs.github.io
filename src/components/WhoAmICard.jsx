import './WhoAmICard.css';

function WhoAmICard() {
  return (
    <div className="about-card about-card--expanded">
      <h2 className="about-header">ABOUT ME</h2>
      <div className="about-content">
        {/* Left Column: Quick Stats */}
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-label">LOCATION</span>
            <span className="stat-value">Houston, TX</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ROLE</span>
            <span className="stat-value">AI-Native SWE, TDP @ Accenture</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">DEGREE</span>
            <span className="stat-value">B.S. Computer Science @ UH</span>
          </div>
        </div>

        {/* Right Column: Narrative Bio */}
        <div className="about-narrative">
          <p className="about-text">
            I’m a Computer Science graduate from UH, joining Accenture’s TDP as an AI-Native Software Engineer. My background is in scalable full-stack and iOS development.
          </p>
          <p className="about-text">
            My technical background spans developing software for UH Labs, securing a Hackathon victory, and hosting workshops as a student organization officer.
          </p>
          <p className="about-text">
            Outside of development, I strive for a polymathic lifestyle. I balance working out with the challenge of learning Russian and Mandarin, while keeping piano and reading on the sidelines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAmICard;
