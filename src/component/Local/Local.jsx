import React, { useState } from 'react';
import './Local.css';

const Local = () => {
  const [activeChatGuide, setActiveChatGuide] = useState(null);

  const guides = [
    {
      id: 1,
      name: 'Nissan Sherpa',
      region: 'Everest Region Trekking',
      experience: '10 years',
      image: null // Placeholder for Pemba's image
    },
    {
      id: 2,
      name: 'Kushal Sharki',
      region: 'Annapurna Circuit',
      experience: '8 years',
      image: '/api/placeholder/280/280' // Using placeholder for Lakpa's image
    },
    {
      id: 3,
      name: 'Maya Gurung',
      region: 'Cultural Tours Kathmandu Valley',
      experience: '5 years',
      image: '/api/placeholder/280/280' // Using placeholder for Maya's image
    }
  ];

  const handleChatWithGuide = (guideId) => {
    setActiveChatGuide(guideId);
  };

  const closeChatbot = () => {
    setActiveChatGuide(null);
  };

  return (
    <div className="local-container">
      <h1 className="local-title">Connect with Local Guides</h1>
      <p className="local-subtitle">
        Find experienced local guides who can show you the authentic Nepal, help navigate trekking
        routes, and provide cultural insights.
      </p>
      
      <div className="guides-container">
        {guides.map((guide) => (
          <div key={guide.id} className="guide-card">
            <div className="guide-image-container">
              {guide.image ? (
                <img src={guide.image} alt={guide.name} className="guide-image" />
              ) : (
                <div className="guide-name-avatar">
                  <span>{guide.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              )}
            </div>
            <h2 className="guide-name">{guide.name}</h2>
            <p className="guide-region">{guide.region}</p>
            <p className="guide-experience">Experience: {guide.experience}</p>
            <button 
              className="chat-button" 
              onClick={() => handleChatWithGuide(guide.id)}
            >
              <span className="chat-icon">💬</span> Chat with Guide
            </button>
          </div>
        ))}
      </div>

      {activeChatGuide && (
        <div className="chatbot-overlay">
          <div className="chatbot-container">
            <div className="chatbot-header">
              <h3>Chat with {guides.find(g => g.id === activeChatGuide).name}</h3>
              <button className="close-button" onClick={closeChatbot}>×</button>
            </div>
            <div className="chatbot-messages">
              <div className="message guide-message">
                Hello! I'm {guides.find(g => g.id === activeChatGuide).name}. How can I help you with your trip to Nepal?
              </div>
            </div>
            <div className="chatbot-input">
              <input type="text" placeholder="Type your message..." />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Local;