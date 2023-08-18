import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import {Advanced, Beginner, Intermediate} from '../../assets'
import Select from '../../components/Select'
import { useParams } from 'react-router-dom';
import '../../styles/pages/Level.css'

const Level = () => {
  const params = useParams(); 
  const levelPath = params.path;

  const mainSentence =levelPath
  const subSentence = '원하시는 난이도를 선택해주세요'

  const Play = () => {
    //키오스크 시작
  }

  const levelList = [
    {
      Title: '초급',
      detail: '간단하게 연습해봐요',
      Img: Beginner,
    },
    {
      Title: '중급',
      detail: '활용해서 연습해봐요',
      Img: Intermediate,
    },
    {
      Title: '고급',
      detail: '혼자 끝까지 해봐요',
      Img: Advanced,
    }
  ]

  return (
    <div className='level'>
      <Navbar />
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className='level-space'> 
        {levelList.map((info, index) => (
          <Select Title={info.Title} detail={info.detail} Img={info.Img} Func={Play} />
        ))}
      </div>
    </div>
  );
};

export default Level;