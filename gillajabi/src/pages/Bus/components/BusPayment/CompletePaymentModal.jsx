import {React, useState, useEffect} from 'react';
import '../../../../styles/pages/Bus/BusPayment/CompletePaymentModal.css';

const CompletePaymentModal = (props) => {

  const [count, setCount] = useState(5);
  useEffect(() => {
    if (!props.isOpen) return;
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval); 
      props.isClose();
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, props.isOpen]);

  if(!props.isOpen) return null;

  return (
    <div className='completepaymentmodal'>
      <div className='completepaymentmodal-top'>
        <div>
          결제하신 카드를 리더기에서 꺼낸 후,
        </div>
        <div>
          [확인] 버튼을 누르면 승차권이 나옵니다.
        </div>
      </div>
      <div className='completepaymentmodal-bottom' onClick={() => props.isClose()}>
        <div className='completepaymentmodal-circle'>
          {'✔️'}
        </div>
        <div className='completepaymentmodal-bottom-text'>
          확인
        </div>
        <div className='completepaymentmodal-bottom-count'>
          {count}
        </div>
      </div>
    </div>
  );
};

export default CompletePaymentModal;