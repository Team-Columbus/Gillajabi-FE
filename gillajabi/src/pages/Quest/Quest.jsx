import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import axios from 'axios';

const Quest = () => {

  const [quest, setQuest] = useState(null);

  let questComponent;
  let questId;

  useEffect(()=>{
    getQuestInfo();
  },[]);

  const getQuestInfo = async () =>{
    const token = localStorage.getItem('accessToken');
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/quests/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuest(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  switch (quest?.content.category) {
    case '영화관':
      questId='movie'
      break;
    case '버스':
      questId='transport'
      break;
    default:
      questComponent = undefined;
      break;
  };

  return (
    <div className='quest'>
      <Navbar/>
      <div className='quest-content'>
        <div className='quest-content-info'>
          <div className='quest-content-header'>
            <p>오늘의 문제</p>
            <div className='quest-content-header-category' id={questId}>
              <p>{quest?.content.category}</p>
            </div>
          </div>
          <div className='quest-content-detail'>
            <div className='quest-content-detail-component'>
              {questComponent}
            </div>
          </div>
        </div>
        <Button>
          수락하기
        </Button>
      </div>
    </div>
  );
};

export default Quest;