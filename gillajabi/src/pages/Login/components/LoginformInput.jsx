import React, { useState } from 'react';

const LoginformInput = ({ formData, handleChange }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className='login-form-input'>
      <label htmlFor='user_id'>아이디</label>
      <input
        type="text"
        name="user_id"
        placeholder="아이디"
        value={formData.user_id}
        onChange={handleChange}
      />
      <label htmlFor='password'>비밀번호</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
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