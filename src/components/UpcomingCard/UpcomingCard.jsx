import React from 'react';
import './UpcomingCard.css'
import { useState } from 'react';
import { BsPlay } from 'react-icons/bs'


const UpcomingCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
 
    <div className="movie-card hover-container"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className={`hover-text text ${isHovered ? 'upward' : ''}`}>
        <h2>{movie.title}</h2>
        {/* <p>{movie.release_date}</p> */}
        <p>{movie.overview.slice(0, 90)}... Read more</p>
      </div>
      {isHovered && <button className=" btn1 hover-button">Watch Now <BsPlay size={30} /></button>}
      
    </div>

  );
};

export default UpcomingCard;
