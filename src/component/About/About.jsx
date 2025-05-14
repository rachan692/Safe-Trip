import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">🌐 About Us — Welcome to Safe Trip Nepal</h1>
        
        <p className="about-intro">
          At <strong>Safe Trip</strong>, we believe that travel should be safe, smooth, and deeply connected to the local culture. We're here to help tourists explore the beauty of Nepal without the usual confusion, stress, or language barriers.
        </p>
        
        <p>
          Our platform connects <strong>tourists with verified local guides</strong>, <strong>students</strong>, and <strong>service providers</strong> — making every journey meaningful for both travelers and locals.
        </p>
        
        <section className="about-section">
          <h2 className="section-title">🎯 Our Mission</h2>
          <p>
            To make travel in Nepal safe, easy, and impactful — by empowering local youth, promoting cultural exchange, and providing real-time access to trusted travel services.
          </p>
        </section>
        
        <section className="about-section">
          <h2 className="section-title">🚀 What We Offer</h2>
          <ul className="services-list">
            <li><strong>Trusted Local Guides</strong> — Find and chat with experienced guides or friendly student guides who know their city inside out.</li>
            <li><strong>Food & Handicrafts</strong> — Order authentic Nepali food and handmade crafts directly from local students and families.</li>
            <li><strong>Transport Made Simple</strong> — Book reliable transport services without language struggles or overpaying.</li>
            <li><strong>Community & Culture</strong> — We're creating a space where travelers and locals meet, share stories, and grow together.</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2 className="section-title">🌱 For Students & Locals</h2>
          <p>
            Safe Trip isn't just for tourists — it's also a platform where <strong>students can earn</strong>, gain experience, and showcase their talents, whether that's guiding tours, cooking, or selling handmade goods.
          </p>
        </section>
        
        <section className="about-section">
          <h2 className="section-title">💬 Why We Started</h2>
          <p>
            We saw tourists struggling to find honest help, and local youth struggling to find opportunities. So we built Safe Trip — a platform that solves both problems, while promoting the true spirit of Nepal.
          </p>
        </section>
        
        <section className="about-section">
          <h2 className="section-title">📍 Join the Journey</h2>
          <p>
            Whether you're here to explore, guide, cook, create, or connect — <strong>Safe Trip is your travel companion in Nepal</strong>. Let's explore together.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;