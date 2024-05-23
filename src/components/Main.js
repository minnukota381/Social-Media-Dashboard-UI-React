import React from 'react';
import Card from './Card';
import ProductCard from './ProductCard';
import SocialMediaCard from './SocialMediaCard';
import Analytics from './Analytics';
import profilePic from '../Assets/minnu.JPG'; // Adjust the import path if necessary

const Main = () => {
  const cardData = [
    {
      title: 'FOLLOWERS',
      value: 4021,
      icon: 'bi bi-twitter',
      bgColor: 'rgb(29, 161, 242)',
    },
    {
      title: 'SUBSCRIBERS',
      value: 8731,
      icon: 'bi bi-youtube',
      bgColor: 'rgb(255, 0, 0)',
    },
    {
      title: 'FOLLOWERS',
      value: 3841,
      icon: 'bi bi-instagram',
      bgColor: 'rgb(225, 48, 108)',
    },
    {
      title: 'CONNECTIONS',
      value: 1962,
      icon: 'bi bi-linkedin',
      bgColor: 'rgb(0, 119, 181)',
    },
  ];

  return (
    <main className="main-container">
      <header className="header">
        <h1 className="header-title">Social Media Dashboard</h1>
        <div className="header-user">
          <img src={profilePic} alt="User" className="user-avatar" />
          <button className="logout-button">Logout</button>
        </div>
      </header>
      <div className="main-cards">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            value={data.value.toLocaleString()}
            icon={data.icon}
            bgColor={data.bgColor}
          />
        ))}
      </div>
      <SocialMediaCard />
      <div className="products">
        <ProductCard />
      </div>
      <Analytics />
      <footer className="footer">
        <p>Created by @minnukota381</p>
        <div className="footer-social">
          <a href="https://twitter.com/minnukota381" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/minnukota381" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/minnukota381" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
