import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import {Preview, Together, Alone} from '../../assets'
import '../../styles/pages/Practice.css'
import Select from '../../components/Select'

const Practice = () => {
  const mainSentence = '테스트'
  const subSentence = '원하시는 연습 방식을 선택해주세요'

  const previewPage = () => {
    //미리보기
  }

  const togetherPage = () => {
    //같이 하기
  }

  const alonePage = () => {
    //혼자 하기
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