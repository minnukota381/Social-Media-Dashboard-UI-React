import React from 'react';

const Card = ({ title, value, icon, bgColor }) => (
  <div className="card" style={{ backgroundColor: bgColor }}>
    <div className="card-inner">
      <h2>{title}</h2>
      <span className="material-icons-outlined">{icon}</span>
    </div>
    <h1>{value}</h1>
  </div>
);

export default Card;
