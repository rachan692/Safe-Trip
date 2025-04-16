import React, { useState } from 'react';
import "./Houses.css";

const Houses = () => {
    // Limiting to 3 properties as requested
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

export default Houses;