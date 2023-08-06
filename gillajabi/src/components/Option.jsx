import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/components/Option.css'

/**
 * Option 컴포넌트는 아이콘과 텍스트로 구성된 옵션을 렌더링하는 React 컴포넌트입니다.
 * @param {string} [props.className] - 옵션 컨테이너의 클래스 이름을 지정합니다. (클래스 이름 : 배경색 설정)
 * @param {object} props.iconName - FontAwesome 아이콘 객체를 나타내는 변수입니다.
 * @param {string} props.Text - 옵션에 대한 텍스트 내용입니다.
 * @returns {JSX.Element} 아이콘과 텍스트로 구성된 옵션을 나타내는 JSX 요소
 */

const Option = (props) => {
  const optionName = props.className || 'option';

  return (
    <div className={optionName}>
      <div className='option-icon'>
        <FontAwesomeIcon icon={props.iconName} />
      </div>

      <div className='option-text'>{props.Text}</div>
    </div>
  );
};

export default Option;
