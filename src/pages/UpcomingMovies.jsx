import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer'
import Sponsors from '../components/Sponsors/Sponsors'
import axios from 'axios';
import UpcomingCard from '../components/UpcomingCard/UpcomingCard';
import { IoIosArrowForward } from "react-icons/io";
import SkeletonElement from '../components/Skeleton/SkeletonElement';

const UpcomingMovies = () => {
    const [newMovies, setNewMovies] = useState([]);
    const [loading, setLoading] = useState(false)

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
                <span>View More</span>
                <IoIosArrowForward size={20} />
                </button>
            </div>
        
                <div className="movies-container">
                    {loading ? newMovies.map(movie => (
                    <UpcomingCard key={movie.id} movie={movie} />
            )) : [1,2,3,4,5,6,7,8,9].map(n => <SkeletonElement key={n} />)}
            </div>
        </div>



        <Sponsors />
        <Footer />
    </div>
  )
}

export default UpcomingMovies