import React from 'react';
import Moviemain from './components/Moviemain';
import Navbar from '../../components/Navbar';
import '../../styles/pages/Movie.css';

const Movie = () => {
  return (
    <div className='movie'>
      <Navbar/>
      <Moviemain/>
    </div>
  );
};

export default Movie;