import React from 'react';
import Button from '../../../components/Button';

const LoginformButton = () => {
  return (
    <>
      <div className='login-optionbtn'>
        <Button>
          회원가입
        </Button>
        <div className='login-vline'></div>
        <Button>
          비밀번호 찾기
        </Button>
      </div>
      <div className='login-startbtn'>
        <Button styleType = {'Large_Orange'}>
          시작하기
        </Button>
        <Button styleType = {'Large_White'}> 
          건너뛰기
        </Button>
      </div>
    </>
  );
};

export default LoginformButton;