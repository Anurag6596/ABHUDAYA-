// src/components/StepsToScholarship.js
import React from 'react';
import StepCard from './StepCard';
import './StepsToScholarship.css';

const StepsToScholarship = () => {
  const steps = [
    {
      icon: '/images/step1.png',
      title: 'Register and Create Your Profile on Buddy4Study',
      description: 'Provide some basic details super-quick and get registered with us.'
    },
    {
      icon: '/images/step-2.png',
      title: 'Get Notified About Matching Scholarships',
      description: 'Receive scholarship notifications that perfectly match your profile.'
    },
    {
      icon: '/images/stepthree.png',
      title: 'Apply for Scholarships',
      description: 'Choose from 15,000+ scholarships, as per your need and eligibility.'
    },
    {
      icon: '/images/step-4.png',
      title: 'Become a Scholar',
      description: 'Kickstart your academic journey by becoming a Buddy4Study scholar.'
    }
  ];

  return (
    <section className="steps-to-scholarship">
      <h3>Steps to Follow to Get a <span className="highlight">Scholarship</span></h3>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-wrapper">
            <StepCard icon={step.icon} title={step.title} description={step.description} />
            {index !== steps.length - 1 && <div className="dotted-line" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsToScholarship;
