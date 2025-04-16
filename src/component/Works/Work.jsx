import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="work-heading">How Safe Trip Works</h1>
      <p className="work-subheading">
        Our platform connects travelers with local property owners and guides throughout Nepal.
      </p>

      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon">
            <span className="search-icon">🔍</span>
          </div>
          <h2 className="feature-title">Find Accommodations</h2>
          <p className="feature-description">
            Search authentic Nepali homestays, rooms, and apartments across all regions of Nepal.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <span className="people-icon">👥</span>
          </div>
          <h2 className="feature-title">Connect with Locals</h2>
          <p className="feature-description">
            Chat with property owners and guides to plan your perfect Nepali experience.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <span className="location-icon">📍</span>
          </div>
          <h2 className="feature-title">Explore Nepal</h2>
          <p className="feature-description">
            Experience the authentic Nepal with the safety and comfort of local knowledge. Discover rural villages, hidden trails, and off-the-beaten-path destinations throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;