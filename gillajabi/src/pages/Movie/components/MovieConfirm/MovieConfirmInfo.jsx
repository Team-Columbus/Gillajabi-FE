import React from 'react';
import { useMovieStore } from '../../../../stores/MovieStore';

const MovieConfirmInfo = (props) => {

  const { movieInfo, dateInfo } = props;
  const { userCount } = useMovieStore();  
  const matchType = {
    'normal' : '일반',
    'teen' : '청소년',
    'disabled' : '우대',
    'silver' : '경로',
  }

  let ratingClass = '';

  switch (movieInfo?.rating) {
    case '12':
      ratingClass = 'rating-12';
      break;
    case '15':
      ratingClass = 'rating-15';
      break;
    case 'ALL':
      ratingClass = 'rating-ALL';
      break;
    case '19':
      ratingClass = 'rating-19';
      break;
    default:
      ratingClass = '';
      break;
  }

  return (
    <div className='movie-confirm-content-info'>
      <div className='movie-confirm-content-info-imgwrapper'>
        <img src={movieInfo?.movie_poster} alt={movieInfo?.title}/>
      </div>
      <div className='movie-confirm-content-info-detail'>
        <div className='movie-confirm-content-info-detail-movie'>
          <div id='detail-title'>
            <div className={`rating ${ratingClass}`}>{movieInfo?.rating}</div>
            <p id='title'>{movieInfo?.title}</p>
          </div>
          <p id='detail-theater'>
            {movieInfo?.theater_house} {movieInfo?.theater_floor}
          </p>
          <p id='detail-timeInfo'>
            {dateInfo} {movieInfo?.start_time} ~ {movieInfo?.end_time}
          </p>
        </div>
        <div className='movie-confirm-content-info-detail-count'>
          {Object.keys(userCount).map((type) => (
            userCount[type] !== 0 &&
              <p id='detail-userCount' key={type}>
                {`${matchType[type]}`} {`${userCount[type]}`}매
              </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieConfirmInfo;