import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import welcomeImg from '../../../assets/Firecracker.png'
import { useUserStore } from '../../../stores/userStore';

const Welcome = () => {
  const navigate = useNavigate();
  const {user} = useUserStore();

  const startButton = () => {
    navigate('/login');
  };

  return (
    <div className='signup-welcome'>
      <div className='signup-welcome-title'>
        <h2>환영합니다!</h2>
        <h2>{user.name}님</h2>
      </div>
      <div className='signup-welcome-imgwrapper'>
        <img src={welcomeImg} alt='welcome-img'/>
      </div>
      <div className='signup-welcome-button'>
        <Button styleType='Large_Orange' onClick={startButton}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Welcome;