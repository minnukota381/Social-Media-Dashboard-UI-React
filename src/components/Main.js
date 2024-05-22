import React from 'react';
import Card from './Card';
import ProductCard from './ProductCard';
import SocialMediaCard from './SocialMediaCard';
import Analytics from './Analytics'; // Import the Analytics component


const Main = () => (
  <main className="main-container">
    <div className="main-title">
      <h2>DASHBOARD</h2>
    </div>
    <div className="main-cards">
      <Card title="FOLLOWERS" value="4,021" icon="bi bi-twitter" bgColor="rgb(29, 161, 242)" />
      <Card title="SUBSCRIBERS" value="8,731" icon="bi bi-youtube" bgColor="rgb(255, 0, 0)" />
      <Card title="FOLLOWERS" value="3,841" icon="bi bi-instagram" bgColor="rgb(225, 48, 108)" />
      <Card title="CONNECTIONS" value="1,962" icon="bi bi-linkedin" bgColor="rgb(0, 119, 181)" />
    </div>
    <SocialMediaCard />
    <div className="products">
      <ProductCard />
    </div>
    <Analytics /> {/* Add the Analytics component here */}

  </main>
);

export default Main;

