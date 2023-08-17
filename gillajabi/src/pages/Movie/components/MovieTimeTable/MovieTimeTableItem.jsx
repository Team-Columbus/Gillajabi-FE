import React, { useState } from 'react';
import Modal from '../../../../components/Modal';
import MovieCount from './MovieCount/MovieCount';

const MovieTimeTableItem = ({ item }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState(null);

  let ratingClass = '';

  switch (item.rating) {
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

  const openModal = (movieInfo) => {
    setIsModalOpen(true);
    setDetailInfo(movieInfo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailInfo(null);
  };

  return (
    <div className='movie-timetable-item'>
      <div className='movie-timetable-item-imgwrapper'>
        <img src={item.movie_poster} alt={item.title} />
      </div>
      <div className='movie-timetable-item-info'>
        <div className='movie-timetable-item-info-header'>
          <div className={`rating ${ratingClass}`}>{item.rating}</div>
          <p id='title'>{item.title}</p>
        </div>
        <div className='movie-timetable-item-info-content'>
          {item.detail.map((info, idx) => (
            <div key={idx} className='time-seat' onClick={()=>openModal(info)}>
              <p>{info.start_time}</p>
              <p>{`${info.seat_number}/${info.max_seat}`}</p>
            </div>
          ))}
        </div>
        <Modal 
          isOpen={isModalOpen} 
          closeModal={closeModal} 
          styleType={'movie-count'}>
          <MovieCount detailInfo = {detailInfo}/>
        </Modal>
      </div>
    </div>
  );
};

export default MovieTimeTableItem;
