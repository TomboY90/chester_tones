import React, { useEffect } from 'react';

import classes from './ModalComponent.module.scss';
import closeIcon from '@assets/images/icons/icn_close.svg';
import useCookie from '../../hooks/useCookie.jsx';

export const ModalOverlay = ({ children }) => {
  useEffect(() => {
    document.querySelector('body').classList.add('overlay');
    return () => document.querySelector('body').classList.remove('overlay');
  }, []);
  return <div className={classes['modal-overlay']}>{children}</div>;
};

const ModalComponent = ({ img, onClick, position, onClose }) => {
  const { setCookie, getCookie } = useCookie();

  // 쿠키의 유효기한을 지정하는 함수
  const getExpiredDate = (days) => {
    const date = new Date(); // 현재 시간을 받아온다
    date.setDate(date.getDate() + days);
    // 현재시간의 날짜에 days 만큼 더하여 유효기간을 지정
    return date;
  };

  const saveCookie = () => {
    const expires = getExpiredDate(1);
    setCookie(`LeBleu_popup_${position}`, true, { path: '', expires });
    onClose();
  };

  useEffect(() => {
    if (getCookie(`LeBleu_popup_${position}`)) {
      onClose();
    }
  }, []);

  return (
    <div className={`${classes['modal-wrapper']} ${position ? classes[position] : ''}`}>
      <div onClick={onClick} className={classes['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <div className={classes['close-button']}>
        <p className={classes['today']} onClick={saveCookie}>
          오늘 하루 그만보기
        </p>
        <p onClick={onClose}>
          <span>닫기</span>
          <img src={closeIcon} alt="" />
        </p>
      </div>
    </div>
  );
};

export default ModalComponent;
