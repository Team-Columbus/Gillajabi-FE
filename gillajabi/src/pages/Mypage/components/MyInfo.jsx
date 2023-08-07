import React from 'react';

const MyInfo = ({leftChild, rightChild}) => {
  return (
    <div className='mypage-myinfo'>
      <div>{leftChild}</div>
      <div>{rightChild}</div>
    </div>
  );
};

export default MyInfo;