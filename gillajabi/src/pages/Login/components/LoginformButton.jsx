import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const LoginformButton = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='login-optionbtn'>
        <Button type='button' onClick={() => navigate('/signup')}>
          회원가입
        </Button>
        <div className='login-vline'></div>
        <Button type='button'>
          비밀번호 찾기
        </Button>
      </div>
      <div className='login-startbtn'>
        <Button 
          type='submit'
          styleType = {'Large_Orange'}
        >
          시작하기
        </Button>
        <Button 
          type='button'
          styleType = {'Large_White'}
          onClick={() => navigate('/')}
        > 
          건너뛰기
        </Button>
      </div>
    </>
  );
};

export default LoginformButton;