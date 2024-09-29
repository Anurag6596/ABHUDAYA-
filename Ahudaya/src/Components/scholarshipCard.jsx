// src/components/ScholarshipCard.js
import React from 'react';
import './ScholarshipCard.css';

const ScholarshipCard = ({ title, deadline }) => {
  return (
    <div className="scholarship-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>Deadline Date: {deadline}</p>
        <button className="view-btn">View Detail</button>
      </div>
    </div>
  );
};

export default ScholarshipCard;

