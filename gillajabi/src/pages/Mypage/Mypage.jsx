import React from 'react';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import '../../styles/pages/Mypage.css'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//props로 회원 정보 : 이름, 생년월일, 구독 상태, 구독 시작일, 구독 만료일
const Mypage = () => {
  const subscribeStatus = 1; // 1 : 구독 중, 0 : 구독 안함

  const Edit = () => {
    //수정 페이지로 이동
  };

  return (
    <div className='mypage'>
      <Navbar
        pageStatus={0}
        loginStatus={1}
        subscribeStatus={subscribeStatus}
      />
      <div className='mypage-information'>
        <div className='mypage-myInformation'>
          홍길동님의 정보
          <Button
            children={'수정하기'}
            styleType={'Large_Orange'}
            onClick={Edit}
            disabled={false}
          />
        </div>
        <div className='mypage-face'>
          <FontAwesomeIcon icon={faFaceSmile} />
        </div>
        <div className='mypage-name'>
          이름 <span className='mypage-priavacy'>홍길동</span>
        </div>
        <div className='mypage-birth'>
          생년월일<span className='mypage-priavacy'>2001-02-12</span>
        </div>
      </div>
    </div>
  );
};

export default Mypage;