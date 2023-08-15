import React from 'react';
import { useBusContext } from '../context/BusContext';
import BusHeader from './BusHeader';
import Calender from '../../../assets/Bus/BusSelect_Calender.png'
import Depart from '../../../assets/Bus/BusSelect_Depart.png'
import Arrive from '../../../assets/Bus/BusSelect_Arrive.png'
import SelectCity from './BusSelect/SelectCity';
import '../../../styles/pages/Bus/BusSelect.css'

const BusSelect = () => {
  return (
    <div className='busselect'>
      <BusHeader/>
      <div className='busselect-title'>
        도착지를 선택하세요
      </div>
      <div className='busselect-detail'>
        <div className='detail-depart'>
          <img src={Calender} /><span>출발일</span>
        </div>
        <div className='detail-date'>
          <div className='detail-date-back'>
            {'〈'} 이전날
          </div>
          <div className='detail-date-middle'>
            2023-08-15 화요일
          </div>
          <div className='detail-date-next'>
            다음날 {'〉'}
          </div>
        </div>
        <div className='detail-selectBox'>
          <SelectCity text='출발지' city='서울' img={Depart}/>
          {'->'}
          <SelectCity text='도착지' city='도착지 선택' img={Arrive}/>
        </div>  
        <div className='detail-excuse'>
          <div className='excuse-line'>
            <span class="excuse-emphasis">코로나19</span>&nbsp;로 인하여 일부 노선의
          </div>
          <div className='excuse-line'>
            운행 시간이 변경 및 조정될 수 있습니다.
          </div>
          <div className='excuse-line'>
            양해 드립니다.
          </div>
        </div>
        <div className='detail-caution'>
          <div className='caution-line'>
            출발 <span className='caution-emphasis'>5분</span>&nbsp;전부터는 발권되지 않습니다.
          </div>
          <div className='caution-line'>
            다음 출발 차량을 이용해주세요.
          </div>
          </div>
      </div>
    </div>
  );
};

export default BusSelect;