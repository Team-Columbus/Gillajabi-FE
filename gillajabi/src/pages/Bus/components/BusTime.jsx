import {React, useEffect} from 'react';
import BusHeader from './BusHeader';
import axios from 'axios';
import { useBusStore } from '../../../stores/BusStore';
import { useBusContext } from '../context/BusContext';
import '../../../styles/pages/Bus/BusTime.css';

const BusTime = () => {

  const {handlePage} = useBusContext();

  const {busDate, busDestination, setBusTime, setBusRate, setBusCompany} = useBusStore();
  const timeList = ['전체', '02:00', '04:00', '06:30', '08:00', '10:00', '12:00', '14:00', '16:00']
  const menuList= ['출발시간', '회사/소요시간', '등급', '잔여석']

  const busData = [
    ['02:20', '동양 (평균 4시간)', '심야우등', '20'],
    ['04:20', '동양 (평균 4시간)', '우등', '21'],
    ['06:00', '금호 (평균 4시간)', '우등', '17'],
    ['08:30', '동양 (평균 4시간)', '일반', '8'],
    ['10:50', '동양 (평균 4시간)', '프리미엄', '12'],
    ['12:40', '금호 (평균 4시간)', '우등', '10'],
    ['14:30', '금호 (평균 4시간)', '일반', '27'],
    ['16:50', '동양 (평균 4시간)', '우등', '4'],
  ]

  const getBusInformain = (data) => {
    setBusTime(data[0])
    setBusRate(data[2])
    setBusCompany(data[1].substring(0, 2))
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
            {busData.map((data, index) => (
              <div key={index} className='bustime-drive' onClick={() => getBusInformain(data)}>
                <div className='time'>{data[0]}</div>
                <div className='info'>{data[1]}</div>
                <div className='type'>{data[2]}</div>
                <div className='seats'>{data[3]}</div>
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