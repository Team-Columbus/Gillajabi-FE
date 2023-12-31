import React from 'react';
import '../styles/components/Button.css'

const Button = (props) => {

  const { children, styleType, onClick, disabled } = props;

  const btnTypeList = ['Large_Orange','Large_White','Movie_Gray','Movie_Red'];
  const btnType = btnTypeList.includes(styleType) ? styleType : 'default'

  return (
    <button className = {btnType} onClick = {onClick} disabled = {disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type : "default",
  onClick : () => {},
  disabled : false
}

export default Button;