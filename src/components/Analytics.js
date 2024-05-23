import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics = () => {
  const data = {
    labels: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
    datasets: [
      {
        label: 'Posts',
        data: [500, 1000, 800, 200],
        backgroundColor: ['#1DA1F2', '#E1306C', '#4267B2', '#0077B5'],
      },
      {
        label: 'Engagement (%)',
        data: [25, 30, 20, 15],
        backgroundColor: ['#1DA1F2AA', '#E1306CAA', '#4267B2AA', '#0077B5AA'],
      },
      {
        label: 'Likes',
        data: [1200, 3000, 2500, 800],
        backgroundColor: ['#1DA1F277', '#E1306C77', '#4267B277', '#0077B577'],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics">
      <h2 className="analytics-title">Social Media Analytics</h2>
      <div className="analytics-content">
        <div className="platform-card">
          <FontAwesomeIcon icon={faTwitter} size="3x" color="#1DA1F2" />
          <h3 className="platform-title">Twitter</h3>
          <p className="platform-stats">Posts: 500</p>
          <p className="platform-stats">Engagement: 25%</p>
          <p className="platform-stats">Likes: 1,200</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#E1306C" />
          <h3 className="platform-title">Instagram</h3>
          <p className="platform-stats">Posts: 1000</p>
          <p className="platform-stats">Engagement: 30%</p>
          <p className="platform-stats">Likes: 3,000</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faFacebook} size="3x" color="#4267B2" />
          <h3 className="platform-title">Facebook</h3>
          <p className="platform-stats">Posts: 800</p>
          <p className="platform-stats">Engagement: 20%</p>
          <p className="platform-stats">Likes: 2,500</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
          <h3 className="platform-title">LinkedIn</h3>
          <p className="platform-stats">Posts: 200</p>
          <p className="platform-stats">Engagement: 15%</p>
          <p className="platform-stats">Likes: 800</p>
        </div>
      </div>
      <div className="analytics-graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
