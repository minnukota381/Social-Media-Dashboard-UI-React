import React from 'react';

const SocialMediaCard = () => (
  <div className="social-media">
    <div className="product">
      <div>
        <div className="product-icon background-twitter">
          <i className="bi bi-twitter"></i>
        </div>
        <h1 className="text-twitter">+274</h1>
        <p className="text-secondary">New followers on Twitter this week.</p>
      </div>
      <div>
        <div className="product-icon background-instagram">
          <i className="bi bi-instagram"></i>
        </div>
        <h1 className="text-instagram">+352</h1>
        <p className="text-secondary">Increased engagement on Instagram posts.</p>
      </div>
      <div>
        <div className="product-icon background-youtube">
          <i className="bi bi-youtube"></i>
        </div>
        <h1 className="text-youtube">+500</h1>
        <p className="text-secondary">New subscribers on YouTube this month.</p>
      </div>
      <div>
        <div className="product-icon background-linkedin">
          <i className="bi bi-linkedin"></i>
        </div>
        <h1 className="text-linkedin">+102</h1>
        <p className="text-secondary">New connections on LinkedIn this month.</p>
      </div>
    </div>
  </div>
);

export default SocialMediaCard;
