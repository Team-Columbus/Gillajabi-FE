import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import LoginformButton from './components/LoginformButton';
import LoginformInput from './components/LoginformInput';
import '../../styles/pages/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    user_id : '',
    password : '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!formData.user_id || !formData.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/users/login/`, {
        user_id: formData.user_id,
        password: formData.password,
      });
  
      if (response.status >= 200 && response.status < 300) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        if (response.status >= 400) throw new Error(`클라이언트 오류: 응답 상태 코드 ${response.status}`);
        if (response.status >= 500) throw new Error(`서버 오류: 응답 상태 코드 ${response.status}`);
      }
    } catch (error) {
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
      console.error(error.message);
    }
  };

  return (
    <div className='login'>
      <h2>길라잡이</h2>
      <form className='login-form' onSubmit={handleLogin}>
        <LoginformInput formData={formData} handleChange={handleChange} />
        <LoginformButton/>
      </form>
    </div>
  );
};

export default Login;