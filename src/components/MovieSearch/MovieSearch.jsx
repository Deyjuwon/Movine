import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '4c5792d4ff7ca8669330aa3950f9938e';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data from TMDb:', error);
    }
  };

  return (
    
    <div>
        
        <form>
            <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            
        </form>
        <ul>
        {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
        
        
        
      
    </div>
  );
}

export default MovieSearch;
