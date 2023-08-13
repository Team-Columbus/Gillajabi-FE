import React from 'react';

const MovieListItem = ({e}) => {
  return (
    <div className='movie-topmovies-list-item'>
      <div className='movie-topmovies-list-imgwrapper'>
        <img src={e.poster} alt={e.title}/>
      </div>
      <div className='movie-topmovies-time'>
        <div className='movie-topmovies-time-notice'>
          <p>시작</p>
          <p>{e.start_time}</p>
        </div>
        <div className='movie-topmovies-time-line'>
          <div className='time-circle' id='start'>ㅤ</div>
          <div className='time-vhline'></div>
          <div className='time-circle' id='end'>ㅤ</div>
        </div>
        <div className='movie-topmovies-time-notice'>
          <p>종료</p>
          <p>{e.end_time}</p>
        </div>
      </div>
      <div className='movie-topmovies-list-reserve'>
        <p>지금 예매</p>
        <p>남은좌석 {e.seat_number}/{e.max_seat}</p>
      </div>
    </div>
  );
};

export default MovieListItem;