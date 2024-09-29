// src/components/StepCard.js
import React from 'react';
import './StepCard.css';

const StepCard = ({ icon, title, description }) => {
  return (
    <div className="step-card">
      <img src={icon} alt={title} className="step-icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;
