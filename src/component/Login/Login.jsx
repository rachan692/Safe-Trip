import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Reset login status when user changes input
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle successful login
      console.log('Form submitted:', formData);
      setIsLoggedIn(true);
      // Here you would typically make an API call to authenticate
    }
  };
  
  return (
    <div id="login" className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login Page</h1>
        
        {isLoggedIn ? (
          <div className="login-success">
            <div className="success-icon">✓</div>
            <h2>You are logged in!</h2>
            <p>Welcome, {formData.email}</p>
            <button 
              className="logout-button" 
              onClick={() => {
                setIsLoggedIn(false);
                setFormData({ email: '', password: '' });
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            
            <button type="submit" className="login-button">Login</button>
          </form>
        )}
        
        {!isLoggedIn && (
          <div className="additional-options">
            <a href="#forgot-password">Forgot Password?</a>
            <p>
              Don't have an account? <a href="#register">Sign Up</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;