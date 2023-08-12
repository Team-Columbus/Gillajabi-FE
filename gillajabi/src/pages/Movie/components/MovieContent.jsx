import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import Moviemain from '../components/Moviemain';
import Navbar from '../../../components/Navbar';

const MovieContent = () => {

  const { currentPage } = useMovieContext();

  let currentPageComponent;

  switch (currentPage) {
    case 'Moviemain':
      currentPageComponent = <Moviemain/>;
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