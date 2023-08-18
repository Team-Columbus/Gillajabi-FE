import React from 'react';
import '../styles/components/Sentence.css';

const Sentence = (props) => {
  return (
    <div className='sentence'>
      <p>{props.mainSentence}</p>
      <p>{props.subSentence}</p>
    </div>
  );
};

export default Sentence;
