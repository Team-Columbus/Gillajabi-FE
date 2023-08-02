import React, { useState } from 'react';

const LoginformInput = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='login-form-input'>
      <label htmlFor='id'>아이디</label>
      <input
        type="text"
        name="id"
        placeholder="아이디"
      />
      <label htmlFor='password'>비밀번호</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      <label htmlFor="showPassword">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={handlePasswordToggle}
        />
        {showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
      </label>
    </div>
  );
};

export default LoginformInput;