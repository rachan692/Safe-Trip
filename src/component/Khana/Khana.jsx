import React from 'react';
import './Khana.css';

const Khana = () => {
  return (
    <div className="khana-container">
      <h1 className="khana-title">Authentic Nepali Cuisine</h1>
      <p className="khana-subtitle">Discover traditional Nepali food options available at our partnered accommodations.</p>
      
      <div className="khana-menu">
        <div className="menu-item">
          <div className="menu-icon">
            <span className="utensil-icon">ψ</span>
          </div>
          <h2 className="item-title">Traditional Dal Bhat</h2>
          <p className="item-description">Authentic Nepali meal with rice, lentils and curry</p>
          <p className="item-price"><span className="price">NPR 350</span> per meal</p>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <span className="utensil-icon">ψ</span>
          </div>
          <h2 className="item-title">Momo Platter</h2>
          <p className="item-description">Steamed dumplings with various fillings</p>
          <p className="item-price"><span className="price">NPR 250</span> per meal</p>
        </div>

        <div className="menu-item">
          <div className="menu-icon">
            <span className="utensil-icon">ψ</span>
          </div>
          <h2 className="item-title">Thakali Set</h2>
          <p className="item-description">Complete meal from the Thakali cuisine</p>
          <p className="item-price"><span className="price">NPR 450</span> per meal</p>
        </div>
      </div>
    </div>
  );
};

export default Khana;