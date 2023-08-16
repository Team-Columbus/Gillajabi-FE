import React, { useEffect, useState } from 'react';
import { useMovieStore } from '../../../../stores/MovieStore';

const MovieSelectSeatGroup = (props) => {

  const { userSelectSeats, setUserSelectSeats, totalCount } = props;
  const { selectSeatNum } = useMovieStore();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectType = ['A', 'B', 'C', 'D'];
  const selectedSeatNum = (40 - selectSeatNum);

  useEffect(() => {
    updateSelectedSeats();
  },[]);

  const updateSelectedSeats = () => {
    const randSeats = [];
    while (randSeats.length < selectedSeatNum) {
      const randSeatIdx = Math.floor(Math.random() * 40);
      const seatNumber = formatSeatNum(randSeatIdx);
      if (!randSeats.includes(seatNumber)) {
        randSeats.push(seatNumber);
      }
    }
    setSelectedSeats(randSeats);
  };

  const padNumber = (number) =>{
    return String(number).padStart(2, '0');
  }

  const formatSeatNum = (number) => {

    if (number >= 1 && number <= 10) {
      return 'A' + padNumber(number);
    } else if (number >= 11 && number <= 20) {
      return 'B' + padNumber(number - 10);
    } else if (number >= 21 && number <= 30) {
      return 'C' + padNumber(number - 20);
    } else if (number >= 31 && number <= 40) {
      return 'D' + padNumber(number - 30);
    } else {
      return 'Invalid number';
    }
  };

  const handleSeatClick = (seatNumber) => {
    if (userSelectSeats.length < totalCount || userSelectSeats.includes(seatNumber)) {
      if (!userSelectSeats.includes(seatNumber)) {
        setUserSelectSeats([...userSelectSeats, seatNumber]);
      } else {
        setUserSelectSeats(userSelectSeats.filter((seat) => seat !== seatNumber));
      }
    } else{
      alert(`선택하신 관람인원은 ${totalCount}명입니다. 😯`);
    }
  };

  return (
    <>
      {selectType.map((type, typeIndex) => (
        <div key={type} className='movie-selectseat-seat-group'>
          <p>{`${type}`}</p>
          <div className='button-group'>
            {Array.from({ length: 10 }, (_, index) => {
              const seatNumber = `${type}`+ String(index + 1).padStart(2, '0');
              const isDisabled = selectedSeats.includes(seatNumber);
              const isSelected = userSelectSeats.includes(seatNumber);
              return (
                <button 
                  key={index} 
                  disabled={isDisabled}
                  className={`${isDisabled ? 'disabled-button' : isSelected ? 'selected-button' : 'enabled-button'}`}
                  onClick={() => handleSeatClick(seatNumber)}>
                  {isDisabled ? '' : seatNumber}
                </button>
              );
            })}
          </div>
          <p>{`${type}`}</p>
        </div>
      ))}
    </>
  );
};

export default MovieSelectSeatGroup;