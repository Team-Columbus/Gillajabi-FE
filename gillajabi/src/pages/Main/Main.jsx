import React from 'react';
import Navbar from '../../components/Navbar';
import Sentence from '../../components/Sentence';
import '../../styles/pages/Main.css'
import {Atm, Cafe, Cinema, fastFood, Machine, Traffic} from '../../assets/'

const Main = () => {
  const mainSentence = '어떤 분야의 학습을 원하시나요?';
  const subSentence = '원하시는 분야를 눌러주세요.';

  const categoryList = [ fastFood, Cinema, Cafe, Traffic, Machine, Atm];

  return (
    <div className='main'> 
      <Navbar/>
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className='main-category'>
        {categoryList.map((info, index) => (
          <div className='main-categoryImg'>
            <img src = {info}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
