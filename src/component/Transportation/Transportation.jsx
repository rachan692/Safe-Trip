import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Transportation.css';
import { MapPin, ChevronLeft } from 'lucide-react';

const Transportation = () => {
  const [selectedTransport, setSelectedTransport] = useState(null);

  const transportOptions = [
    {
      id: 1,
      name: "Private High Lux",
      description: "Comfortable luxury vehicle with driver",
      price: "NPR 3500",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      name: "Tourist Bus",
      description: "Scheduled routes between major destinations",
      price: "NPR 1200",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      name: "Flight",
      description: "For quick travel to remote destinations",
      price: "NPR 4500",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      name: "Mountain Bike",
      description: "Adventure biking for rough terrains",
      price: "NPR 800",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      name: "Helicopter",
      description: "Aerial tours and remote access",
      price: "NPR 25000",
      perUnit: "per hour",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      name: "Jeep Safari",
      description: "Off-road exploration vehicle",
      price: "NPR 4000",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      name: "Electric Scooter",
      description: "Eco-friendly city travel",
      price: "NPR 500",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      name: "Motorbike",
      description: "Freedom to explore at your pace",
      price: "NPR 1200",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 9,
      name: "Rafting Boat",
      description: "White water adventure transport",
      price: "NPR 2000",
      perUnit: "per trip",
      image: "/api/placeholder/400/250"
    },
    {
      id: 10,
      name: "Local Microbus",
      description: "Budget travel for short distances",
      price: "NPR 300",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    },
    {
      id: 11,
      name: "Cable Car",
      description: "Scenic mountain transport",
      price: "NPR 1000",
      perUnit: "per trip",
      image: "/api/placeholder/400/250"
    },
    {
      id: 12,
      name: "Taxi Service",
      description: "On-demand city transportation",
      price: "NPR 2000",
      perUnit: "per day",
      image: "/api/placeholder/400/250"
    }
  ];

  const handleCardClick = (transport) => {
    setSelectedTransport(transport);
  };

  const handleBackClick = () => {
    setSelectedTransport(null);
  };

  if (selectedTransport) {
    return (
      <div className="transport-detail-container">
        <button 
          onClick={handleBackClick}
          className="back-button"
        >
          <ChevronLeft size={20} />
          <span>Back to all options</span>
        </button>
        
        <div className="transport-detail-card">
          <div className="transport-detail-flex">
            <div className="transport-detail-image-container">
              <img 
                src={selectedTransport.image} 
                alt={selectedTransport.name}
                className="transport-detail-image" 
              />
            </div>
            <div className="transport-detail-info">
              <h2 className="transport-detail-title">{selectedTransport.name}</h2>
              <p className="transport-detail-description">{selectedTransport.description}</p>
              <div className="transport-detail-price">
                <span className="price-amount">{selectedTransport.price}</span>
                <span className="price-unit"> {selectedTransport.perUnit}</span>
              </div>
              
              <Link to='/reserve' className="reserve-button">
                <MapPin size={18} />
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="transport-container">
      <h1 className="transport-heading">Choose Your Transportation</h1>
      
      <div className="transport-grid">
        {transportOptions.map((transport) => (
          <div 
            key={transport.id}
            className="transport-card"
          >
            <img 
              src={transport.image} 
              alt={transport.name}
              className="transport-image" 
              onClick={() => handleCardClick(transport)}
            />
            
            <div className="transport-content">
              <h2 
                className="transport-name" 
                onClick={() => handleCardClick(transport)}
              >
                {transport.name}
              </h2>
              <p className="transport-description">{transport.description}</p>
              
              <div className="transport-price">
                <span className="price-amount">{transport.price}</span>
                <span className="price-unit"> {transport.perUnit}</span>
              </div>
              
              <Link to='/reserve' className="reserve-button">
                <MapPin size={18} />
                Reserve
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transportation;