import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Button from '../../../components/Button';
import fieldConfigs from './formFieldsConfig';

/**
 * 회원 가입 양식을 처리하는 SignupForm 컴포넌트.
 * @param {Object} props - 컴포넌트 프롭스.
 * @param {string} props.currentField - 현재 양식 필드.
 * @param {function} props.setCurrentField - 현재 양식 필드를 설정하는 함수.
 * @returns {JSX.Element} SignupForm 컴포넌트.
*/
const SignupForm = ({currentField, setCurrentField}) => {

  const [formFields, setformFields] = useState({
    name: '',
    id: '',
    birth: '',
    password: '',
    confirmPassword: '',
  });

  const [alertmsg, setAlertmsg] = useState('');
  const [confirmmsg, setConfirmmsg] = useState('');

  const [isVibrating, setIsVibrating] = useState(false);
  const inputRef = useRef(null);

  const configs = { ...fieldConfigs };

  // 현재 양식 필드(currentField)에 따라 입력된 값을 검증하고, 검증 결과에 따라 오류 메시지를 표시
  useEffect(()=>{
    if(!checkRegex()){
      setAlertmsg(configs[currentField].alert);
    } else{
      setAlertmsg('');
    }
    
    if (currentField === 'password') {
      if(!checkConfirm()){
        setConfirmmsg(configs['confirm'].alert);
      } else{
        setConfirmmsg('');
      }
    }
  },[formFields, currentField]);
  
  /**
   * 양식 필드 유효성 검사를 처리하고 유효하면 다음 필드로 이동하는 함수.
  */
  const handleField = () => {
    const isFieldValid = checkRegex() && !checkBlank();
  
    if (isFieldValid && checkConfirm()) {
      if(currentField === 'password'){
        checkRegex('password') && moveField();
      }else{
        moveField();
      }
    } else {
      alert('형식을 지켜서 다시 한번 시도해주세요 🙂');
      setIsVibrating(true);
      setFoucs(isFieldValid);
    }
  };

  /**
   * 입력 요소에 포커스를 설정하는 함수.
   * @param {boolean} isFieldValid - 현재 양식 필드의 유효성 여부.
   * @returns {void}
  */
  const setFoucs = (isFieldValid) =>{
    if(currentField === 'password'){
      if (!isFieldValid) {
        inputRef.current = document.getElementsByName('password')[0];
      } else {
        inputRef.current = document.getElementsByName('confirmPassword')[0];
      }
    }
    inputRef.current.focus();
  }

  /**
   * 현재 필드에 따라 다음 필드로 이동하는 함수.
  */
  const moveField = async() =>{
    if (currentField === 'name') {
      setCurrentField('id');
    } else if (currentField === 'id') {
      const isValidId = await checkDuplicateId();
      if (isValidId) {
        setCurrentField('birth');
      }
    } else if (currentField === 'birth') {
      setCurrentField('password');
    } else{
      const isValidSignup = await handleSignup();
      if (isValidSignup){
        setCurrentField('welcome');
      }
    }
  }

  /**
   * 사용자 회원가입을 처리하는 함수.
   * @returns {boolean} 회원가입이 성공하면 true, 그렇지 않으면 false.
  */
  const handleSignup = async () =>{
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/users/signup/`,{
        user_id : formFields.id,
        password : formFields.password,
        name : formFields.name,
        birth : formFields.birth,
      });
      if (response.status >= 200 && response.status < 300) {
        alert('회원 가입 성공! 😀');
        return true
      }
    } catch (error) {
      alert('회원 가입 실패. 다시 한번 시도해주세요.😥');
      console.error(error);
      return;
    }
  }

  /**
   * 사용자 ID가 중복되는지 확인하는 함수.
   * @returns {boolean} 사용자 ID가 사용 가능하면 true, 그렇지 않으면 false.
  */
  const checkDuplicateId = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/users/id/${formFields.id}/exist/`);
      if (response.data.isvalid) {
        alert('사용가능한 아이디입니다.😎');
        return true
      } else {
        alert('중복 아이디입니다. 다른 아이디로 시도해주세요. 😉');
        inputRef.current.focus();
      }
    } catch (error) {
      alert('확인 실패. 다시 한번 시도해주세요.😥');
      console.error(error);
      return;
    }
  };

  /**
   * 양식 필드 변경을 처리하는 함수.
   * @param {Object} e - 이벤트 객체.
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformFields({
      ...formFields,
      [name]: value,
    });
  };

  /**
   * 입력 요소의 진동 효과가 종료될 때 호출되는 함수.
   * @returns {void}
  */
  const handleVibrationEnd = () => {
    setIsVibrating(false);
  };

  /**
   * 현재 양식 필드의 값이 정규식과 일치하는지 확인하는 함수.
   * @param {string} fieldName - 현재 필드의 이름.
   * @returns {boolean} 필드 값이 정규식과 일치하면 true, 그렇지 않으면 false.
  */
  const checkRegex = (fieldName = currentField) => {
    const regex = configs[fieldName].regex;
    return regex.test(formFields[fieldName]);
  };

  /**
   * 현재 양식 필드가 비어 있는지 확인하는 함수.
   * @returns {boolean} 현재 양식 필드가 비어 있으면 true, 그렇지 않으면 false.
  */
  const checkBlank = () =>{
    const inputValue = formFields[currentField];
    return inputValue === '';
  }

  /**
   * 비밀번호와 비밀번호 확인 필드가 일치하는지 확인하는 함수.
   * @returns {boolean} 비밀번호와 비밀번호 확인이 일치하면 true, 그렇지 않으면 false.
  */
  const checkConfirm = () =>{
    return (formFields.password === formFields.confirmPassword);
  }

  const progressPercentage = Math.floor(
    (Object.keys(configs).indexOf(currentField) / Object.keys(configs).length) * 100
  );

  return (
    <>
      <div className='signup-form-progressbar'>
        <div id = 'progress' style={{ '--progress-width': `${progressPercentage}%` }}></div>
      </div>
      <label htmlFor={currentField}>
        {configs[currentField].label}
      </label>
      <div className='signup-form-input'>
        <div id='password'>
          <input
            type = {currentField === 'password' ? 'password' : 'text'}
            name={currentField}
            placeholder={configs[currentField].placeholder}
            value={formFields[currentField]}
            onChange={handleInputChange}
            className={isVibrating ? 'vibrate' : ''}
            onAnimationEnd={handleVibrationEnd}
            ref={inputRef}
          />
          <p>{alertmsg}</p>
        </div>
        {currentField === 'password' && (
          <div id='confirm'>
            <input
              type='password'
              name='confirmPassword'
              placeholder={configs['confirm'].placeholder}
              value={formFields.confirmPassword}
              onChange={handleInputChange}
              className={isVibrating ? 'vibrate' : ''}
              onAnimationEnd={handleVibrationEnd}
              ref={inputRef}
            />
            <p>{confirmmsg}</p>
          </div>
        )}
      </div>
      <div className='signup-form-button'>
        <Button styleType='Large_Orange' onClick={handleField}>
          {currentField === 'password' ? '회원가입' : '계속'}
        </Button>
      </div>
    </>
  );
};

export default SignupForm;