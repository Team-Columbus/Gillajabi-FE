import React from 'react';
import '../../styles/pages/Splash.css'
import splashImg from '../../assets/splashHand.png'

const Splash = () => {

  return (
    <div className='splash'>
      <div className='splash-text'>
        <p>손끝으로 배우는</p>
        <p>새로운 세상</p>
        <p>내 손안의 키오스크</p>
        <h2>길라잡이</h2>
      </div>
      <div className='splash-imgwrapper'>
        <img src={splashImg} alt='splash-img'/>
      </div>
      <div className='splash-footer'>
        <p>@ Team-Colombus</p>
        <p>Designed by Freepik</p>
      </div>
    </div>
  );
};

export default Splash;