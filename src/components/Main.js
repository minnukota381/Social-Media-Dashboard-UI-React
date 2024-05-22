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
      <Card title="LIKES" value="4,021" icon="thumb_up" bgColor="rgb(213, 0, 0)" />
      <Card title="SUBSCRIBERS" value="8,731" icon="subscriptions" bgColor="rgb(46, 125, 50)" />
      <Card title="FOLLOWERS" value="3,841" icon="groups" bgColor="rgb(255, 111, 0)" />
      <Card title="MESSAGES" value="1,962" icon="forum" bgColor="rgb(29, 38, 154)" />
    </div>
    <div className="products">
      <ProductCard />
      <ProductCard />
    </div>
    <SocialMediaCard />
  </main>
);

export default Main;
