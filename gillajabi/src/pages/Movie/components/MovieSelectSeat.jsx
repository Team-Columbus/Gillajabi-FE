import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { useMovieStore } from '../../../stores/MovieStore';
import MovieSelectSeatHeader from './MovieSelectSeat/MovieSelectSeatHeader';
import MovieSelectSeatGroup from './MovieSelectSeat/MovieSelectSeatGroup';
import Button from '../../../components/Button';
import '../../../styles/pages/Movie/MovieSelectSeat.css';

const MovieSelectSeat = () => {

  const [totalPayment, setTotalPayment] = useState(0);
  const [userSelectSeats, setUserSelectSeats] = useState([]);

  const { handlePage } = useMovieContext();
  const { userCount, setMoviePayment, setSelectedSeats } = useMovieStore();
  const totalCount = Object.values(userCount).reduce((acc, count) => acc + count, 0);

  const moveToConfirm = () =>{
    if(userSelectSeats.length === totalCount){
      setMoviePayment(totalPayment);
      setSelectedSeats(userSelectSeats);
      handlePage('MovieConfirm');
    } else {
      alert('좌석을 선택해주세요 😉');
    }
  };

  return (
    <div className='movie-selectseat'>
      <MovieSelectSeatHeader 
        totalPayment={totalPayment} 
        setTotalPayment={setTotalPayment}/>
      <div className='movie-selectseat-seat'>
        <p>SCREEN</p>
        <MovieSelectSeatGroup 
          userSelectSeats={userSelectSeats} 
          setUserSelectSeats ={setUserSelectSeats}
          totalCount={totalCount}/>
      </div>
      <Button styleType={'Movie_Red'} onClick={moveToConfirm}>
        결제할래요
      </Button>
    </div>
  );
};

export default MovieSelectSeat;