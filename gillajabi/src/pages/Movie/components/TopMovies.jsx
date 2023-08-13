import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieListItem from '../components/TopMovies/MovieListItem';

const TopMovies = () => {

  const [topMovies, setTopMovies] = useState([]);

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

  return (
    <div className='movie-topmovies'>
      <h2>가장 빨리 볼 수 있는 영화 TOP3</h2>
      <div className='movie-top3-list'>
        {topMovies.map((e,idx)=>{
          return <MovieListItem e={e} key={idx}/>
        })}
      </div>
    </div>
  );
};

export default TopMovies;