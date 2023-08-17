import React from 'react';
import { useBusContext } from '../context/BusContext';
import BusHeader from './BusHeader';
import { useBusStore } from '../../../stores/BusStore';
import '../../../styles/pages/Bus/BusDestination.css'
const BusDestination = (props) => {

  const {handlePage} = useBusContext();
  const {setBusDestination} = useBusStore();
  const regionList = ['전체', '인천/경기', '강원', '대전/세종', '충남', '충북', '부산/경남', '대구/경북']
  const consonantList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ']
  const cityList = ['강릉', '경북도청', '경주', '구미', '거장', '경주고속', '고흥', 
  ,'곡천', '곡성', '군산', '구례', '광주(경기)', '관산', '강릉시외터미널', '고창', '강화']
  
  const selectDestination = (text) => {
    setBusDestination(text)
    handlePage('BusTime')
  }

  return (
    <div className='busdestination'>
      <BusHeader text=' 도착지를 선택하세요'/>
      <div className='busdestination-list'>
        <div className='list-region'>
          {regionList.map((text, index) => (
            <div className='region'>
              {text}
            </div>
          ))}
        </div>
        <div className='list-consonant'>  
          {consonantList.map((text, index) => (
            <div className='consonant'>
              {text}
            </div>
          ))}
        </div>
        <div className='list-city'>
          {cityList.map((text, index) => (
            <div className='city' onClick={() => (selectDestination(text))}>
              <div className='city-detail'>
                고속
              </div>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusDestination;