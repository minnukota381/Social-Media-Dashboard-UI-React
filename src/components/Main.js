import React from 'react';
import Card from './Card';
import ProductCard from './ProductCard';
import SocialMediaCard from './SocialMediaCard';
import Analytics from './Analytics';

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
      <div className="main-title">
        <h2>DASHBOARD</h2>
      </div>
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
    </main>
  );
};

export default Main;