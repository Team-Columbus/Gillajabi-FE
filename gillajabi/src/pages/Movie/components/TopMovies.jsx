import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';
import MovieListItem from '../components/TopMovies/MovieListItem';
import Modal from '../../../components/Modal';
import MovieCount from './MovieTimeTable/MovieCount/MovieCount';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/pages/Movie/TopMovies.css';

const TopMovies = () => {

  const [topMovies, setTopMovies] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState(null);
  const { handlePage } = useMovieContext();

  useEffect(()=>{
    getTopMovies();
  },[]);

  const getTopMovies = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/theaters/CGVmovies_top/`);
      setTopMovies(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const goToNextSlide = () => {
    setCurrentIdx((prevIndex) => (prevIndex + 1) % topMovies.length);
  };

  const goToPrevSlide = () => {
    setCurrentIdx((prevIndex) => (prevIndex - 1 + topMovies.length) % topMovies.length);
  };

  const openModal = (movieInfo) => {
    setIsModalOpen(true);
    setDetailInfo(movieInfo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailInfo(null);
  };

  return (
    <div className='movie-topmovies'>
      <h2>가장 빨리 볼 수 있는 영화 TOP3</h2>
      <div className='movie-topmovies-list'>
        <button className='carousel-button' onClick={goToPrevSlide}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <>
          {topMovies.map((e,idx)=>{
            const isCurrent = (idx === currentIdx);
            return <MovieListItem e={e} key={idx} isCurrent={isCurrent} openModal={openModal}/>
          })}
        </>
        <button className='carousel-button' onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      <Button styleType='Movie_Gray' onClick={() => handlePage('MovieTimeTable')}>
        전체 상영시간표 보러가기
      </Button>
      <Modal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        styleType={'movie-count'}>
        <MovieCount detailInfo = {detailInfo}/>
      </Modal>
    </div>
  );
};

export default TopMovies;