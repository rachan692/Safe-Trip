import React, { useState } from 'react';
import './CreateTrip.css';

const CreateTrip = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('moderate');
  const [travelers, setTravelers] = useState('couple');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Trip details:', { destination, days, budget, travelers });
    // Add your API call or state management logic here
  };

  return (
    <div className="create-trip-container">
      <div className="trip-form-header">
        <h1>Tell us your travel preferences 🌎 ✈️</h1>
        <p>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
      </div>

      <form className="trip-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">What is your destination of choice?</label>
          <input 
            type="text" 
            id="destination"
            placeholder="Enter a destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="days">How many days are you planning your trip?</label>
          <input 
            type="number" 
            id="days"
            placeholder="Ex: 3"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>What is Your Budget?</label>
          <div className="options-container">
            <div 
              className={`option-card ${budget === 'cheap' ? 'selected' : ''}`}
              onClick={() => setBudget('cheap')}
            >
              <div className="option-icon">💰</div>
              <div className="option-content">
                <h3>Cheap</h3>
                <p>Stay conscious of costs</p>
              </div>
            </div>

            <div 
              className={`option-card ${budget === 'moderate' ? 'selected' : ''}`}
              onClick={() => setBudget('moderate')}
            >
              <div className="option-icon">💰</div>
              <div className="option-content">
                <h3>Moderate</h3>
                <p>Keep cost on the average side</p>
              </div>
            </div>

            <div 
              className={`option-card ${budget === 'luxury' ? 'selected' : ''}`}
              onClick={() => setBudget('luxury')}
            >
              <div className="option-icon">💵</div>
              <div className="option-content">
                <h3>Luxury</h3>
                <p>Don't worry about cost</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Who do you plan on traveling with on your next adventure?</label>
          <div className="options-container travelers">
            <div 
              className={`option-card ${travelers === 'solo' ? 'selected' : ''}`}
              onClick={() => setTravelers('solo')}
            >
              <div className="option-icon">✈️</div>
              <div className="option-content">
                <h3>Just Me</h3>
                <p>A sole traveler in exploration</p>
              </div>
            </div>

            <div 
              className={`option-card ${travelers === 'couple' ? 'selected' : ''}`}
              onClick={() => setTravelers('couple')}
            >
              <div className="option-icon">👫</div>
              <div className="option-content">
                <h3>A Couple</h3>
                <p>Two travelers in tandem</p>
              </div>
            </div>

            <div 
              className={`option-card ${travelers === 'family' ? 'selected' : ''}`}
              onClick={() => setTravelers('family')}
            >
              <div className="option-icon">🏡</div>
              <div className="option-content">
                <h3>Family</h3>
                <p>A group of fun loving adventurers</p>
              </div>
            </div>

            <div 
              className={`option-card ${travelers === 'friends' ? 'selected' : ''}`}
              onClick={() => setTravelers('friends')}
            >
              <div className="option-icon">👥</div>
              <div className="option-content">
                <h3>Friends</h3>
                <p>Adventure with your squad</p>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="generate-trip-button">Generate Trip</button>
      </form>
    </div>
  );
};

export default CreateTrip;