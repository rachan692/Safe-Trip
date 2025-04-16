import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  // Sample data for Nepalese properties
  const properties = [
    {
      id: 1,
      title: '3BHK Villa in Pokhara',
      price: 'Rs 10000 per night',
      images: [
       'src/assets/image/Pokhara.jpg',
       'src/assets/image/Pokhara2.jpg',
       'src/assets/image/Pokhara1.jpg',
       

      ],
      description: 'Luxury villa with lake view'
    },
    {
      id: 2,
      title: 'Traditional Home in Kathmandu',
      price: 'Rs 1200 per night',
      images: [
        'src/assets/image/ktm.jpg',
        'src/assets/image/ktm1.jpg',
        'src/assets/image/ktm2.jpg',
      
      ],
      description: 'Authentic Newari architecture'
    },
    {
      id: 3,
      title: 'Authentic House in Nagarkot',
      price: 'Rs 1500 per night',
      images: [
      'src/assets/image/nagarko2.jpg',
      'src/assets/image/nagarko1.jpg',
      'src/assets/image/nagarko3.jpg',

      ],
      description: 'Mountain view apartment'
    },
    {
      id: 4,
      title: 'Riverside Cottage in Chitwan',
      price: 'Rs 4500 per night',
      images: [
        'src/assets/image/Chitwan1.jpg',
        'src/assets/image/Chitwan2.jpg',
        'src/assets/image/Chitwan3.jpg',
        
      ],
      description: 'Peaceful natural surroundings'
    },
    {
      id: 5,
      title: 'Mountain Lodge in Annapurna',
      price: 'Rs 2000 per night',
      images: [
        'src/assets/image/a1.jpg',
        'src/assets/image/a2.jpg',
        'src/assets/image/a3.jpg',
      ],
      description: 'Breathtaking Himalayan views'
    },
    {
      id: 6,
      title: 'Homestay in Ghandruk',
      price: 'Rs 1200 per night',
      images: [
        'src/assets/image/g1.jpg',
        'src/assets/image/g2.jpg',
        'src/assets/image/g3.jpg',
      
      ],
      description: 'Cultural Village'
    },
    {
      id: 7,
      title: 'Heritage House in Bhaktapur',
      price: 'Rs 1200 per night',
      images: [
       'src/assets/image/b1.jpg',
        'src/assets/image/b2.jpg',
        'src/assets/image/b3.jpg',
      
      ],
      description: 'Historic district location'
    },
    {
      id: 8,
      title: 'Eco Retreat in Langtang',
      price: 'Rs 2000 per night',
      images: [
        'src/assets/image/l1.jpg',
        'src/assets/image/l2.jpg',
        'src/assets/image/l3.jpg',
      
      ],
      description: 'Sustainable living in nature'
    },
    {
      id: 9,
      title: 'Modern Apartment in Patan',
      price: 'Rs 2000 per night',
      images: [
        'src/assets/image/p1.jpg',
        'src/assets/image/p2.jpg',
        'src/assets/image/p3.jpg',
      ],
      description: 'Contemporary living with cultural charm'
    },
    {
      id: 10,
      title: 'Teahouse Lodge in Everest Region',
      price: 'Rs 1500 per night',
      images: [
       'src/assets/image/m1.jpg',
        'src/assets/image/m2.jpg',
        'src/assets/image/m3.jpg',
      ],
      description: 'Authentic trekking experience'
    },
    {
      id: 11,
      title: 'Hotel Sarathi in Dhulikhel',
      price: 'Rs 3000 per night',
      images: [
        'src/assets/image/d1.jpg',
        'src/assets/image/d2.jpg',
        'src/assets/image/d3.jpg',
      ],
      description: 'A five star hotel with seven star facility'
    },
    {
      id: 12,
      title: 'Jungle Villa in Bardia',
      price: 'Rs 2000 per night',
      images: [
       'src/assets/image/j1.jpg',
        'src/assets/image/j2.jpg',
        'src/assets/image/j3.jpg',
      ],
      description: 'Wildlife and nature experience'
    }
  ];

  // State to track current image index for each card
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Function to handle next image
  const handleNextImage = (id) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % properties.find(p => p.id === id).images.length
    }));
  };

  // Function to handle previous image
  const handlePrevImage = (id) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + properties.find(p => p.id === id).images.length) % properties.find(p => p.id === id).images.length
    }));
  };

  return (
   
      <div className="properties-grid">
        {properties.map(property => (
          <div className="property-card" key={property.id}>
            <div className="image-carousel">
              <img 
                src={property.images[currentImageIndex[property.id] || 0]} 
                alt={property.title} 
                className="property-image"
              />
              <button 
                className="carousel-btn prev" 
                onClick={() => handlePrevImage(property.id)}
              >
                &lt;
              </button>
              <button 
                className="carousel-btn next" 
                onClick={() => handleNextImage(property.id)}
              >
                &gt;
              </button>
            </div>
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="price">₹{property.price}</p>
              <p className="description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Card;