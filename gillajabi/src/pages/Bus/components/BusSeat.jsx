import {React, useState, useEffect} from 'react';
import BusHeader from './BusHeader';
import Modal from './BusSeat/BusSeatModal';
import { useBusContext } from '../context/BusContext';
import { useBusStore } from '../../../stores/BusStore';
import '../../../styles/pages/Bus/BusSeat.css';

const BusSeat = () => {

  const {setBusFare, busDestination, setBusUserAdult, setBusUserStudent } = useBusStore();
  const {handlePage} = useBusContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [seatPriceList, setSeatPriceList] = useState(
    Array.from({ length: 28 }, () => 0)
  );

  const [seatStates, setSeatStates] = useState(
    Array.from({ length: 28 }, () => false)
  );

  const [seatIndex, setSeatIndex] = useState(0);
  const [seatInformation, setSeatInformation] = useState([0, 0]);

  const toggleSeat = (index) => {
    const newSeatStates = [...seatStates];
    newSeatStates[index] = !newSeatStates[index];
    setSeatStates(newSeatStates);
  };
  
  const openModal = (index) => {
    if (!seatStates[index]) {
      setSeatIndex(index);
      setIsModalOpen(true);
    }

    else {
      toggleSeat(index);
      setTotalPrice(preTotalPrice => preTotalPrice-seatPriceList[index])
      if(seatPriceList[index] === 12000) {
        setSeatInformation([seatInformation[0]-1, seatInformation[1]])
      }
      if(seatPriceList[index] === 8000) {
        setSeatInformation([seatInformation[0], seatInformation[1]-1])
      }
      const newSeatPriceList = [...seatPriceList];
      newSeatPriceList[index] = 0;
      setSeatPriceList(newSeatPriceList);
    }
  };

  const closeModal = (price) => {
    setIsModalOpen(false);

    if(price === 0) {
      return null;
    }

    const newSeatPriceList = [...seatPriceList];
    newSeatPriceList[seatIndex] = price;
    setSeatPriceList(newSeatPriceList); 
    toggleSeat(seatIndex);
  };

  const [randomIndexes, setRandomIndexes] = useState([]); 

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 28); 
    const newRandomIndexes = [];

    for (let i = 0; i < randomNum; i++) {
      const randomIndex = Math.floor(Math.random() * 28); 
      newRandomIndexes.push(randomIndex);
    }

    setRandomIndexes(newRandomIndexes); 
  }, []);

  useEffect(() => {
    setBusFare(totalPrice);
  }, [totalPrice])


  const handlePayment = () => {
    setBusUserAdult(seatInformation[0]);
    setBusUserStudent(seatInformation[1]);
    handlePage('BusPayment')
  }

  return (
    <div className='busseat'>
      <BusHeader text='좌석을 선택하세요.'/>
      <div className='busseat-detail'>
        <div className='detail-bus'>
          <div className='detail-bus-text'>
            {busDestination}<span>18:20</span>
          </div>
          <div className='detail-bus-painting'>
            <div className='painting-drive'>
              <div className='drive'>
                운전석
              </div>
              <div className='entrance'>
                출입구
              </div>
            </div>
            <div className='painting-seat'>
              <Modal isOpen={isModalOpen} onClose={closeModal} setTotalPrice={setTotalPrice} 
              setSeatInformation={setSeatInformation} seatInformation={seatInformation}/>
              <div className='seat-first'>
                {seatStates.slice(0, 9).map((isClicked, index) => (
                  <div
                    className={`seat ${isClicked ? 'clicked' : ''} ${randomIndexes.includes(index) ? 'random' : ''}`}
                    onClick={randomIndexes.includes(index) ? null : () => openModal(index)}
                    key={index}
                  >
                    {index * 3 + 1}
                  </div>
                ))}
              </div>
              <div className='seat-second'>
                {seatStates.slice(9, 18).map((isClicked, index) => (
                  <div
                    className={`seat ${isClicked ? 'clicked' : ''} ${randomIndexes.includes(index+9) ? 'random' : ''}`}
                    onClick={randomIndexes.includes(index+9) ? null : () => openModal(index+9)}
                    key={index+9}
                  >
                    {index * 3 + 2}
                  </div>
                ))}
              </div>
              <div className='seat-third'>
                {seatStates.slice(18, 19).map((isClicked, index) => (
                  <div
                    className={`seat ${isClicked ? 'clicked' : ''} ${randomIndexes.includes(index+18) ? 'random' : ''}`}
                    onClick={randomIndexes.includes(index+18) ? null : () => openModal(index+18)}
                    key={index+18}
                  >
                    {index+27}
                  </div>
                ))}
              </div>
              <div className='seat-fourth'>
                {seatStates.slice(19, 28).map((isClicked, index) => (
                  <div
                    className={`seat ${isClicked ? 'clicked' : ''} ${randomIndexes.includes(index+19) ? 'random' : ''}`}
                    onClick={randomIndexes.includes(index+19) ? null : () => openModal(index+19)}
                    key={index+19}
                  >
                    {index === 8 ? index + 20 : index * 3 + 3}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='detail-text'>
          <div className='text-city'>
            서울 {'->'} {busDestination}
          </div>
          <div className='text-seat'>
            <div className='seat-status'>
              <div className='status-one'>
              </div>
              <div className='seat-text'>
                선택가능좌석
              </div>  
            </div>
            <div className='seat-status'>
              <div className='status-two'>
                X
              </div>
              <div className='seat-text'>
                판매된좌석
              </div>  
            </div>
            <div className='seat-status'>
              <div className='status-three'>
              </div>
              <div className='seat-text'>
                선택한좌석
              </div>  
            </div>
          </div>
          <div className='text-select'>
            {JSON.stringify(seatInformation) === JSON.stringify([0, 0]) ? (
            <>            
              <div className='select-seat'>
                좌석을 선택하세요
              </div>
              <div className='select-count'>
                승차권 1회 최대 발권 매수는 10매입니다.
              </div>
            </>) : (
            <div className='select-seatlist'>
              {seatInformation[0] > 0 ? (
              <div className='select-adult'>
                일반<span>{seatInformation[0]}</span>{seatInformation[0]*12000}원
              </div>) : (<></>)}
              {seatInformation[1] > 0 ? (
              <div className='select-student'>
                초등생<span>{seatInformation[1]}</span>{seatInformation[1]*8000}원
              </div>) : (<></>)}
            </div>)}
          </div>
          <div className='text-price'>
            총 결제 금액
            <div className='price-button'>
              {totalPrice}원 <button onClick={() => handlePayment()}>결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSeat;