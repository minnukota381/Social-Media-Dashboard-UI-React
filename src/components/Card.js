import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, value, icon, bgColor }) => (
  <div className="card" style={{ backgroundColor: bgColor }}>
    <div className="card-inner">
      <h3>{title}</h3>
      <i className={`bi ${icon}`} style={{ fontSize: '50px' }}></i>
    </div>
    <h1>{value}</h1>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Card;
