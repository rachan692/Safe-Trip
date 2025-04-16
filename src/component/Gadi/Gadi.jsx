import React from 'react';
import './Gadi.css';

const Gadi = () => {
  // Transportation options data
  const transportOptions = [
    {
      id: 1,
      name: 'Private High Lux',
      description: 'Comfortable luxury vehicle with driver',
      price: 'NPR 3500',
      icon: '🚗', // This would be replaced with an actual SVG or image
      perDay: 'per day'
    },
    {
      id: 2,
      name: 'Tourist Bus',
      description: 'Scheduled routes between major destinations',
      price: 'NPR 1200',
      icon: '🚌', // This would be replaced with an actual SVG or image
      perDay: 'per day'
    },
    {
      id: 3,
      name: 'Flight',
      description: 'For quick travel to remote destinations',
      price: 'NPR 4500',
      icon: '✈️', // This would be replaced with an actual SVG or image
      perDay: 'per day'
    }
  ];

  return (
    <div className="transportation-section">
      <div className="transportation-container">
        <h1 className="transportation-heading">Transportation Options</h1>
        <p className="transportation-subheading">
          Choose from a variety of transportation options to explore Nepal comfortably and safely.
        </p>
        
        <div className="transportation-options">
          {transportOptions.map((option) => (
            <div className="transportation-card" key={option.id}>
              <div className="icon-circle">
                <span className="transport-icon">{option.icon}</span>
              </div>
              <h2 className="option-name">{option.name}</h2>
              <p className="option-description">{option.description}</p>
              <p className="option-price">
                <span className="price">{option.price}</span> 
                <span className="per-day">{option.perDay}</span>
              </p>
              <button className="reserve-button">Reserve</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadi;