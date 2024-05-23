import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics = () => {
  const data = {
    labels: ['Twitter', 'Instagram', 'YouTube', 'LinkedIn'],
    datasets: [
      {
        label: 'Posts',
        data: [500, 1000, 300, 200],
        backgroundColor: ['#1DA1F2', '#E1306C', '#FF0000', '#0077B5'],
      },
      {
        label: 'Engagement (%)',
        data: [25, 30, 45, 15],
        backgroundColor: ['#1DA1F2AA', '#E1306CAA', '#FF0000AA', '#0077B5AA'],
      },
      {
        label: 'Likes',
        data: [1200, 3000, 5000, 800],
        backgroundColor: ['#1DA1F277', '#E1306C77', '#FF000077', '#0077B577'],
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
          <FontAwesomeIcon icon={faYoutube} size="3x" color="#FF0000" />
          <h3 className="platform-title">YouTube</h3>
          <p className="platform-stats">Videos: 300</p>
          <p className="platform-stats">Engagement: 45%</p>
          <p className="platform-stats">Likes: 5,000</p>
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
