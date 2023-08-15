import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import Moviemain from '../components/Moviemain';
import MoviePurchase from './MoviePurchase';
import TopMovies from './TopMovies';
import MovieTimeTable from './MovieTimeTable';
import Navbar from '../../../components/Navbar';
import MovieSelectSeat from './MovieSelectSeat';

const MovieContent = () => {

  const { currentPage } = useMovieContext();

  let currentPageComponent;

  switch (currentPage) {
    case 'Moviemain':
      currentPageComponent = <Moviemain/>;
      break;
    case 'TopMovies':
      currentPageComponent = <TopMovies/>;
      break;
    case 'MovieTimeTable':
      currentPageComponent = <MovieTimeTable/>;
      break;
    case 'MovieSelectSeat':
      currentPageComponent = <MovieSelectSeat/>;
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