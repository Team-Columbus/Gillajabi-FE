import React, { useState, useEffect } from 'react';
import ticketImg from '../../../../assets/Movie/movie_ticket.png';
import Button from '../../../../components/Button';

const MoviePrintTicketModal = () => {
  const [progress, setProgress] = useState(0);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        setIsLoad(false);
      }
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

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
        <Button styleType={'Movie_Gray'}>
          예매 완료
        </Button>
      )}
    </div>
  );
};

export default MoviePrintTicketModal;
