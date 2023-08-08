import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const SubscriptionButton = ({ isSubscribe }) => {

  const navigate = useNavigate();
  const buttonText = isSubscribe ? '구독중' : '구독하기';
  const buttonStyle = isSubscribe ? 'Large_White' : 'Large_Orange';
  const onClickHandler = isSubscribe ? () => navigate('/subscribe') : ()=>{};

  return (
    <Button styleType={buttonStyle} onClick={onClickHandler} disabled={isSubscribe}>
      {buttonText}
    </Button>
  );
};

export default SubscriptionButton;
