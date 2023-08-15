import {React, useState, useEffect} from 'react';
import Location from '../../../assets/Bus/BusMain_Location.png'
import '../../../styles/pages/Bus/BusHeader.css'
const BusHeader = () => {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

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
  const day = currentDateTime.getDate().toString().padStart(2, '0');
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const hours = currentDateTime.getHours().toString().padStart(2, '0');
  const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
  
  
  return (
    <div className='busheader'>
      <div className='busheader-city'>
        <img src={Location} alt='위치'/>
        서울 경부 <span>No.57</span>
      </div>
      <div className='busheader-today'>
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
  );
};

export default BusHeader;
