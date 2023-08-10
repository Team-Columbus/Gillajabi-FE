import React, { useEffect, useState } from 'react';
import '../styles/components/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import { faUser, faHouse, faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import {Back, Glasses, Home, Load, Login, myInfo, Solve} from '../assets/'

const Navbar = () => {
  const { user } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMain, setIsMain] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);

  useEffect(() => {
    setIsMain(location.pathname === '/');
  }, [location.pathname]);

  useEffect(() => {
    setIsSubscribe(user && user.is_subscribe);
  }, [user]);

  const mainPageImg = user ? myInfo : Login ;
  const mainPageFunction = user ? () => navigate('/mypage') : () => navigate('/login');

  return (
    <div className='navbar'>
      {/* 메인페이지일 경우: 로그인 또는 이전화면 */}
      {isMain ? (
        <div className='navbar-img' onClick={mainPageFunction>
          <img src= {mainPageImg} />
        </div>
      ) : (
        <div className='navbar-img' onClick={() => navigate(-1)}>
          <img src= {Back} />
        </div>        
      )}

      {/* 구독 상태일 경우: 오늘의 문제 */}
      {isSubscribe && (
        <div className='navbar-img' onClick={() => navigate('question')}>
          <img src= {Solve} />
        </div>        
      )}

      {/* 메인 페이지가 아닐 경우: 처음화면 */}
      {!isMain &&         
        <div className='navbar-img' onClick={() => navigate('/')}>
          <img src= {Home} />
        </div>
        
      {/* 구독 상태일 경우: 불러오기 */}
      {isSubscribe && 
        <div className='navbar-img' onClick={() => navigate('/load')}>
          <img src= {Load} />
        </div>

      <div className='navbar-img'>
        <img src= {Glasses} />
      </div>
    </div>
  );
};

export default Navbar;
