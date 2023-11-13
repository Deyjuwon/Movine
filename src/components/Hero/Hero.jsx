import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hero.css'
import { BsPlay } from 'react-icons/bs'
import StarRating from '../StarRating/StarRating';


const Hero = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TMDb API key
    const apiKey = '4c5792d4ff7ca8669330aa3950f9938e';
    const trendingMovieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    axios.get(trendingMovieURL)
      .then(response => {
        if (response.data.results.length > 0) {
          setTrendingMovie(response.data.results[6]);
        }
      })
      .catch(error => {
        console.error('Error fetching trending movie:', error);
      });
  }, []);

  return (
    <div className="hero">
      {trendingMovie && (
        <div className="hero-content">
          <div className="hero-image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${trendingMovie.poster_path}`}
              alt={trendingMovie.title}
            />
          </div>
          <div className="movie-details">
            <h1>{trendingMovie.title} <span>({trendingMovie.release_date.slice(0, 4)})</span></h1>
          
            <div className='m-plot'>
              <span>Movie Plot: </span>  
              <span>{trendingMovie.overview}</span>
            </div>
            <div className='ratings'>
              <span>IMDb</span> 
              <span>Rating:</span> 
              <span>{trendingMovie.vote_average} </span>
              <span><StarRating /></span> 
            </div>

            <div className='hero-btn'>
              <button className='hero-btns btn1'>Play Video <BsPlay size={30} />   </button>
              <button className='hero-btns btn2'>Movie Trailer <BsPlay size={30} />  </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
