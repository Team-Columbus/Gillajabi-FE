import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieTimeTableItem from './MovieTimeTable/MovieTimeTableItem';
import '../../../styles/pages/Movie/MovieTimeTable.css';

const MovieTimeTable = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    getMovieList();
  },[])

  const getMovieList = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/theaters/CGVmovie_list/`);
      setMovieList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='movie-timetable'>
      {movieList.map((item,idx)=>(
        <MovieTimeTableItem item={item} key={idx}/>
      ))}
    </div>
  );
};

export default MovieTimeTable;