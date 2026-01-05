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
            <span className="stat-label">DEGREE</span>
            <span className="stat-value">B.S. Computer Science @ University of Houston</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">FOCUS</span>
            <span className="stat-value">Full-Stack, iOS, & Cybersecurity</span>
          </div>
        </div>

        {/* Right Column: Narrative Bio */}
        <div className="about-narrative">
          <p className="about-text">
            I am a recent Computer Science graduate from the University of Houston building scalable full-stack and iOS applications, with an additional interest in cybersecurity.
          </p>
          <p className="about-text">
            My technical background demonstrates a wide range of experience, from developing software for UH Labs and securing a Hackathon victory to hosting workshops as a student organization officer.
          </p>
          <p className="about-text">
            Outside of development, I strive for a polymathic lifestyle. I balance the gym and my passion for Formula One with the challenge of learning Mandarin Chinese, reading, and playing the piano.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAmICard;
