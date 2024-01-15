import React, { useEffect } from 'react';

import classes from './ModalComponent.module.scss';
import closeIcon from '@assets/images/icons/icn_close.svg';

export const ModalOverlay = ({ children }) => {
  useEffect(() => {
    document.querySelector('body').classList.add('overlay');
    return () => document.querySelector('body').classList.remove('overlay');
  }, []);
  return <div className={classes['modal-overlay']}>{children}</div>;
};

const ModalComponent = ({ img, onClick, onClose }) => {
  return (
    <div className={classes['modal-wrapper']}>
      <div onClick={onClick} className={classes['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <div className={classes['close-button']}>
        <p onClick={onClose}>
          <span>닫기</span>
          <img src={closeIcon} alt="" />
        </p>
      </div>
    </div>
  );
};

export default ModalComponent;
