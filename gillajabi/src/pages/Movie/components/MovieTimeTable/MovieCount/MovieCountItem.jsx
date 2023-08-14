import React from 'react';

const MovieCountItem = (props) => {
  const {count, handleCount, type} = props;

  return (
    <div className='movie-count-select-item'>
      <span>{type}</span>
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