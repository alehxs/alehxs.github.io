import './WhoAmICard.css';

function WhoAmICard() {
  return (
    <div className="about-card about-card--expanded">
      <h2 className="about-header">ABOUT ME</h2>
      <div className="about-content">
        <p className="about-text about-text--intro">
          I'm a <strong>Software Engineer</strong> based in Houston,
          passionate about <strong>full-stack development</strong>,{' '}
          <strong>app development</strong>, and <strong>cybersecurity</strong>.
        </p>

        <p className="about-text about-text--personal">
          Beyond code, I'm driven by a love for continuous growth and exploration.
          I stay disciplined through <strong>working out</strong>, fuel my competitive
          spirit watching <strong>Formula One</strong>, express creativity by playing the{' '}
          <strong>piano</strong>, and challenge myself by <strong>learning new languages</strong>—currently
          working on Mandarin Chinese.
        </p>
      </div>
    </div>
  );
}

export default WhoAmICard;
