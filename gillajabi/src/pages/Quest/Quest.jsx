import React, { useEffect, useState } from 'react';
import MovieQuest from './components/MovieQuest';
import Navbar from '../../components/Navbar';
import QuestButton from './components/QuestButton';
import axios from 'axios';
import '../../styles/pages/Quest.css';

const Quest = () => {

  const [quest, setQuest] = useState(null);
  const [isAccept, setIsAccept] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
      setIsAccept(response.data.is_accept);
      setIsDone(response.data.is_do);
    } catch (error) {
      console.error(error.message);
    }
  }

  switch (quest?.content.category) {
    case '영화관':
      questComponent = <MovieQuest info={quest.content}/>
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
        <QuestButton isAccept={isAccept} isDone={isDone} setIsAccept={setIsAccept}/>
      </div>
    </div>
  );
};

export default Quest;