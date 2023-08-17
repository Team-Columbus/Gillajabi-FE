import React, { useState } from 'react';
import { useMovieStore } from '../../../stores/MovieStore';
import Modal from '../../../components/Modal';
import MoviePurchaseModal from './MoviePurchase/MoviePurchaseModal';
import MoviePrintTicketModal from './MoviePurchase/MoviePrintTicketModal';
import { payCard, payCash, payKakao, payPayco } from '../../../assets';
import '../../../styles/pages/Movie/MoviePurchase.css';

const MoviePurchase = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const { moviePayment } = useMovieStore();
  const paymentMethods = [
    {
      method: 'payCard',
      img: payCard,
      displayName: '신용카드'
    },
    {
      method: 'payCash',
      img: payCash,
      displayName: '현금'
    },
    {
      method: 'payKakao',
      img: payKakao,
      displayName: '카카오페이'
    },
    {
      method: 'payPayco',
      img: payPayco,
      displayName: '페이코'
    }
  ];

  const openModal = (idx) => {
    (idx === 0) && setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowTicketModal(false);
  };

  return (
    <div className='movie-purchase'>
      <div className='movie-purchase-header'>
        <div id='header-payment'>
          <p>잔여 결제금액</p>
          <p>{moviePayment}원</p>
        </div>
      </div>
      <div className='movie-purchase-content'>
        <p>결제 수단을 선택해주세요</p>
        <div className='movie-purchase-content-pay'>
          {paymentMethods.map((payment,idx)=>(
            <div 
              className='movie-purchase-content-pay-item'
              id={payment.method}
              key={idx}>
              <div id='imgwrapper' onClick={()=>openModal(idx)}>
                <img src={payment.img} alt={payment.method}/>
              </div>
              <p>{payment.displayName}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        closeModal={closeModal}
        styleType={'movie-purchase'}>
        {showTicketModal ? <MoviePrintTicketModal/> : <MoviePurchaseModal setShowTicketModal={setShowTicketModal}/>}
      </Modal>
    </div>
  );
};

export default MoviePurchase;