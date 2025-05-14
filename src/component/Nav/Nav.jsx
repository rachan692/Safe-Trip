import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import { FaUser, FaFire, FaHome, FaBed, FaWarehouse, FaSwimmingPool, FaUsers, FaBuilding, FaShoppingBag, FaTree, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNav2Visible, setIsNav2Visible] = useState(true);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNav2 = () => {
    setIsNav2Visible(!isNav2Visible);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <div id='Nav'>
      <div className="nav1">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/image/SAFE-TRIP.png" alt="" className="logo-image" />
              <span className="logo-text">Safe Trip</span>
            </Link>
          </div>
          
          <div className="mobile-menu-button">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          <div className="top-nav-links">
            <Link to="/transportation" className="nav-link">Transportation</Link>
            <Link to="/trip-planner" className="nav-link">Trip Planner</Link>
            <Link to="/guides" className="nav-link">Guides</Link>
            <Link to="/food" className="nav-link">Food</Link>
            <Link to="/about" className="nav-link">About us</Link>
            <Link to="/student" className="nav-link">Students</Link>

          </div>
          
          <div className="nav-buttons">
            <button className="list-button">
              <Link to="/listings">List Your Rooms</Link>
            </button>
            <div className="user-menu-container">
              <button 
                ref={buttonRef}
                className="user-button" 
                onClick={toggleMenu}
                onMouseEnter={() => setIsMenuVisible(true)}
              >
                <FaUser />
              </button>
              {isMenuVisible && (
                <div 
                  ref={menuRef}
                  className="user-menu"
                  onMouseLeave={() => setIsMenuVisible(false)}
                >
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/listings">List Your Rooms</Link></li>
                    <li>Help center</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Chevron toggle button */}
      <div className="nav-toggle">
        <button onClick={toggleNav2} className="chevron-button">
          {isNav2Visible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {/* Category navigation */}
      <div className={`nav2 ${isMobileMenuOpen ? 'mobile-open' : ''} ${isNav2Visible ? '' : 'nav2-hidden'}`}>
        <div className="category-icons">
          <Link to="/trending" className="category-item">
            <FaFire />
            <span>Trending</span>
          </Link>

          <Link to="/house" className="category-item">
            <FaHome />
            <span>Houses</span>
          </Link>

          <Link to="/rooms" className="category-item">
            <FaBed />
            <span>Rooms</span>
          </Link>

          <Link to="/farmhouses" className="category-item">
            <FaWarehouse />
            <span>Farm Houses</span>
          </Link>

          <Link to="/poolhouses" className="category-item">
            <FaSwimmingPool />
            <span>Pool Houses</span>
          </Link>

          <Link to="/renthouses" className="category-item">
            <FaUsers />
            <span>Rent Houses</span>
          </Link>

          <Link to="/cabins" className="category-item">
            <FaBuilding />
            <span>Cabins</span>
          </Link>

          <Link to="/shops" className="category-item">
            <FaShoppingBag />
            <span>Shops</span>
          </Link>

          <Link to="/foresthouses" className="category-item">
            <FaTree />
            <span>Forest Houses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;