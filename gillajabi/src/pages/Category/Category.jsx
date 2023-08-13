import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import { Cafe, Cinema, fastFood, Traffic} from '../../assets/'
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/pages/Category.css'

const Category = () => {
  const params = useParams(); 
  const kindPath = params.path;

  const mainSentence = kindPath
  const subSentence = '원하시는 분야를 눌러주세요'
  const navigate = useNavigate();
  
  const movePractice = (category) => {
    navigate(`/practice/${category}`)
  }

  return (
    <div className='category'>
      <Navbar />
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className='category-kind'>
        {kindPath === '패스트푸드' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindPath)}>
            <img src={fastFood} alt='fastFood' key={index} />
          </div>
        ))}
        {kindPath === '영화관' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindPath)}>
            <img src={Cinema} alt='Cinema' key={index} />
          </div>
        ))}
        {kindPath === '카페' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindPath)}>
            <img src={Cafe} alt='Cafe' key={index} />
          </div>
        ))}
        {kindPath === '교통' && Array.from({ length: 2 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindPath)} id='Traffic'>
            <img src={Traffic} alt='Traffic' key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;