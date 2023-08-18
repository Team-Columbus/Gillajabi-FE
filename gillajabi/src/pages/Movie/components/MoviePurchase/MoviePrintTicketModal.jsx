import React, { useState, useEffect } from 'react';
import ticketImg from '../../../../assets/Movie/movie_ticket.png';
import Button from '../../../../components/Button';
import { useMovieStore } from '../../../../stores/MovieStore';
import { useMovieContext } from '../../context/MovieContext';
import { useUserStore } from '../../../../stores/userStore';
import axios from 'axios';

const MoviePrintTicketModal = () => {
  const [progress, setProgress] = useState(0);
  const [isLoad, setIsLoad] = useState(true);
  const [questAnswer, setQuestAnswer] = useState(null);

  const { userCount, selectedMovieInfo } = useMovieStore();
  const { handlePage } = useMovieContext();
  const { user } = useUserStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        setIsLoad(false);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  useEffect(()=>{
    setQuestAnswer({
      category: "영화관",
      title: selectedMovieInfo?.title,
      time: selectedMovieInfo?.start_time,
      ticket: {
        normal: userCount?.normal,
        teen: userCount?.teen,
        disabled: userCount?.disabled,
        silver: userCount?.silver,
      }
    })
  },[selectedMovieInfo]);

  const checkQuestCondition = () =>{
    if(user && user.is_accept){
      handleQuestClear();
    }
  }

  const handleQuestClear = async (e) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post(`${process.env.REACT_APP_API}/api/quests/check/`,
        {
          answer: questAnswer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alertQuestSuccess(response.data.result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const alertQuestSuccess = (isSuccess) =>{
    if(isSuccess){
      alert('퀘스트 성공!! 🎉');
    } 
    handlePage('Moviemain');
  }

  return (
    <div className='movie-printticket-modal'>
      {isLoad ? 
        <div className='movie-printticket-modal-description load'>
          <p>티켓을 출력하고 있습니다</p>
        </div>
        : <div className='movie-printticket-modal-description'>
          <p>티켓출력이 완료되었습니다</p>
          <p>아래에서 티켓을 확인해주세요!</p>
        </div>
      }
      <div className='movie-printticket-modal-progressbar'>
        <p>{progress}%</p>
        <div id='modal-progressbar-wrapper'>
          <div id='modal-progressbar' style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      { !isLoad && (
        <div className='movie-printticket-modal-imgwrapper'>
          <img src={ticketImg} alt='ticketImg'/>
        </div>
      )}
      { !isLoad && (
        <Button styleType={'Movie_Gray'} onClick={checkQuestCondition}>
          예매 완료
        </Button>
      )}
    </div>
  );
};

export default MoviePrintTicketModal;
