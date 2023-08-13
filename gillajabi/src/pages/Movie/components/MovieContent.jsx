import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import Moviemain from '../components/Moviemain';
import MoviePurchase from './MoviePurchase';
import MovieTop3 from './MovieTop3';
import Navbar from '../../../components/Navbar';

const MovieContent = () => {

  const { currentPage } = useMovieContext();

  let currentPageComponent;

  switch (currentPage) {
    case 'Moviemain':
      currentPageComponent = <Moviemain/>;
      break;
    case 'MovieTop3':
      currentPageComponent = <MovieTop3/>;
      break;
    case 'MoviePurchase':
      currentPageComponent = <MoviePurchase/>;
      break;
    default:
      currentPageComponent = <Moviemain/>;
  }

  return (
    <div className='movie'>
      <Navbar />
      {currentPageComponent}
    </div>
  );
};

export default MovieContent;