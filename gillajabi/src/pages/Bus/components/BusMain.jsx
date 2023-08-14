import {React, useState, useEffect} from 'react';
import Sentence from '../../../components/Sentence'
import { useBusContext } from '../context/BusContext';
import Ticket from '../../../assets/Bus/BusMain_Ticket.png'
import Online from '../../../assets/Bus/BusMain_Online.png'
import BusHeader from './BusHeader';
import '../../../styles/pages/Bus/BusMain.css'

const BusMain = () => {
  const { handlePage } = useBusContext();
  
  const languageList = ['한국어', 'English', '日本語', '中國語']

  return (
    <div className='busmain'>
      <div className='busmain-title'>
        [버스 승차권 발매기] <span>[카드 전용]</span>
      </div>
      <BusHeader />
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