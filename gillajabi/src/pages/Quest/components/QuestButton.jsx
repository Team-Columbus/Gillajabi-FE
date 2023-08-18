import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import axios from 'axios';

const QuestButton = ({ isAccept, isDone, setIsAccept }) => {

  const [buttonStyle, setButtonStyle] = useState({
    styleType : 'Large_White',
    buttonText : '수락하기'
  });

  useEffect(()=>{
    handleButtonStyle();
  },[isAccept, isDone]);

  const handleButtonStyle = () =>{
    if (isAccept) {    
      setButtonStyle({
        styleType : 'Large_Orange',
        buttonText : '수락 중',
      });
    } if (isDone) {
      setButtonStyle({
        styleType : 'Movie_Gray',
        buttonText : '수행 완료',
      });
    } if (!isAccept && !isDone){
      setButtonStyle({
        styleType : 'Large_White',
        buttonText : '수락하기',
      });
    }
  }

  const handleAcceptQuest = async () =>{
    if (!isAccept && !isDone){
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/quests/accept/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAccept(true);
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  return (
    <Button styleType={buttonStyle.styleType} onClick={handleAcceptQuest}>
      {buttonStyle.buttonText}
    </Button>
  );
};

export default QuestButton;