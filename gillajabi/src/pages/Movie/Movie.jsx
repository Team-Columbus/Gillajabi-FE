import React from 'react';
import { MovieProvider } from './context/MovieContext';
import MovieContent from './components/MovieContent';
import '../../styles/pages/Movie.css';

const Movie = () => {
  return (
    <MovieProvider>
      <MovieContent/>
    </MovieProvider>
  );
};

export default Movie;