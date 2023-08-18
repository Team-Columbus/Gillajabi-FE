import React from 'react';
import BusHeader from './BusHeader';
import Gillajabi from '../../../assets/Bus/BusFinish_Gillajabi.png'
import Button from '../../../components/Button'
import { useBusContext } from '../context/BusContext';
import '../../../styles/pages/Bus/BusFinish.css'

const BusFinish = () => {
  const {handlePage} = useBusContext();
  return (
    <div className='busfinish'>
      <BusHeader text='이용해 주셔서 감사합니다.' />
      <div className='busfinish-detail'>
        <div className='busfinish-detail-text'>
          출력된 승차권을 확인하여 주십시오.
          <span>승차권에 문제가 있을 경우 창구로 문의하여 주십시오.</span>
        </div>
        <div className='busfinish-detail-img'>
          <img src={Gillajabi}></img>
          <Button styleType='Large_Orange' onClick={() => handlePage('BusMain')}>처음으로</Button>
        </div>
      </div>
    </div>
  );
};

export default BusFinish;