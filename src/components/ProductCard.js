import React from 'react';

const ProductCard = () => (
  <div className="product-card">
    <h2 className="product-title">Monitor</h2>
    <p className="product-description">
      Monitor engagement, track follower growth, and analyze performance across multiple social media platforms with our real-time analytics tool.
    </p>
    <div className="product-features">
      <div className="feature">
        <span className="material-icons-outlined">trending_up</span>
        <p className="feature-description">Track follower growth</p>
      </div>
      <div className="feature">
        <span className="material-icons-outlined">bar_chart</span>
        <p className="feature-description">Analyze performance metrics</p>
      </div>
      <div className="feature">
        <span className="material-icons-outlined">assessment</span>
        <p className="feature-description">Monitor engagement</p>
      </div>
    </div>
  </div>
);

export default ProductCard;


