import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

// If you have local payment icons, you would import them like this:
// import { ReactComponent as ESewaIcon } from '../assets/icons/esewa.svg';
// import { ReactComponent as KhaltiIcon } from '../assets/icons/khalti.svg';
// etc.

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/safety-resources">Mountain Safety</Link></li>
              <li><Link to="/cancellation-options">Cancellation Options</Link></li>
              <li><Link to="/emergency-contacts">Emergency Contacts</Link></li>
              <li><Link to="/support-disabled">Support for Disabled Travelers</Link></li>
              <li><Link to="/report-concern">Report an Issue</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Explore Nepal</h4>
            <ul>
              <li><Link to="/kathmandu-valley">Kathmandu Valley</Link></li>
              <li><Link to="/pokhara">Pokhara & Annapurna</Link></li>
              <li><Link to="/chitwan">Chitwan National Park</Link></li>
              <li><Link to="/everest-region">Everest Region</Link></li>
              <li><Link to="/lumbini">Lumbini</Link></li>
              <li><Link to="/rural-nepal">Rural Nepal</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Host with Us</h4>
            <ul>
              <li><Link to="/host-home">List Your Homestay</Link></li>
              <li><Link to="/host-experience">Offer Local Experiences</Link></li>
              <li><Link to="/tour-guide">Become a Guide</Link></li>
              <li><Link to="/host-resources">Host Resources</Link></li>
              <li><Link to="/community-forum">Community Forum</Link></li>
              <li><Link to="/responsible-tourism">Responsible Tourism</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-mission">Our Mission</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/sustainability">Sustainable Tourism</Link></li>
              <li><Link to="/local-partnerships">Local Partnerships</Link></li>
              <li><Link to="/social-impact">Social Impact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Safe Trip Nepal</h4>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="app-download">
            <h4>Download our app</h4>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="src/assets/image/app-store.png" alt="Download on App Store" />
              </a>
              <a href="#" className="app-button">
                <img src="src/assets/image/google-play.png" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          
          <div className="payment-methods">
            <h4>Payment methods</h4>
            <div className="payment-icons">
              {/* Replace with actual Nepali payment system icons/logos */}
              <div className="payment-icon">eSewa</div>
              <div className="payment-icon">Khalti</div>
              <div className="payment-icon">IME Pay</div>
              <div className="payment-icon">Connect IPS</div>
              <div className="payment-icon">Fonepay</div>
              <div className="payment-icon">Cash</div>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© {currentYear} Safe Trip Nepal</span>
            <span className="dot">·</span>
            <Link to="/privacy">Privacy</Link>
            <span className="dot">·</span>
            <Link to="/terms">Terms</Link>
            <span className="dot">·</span>
            <Link to="/sitemap">Sitemap</Link>
            <span className="dot">·</span>
            <Link to="/trekking-permits">Trekking Permits</Link>
          </div>
          
          <div className="footer-locale">
            <div className="language-selector">
              <select name="language" id="language-select">
                <option value="en">English</option>
                <option value="ne">नेपाली</option>
                <option value="hi">हिन्दी</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
              </select>
            </div>
            
            <div className="currency-selector">
              <select name="currency" id="currency-select">
                <option value="npr">NPR (रू)</option>
                <option value="usd">USD ($)</option>
                <option value="eur">EUR (€)</option>
                <option value="gbp">GBP (£)</option>
                <option value="inr">INR (₹)</option>
                <option value="aud">AUD ($)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;