import React, { useState } from 'react';
import { useMovieContext } from '../../../context/MovieContext';
import { useMovieStore } from '../../../../../stores/MovieStore';
import MovieCountItem from './MovieCountItem';
import Button from '../../../../../components/Button';
import '../../../../../styles/pages/Movie/MovieCount.css';

const MovieCount = ({selectedMovie}) => {

  const [count, setCount] = useState({
    normal: 0,
    teen: 0,
    disabled: 0,
    silver: 0,
  });

  const { handlePage } = useMovieContext();
  const { setUserCount, setSelectedMovie } = useMovieStore();
  const selectType = ['normal', 'teen', 'disabled', 'silver'];
  const maxTotalCount = 8;

  const total = Object.values(count).reduce((total, c) => total + c, 0);

  const handleCount = (type, newCount) => {
    if (newCount >= 0 && total - count[type] + newCount <= maxTotalCount) {
      setCount((prevCount) => ({
        ...prevCount,
        [type]: newCount,
      }));
    } else{
      alert(`최대 ${maxTotalCount}매까지 선택할 수 있습니다 ☺`)
    }
  };

  const moveToSelectSeat = () =>{
    if(total){
      setUserCount(count);
      setSelectedMovie(selectedMovie);
      handlePage('MovieSelectSeat');
    } else {
      alert('관람 인원을 선택해주세요 😉');
    }
  }

  return (
    <div className='movie-count'>
      <div className='movie-count-header'>
        <p>관람 인원수를 선택해주세요</p>
        <p>인원수 선택은 일반,청소년을 더해 <span>최대 8매</span>까지 가능해요</p>
        <p>총 <span>{total}</span>명</p>
      </div>
      <div className='movie-count-select'>
        {selectType.map((type,idx)=>(
            <MovieCountItem 
              key={idx}
              count={count} 
              handleCount={handleCount} 
              type={type}/>
          ))}
      </div>
      <div className='movie-count-button'>
        <Button styleType='Movie_Gray' onClick={ moveToSelectSeat }>
          좌석 선택하러 가기
        </Button>
      </div>
    </div>
  );
};

export default MovieCount;