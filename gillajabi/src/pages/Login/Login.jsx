import React from 'react';
import LoginformButton from './components/LoginformButton';
import LoginformInput from './components/LoginformInput';
import '../../styles/pages/Login.css';

const Login = () => {
  return (
    <div className='login'>
      <h2>길라잡이</h2>
      <form className='login-form'>
        <LoginformInput/>
        <LoginformButton/>
      </form>
    </div>
  );
};

export default Login;