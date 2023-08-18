import React from 'react';
import Navbar from '../../components/Navbar';
import Sentence from '../../components/Sentence';
import useReset from '../../Hooks/useReset';
import {Atm, Cafe, Cinema, fastFood, Machine, Traffic} from '../../assets/'
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Main.css'

const Main = () => {
  useReset();
  const mainSentence = '어떤 분야의 연습을 원하시나요?';
  const subSentence = '원하시는 분야를 눌러주세요.';
  const navigate = useNavigate();

  const categoryList = [ '교통', '영화관', '패스트푸드', '카페', '무인민원발급기', 'ATM'];
  
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
    if (category === '영화관' || category === '교통') {
      category === '영화관' ? moveMovie() : moveBus();
      navigate(`/practice/${category}`);
      return;
    } else {
      handleAlert();
    }
  }

  const handleAlert = () =>{
    alert('개발중인 기능입니다 😫');
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
