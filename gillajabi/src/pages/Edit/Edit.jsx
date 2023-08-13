import { React, useState } from 'react';
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Edit.css';

const Edit = () => {

  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  }

  const editComplete = async () => {
    const token = localStorage.getItem('accessToken');
    await axios.put(`${process.env.REACT_APP_API}/api/users/profile/update/`, {
      edit_name : userName
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    navigate('/mypage')
  }

  return (
    <div className='edit'>
      <Navbar />
      <div className='edit-box'>
        <div className='edit-title'>
          <p>수정하기</p>
        </div>
        <div className='edit-information'>
          <p>이름</p>
          <input type='text' value={userName} onChange={handleInputChange} placeholder='Ex) 홍길동'></input>
        </div>
        <div className='edit-button'>
          <Button styleType={'Large_Orange'} onClick={editComplete}>수정 완료</Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;