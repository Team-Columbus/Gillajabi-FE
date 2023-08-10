import React from 'react';
import Navbar from '../../components/Navbar';
import Sentence from '../../components/Sentence';
import '../../styles/pages/Main.css'
import {Atm, Cafe, Cinema, fastFood, Machine, Traffic} from '../../assets/'

const Main = () => {
  const loginStatus = 0; // 1 : 로그인 상태, 0 : 로그아웃 상태 => 로그인 페이지에서 전달 받기
  const subscribeStatus = 0; // 1 : 구독 중, 0 : 구독 안함 => 로그인 상태일때 구독 여부 받기
  const pageStatus = 1; // 1 : 메인 페이지, 0 : 다른 페이지
  
  const mainSentence = '어떤 분야의 학습을 원하시나요?';
  const subSentence = '원하시는 분야를 눌러주세요.';

  const categoryList = [ fastFood, Cinema, Cafe, Traffic, Machine, Atm];

  return (
    <div className='main'> 
      <Navbar
        pageStatus={pageStatus}
        loginStatus={loginStatus}
        subscribeStatus={subscribeStatus}
      />
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
