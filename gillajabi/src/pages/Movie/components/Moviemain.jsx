import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import purchaseImg from '../../../assets/Movie/movie_main_purchase.png'
import printImg from '../../../assets/Movie/movie_main_print.png'
import '../../../styles/pages/Movie/Moviemain.css';

const Moviemain = () => {

  const [currentDateTime, setCurrentDateTime] = useState('');
  const { setCurrentPage } = useMovieContext();

  useEffect(() => {
    updateDateTime();

    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handlePage = (pageName) =>{
    setCurrentPage(pageName);
  };

  const updateDateTime = () => {
    const now = new Date();
    const dateOptions = {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedDateTime = {
      dateString : now.toLocaleString(undefined, dateOptions),
      timeString : now.toLocaleString(undefined, timeOptions)
    }
    setCurrentDateTime(formattedDateTime);
  };

  return (
    <div className='movie-main'>
      <div className='movie-main-time'>
        <p>{currentDateTime.dateString}</p>
        <p>{currentDateTime.timeString}</p>
      </div>
      <div className='movie-main-select'>
        <div 
          className='movie-main-select-button' 
          id='purchase'
          onClick={() => handlePage('TopMovies')}>
          <h2>티켓 구매</h2>
          <div className='movie-main-imgwrapper'>
            <img src={purchaseImg} alt='purchaseImg'/>
          </div>
        </div>
        <div 
          className='movie-main-select-button' 
          id='print'
          onClick={() => handlePage('MoviePrint')}>
          <h2>티켓 출력</h2>
          <div className='movie-main-imgwrapper'>
            <img src={printImg} alt='printImg'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviemain;

