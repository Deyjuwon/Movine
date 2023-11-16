import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpcomingCard from '../UpcomingCard/UpcomingCard';
import './Upcoming.css'
import { IoIosArrowForward } from "react-icons/io";
import SkeletonElement from '../Skeleton/SkeletonElement';


const Upcoming = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const apiKey = '4c5792d4ff7ca8669330aa3950f9938e';
    const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    axios.get(upcomingMoviesURL)
      .then(response => {
        if (response.data.results.length > 0) {
          setNewMovies(response.data.results.slice(11, 17)); // Display the first 6 movies
        }
      })
      .catch(error => {
        console.error('Error fetching newly released movies:', error);
      });
  }, []);

  return (
    <div className="all-movies-container">
      <div className='all-header'>
        <h1>Upcoming</h1>
        <button className='more'>
          <span>View All</span>
          <IoIosArrowForward size={20} />
        </button>
      </div>
  
        <div className="movies-container">
            {loading ? newMovies.map(movie => (
            <UpcomingCard key={movie.id} movie={movie} />
      )):  [1,2,3,4,5,6].map(n => <SkeletonElement key={n} />) }
    </div>

    


    </div>
    
  );
};

export default Upcoming;
