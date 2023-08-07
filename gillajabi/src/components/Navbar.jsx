import React, { useEffect, useState } from 'react';
import '../styles/components/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import { faUser, faHouse, faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import Option from './Option';

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

  const mainPageText = user ? '내 정보' : '로그인 하기';
  const mainPageFunction = user ? () => navigate('/mypage') : () => navigate('/login');

  return (
    <div className='navbar'>
      {/* 메인페이지일 경우: 로그인 또는 이전화면 */}
      {isMain ? (
        <Option iconName={faUser} Text={mainPageText} onClick={mainPageFunction} />
      ) : (
        <Option iconName={faCircleLeft} Text={'이전화면'} onClick={() => navigate(-1)} />
      )}

      {/* 구독 상태일 경우: 오늘의 문제 */}
      {isSubscribe && (
        <Option iconName={faCircleQuestion} Text={'오늘의 문제'} onClick={() => navigate('question')} />
      )}

      {/* 메인 페이지가 아닐 경우: 처음화면 */}
      {!isMain && <Option iconName={faHouse} Text={'처음화면'} onClick={() => navigate('/')} />}

      {/* 구독 상태일 경우: 불러오기 */}
      {isSubscribe && <Option iconName={faDownload} Text={'불러오기'} onClick={() => navigate('/load')} />}

      <Option iconName={faMagnifyingGlass} Text={'돋보기'} />
    </div>
  );
};

export default Navbar;
