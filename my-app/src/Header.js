import React from 'react';
import './App.css';

function Header() {
  return (
    <div className='header'>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
