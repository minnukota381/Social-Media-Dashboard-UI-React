import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Analytics = () => (
  <div className="analytics">
    <h2 className="analytics-title">Social Media Analytics</h2>
    <div className="analytics-content">
      <div className="platform-card">
        <FontAwesomeIcon icon={faTwitter} size="3x" color="#1DA1F2" />
        <h3 className="platform-title">Twitter</h3>
        <p className="platform-stats">Followers: 10,000</p>
        <p className="platform-stats">Posts: 500</p>
        <p className="platform-stats">Engagement: 25%</p>
      </div>
      <div className="platform-card">
        <FontAwesomeIcon icon={faInstagram} size="3x" color="#E1306C" />
        <h3 className="platform-title">Instagram</h3>
        <p className="platform-stats">Followers: 20,000</p>
        <p className="platform-stats">Posts: 1000</p>
        <p className="platform-stats">Engagement: 30%</p>
      </div>
      <div className="platform-card">
        <FontAwesomeIcon icon={faFacebook} size="3x" color="#4267B2" />
        <h3 className="platform-title">Facebook</h3>
        <p className="platform-stats">Followers: 15,000</p>
        <p className="platform-stats">Posts: 800</p>
        <p className="platform-stats">Engagement: 20%</p>
      </div>
      <div className="platform-card">
        <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
        <h3 className="platform-title">LinkedIn</h3>
        <p className="platform-stats">Connections: 5000</p>
        <p className="platform-stats">Posts: 200</p>
        <p className="platform-stats">Engagement: 15%</p>
      </div>
    </div>
  </div>
);

export default Analytics;
