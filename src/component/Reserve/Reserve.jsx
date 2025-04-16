import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Reserve.css';
import { User, Star, Clock, Calendar, ChevronLeft } from 'lucide-react';

const Reserve = () => {
  const { id } = useParams();
  const [transport, setTransport] = useState(null);
  
  // This would normally be fetched from an API
  // For demo purposes, we're including the data here
  useEffect(() => {
    // Simulating API fetch
    const transportData = {
      id: parseInt(id),
      name: getTransportName(id),
      description: getTransportDescription(id),
      price: getTransportPrice(id),
      perUnit: getTransportPerUnit(id),
      image: "/api/placeholder/400/250",
      driverInfo: {
        name: getDriverName(id),
        experience: getDriverExperience(id),
        rating: getDriverRating(id),
        languages: getDriverLanguages(id),
        image: "/api/placeholder/200/200"
      }
    };
    
    setTransport(transportData);
  }, [id]);
  
  // Helper functions to simulate data lookup
  function getTransportName(id) {
    const names = {
      "1": "Private High Lux",
      "2": "Tourist Bus",
      "3": "Flight",
      "4": "Mountain Bike",
      "5": "Helicopter",
      "6": "Jeep Safari",
      "7": "Electric Scooter",
      "8": "Motorbike",
      "9": "Rafting Boat",
      "10": "Local Microbus",
      "11": "Cable Car",
      "12": "Taxi Service"
    };
    return names[id] || "Transport";
  }
  
  function getTransportDescription(id) {
    const descriptions = {
      "1": "Comfortable luxury vehicle with driver",
      "2": "Scheduled routes between major destinations",
      "3": "For quick travel to remote destinations",
      "4": "Adventure biking for rough terrains",
      "5": "Aerial tours and remote access",
      "6": "Off-road exploration vehicle",
      "7": "Eco-friendly city travel",
      "8": "Freedom to explore at your pace",
      "9": "White water adventure transport",
      "10": "Budget travel for short distances",
      "11": "Scenic mountain transport",
      "12": "On-demand city transportation"
    };
    return descriptions[id] || "Transportation option";
  }
  
  function getTransportPrice(id) {
    const prices = {
      "1": "NPR 3500",
      "2": "NPR 1200",
      "3": "NPR 4500",
      "4": "NPR 800",
      "5": "NPR 25000",
      "6": "NPR 4000",
      "7": "NPR 500",
      "8": "NPR 1200",
      "9": "NPR 2000",
      "10": "NPR 300",
      "11": "NPR 1000",
      "12": "NPR 2000"
    };
    return prices[id] || "NPR 1000";
  }
  
  function getTransportPerUnit(id) {
    const perUnits = {
      "5": "per hour",
      "9": "per trip",
      "11": "per trip"
    };
    return perUnits[id] || "per day";
  }
  
  function getDriverName(id) {
    const names = {
      "1": "Rajesh Kumar",
      "2": "Mohan Singh",
      "3": "Capt. Anjali Sharma",
      "4": "Self-guided",
      "5": "Capt. Binod Thapa",
      "6": "Bikram Gurung",
      "7": "Self-driven",
      "8": "Self-driven",
      "9": "Pemba Sherpa",
      "10": "Ram Bahadur",
      "11": "Operated by station staff",
      "12": "Sunil Pradhan"
    };
    return names[id] || "Driver";
  }
  
  function getDriverExperience(id) {
    const experiences = {
      "1": "8 years",
      "2": "12 years",
      "3": "15 years",
      "4": "Includes map and route guide",
      "5": "20 years",
      "6": "10 years",
      "7": "Includes city map and charger",
      "8": "Includes helmet and basic gear",
      "9": "14 years",
      "10": "9 years",
      "11": "Professional operation",
      "12": "7 years"
    };
    return experiences[id] || "Experienced";
  }
  
  function getDriverRating(id) {
    const ratings = {
      "1": 4.8,
      "2": 4.6,
      "3": 4.9,
      "4": 4.5,
      "5": 5.0,
      "6": 4.7,
      "7": 4.3,
      "8": 4.6,
      "9": 4.9,
      "10": 4.2,
      "11": 4.8,
      "12": 4.5
    };
    return ratings[id] || 4.5;
  }
  
  function getDriverLanguages(id) {
    const languages = {
      "1": "English, Nepali, Hindi",
      "2": "English, Nepali",
      "3": "English, Nepali, Hindi",
      "4": "Guide available in English, Nepali",
      "5": "English, Nepali",
      "6": "English, Nepali, Hindi",
      "7": "App available in English, Nepali",
      "8": "Guidance in English, Nepali",
      "9": "English, Nepali",
      "10": "Nepali, Basic English",
      "11": "Service in English, Nepali",
      "12": "Nepali, English"
    };
    return languages[id] || "English, Nepali";
  }

  if (!transport) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="reserve-container">
      <Link 
        to="/transportation" 
        className="back-button"
      >
        <ChevronLeft size={20} />
        <span>Back to Transportation</span>
      </Link>
      
      <div className="reserve-content">
        <h1 className="reserve-heading">Reserve {transport.name}</h1>
        
        <div className="transport-summary">
          <div className="transport-image-container">
            <img 
              src={transport.image} 
              alt={transport.name}
              className="transport-image" 
            />
          </div>
          
          <div className="transport-info">
            <h2 className="transport-name">{transport.name}</h2>
            <p className="transport-description">{transport.description}</p>
            <div className="transport-price">
              <span className="price-amount">{transport.price}</span>
              <span className="price-unit"> {transport.perUnit}</span>
            </div>
          </div>
        </div>
        
        <div className="driver-section">
          <div className="driver-container">
            <h3 className="driver-title">Operator Information</h3>
            
            <div className="driver-info-flex">
              <div className="driver-image-container">
                <div className="driver-image-wrapper">
                  <img 
                    src={transport.driverInfo.image} 
                    alt={transport.driverInfo.name}
                    className="driver-image" 
                  />
                </div>
              </div>
              
              <div className="driver-details">
                <h4 className="driver-name">
                  <User className="icon" size={18} />
                  {transport.driverInfo.name}
                </h4>
                
                <div className="driver-stat">
                  <Star className="icon-star" size={18} />
                  <span className="stat-value">{transport.driverInfo.rating}/5.0 Rating</span>
                </div>
                
                <div className="driver-stat">
                  <Clock className="icon" size={18} />
                  <span>{transport.driverInfo.experience} experience</span>
                </div>
                
                <div className="driver-stat">
                  <Calendar className="icon" size={18} />
                  <span>Languages: {transport.driverInfo.languages}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking-form">
          <h3 className="form-title">Complete Your Reservation</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pickupDate">Pickup Date</label>
              <input type="date" id="pickupDate" name="pickupDate" className="form-control" />
            </div>
            
            <div className="form-group">
              <label htmlFor="pickupTime">Pickup Time</label>
              <input type="time" id="pickupTime" name="pickupTime" className="form-control" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input type="text" id="pickupLocation" name="pickupLocation" className="form-control" placeholder="Enter pickup location" />
            </div>
            
            <div className="form-group">
              <label htmlFor="dropLocation">Drop Location</label>
              <input type="text" id="dropLocation" name="dropLocation" className="form-control" placeholder="Enter drop location" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="passengers">Number of Passengers</label>
              <input type="number" id="passengers" name="passengers" className="form-control" min="1" max="20" defaultValue="1" />
            </div>
            
            <div className="form-group">
              <label htmlFor="duration">Duration (days)</label>
              <input type="number" id="duration" name="duration" className="form-control" min="1" defaultValue="1" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea id="specialRequests" name="specialRequests" className="form-control" rows="3" placeholder="Any special requirements or requests?"></textarea>
          </div>
          
          <div className="form-actions">
            <button className="confirm-button">Confirm Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;