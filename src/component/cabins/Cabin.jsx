import React, { useState } from 'react';
import "./Cabin.css";

const Cabin = () => {
    // Limiting to 3 properties as requested
    const properties = [
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
                        <p className="price">{property.price}</p>
                        <p className="description">{property.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cabin;