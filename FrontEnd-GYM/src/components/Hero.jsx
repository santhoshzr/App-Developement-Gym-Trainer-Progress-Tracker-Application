import React from 'react';
import './Hero.css'; // Import the CSS file

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Unleash Your Potential</h1>
        <p className="hero-subtitle">Join us today and transform your body!</p>
        <a href="#signup" className="hero-button">Get Started</a>
      </div>
    </div>
  );
}

export default Hero;
