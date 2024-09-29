// src/components/BackedBy.js
import React from 'react';
import './BackedBy.css';

const BackedBy = () => {
  return (
    <section className="backed-by">
      <h3>We are backed by</h3>
      <div className="logos">
        <img src="./images/a.png" alt="Amrita" />
        <img src="./ima.png" alt="Startup India" />
        <img src="https://d2w7l1p59qkl0r.cloudfront.net/static/images/partner12-new.png" alt="Startup Karnataka" />
        <img src="https://theglobalscholarship.org//assets/img/tiehubli.png" />
        <img src="https://d2w7l1p59qkl0r.cloudfront.net/static/images/partner15-new.png" alt="Tie Hubli" />
      </div>
    </section>
  );
};

export default BackedBy;
