import React, { useState, useEffect } from 'react';
import { useMovieStore } from '../../../stores/MovieStore';
import MovieSelectSeatHeader from './MovieSelectSeat/MovieSelectSeatHeader';
import Button from '../../../components/Button';
import '../../../styles/pages/Movie/MovieSelectSeat.css';

const MovieSelectSeat = () => {

  const { userCount, selectSeatNum } = useMovieStore();

  const selectedSeatNum = (40 - selectSeatNum);
  
  const selectType = ['A', 'B', 'C', 'D'];
  const [totalPayment, setTotalPayment] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    updateSelectedSeats();
  }, [selectedSeatNum]);

  const updateSelectedSeats = () => {
    const randSeats = [];
    while (randSeats.length < selectedSeatNum) {
      const randomSeatIdx = Math.floor(Math.random() * 40);
      if (!randSeats.includes(randomSeatIdx)) {
        randSeats.push(randomSeatIdx);
      }
    }
    setSelectedSeats(randSeats);
  };

  return (
    <div className='movie-selectseat'>
      <MovieSelectSeatHeader 
        totalPayment={totalPayment} 
        setTotalPayment={setTotalPayment}/>
      <div className='movie-selectseat-seat'>
        <p>SCREEN</p>
        {selectType.map((type, typeIndex) => (
          <div key={type} className='movie-selectseat-seat-group'>
            <p>{`${type}`}</p>
            <div className='button-group'>
              {Array.from({ length: 10 }, (_, index) => {
                const seatNumber = typeIndex * 10 + index + 1;
                const isDisabled = selectedSeats.includes(seatNumber - 1);
                return (
                  <button 
                    key={index} 
                    disabled={isDisabled}
                    className={isDisabled ? 'disabled-button' : 'enabled-button'}>
                    {isDisabled ? '': `${type}${String(seatNumber).padStart(2, '0')}`}
                  </button>
                );
              })}
            </div>
            <p>{`${type}`}</p>
          </div>
        ))}
      </div>
      <Button>
        결제할래요
      </Button>
    </div>
  );
};

export default MovieSelectSeat;