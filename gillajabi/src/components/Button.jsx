import React from 'react';
import '../styles/components/Button.css'

const Button = (props) => {

  const { children, type, onClick, disabled } = props;

  const btnTypeList = ['Large_Orange','Large_White'];
  const btnType = btnTypeList.includes(type) ? type : 'default'

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