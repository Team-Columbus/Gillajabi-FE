import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import MyInfo from './components/MyInfo';
import SubscriptionButton from './components/SubscriptionButton';
import { useUserStore } from '../../stores/userStore';
import { useNavigate } from 'react-router-dom';
import Smile from '../../assets/Smile.png'
import '../../styles/pages/Mypage.css'

const Mypage = () => {

  const { user, getUserInfo } = useUserStore();
  const [ isSubscribe, setIsSubscribe] = useState(user.is_subscribe);
  const navigate = useNavigate();

  useEffect(()=>{
    !user && checkUser();
  },[user])

  const checkUser = () =>{
    const token = localStorage.getItem('accessToken');
    if(token){
      getUserInfo(token);
      setIsSubscribe(user.is_subscribe);
    }
  }

  return (
    <div className='mypage'>
      <Navbar/>
      <div className='mypage-information'>
        <MyInfo
          leftChild={<span id='title'>{user.name}님의 정보</span>}
          rightChild={
            <Button styleType={'Large_Orange'} onClick={ ()=>navigate('/edit') }>
              수정하기 
            </Button>}
        />
        <div className='mypage-face'>
          <img src={Smile} />
        </div>
        <div className='mypage-status'>
          <MyInfo 
            leftChild={<span>이름</span>}
            rightChild={<span>{user.name}</span>}
          />
          <MyInfo 
            leftChild={<span>생년월일</span>}
            rightChild={<span>{user.birth}</span>}
          />
        </div>
      </div>
      <div className='mypage-subscribe'>
        <MyInfo 
          leftChild={<span id='title'>구독 정보</span>}
          rightChild={<SubscriptionButton isSubscribe={isSubscribe} />}
        />
        {isSubscribe && (
          <div className='mypage-status'>
            <MyInfo 
              leftChild={<span>사용시작</span>}
              rightChild={<span>{user.sub_start}</span>}
            />
            <MyInfo 
              leftChild={<span>사용만료</span>}
              rightChild={<span>{user.sub_end}</span>}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypage;