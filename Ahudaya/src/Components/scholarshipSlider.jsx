// src/components/ScholarshipSlider.js
import React from 'react';
import Slider from 'react-slick';
import ScholarshipCard from './ScholarshipCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ScholarshipSlider.css';

const ScholarshipSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const scholarships = [
    {
      title: 'FREE COACHING FOR DNT STUDENTS UNDER SEED SCHEME',
      deadline: '2024-10-13',
    },
    {
      title: 'RELIANCE FOUNDATION SCHOLARSHIPS 2024–25',
      deadline: '2024-10-05',
    },
    {
      title: 'SBIF ASHA SCHOLARSHIP PROGRAM 2024',
      deadline: '2024-10-01',
    },
  ];

  return (
    <div className="scholarship-slider">
      <h2>Featured Scholarships</h2>
      <Slider {...settings}>
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={index}
            title={scholarship.title}
            deadline={scholarship.deadline}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ScholarshipSlider;
