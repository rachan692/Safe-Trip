import React, { useState, useEffect, useRef } from 'react';
import './StatsCounter.css';

const StatsCounter = () => {
  // Define your target stats
  const stats = [
    { id: 1, value: 50000, label: 'People Connected', suffix: '+' },
    { id: 2, value: 5000, label: 'Homestays Available', suffix: '+' },
    { id: 3, value: 1000, label: 'Guides Available', suffix: '+' }
  ];
 
  // Create a ref for the component
  const sectionRef = useRef(null);
 
  // State to hold current counter values
  const [counters, setCounters] = useState(stats.map(() => 0));
  // State to track if animation has started
  const [hasAnimated, setHasAnimated] = useState(false);
 
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    };
    
    // Function to handle scroll
    const handleScroll = () => {
      if (hasAnimated) return;
     
      if (isInViewport(sectionRef.current)) {
        setHasAnimated(true);
        startCountAnimation();
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
   
    // Check on initial load as well
    handleScroll();
   
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);
  
  // Function to animate the counters
  const startCountAnimation = () => {
    // Duration in milliseconds
    const animationDuration = 2000;
    const frameDuration = 16; // ~60 FPS
    const totalFrames = Math.round(animationDuration / frameDuration);
   
    let frame = 0;
   
    // Calculate increments for each counter
    const incrementValues = stats.map(stat => stat.value / totalFrames);
   
    const animateCounters = () => {
      if (frame === totalFrames) return;
     
      frame++;
     
      setCounters(prevCounters =>
        prevCounters.map((counter, index) => {
          const increment = incrementValues[index];
          const newValue = Math.min(counter + increment, stats[index].value);
          return newValue;
        })
      );
     
      requestAnimationFrame(animateCounters);
    };
   
    requestAnimationFrame(animateCounters);
  };
  
  return (
    <div className="stats-counter-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={stat.id}>
            <div className="stat-value">
              {Math.round(counters[index]).toLocaleString()}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;