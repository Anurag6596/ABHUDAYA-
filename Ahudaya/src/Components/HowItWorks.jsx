// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h3>How It Works</h3>
      <p>We’ve made it easier than ever to access life-changing opportunities. Just follow these 3 simple steps.</p>
      <div className="steps">
        <div className="step">
          <img src="/path/to/register-icon.png" alt="Register" />
          <h4>Register</h4>
          <p>Sign up now for free to never miss an opportunity. Tons of opportunities are waiting for you.</p>
        </div>
        <div className="step">
          <img src="/path/to/update-profile-icon.png" alt="Update Profile" />
          <h4>Update profile</h4>
          <p>Once registered, ensure your profile is complete and select your preferred notification categories.</p>
        </div>
        <div className="step">
          <img src="/path/to/relax-icon.png" alt="Relax" />
          <h4>Sit back</h4>
          <p>Relax and let the opportunities come to you. We’ll notify you of every relevant opportunity.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
