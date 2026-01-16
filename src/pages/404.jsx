import { Link } from 'react-router-dom';
import './404.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-corner-accent"></div>
        <div className="not-found-corner-accent-br"></div>

        <div className="not-found-content">
          <div className="not-found-badge">LOST?</div>
          <h1 className="not-found-heading">404</h1>
          <p className="not-found-subheading">PAGE NOT FOUND</p>

          <div className="not-found-divider"></div>

          <p className="not-found-message">
            The page you're looking for has been moved, deleted,
            or never existed in the first place.
          </p>

          <Link to="/" className="not-found-link">
            <span className="not-found-link-text">Return to Homepage</span>
            <span className="not-found-link-arrow">→</span>
          </Link>
        </div>
        <div className="not-found-stripe"></div>
      </div>
    </div>
  );
};

export default NotFound;
