import React from 'react';

const MovieQuest = ({info}) => {

  const userCount = info.ticket;
  const matchType = {
    'normal' : '일반',
    'teen' : '청소년',
    'disabled' : '우대',
    'silver' : '경로',
  }

  return (
    <div className='quest-moviequest'>
      <p>시작 시간 {info.time}</p>
      <p>{info.title}</p>
      <div className='quest-moviequest-usercount'>
        {Object.keys(userCount).map((type,idx) => (
          userCount[type] !== 0 && 
            <p key={idx}>{`${matchType[type]}`} {`${userCount[type]}`}매</p>
          ))}
      </div>
      <p>예매해보기!</p>
    </div>
  );
};

export default MovieQuest;