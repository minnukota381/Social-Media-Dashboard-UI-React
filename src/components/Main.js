import React from 'react';
import Card from './Card';
import ProductCard from './ProductCard';
import SocialMediaCard from './SocialMediaCard';

const Main = () => (
  <main className="main-container">
    <div className="main-title">
      <h2>DASHBOARD</h2>
    </div>
    <div className="main-cards">
      <Card title="TWITTER FOLLOWERS" value="4,021" icon="bi bi-twitter" bgColor="rgb(29, 161, 242)" />
      <Card title="YOUTUBE SUBSCRIBERS" value="8,731" icon="bi bi-youtube" bgColor="rgb(255, 0, 0)" />
      <Card title="INSTAGRAM FOLLOWERS" value="3,841" icon="bi bi-instagram" bgColor="rgb(225, 48, 108)" />
      <Card title="LINKEDIN CONNECTIONS" value="1,962" icon="bi bi-linkedin" bgColor="rgb(0, 119, 181)" />
    </div>
    <div className="products">
      <ProductCard />
      <ProductCard />
    </div>
    <SocialMediaCard />
  </main>
);

export default Main;

