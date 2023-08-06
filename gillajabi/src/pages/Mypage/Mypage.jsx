import React from 'react';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import '../../styles/pages/Mypage.css'
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//props로 회원 정보 : 이름, 생년월일, 구독 상태, 구독 시작일, 구독 만료일
const Mypage = () => {
  const subscribeStatus = 1; // 1 : 구독 중, 0 : 구독 안함

  return (
    <div className='mypage'>
      <Navbar
        pageStatus={0}
        loginStatus={1}
        subscribeStatus={subscribeStatus}
      />
      마이 페이지입니다.
    </div>
  );
};

export default Mypage;