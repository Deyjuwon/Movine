import React from 'react'

const SearchResult = () => {
  return (
    <div>
    <ul>
        {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
  </div>
  )
}

export default SearchResult