import React from 'react';
import './TrendingMoviesCard.css'


const TrendingMovieCard = ({ movie }) => {
  return (
 
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className='hover-text'>
        <h2>{movie.title}</h2>
        {/* <p>{movie.release_date}</p> */}
        <p>{movie.overview.slice(0, 100)}... Read more</p>
      </div>
      
    </div>

  );
};

export default TrendingMovieCard;
