import React, { useState, useEffect } from 'react';
import { authMovies } from '../api/getMovieData'
import Card from './Card';

const MoviesCards = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({ results: 5,gender: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect (()=>{
    authMovies()
    .then((data)=>{
      return setMovies(data.results);
      
    })
    .catch((error)=>{
      setError(`error ${error.message}`);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  })
  
  const handleChange = (e) => {
    setInputs({ ...inputs, results: e.target.value });
  };

  const handleClick = () => {
   authMovies(inputs)
  };

  return (
    <div>
      <input
        type="number"
        value={inputs.results}
        onChange={handleChange}
      />
      <select onChange={(e)=>{
        setInputs(prev=>({...prev,gender:e.target.value}))
      }}>
        <option value='movies' >Movies</option>
        <option value='tvSeries'>TV Series</option>
      </select>
      <button onClick={handleClick}>Fetch Data</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <h1>Error</h1>
          <h3>{error}</h3>
        </div>
      ) : (
        <div className="cards-container">
        {movies.map((movie, index) => (
          <Card key={index} title={movie.title} />
        ))}
      </div>
      )}
    </div>
  );
};

export default MoviesCards;
