import React from 'react';
import Navbar from '../../components/Navbar';
import Sentence from '../../components/Sentence';
import useReset from '../../Hooks/useReset';
import {Atm, Cafe, Cinema, fastFood, Machine, Traffic} from '../../assets/'
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Main.css'

const Main = () => {
  useReset();
  const mainSentence = '어떤 분야의 학습을 원하시나요?';
  const subSentence = '원하시는 분야를 눌러주세요.';
  const navigate = useNavigate();

  const categoryList = [ '패스트푸드', '영화관', '카페', '교통', '무인민원발급기', 'ATM'];
  
  const imageMap = {
    패스트푸드: fastFood,
    영화관: Cinema,
    카페: Cafe,
    교통: Traffic,
    무인민원발급기: Machine,
    ATM: Atm
  };

  const moveMovie = () => {
    navigate('/movie')
  }

  const moveBus = () => {
    navigate('/bus')
  }

  const movePractice = (category) => {
    if (category === '영화관') {
      moveMovie();
      return null;
    }
    
    if(category === '교통') {
      moveBus();
      return null;
    }
    navigate(`/practice/${category}`)
  }

  return (
    <div className='main'> 
      <Navbar/>
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className='main-category'>
        {categoryList.map((info, index) => (
          <div className='main-categoryImg' onClick={ () => movePractice(info)}  key={index}>
            <img src={imageMap[info]} alt='categoryImg'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
