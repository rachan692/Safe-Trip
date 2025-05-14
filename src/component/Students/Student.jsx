import React from 'react';
import './Student.css';

const Student = () => {
  return (
    <div className="student-container">
      <div className="student-header">
        <h1>Welcome, Student!</h1>
        <p className="intro-text">
          As a student, you can earn money while sharing your skills and culture with tourists. 
          Join our platform to create meaningful connections and showcase what makes Nepal special.
        </p>
      </div>
      
      <h2 className="section-title">Choose your opportunity:</h2>
      
      <div className="student-services">
        <div className="service-card">
          <div className="card-icon">🍲</div>
          <h3>Serve Local Food</h3>
          <p>Cook and offer homemade Nepali meals to tourists seeking authentic food experiences. Share your family recipes and culinary traditions.</p>
          <ul className="benefits-list">
            <li>Set your own prices</li>
            <li>Flexible scheduling</li>
            <li>Meet people from around the world</li>
          </ul>
          <button className="action-button">Start Serving</button>
        </div>
        
        <div className="service-card">
          <div className="card-icon">🧶</div>
          <h3>Sell Handicrafts</h3>
          <p>Create and sell your own handmade crafts or souvenirs on the platform. Showcase traditional Nepali artistry or your unique creative style.</p>
          <ul className="benefits-list">
            <li>No storefront needed</li>
            <li>Build your portfolio</li>
            <li>Preserve cultural traditions</li>
          </ul>
          <button className="action-button">Start Selling</button>
        </div>
        
        <div className="service-card">
          <div className="card-icon">🗺️</div>
          <h3>Be a Local Guide</h3>
          <p>Guide tourists through your city — show them Pokhara, temples, lakes, or local culture spots. Create memorable experiences with your local knowledge.</p>
          <ul className="benefits-list">
            <li>Practice language skills</li>
            <li>Earn competitive rates</li>
            <li>Create your own tours</li>
          </ul>
          <button className="action-button">Become a Guide</button>
        </div>
      </div>
      
      <div className="testimonial-section">
        <h2>Hear from other student participants:</h2>
        <div className="testimonial">
          <p>"I've been able to pay for my university fees by guiding tourists on weekends. Plus, I've made friends from all over the world!"</p>
          <p className="testimonial-author">- Arun, Kathmandu University</p>
        </div>
      </div>
      
      <div className="join-banner">
        <h2>Ready to get started?</h2>
        <p>Complete your profile to begin connecting with tourists and earning income while sharing Nepal's beauty.</p>
        <button className="primary-button">Complete Your Profile</button>
      </div>
    </div>
  );
};

export default Student;