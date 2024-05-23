import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics = () => {
  const barData = {
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
        data: [1200, 1467, 1576, 800],
        backgroundColor: ['#1DA1F277', '#E1306C77', '#FF000077', '#0077B577'],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Twitter Followers',
        data: [10000, 12000, 15000, 18000, 20000, 22000, 25000, 28000, 30000, 33000, 35000, 38000],
        borderColor: '#1DA1F2',
        fill: false,
      },
      {
        label: 'Instagram Followers',
        data: [15000, 18000, 22000, 25000, 28000, 30000, 33000, 36000, 39000, 42000, 45000, 48000],
        borderColor: '#E1306C',
        fill: false,
      },
      {
        label: 'YouTube Subscribers',
        data: [8000, 10000, 12000, 15000, 18000, 20000, 23000, 26000, 29000, 32000, 35000, 38000],
        borderColor: '#FF0000',
        fill: false,
      },
      {
        label: 'LinkedIn Followers',
        data: [5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000, 21000, 23000, 25000, 27000],
        borderColor: '#0077B5',
        fill: false,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics">
      <h2 className="analytics-title">Analytics</h2>
      <div className="analytics-content">
        <div className="platform-card">
          <FontAwesomeIcon icon={faTwitter} size="3x" color="#1DA1F2" />
          <h3 className="platform-title">Twitter</h3>
          <p className="platform-stats">Posts: 348</p>
          <p className="platform-stats">Engagement: 25%</p>
          <p className="platform-stats">Likes: 1,200</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#E1306C" />
          <h3 className="platform-title">Instagram</h3>
          <p className="platform-stats">Posts: 768</p>
          <p className="platform-stats">Engagement: 30%</p>
          <p className="platform-stats">Likes: 1,467</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faYoutube} size="3x" color="#FF0000" />
          <h3 className="platform-title">YouTube</h3>
          <p className="platform-stats">Videos: 321</p>
          <p className="platform-stats">Engagement: 45%</p>
          <p className="platform-stats">Likes: 1,576</p>
        </div>
        <div className="platform-card">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
          <h3 className="platform-title">LinkedIn</h3>
          <p className="platform-stats">Posts: 256</p>
          <p className="platform-stats">Engagement: 15%</p>
          <p className="platform-stats">Likes: 800</p>
        </div>
      </div>
      <div className="analytics-graph">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="analytics-graph">
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default Analytics;