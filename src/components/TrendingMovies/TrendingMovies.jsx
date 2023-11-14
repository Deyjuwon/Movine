import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrendingMoviesCard from '../TrendingMoviesCard/TrendingMoviesCard';
import './TrendingMovies.css'
import { IoIosArrowForward } from "react-icons/io";


const TrendingMovies = () => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {

    const apiKey = '4c5792d4ff7ca8669330aa3950f9938e';
    const newMoviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(newMoviesURL)
      .then(response => {
        if (response.data.results.length > 0) {
          setNewMovies(response.data.results.slice(0, 6)); // Display the first 5 movies
        }
      })
      .catch(error => {
        console.error('Error fetching newly released movies:', error);
      });
  }, []);

  return (
    <div className="all-movies-container">
      <h1>New Released Movies</h1>
  
        <div className="movies-container">
            {newMovies.map(movie => (
            <TrendingMoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
    <div className='more'>
      <span>See more</span>
      <IoIosArrowForward size={20} />

    </div>
    


    </div>
    
  );
};

export default TrendingMovies;
