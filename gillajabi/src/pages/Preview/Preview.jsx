import React from 'react';
import Navbar from '../../components/Navbar'
import Sentence from '../../components/Sentence'
import { useParams } from 'react-router-dom';
import '../../styles/pages/Preview.css'

const Preview = () => {
  const params = useParams(); 
  const previewPath = params.path;

  const mainSentence = previewPath
  const subSentence = '전체적인 학습 흐름을 미리보아요'

  return (
    <div className='preview'>
      <Navbar />
      <Sentence mainSentence={mainSentence} subSentence={subSentence} />
      <div className="preview-video">
        <iframe
          src="https://www.youtube.com/embed/dMLad81xzog"
          frameborder="0"
          allow="fullscreen"
        >
        </iframe>
      </div>
    </div>
  );
};

export default Preview;