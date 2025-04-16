import React from 'react';
import './Experience.css';

const Experience = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      image: "/images/sarah.jpg",
      testimonial: "Staying in a traditional Nepalese home gave us insights into the culture we would have never experienced in a hotel. Our host family was incredibly welcoming and the mountain views were breathtaking."
    },
    {
      id: 2,
      name: "David Chen",
      country: "Singapore",
      image: "/images/david.jpg",
      testimonial: "The lakeside cottage in Pokhara was perfect. Affordable, clean, and just steps from the water. Our host arranged a private boat tour at sunrise—an unforgettable experience!"
    },
    {
      id: 3,
      name: "Emma Wilson",
      country: "Australia",
      image: "/images/emma.jpg",
      testimonial: "As a budget traveler, finding SafeTravels was a game-changer. I got to stay in authentic homes across Nepal for a fraction of hotel prices while contributing directly to local families."
    },
    {
      id: 4,
      name: "Miguel Rodriguez",
      country: "Spain",
      image: "/images/miguel.jpg",
      testimonial: "The family-cooked meals were the highlight of my stay. I learned to make traditional momos and enjoyed endless cups of masala chai with my hosts while sharing stories."
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      country: "Japan",
      image: "/images/yuki.jpg",
      testimonial: "My host in Bhaktapur was a local artist who showed me ancient woodcarving techniques. This cultural exchange was more valuable than any guided tour I could have booked."
    },
    {
      id: 6,
      name: "Olivia Meyer",
      country: "Germany",
      image: "/images/olivia.jpg",
      testimonial: "Trekking to Annapurna Base Camp was challenging, but returning to our homestay each evening made it special. The warmth and hospitality of the mountain communities is unmatched."
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">Guest Experiences</h1>
      <p className="experience-subtitle">
        Hear from travelers who have experienced authentic Nepalese hospitality
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="testimonial-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                }}
              />
              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.country}</p>
              </div>
            </div>
            <blockquote className="testimonial-quote">
              "{testimonial.testimonial}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;