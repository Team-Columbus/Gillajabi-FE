import {React, useState, useEffect} from 'react';
import Card from '../../../../assets/Bus/BusPayment_Card.png';
import Kiosk from '../../../../assets/Bus/BusPayment_Kiosk.png';
import { useBusStore } from '../../../../stores/BusStore';
import '../../../../styles/pages/Bus/BusPayment/TicketPaymentModal.css';

const TicketPaymentModal = (props) => {

  const [count, setCount] = useState(7);
  const [ticketStatus, setTicketStatus] = useState('발권중');
  const {busRate, busFare } = useBusStore();

  const ticketMenu = ['승차권 종류', '요금', '좌석', '발권 상태']
  const ticketData = [busRate, busFare, '좌석', ticketStatus]
  
  useEffect(() => {
    if (!props.isOpen) return;
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval); 
      props.isClose();
    }

    if(count === 2) {
      setTicketStatus('발권 완료')
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, props.isOpen]);

  if(!props.isOpen) return null;

  return (
    <div className='ticketpaymentmodal'>
      <div className='ticketpaymentmodal-title'>
        승차권 발권
      </div>
      <div className='ticketpaymentmodal-detail'>
        <div className='ticketpaymentmodal-detail-img'>
          <img src={Kiosk} alt='Kiosk'></img>
          <img src={Card} alt='Card'></img>
        </div>
        <div className='ticketpaymentmodal-detail-text'>
          <div className='ticketpaymentmodal-detail-menu'>
            {ticketMenu.map((data, index) => (
              <div className='ticketMenu-data'>
                {data}
              </div>
            ))}
          </div>

          <div className='ticketpaymentmodal-detail-data'>
            {ticketData.map((data, index) => (
                <div className='ticketData-data'>
                  {data}
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketPaymentModal;