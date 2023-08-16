import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieStore } from '../../../stores/MovieStore';
import MovieConfirmInfo from './MovieConfirm/MovieConfirmInfo';
import Button from '../../../components/Button';

const MovieConfirm = () => {

  const { moviePayment, selectedMovieInfo } = useMovieStore();
  const [movieInfo, setMovieInfo] = useState();
  const [dateInfo, setDateInfo] = useState();

  useEffect(()=>{
    getMovieInfo(selectedMovieInfo.id);
    getDateInfo();
  },[])
  
  const getMovieInfo = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/theaters/CGVmovie_detail/${id}/`);
      setMovieInfo(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getDateInfo = () => {
    const now = new Date();
    const dateOptions = {
      year : 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const formattedDate = now.toLocaleString(undefined, dateOptions);
    setDateInfo(formattedDate);
  };

  return (
    <div className='movie-confirm'>
      <div className='movie-confirm-header'>
        <div id='header-payment'>
          <p>총 결제금액</p>
          <p>{moviePayment}원</p>
        </div>
      </div>
      <div className='movie-confirm-content'>
        <p>예매 내역을 확인하세요</p>
        <div className='movie-confirm-content-line'>
          <p>예매정보</p>
          <div id='content-hrLine'/>
        </div>
        <MovieConfirmInfo movieInfo={movieInfo} dateInfo={dateInfo}/>
      </div>
      <Button styleType={'Movie_Red'}>
        결제할래요
      </Button>
    </div>
  );
};

export default MovieConfirm;