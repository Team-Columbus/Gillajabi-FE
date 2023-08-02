import React from 'react';
import LoginformInput from './components/LoginformInput';

const Login = () => {
  return (
    <div className='login'>
      <h2>길라잡이</h2>
      <form className='login-form'>
        <LoginformInput/>
      </form>
    </div>
  );
};

export default Login;