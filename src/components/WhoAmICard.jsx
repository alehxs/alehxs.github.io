import './WhoAmICard.css';

function WhoAmICard() {
  return (
    <div className="about-card">
      <h2 className="about-header">ABOUT ME</h2>
      <div className="about-content">
        <p className="about-text">
          I'm a <strong>Software Engineer</strong> based in Houston,
          passionate about <strong>full-stack development</strong>,{' '}
          <strong>app development</strong>, and <strong>cybersecurity</strong>.
        </p>
      </div>
      <div className="about-accent-line"></div>
    </div>
  );
}

export default WhoAmICard;
