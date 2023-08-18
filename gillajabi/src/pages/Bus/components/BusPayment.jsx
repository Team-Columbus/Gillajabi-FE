import {React, useState} from 'react';
import BusHeader from './BusHeader';
import Card from '../../../assets/Bus/BusPayment_Card.png';
import Kiosk from '../../../assets/Bus/BusPayment_Kiosk.png';
import PaymentModal from './BusPayment/CompletePaymentModal';
import TicketModal from './BusPayment/TicketPaymentModal';
import { useBusContext } from '../context/BusContext';
import { useBusStore } from '../../../stores/BusStore';
import '../../../styles/pages/Bus/BusPayment.css';

const BusPayment = () => {
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isTicketModal, setIsTicketModal] = useState(false)
  const {handlePage} = useBusContext();
  const {busFare, busDestination, busDate, busTime, busRate, busCompany, busUserAdult, busUserStudent, busRequiredTime } = useBusStore();
  
  const busInformation = {
    버스회사: busCompany,
    버스등급: busRate,
    티켓수량: busUserAdult + busUserStudent,
  }

  const openPaymentModal = () => {
    setIsPaymentModal(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModal(false);
    openTicketModal();
  };

  const openTicketModal = () => {
    setIsTicketModal(true);
  };

  const closeTicketModal = () => {
    setIsTicketModal(false);
    handlePage('BusFinish')
  };

  return (
    <div className='buspayment'>
      <PaymentModal isOpen={isPaymentModal} isClose={closePaymentModal} />
      <TicketModal isOpen={isTicketModal} isClose={closeTicketModal}/>
      <BusHeader text='IC카드를 투입구 끝까지 밀어 넣어주세요' />
      <div className='buspayment-play'>
        <div className='buspayment-detail'>
          <div className='buspayment-detail-date'>
            {busDate} {busTime}
          </div>
          <div className='detail-information'>
            <div className='detail-information-city'>
              <div className='city-depart'>
                <div className='city-common-circle'>
                  출발
                </div>
                <div className='city-common-text'>
                  서울경부<span>평균 {busRequiredTime} 소요</span>
                </div>
              </div>
              <div className='city-line'>
              </div>
              <div className='city-arrive'>
                <div className='city-common-circle'>
                  도착
                </div>
                <div className='city-common-text'>
                  {busDestination}
                </div>
              </div>
            </div>
            <div className='detail-information-bus'>
              {Object.entries(busInformation).map(([key, value]) => (
                <div className='bus-information'>
                  {key}<span>{value} {key==='티켓수량' ? (
                  <>
                    {busUserAdult !== 0 && <> / 일반 {busUserAdult}</>}
                    {busUserStudent !== 0 && <> / 초등생 {busUserStudent}</>}
                  </>
                  ) : null}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='detail-payment'>
            결제금액<span>{busFare}원</span>
          </div>
          <div className='detail-warning'>
            ※소요시간은 교통상황에 따라 달라 질 수 있습니다.
          </div>
        </div>
        <div className='buspayment-card'>
          <img src={Kiosk} alt='Kiosk'></img>
          <img src={Card} alt='Card'></img>
        </div>
        <div className='buspayment-text' onClick={() => openPaymentModal()}>
          터치하여 카드를 넣어 주세요!
        </div>
      </div>
    </div>
  );
};

export default BusPayment;