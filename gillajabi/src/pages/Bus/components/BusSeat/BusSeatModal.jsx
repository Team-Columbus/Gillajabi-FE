import React from 'react';
import '../../../../styles/pages/Bus/BusSeat/BusSeatModal.css'
const BusSeatModal = (props) => {
  
  if(!props.isOpen) return null;

  const calculate = (price) => {
    props.setTotalPrice(preTotalPrice => preTotalPrice+price);
    if(price === 12000) {
      props.setSeatInformation([props.seatInformation[0]+1, props.seatInformation[1]])
    }
    if(price === 8000) {
      props.setSeatInformation([props.seatInformation[0], props.seatInformation[1]+1])
    }
    
    props.onClose(price);
  }

  return (
    <div className='busseatmodal'>
      <div className='busseatmodal-adult' onClick={() => calculate(12000)}>
        일반
      </div>
      <div className='busseatmodal-student' onClick={() => calculate(8000)}>
        초등생
      </div>
      <div className='busseatmodal-cancle' onClick={() => calculate(0)}>
        취소
      </div>
    </div>
  );
};

export default BusSeatModal;