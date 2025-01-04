import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-paragraph">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="not-found-link">Home</a>
    </div>
  );
};

export default NotFound;
