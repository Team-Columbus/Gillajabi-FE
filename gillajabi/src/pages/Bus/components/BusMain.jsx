import {React, useState, useEffect} from 'react';
import Sentence from '../../../components/Sentence'
import { useBusContext } from '../context/BusContext';
import Location from '../../../assets/Bus/BusMain_Location.png'
import Ticket from '../../../assets/Bus/BusMain_Ticket.png'
import Online from '../../../assets/Bus/BusMain_Online.png'
import '../../../styles/pages/Bus/BusMain.css'

const BusMain = () => {
  const { handlePage } = useBusContext();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const languageList = ['한국어', 'English', '日本語', '中國語']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const year = currentDateTime.getFullYear();
  const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDateTime.getDate();
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const hours = currentDateTime.getHours().toString().padStart(2, '0');
  const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');

  return (
    <div className='busmain'>
      <div className='busmain-title'>
        [버스 승차권 발매기] <span>[카드 전용]</span>
      </div>
      <div className='busmain-information'>
        <div className='information-city'>
          <img src={Location} alt='위치'/>
          서울 경부 <span>No.57</span>
        </div>
        <div className='information-today'>
          <div className='today-date'>
            {year}-{month }-{day} {dayOfWeek}요일
          </div>
          <div className='today-time'>
            <div className='time-text'>
              현재시간
            </div>
            <div className='time-clock'>
              {hours}:{minutes}
            </div>
          </div>
        </div>
      </div>
      <div className='busmain-purchase'>
        <div className='purchase-ticket' onClick={handlePage()}>
          <img src={Ticket}/>
          <Sentence mainSentence='현장발권' subSentence='승차권 바로 구매'/>
        </div>
        <div className='purchase-onLine'>
          <img src={Online}/>
          <Sentence mainSentence='온라인 예매 발권' subSentence='승차권 바로 구매'/>
        </div>
        <div className='purchase-language'>
          {languageList.map((lan, index) => (
            <div className='language'>
              {lan}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusMain;