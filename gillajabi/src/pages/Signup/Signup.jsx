import React, { useState } from 'react';
import Welcome from './components/Welcome';
import SignupForm from './components/SignupForm';

const Signup = () => {
  const [currentField, setCurrentField] = useState('name');

  return (
    <div className='signup'>
      <div className='signup-form'>
        {currentField === 'welcome' ? <Welcome/> 
        : <SignupForm currentField = {currentField} setCurrentField = {setCurrentField}/>}
      </div>
    </div>
  );
};

export default Signup;