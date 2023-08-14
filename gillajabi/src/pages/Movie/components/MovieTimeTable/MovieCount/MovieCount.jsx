import React, { useState } from 'react';
import Button from '../../../../../components/Button';

const MovieCount = () => {

  const [count, setCount] = useState({
    일반: 0,
    청소년: 0,
    장애인: 0,
    경로우대: 0,
  });
  
  const selectType = ['일반', '청소년', '장애인', '경로우대'];
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

  return (
    <div className='movie-count'>
      <div className='movie-count-header'>
        <p>관람 인원수를 선택해주세요</p>
        <p>인원수 선택은 일반,청소년을 더해 <span>최대 8매</span>까지 가능해요</p>
        <p>총 <span>{total}</span>명</p>
      </div>
      <div className='movie-count-select'>
        인원수 선택 영역 컴포넌트
      </div>
      <div className='movie-count-button'>
        <Button styleType='Movie_Gray'>
          좌석 선택하러 가기
        </Button>
      </div>
    </div>
  );
};

export default MovieCount;