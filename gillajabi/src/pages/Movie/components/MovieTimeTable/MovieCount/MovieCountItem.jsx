import React from 'react';

const MovieCountItem = (props) => {
  const {count, handleCount, type} = props;
  const matchType = {
    'normal' : '일반',
    'teen' : '청소년',
    'disabled' : '장애인',
    'silver' : '경로우대',
  }

  return (
    <div className='movie-count-select-item'>
      <span>{matchType[type]}</span>
      <div className='movie-count-selector'>
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index}
            className={count[type] === index ? 'selected' : ''}
            onClick={() => handleCount(type,index)}
          >
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieCountItem;