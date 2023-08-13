import React, { useEffect } from 'react';
import axios from 'axios';

const TopMovies = () => {

  useEffect(()=>{
    getTopMovies();
  },[]);

  const getTopMovies = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/theaters/CGVmovies-top/`);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='movie-topmovies'>
      빨리볼 수 있는 영화 TOP3입니다.
    </div>
  );
};

export default TopMovies;