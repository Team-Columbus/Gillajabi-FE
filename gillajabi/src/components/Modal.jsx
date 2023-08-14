import React from 'react';
import '../styles/components/Modal.css';

const Modal = (props) => {

  const {isOpen,children,closeModal, styleType} = props;

  return (
    <div className={isOpen ? 'modal-open' : 'modal-close'}>
      <div className='modal-background'></div>
      <div className='modal-content' id={`content-${styleType}`}>
        <button className='modal-closebtn' onClick={closeModal}>
          X
        </button>
        <div className='modal-children'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;