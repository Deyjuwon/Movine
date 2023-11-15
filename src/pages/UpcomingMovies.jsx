import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer'
import Sponsors from '../components/Sponsors/Sponsors'
import axios from 'axios';
import UpcomingCard from '../components/UpcomingCard/UpcomingCard';
import { IoIosArrowForward } from "react-icons/io";

const UpcomingMovies = () => {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {

        const apiKey = '4c5792d4ff7ca8669330aa3950f9938e';
        const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

        axios.get(upcomingMoviesURL)
        .then(response => {
            if (response.data.results.length > 0) {
            setNewMovies(response.data.results.slice(0, 18)); // Display the first 6 movies
            }
        })
        .catch(error => {
            console.error('Error fetching newly released movies:', error);
        });
    }, []);
    
  return (
    <div>
        <div className="all-movies-container">
            <div className='all-header'>
                <h1>Upcoming</h1>
                <button className='more'>
                <span>View All</span>
                <IoIosArrowForward size={20} />
                </button>
            </div>
        
                <div className="movies-container">
                    {newMovies.map(movie => (
                    <UpcomingCard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>



        <Sponsors />
        <Footer />
    </div>
  )
}

export default UpcomingMovies