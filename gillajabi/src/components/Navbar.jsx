import React, { useEffect, useState } from 'react';
import '../styles/components/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import {Back, Glasses, Home, Load, Login, myInfo, Solve} from '../assets/'
import { useZoomStore } from '../stores/zoomStore';

const Navbar = () => {
  const { user } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();
  const { handleZoom } = useZoomStore();

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
        <div className='navbar-img' onClick={mainPageFunction}>
          <img src= {mainPageImg} alt='myInfo/Login'/>
        </div>
      ) : (
        <div className='navbar-img' onClick={() => navigate(-1)}>
          <img src= {Back} alt='back'/>
        </div>        
      )}

      {/* 구독 상태일 경우: 오늘의 문제 */}
      {isSubscribe && (
        <div className='navbar-img' onClick={() => navigate('/quest')}>
          <img src= {Solve} alt='solve'/>
        </div>        
      )}

      {/* 메인 페이지가 아닐 경우: 처음화면 */}
      {!isMain &&         
        <div className='navbar-img' onClick={() => navigate('/')}>
          <img src= {Home} alt='home'/>
        </div>
      }

      {/* 구독 상태일 경우: 불러오기 */}
      {isSubscribe && 
        <div className='navbar-img' onClick={() => navigate('/load')}>
          <img src= {Load} alt='load'/>
        </div>
      }
      
      <div className='navbar-img' onClick={handleZoom}>
        <img src= {Glasses} alt='glasses'/>
      </div>
    </div>
  );
};

export default Navbar;
