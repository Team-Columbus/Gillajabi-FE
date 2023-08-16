import React, { useEffect } from 'react';
import { useMovieStore } from '../../../../stores/MovieStore';

const MovieSelectSeatHeader = (props) => {

  const { totalPayment, setTotalPayment } = props;
  const { userCount } = useMovieStore();

  const matchType = {
    'normal' : '일반',
    'teen' : '청소년',
    'disabled' : '장애인',
    'silver' : '경로우대',
  }

  const price = {
    'normal' : 14000,
    'teen' : 11000,
    'disabled' : 5000,
    'silver' : 7000,
  }

  useEffect(()=>{
    calculateTotalPayment();
  },[]);

  const calculateTotalPayment = () => {
    let sumPayment = 0;
    Object.keys(userCount).forEach(type => {
      const seatTypePrice = price[type] * userCount[type];
      sumPayment += seatTypePrice;
    });
  
    setTotalPayment(sumPayment);
  };

  return (
    <div className='movie-selectseat-header'>
      <div className='movie-selectseat-header-count'>
        {Object.keys(userCount).map((type) => (
          userCount[type] !== 0 && 
            <div id='header-selected' key={type}>
              <p>{`${matchType[type]}`}</p>
              <p>{`${userCount[type]}`}</p>
            </div>
        ))}
      </div>
      <div id='header-payment'>
        <p>총 결제금액</p>
        <p>{`${totalPayment}원`}</p>
      </div>
    </div>
  );
};

export default MovieSelectSeatHeader;