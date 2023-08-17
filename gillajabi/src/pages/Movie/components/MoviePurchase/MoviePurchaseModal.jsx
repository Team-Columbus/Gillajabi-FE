import React from 'react';
import insertCardImg from '../../../../assets/Movie/movie_insertCard.png';

const MoviePurchaseModal = () => {

  const inlet = ['티켓 나오는곳', '지폐 넣는곳', '카드 넣는곳'];

  return (
    <div className='movie-purchase-modal'>
      <div className='movie-purchase-modal-explanation'>
        <p>신용카드 결제</p>
        <p>결제할 신용카드를 넣어주세요</p>
        <p>IC칩이 앞쪽으로 보이게 하여 넣어주세요</p>
        <p>티켓출력이 완료되기 전까지 절대로 카드를 뽑지마세요!</p>
      </div>
      <div className='movie-purchase-modal-description'>
        <div id='modal-description-inlet'>
          {inlet.map((item,idx)=>(
            <div id='modal-description-inlet-item' key={idx}>
              <div id='item-inlet'></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div id='modal-description-outlet'>
          <div id='modal-description-outlet-item'>
            <div id='item-outlet'></div>
            <div id='item-outlet'></div>
            <div id='outlet-imgwrapper'>
              <img src={insertCardImg} alt='insertCard'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MoviePurchaseModal;