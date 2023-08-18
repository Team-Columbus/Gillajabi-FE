import {React, useState, useEffect} from 'react';
import { useBusContext } from '../context/BusContext';
import BusHeader from './BusHeader';
import axios from 'axios';
import { useBusStore } from '../../../stores/BusStore';
import '../../../styles/pages/Bus/BusDestination.css'
const BusDestination = (props) => {

  const {handlePage} = useBusContext();
  const {setBusDestination} = useBusStore();
  const regionList = ['전체', '인천/경기', '강원', '대전/세종', '충남', '충북', '부산/경남', '대구/경북']
  const consonantList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ']

  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/traffics/arrive_bus_list/`)
        setCityList(response.data.terminal);
        //console.log(response);
      } catch (error) {
        alert('실패했습니다. 다시 시도해 주세요.')
        console.error(error.message)
      }
    }
    getCity();
  }, [])
  
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
            <div className= {index === 0 ? ('region-all') : ('region')}>
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