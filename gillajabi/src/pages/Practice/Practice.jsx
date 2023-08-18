import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import {Preview, Together, Alone} from '../../assets'
import Select from '../../components/Select'
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/pages/Practice.css'

const Practice = () => {
  const params = useParams(); 
  const practicePath = params.path;
  const navigate = useNavigate();
  
  const mainSentence = practicePath
  const subSentence = '원하시는 연습 방식을 선택해주세요'

  const previewPage = () => {
    handleAlert();
    // navigate(`/preview/${practicePath}`);
  }

  const togetherPage = () => {
    handleAlert();
    // navigate(`/level/${practicePath}`)
  }

  const alonePage = () => {
    if(practicePath === '교통'){
      navigate(`/Bus`);
    }
    if(practicePath === '영화관'){
      navigate(`/Movie`);
    }
  }

  const handleAlert = () =>{
    alert('개발중인 기능입니다 😫');
  }

  const practiceList = [
    {
      Title: '미리 보기',
      detail: '연습 영상을 확인해봐요',
      Img: Preview,
      Func: previewPage
    },
    {
      Title: '같이 하기',
      detail: '난이도에 따라 연습해봐요',
      Img: Together,
      Func: togetherPage
    },
    {
      Title: '혼자 하기',
      detail: '혼자 자유롭게 연습해봐요',
      Img: Alone,
      Func: alonePage,
    }
  ]

  return (
    <div className='practice'>
      <Navbar />
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className='practice-space'> 
        {practiceList.map((info, index) => (
          <Select Title={info.Title} detail={info.detail} Img={info.Img} Func={info.Func} />
        ))}
      </div>
    </div>
  );
};

export default Practice;