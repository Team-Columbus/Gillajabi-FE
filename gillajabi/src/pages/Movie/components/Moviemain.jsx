import React, { useState, useEffect } from 'react';
import purchaseImg from '../../../assets/Movie/movie_main_purchase.png'
import printImg from '../../../assets/Movie/movie_main_print.png'
const Moviemain = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    updateDateTime();

    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

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
        <div className='movie-main-select-button' id='purchase'>
          <h2>티켓 구매</h2>
          <div className='movie-main-imgwrapper'>
            <img src={purchaseImg} alt='purchaseImg'/>
          </div>
        </div>
        <div className='movie-main-select-button' id='print'>
          <h2>티켓 출력</h2>
          <div className='movie-main-imgwrapper'>
            <img src={printImg} alt='purchaseImg'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviemain;
