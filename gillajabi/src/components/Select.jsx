import React from 'react';
import Sentence from './Sentence';
import '../styles/components/Select.css'

const Select = (props) => {
  return (
    <div className='select'>
      <div className='select-img'>
        <img src = {props.Img}/>
      </div>
      <div className='select-text'>
        <Sentence mainSentence={props.Title} subSentence={props.detail} />
      </div>
    </div>
  );
};

export default Select;