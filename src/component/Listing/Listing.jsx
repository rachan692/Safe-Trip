import React, { useState } from 'react';
import "./Listing.css";

const Listing = () => {
  // Nepal provinces list
  const nepalProvinces = [
    "Koshi Province", 
    "Madhesh Province", 
    "Bagmati Province", 
    "Gandaki Province", 
    "Lumbini Province", 
    "Karnali Province", 
    "Sudurpashchim Province"
  ];
  
  // Popular cities in Nepal
  const popularCities = [
    "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar", 
    "Birgunj", "Dharan", "Nepalgunj", "Butwal", "Dhangadhi", "Chitwan"
  ];

  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'apartment',
    pricePerMonth: '',
    maxGuests: '',
    bedrooms: '',
    bathrooms: '',
    location: {
      address: '',
      city: 'Kathmandu',
      district: '',
      province: 'Bagmati Province',
    },
    nearbyAttractions: '',
    description: '',
    amenities: {
      wifi: false,
      kitchen: false,
      parking: false,
      airConditioning: false,
      heating: false,
      hotWater: false,
      tv: false,
      balcony: false,
      backup: false,
      securityGuard: false
    },
    houseRules: '',
    availableFrom: '',
    minimumStay: '1',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value
      }
    });
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked
      }
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property rental listing submitted:", formData);
    alert("Your property has been listed successfully on Safe Trip Nepal!");
    // Here you would send data to backend
  };

  return (
    <div className="safe-trip-listing-container">
      <h1>List Your Property on Safe Trip Nepal</h1>
      <p className="subtitle">Share your space with travelers and earn extra income</p>
      
      <form onSubmit={handleSubmit} className="listing-form">
        <div className="form-section">
          <h2>Property Details</h2>
          
          <div className="form-group">
            <label htmlFor="propertyName">Property Name *</label>
            <input
              type="text"
              id="propertyName"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              placeholder="Give your property a catchy name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="propertyType">Property Type *</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="room">Private Room</option>
              <option value="villa">Villa</option>
              <option value="homestay">Homestay</option>
              <option value="guesthouse">Guest House</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pricePerMonth">Price Per Month (NPR) *</label>
              <input
                type="number"
                id="pricePerMonth"
                name="pricePerMonth"
                value={formData.pricePerMonth}
                onChange={handleChange}
                placeholder="e.g. 25000"
                min="1"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="maxGuests">Maximum Guests *</label>
              <input
                type="number"
                id="maxGuests"
                name="maxGuests"
                value={formData.maxGuests}
                onChange={handleChange}
                placeholder="e.g. 4"
                min="1"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms *</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="e.g. 2"
                min="0"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms *</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                placeholder="e.g. 1"
                min="0"
                step="1"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Location</h2>
          
          <div className="form-group">
            <label htmlFor="address">Street Address / Tole *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.location.address}
              onChange={handleLocationChange}
              placeholder="e.g. Thamel, Kantipath Road"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City/Town *</label>
              <select
                id="city"
                name="city"
                value={formData.location.city}
                onChange={handleLocationChange}
                required
              >
                {popularCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="district">District *</label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.location.district}
                onChange={handleLocationChange}
                placeholder="e.g. Kathmandu District"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="province">Province *</label>
            <select
              id="province"
              name="province"
              value={formData.location.province}
              onChange={handleLocationChange}
              required
            >
              {nepalProvinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="nearbyAttractions">Nearby Attractions</label>
            <textarea
              id="nearbyAttractions"
              name="nearbyAttractions"
              value={formData.nearbyAttractions}
              onChange={handleChange}
              placeholder="e.g. 5 min walk to Durbar Square, 10 min to Thamel"
              rows="2"
            ></textarea>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Description</h2>
          
          <div className="form-group">
            <label htmlFor="description">Property Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell travelers what makes your place special"
              rows="5"
              required
            ></textarea>
            <p className="char-count">Minimum 100 characters</p>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Amenities</h2>
          <p>Select all amenities available at your property</p>
          
          <div className="amenities-grid">
            <div className="amenity-item">
              <input
                type="checkbox"
                id="wifi"
                name="wifi"
                checked={formData.amenities.wifi}
                onChange={handleAmenityChange}
              />
              <label htmlFor="wifi">WiFi</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="kitchen"
                name="kitchen"
                checked={formData.amenities.kitchen}
                onChange={handleAmenityChange}
              />
              <label htmlFor="kitchen">Kitchen</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="parking"
                name="parking"
                checked={formData.amenities.parking}
                onChange={handleAmenityChange}
              />
              <label htmlFor="parking">Parking</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="airConditioning"
                name="airConditioning"
                checked={formData.amenities.airConditioning}
                onChange={handleAmenityChange}
              />
              <label htmlFor="airConditioning">Air Conditioning</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="heating"
                name="heating"
                checked={formData.amenities.heating}
                onChange={handleAmenityChange}
              />
              <label htmlFor="heating">Heating</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="hotWater"
                name="hotWater"
                checked={formData.amenities.hotWater}
                onChange={handleAmenityChange}
              />
              <label htmlFor="hotWater">Hot Water</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="tv"
                name="tv"
                checked={formData.amenities.tv}
                onChange={handleAmenityChange}
              />
              <label htmlFor="tv">TV</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="balcony"
                name="balcony"
                checked={formData.amenities.balcony}
                onChange={handleAmenityChange}
              />
              <label htmlFor="balcony">Balcony/Terrace</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="backup"
                name="backup"
                checked={formData.amenities.backup}
                onChange={handleAmenityChange}
              />
              <label htmlFor="backup">Power Backup/Inverter</label>
            </div>
            
            <div className="amenity-item">
              <input
                type="checkbox"
                id="securityGuard"
                name="securityGuard"
                checked={formData.amenities.securityGuard}
                onChange={handleAmenityChange}
              />
              <label htmlFor="securityGuard">Security Guard</label>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Rental Terms</h2>
          
          <div className="form-group">
            <label htmlFor="houseRules">House Rules</label>
            <textarea
              id="houseRules"
              name="houseRules"
              value={formData.houseRules}
              onChange={handleChange}
              placeholder="Any specific rules guests should follow? (e.g. No smoking, No parties, Quiet hours)"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="availableFrom">Available From *</label>
              <input
                type="date"
                id="availableFrom"
                name="availableFrom"
                value={formData.availableFrom}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="minimumStay">Minimum Stay (months) *</label>
              <select
                id="minimumStay"
                name="minimumStay"
                value={formData.minimumStay}
                onChange={handleChange}
                required
              >
                <option value="1">1 month</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Photos</h2>
          <p>High-quality photos will help your property stand out</p>
          
          <div className="form-group">
            <label htmlFor="images">Upload Property Images *</label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageChange}
              multiple
              accept="image/*"
              required
            />
            <p className="file-tip">Add at least 5 photos. Include images of all rooms, exterior, and special features.</p>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Owner Information</h2>
          <p>This information will be pre-filled from your account details</p>
          <div className="host-info">
            <p><strong>Name:</strong> Your Name (from account)</p>
            <p><strong>Email:</strong> your.email@example.com (from account)</p>
            <p><strong>Phone:</strong> +977 XXX-XXXXXXX (from account)</p>
          </div>
        </div>
        
        <div className="agreement-section">
          <div className="form-check">
            <input type="checkbox" id="termsAgreement" required />
            <label htmlFor="termsAgreement">
              I agree to Safe Trip Nepal's terms and conditions for property listings
            </label>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="button" className="save-draft-button">Save as Draft</button>
          <button type="submit" className="submit-button">List Your Property</button>
        </div>
      </form>
    </div>
  );
};

export default Listing;