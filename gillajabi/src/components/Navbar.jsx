import React from 'react';
import '../styles/components/Navbar.css'
import { faUser, faHouse, faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import Option from './Option.jsx';

/**
 * Navbar 컴포넌트는 헤더 바를 구성하는 React 컴포넌트입니다.
 * @param {number} props.loginStatus - 로그인 상태를 나타내는 숫자 값 (0: 비로그인 상태, 1: 로그인 상태).
 * @param {number} props.pageStatus - 페이지 상태를 나타내는 숫자 값 (0: 처음화면, 1: 다른화면).
 * @param {number} props.subscribeStatus - 구독 상태를 나타내는 숫자 값 (0: 구독하지 않음, 1: 구독 중).
 * @returns {JSX.Element} 헤더 바를 나타내는 JSX 요소
 */

const Navbar = (props) => {
  const loginText = props.loginStatus === 1 ? '내 정보' : '로그인 하기';

  return (
    <div className='navbar'>
      {props.pageStatus === 1 ? (
        <Option iconName={faUser} Text={loginText} />
      ) : (
        <Option iconName={faCircleLeft} Text={'이전화면'} />
      )}
      {props.subscribeStatus === 1 ? (
        <Option iconName={faCircleQuestion} Text={'오늘의 문제'} />
      ) : null}

      {props.pageStatus === 0 ? (
        <Option iconName={faHouse} Text={'처음화면'} />
      ) : null}

      {props.subscribeStatus === 1 ? (
        <Option iconName={faDownload} Text={'불러오기'} />
      ) : null}

      <Option iconName={faMagnifyingGlass} Text={'돋보기'} />
    </div>
  );
};

export default Navbar;
