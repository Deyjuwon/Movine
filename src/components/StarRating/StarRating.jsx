import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = () => {
  const rating = 4; // Change this value to set the number of yellow stars (out of 5)

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isYellow = i <= rating;
      stars.push(
        <FaStar
          key={i}
          className={`star ${isYellow ? 'yellow' : 'gray'}`}
        />
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
