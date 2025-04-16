import React, { useState } from 'react';
import './Guide.css';

const Guide = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    {
      id: 1,
      name: "Nissan Sherpa",
      initials: "NS",
      specialty: "Everest Region Trekking",
      experience: "10 years",
      isFriend: false
    },
    {
      id: 2,
      name: "Kushal Sharki",
      initials: "KS",
      specialty: "Annapurna Circuit",
      experience: "8 years",
      isFriend: false
    },
    {
      id: 3,
      name: "Maya Gurung",
      initials: "MG",
      specialty: "Cultural Tours Kathmandu Valley",
      experience: "5 years",
      isFriend: false
    },
    {
      id: 4,
      name: "Pemba Lama",
      initials: "PL",
      specialty: "Langtang Valley Trekking",
      experience: "12 years",
      isFriend: false
    },
    {
      id: 5,
      name: "Tashi Dolma",
      initials: "TD",
      specialty: "Upper Mustang Exploration",
      experience: "7 years",
      isFriend: false
    },
    {
      id: 6,
      name: "Mingma Sherpa",
      initials: "MS",
      specialty: "Island Peak Climbing",
      experience: "15 years",
      isFriend: false
    },
    {
      id: 7,
      name: "Lakpa Tamang",
      initials: "LT",
      specialty: "Manaslu Circuit",
      experience: "9 years",
      isFriend: false
    },
    {
      id: 8,
      name: "Dawa Yangzom",
      initials: "DY",
      specialty: "Poon Hill Trek",
      experience: "6 years",
      isFriend: false
    },
    {
      id: 9,
      name: "Pasang Nuru",
      initials: "PN",
      specialty: "Kanchenjunga Base Camp",
      experience: "11 years",
      isFriend: false
    },
    {
      id: 10,
      name: "Chiring Dorje",
      initials: "CD",
      specialty: "Mera Peak Expedition",
      experience: "14 years",
      isFriend: false
    },
    {
      id: 11,
      name: "Kamala Bhatt",
      initials: "KB",
      specialty: "Heritage Tours",
      experience: "4 years",
      isFriend: false
    },
    {
      id: 12,
      name: "Tenzing Norbu",
      initials: "TN",
      specialty: "Three Passes Trek",
      experience: "13 years",
      isFriend: false
    }
  ];

  const [guideList, setGuideList] = useState(guides);

  const toggleFriend = (id) => {
    setGuideList(guideList.map(guide => 
      guide.id === id ? {...guide, isFriend: !guide.isFriend} : guide
    ));
  };

  const openChat = (guide) => {
    setSelectedGuide(guide);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
    setSelectedGuide(null);
  };

  return (
    <div className="guide-container">
      <h1 className="page-title">Connect with Local Guides</h1>
      
      <div className="guide-cards-container">
        {guideList.map(guide => (
          <div className="guide-card" key={guide.id}>
            <div className="guide-avatar">
              <span className="guide-initials">{guide.initials}</span>
            </div>
            <h2 className="guide-name">{guide.name}</h2>
            <p className="guide-specialty">{guide.specialty}</p>
            <p className="guide-experience">Experience: {guide.experience}</p>
            
            <div className="guide-actions">
              <button 
                className="chat-button"
                onClick={() => openChat(guide)}
              >
                <span className="chat-icon">💬</span> Chat with Guide
              </button>
              
              <button 
                className={`friend-button ${guide.isFriend ? 'friend-added' : ''}`}
                onClick={() => toggleFriend(guide.id)}
              >
                {guide.isFriend ? 'Remove Friend' : 'Add Friend'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showChat && selectedGuide && (
        <div className="chat-modal">
          <div className="chat-content">
            <div className="chat-header">
              <h3>Chat with {selectedGuide.name}</h3>
              <button className="close-button" onClick={closeChat}>×</button>
            </div>
            <div className="chat-messages">
              <div className="system-message">
                You are now connected with {selectedGuide.name}. Start chatting!
              </div>
            </div>
            <div className="chat-input-area">
              <input 
                type="text" 
                className="chat-input" 
                placeholder="Type your message..."
              />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guide;