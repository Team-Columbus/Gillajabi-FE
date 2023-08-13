import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieListItem from '../components/TopMovies/MovieListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const TopMovies = () => {

  const [topMovies, setTopMovies] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(()=>{
    getTopMovies();
  },[]);

  const getTopMovies = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/theaters/CGVmovies_top/`);
      setTopMovies(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const goToNextSlide = () => {
    setCurrentIdx((prevIndex) => (prevIndex + 1) % topMovies.length);
  };

  const goToPrevSlide = () => {
    setCurrentIdx((prevIndex) => (prevIndex - 1 + topMovies.length) % topMovies.length);
  };

  return (
    <div className='movie-topmovies'>
      <h2>가장 빨리 볼 수 있는 영화 TOP3</h2>
      <div className='movie-topmovies-list'>
        <button className='carousel-button' onClick={goToPrevSlide}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <>
          {topMovies.map((e,idx)=>{
            const isCurrent = (idx === currentIdx);
            return <MovieListItem e={e} key={idx} isCurrent={isCurrent}/>
          })}
        </>
        <button className='carousel-button' onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
    </div>
  );
};

export default TopMovies;