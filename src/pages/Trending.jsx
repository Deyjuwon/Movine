import { React, useState, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Sponsors from '../components/Sponsors/Sponsors'
import TrendingMoviesCard from '../components/TrendingMoviesCard/TrendingMoviesCard'
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import './Trending.css'

const Trending = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const apiKey = '4c5792d4ff7ca8669330aa3950f9938e';
    const newMoviesURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    axios.get(newMoviesURL)
      .then(response => {
        if (response.data.results.length > 0) {
          setNewMovies(response.data.results.slice(0, 18));
          setLoading(true) // Display the first 5 movies
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
        <h1>Trending Movies</h1>
        <button className='more'>
          <span>View more</span>
          <IoIosArrowForward size={20} />
        </button>
      </div>
  
        <div className="movies-container">
            {loading ? newMovies.map(movie => (
            <TrendingMoviesCard key={movie.id} movie={movie} />
      )) : <Spinner className='spinner' animation="grow" />}
    </div>
    
    


    </div>

      

      <Sponsors />
      <Footer />
    </div>
  )
}

export default Trending