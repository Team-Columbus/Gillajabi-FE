import {React, useEffect, useState} from 'react';
import BusHeader from './BusHeader';
import axios from 'axios';
import { useBusStore } from '../../../stores/BusStore';
import { useBusContext } from '../context/BusContext';
import '../../../styles/pages/Bus/BusTime.css';

const BusTime = () => {

  const {handlePage} = useBusContext();

  const {busDate, busDestination, setBusTime, setBusRate, setBusCompany, setBusSeat,setBusRequiredTime } = useBusStore();
  const timeList = ['전체', '02:00', '04:00', '06:30', '08:00', '10:00', '12:00', '14:00', '16:00']
  const menuList= ['출발시간', '소요시간', '회사', '등급', '잔여석']

  const [busList, setBusList] = useState(null);

  useEffect(() => {
      getBusTime();
    }, [])

  const getBusTime = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/traffics/bus_ticket/`, {
          start_terminal : '서울',
          arrive_terminal : busDestination
        },
      )
      setBusList(response.data);
    } catch (error) {
      alert('실패했습니다. 다시 시도해 주세요.')
      console.error(error.message)
    }
  }

  const getBusInformain = (data) => {
    setBusTime(data.start_time)
    setBusRate(data.rate)
    setBusCompany(data.company)
    setBusSeat(data.rest_seat)
    setBusRequiredTime(data.required_time)
    handlePage('BusSeat')
  }

  return (
    <div className='bustime'>
      <BusHeader text='출발시간을 선택하세요.' />
      <div className='bustime-city'>
        서울 {'->'} {busDestination}
      </div>
      <div className='bustime-date'>
        <div className='bustime-date-back'>
          {'〈'} 이전날
        </div>
        <div className='bustime-date-middle'>
          {busDate}
        </div>
        <div className='bustime-date-next'>
          다음날 {'〉'}
        </div>
      </div>
      <div className='bustime-detail'>
        <div className='bustime-detail-time'>
        {timeList.map((time, index) => (
          <div className='bus-interval' key={index}>
            {time}
          </div>
        ))}

        </div>
        <div className='bustime-detail-bus'>
          <div className='bustime-detail-menu'>
          {menuList.map((menu, index) => (
            <div className='bus-detail-menu' key={index}>
              {menu}
            </div>
          ))}
          </div>
          <div className='bustime-detail-information'>
            {busList?.map((data, index) => (
              <div key={index} className='bustime-drive' onClick={() => getBusInformain(data)}>
                <div className='time'>{data.start_time}</div>
                <div className='driveTime'>{data.required_time}</div>
                <div className='info'>{data.company}</div>
                <div className='type'>{data.rate}</div>
                <div className='seats'>{data.rest_seat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bustime-detail-move'>
          <div className='num-box'>1</div>
      </div>
    </div>
  );
};

export default BusTime;