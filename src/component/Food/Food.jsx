import React from 'react';
import './Food.css';

const Food = () => {
  const nepaliFoods = [
    {
      id: 1,
      name: "Momo",
      description: "Steamed dumplings filled with spiced meat or vegetables, served with tomato chutney.",
      price: 150,
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Dal Bhat",
      description: "Traditional Nepali meal with rice, lentil soup, vegetable curry, pickles and often meat curry.",
      price: 250,
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Sel Roti",
      description: "Sweet, ring-shaped rice bread/doughnut, typically prepared during Tihar festival.",
      price: 80,
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Choila",
      description: "Spicy grilled buffalo or chicken meat with a mixture of spices and herbs.",
      price: 180,
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      name: "Thukpa",
      description: "Hot noodle soup with vegetables and meat, popular in Himalayan regions.",
      price: 160,
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      name: "Dhido",
      description: "Traditional Nepali food made from buckwheat or millet flour, served with curry or vegetables.",
      price: 200,
      image: "/api/placeholder/400/300",
    },
    {
      id: 7,
      name: "Yomari",
      description: "Steamed dumplings filled with molasses or khuwa (reduced solid milk), popular during Yomari Punhi festival.",
      price: 130,
      image: "/api/placeholder/400/300",
    },
    {
      id: 8,
      name: "Chatamari",
      description: "Newari rice crepe topped with buffalo meat, eggs, and spices, often called 'Nepali Pizza'.",
      price: 190,
      image: "/api/placeholder/400/300",
    },
    {
      id: 9,
      name: "Kwati",
      description: "Mixed bean soup with nine different beans, traditionally eaten during Janai Purnima festival.",
      price: 140,
      image: "/api/placeholder/400/300",
    },
    {
      id: 10,
      name: "Aloo Tama",
      description: "Curry made with potatoes, bamboo shoots, and black-eyed beans, flavored with Himalayan spices.",
      price: 170,
      image: "/api/placeholder/400/300",
    },
    {
      id: 11,
      name: "Gundruk",
      description: "Fermented leafy green vegetables, often prepared as soup or pickle, rich in probiotics.",
      price: 120,
      image: "/api/placeholder/400/300",
    },
    {
      id: 12,
      name: "Juju Dhau",
      description: "Traditional, creamy yogurt made from buffalo milk, known as 'King of Yogurt' from Bhaktapur.",
      price: 100,
      image: "/api/placeholder/400/300",
    }
  ];

  return (
    <div className="food-container">
      <div className="food-header">
        <h1>Authentic Nepalese Cuisine</h1>
        <p>Experience the rich flavors and traditions of Nepal</p>
      </div>
      
      <div className="food-grid">
        {nepaliFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <div className="food-image">
              <img src={food.image} alt={food.name} />
            </div>
            <div className="food-content">
              <h3>{food.name}</h3>
              <p className="food-description">{food.description}</p>
              <div className="food-footer">
                <span className="food-price">Rs. {food.price}</span>
                <button className="order-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;