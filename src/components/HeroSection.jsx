import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-magazine">
      <div className="hero-content">
        <div className="hero-corner-accent"></div>

        <h1 className="hero-headline">
          <Typewriter
            words={["ALEXANDER"]}
            loop={1}
            cursor={false}
            typeSpeed={75}
          />
        </h1>

        <div className="hero-subline">
          <span className="hero-slash">{"/"}/</span>
          <span>SANGURIMA</span>
        </div>

        <div className="hero-badge">
          <span>SOFTWARE ENGINEER</span>
        </div>

        <div className="hero-stripe"></div>
      </div>
    </div>
  );
}

export default HeroSection;
