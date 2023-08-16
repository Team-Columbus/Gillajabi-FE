import React, { useState } from 'react';
import MovieSelectSeatHeader from './MovieSelectSeat/MovieSelectSeatHeader';
import MovieSelectSeatGroup from './MovieSelectSeat/MovieSelectSeatGroup';
import Button from '../../../components/Button';
import '../../../styles/pages/Movie/MovieSelectSeat.css';

const MovieSelectSeat = () => {

  const [totalPayment, setTotalPayment] = useState(0);
  const [userSelectSeats, setUserSelectSeats] = useState([]);

  return (
    <div className='movie-selectseat'>
      <MovieSelectSeatHeader 
        totalPayment={totalPayment} 
        setTotalPayment={setTotalPayment}/>
      <div className='movie-selectseat-seat'>
        <p>SCREEN</p>
        <MovieSelectSeatGroup 
          userSelectSeats={userSelectSeats} 
          setUserSelectSeats ={setUserSelectSeats}/>
      </div>
      <Button>
        결제할래요
      </Button>
    </div>
  );
};

export default MovieSelectSeat;