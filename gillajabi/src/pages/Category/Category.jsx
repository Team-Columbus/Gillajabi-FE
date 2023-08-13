import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import { Cafe, Cinema, fastFood, Traffic} from '../../assets/'
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/pages/Category.css'

const Category = () => {
  const params = useParams(); 
  const kindId = params.id;

  const mainSentence = kindId
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
        {kindId === '패스트푸드' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindId)}>
            <img src={fastFood} alt='fastFood' key={index} />
          </div>
        ))}
        {kindId === '영화관' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindId)}>
            <img src={Cinema} alt='Cinema' key={index} />
          </div>
        ))}
        {kindId === '카페' && Array.from({ length: 3 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindId)}>
            <img src={Cafe} alt='Cafe' key={index} />
          </div>
        ))}
        {kindId === '교통' && Array.from({ length: 2 }).map((_, index) => (
          <div className='category-kindImg' onClick={() => movePractice(kindId)} id='Traffic'>
            <img src={Traffic} alt='Traffic' key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;