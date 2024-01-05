import React from 'react';
import classes from './KaKaoButton.module.scss';
import kakaoChIcon from '@assets/images/icons/kakao_ch.svg';

const KaKaoButton = ({ stop }) => {
  return (
    <figure
      className={classes.kakao_button_wrapper}
      style={stop ? { position: 'absolute' } : {}}
      onClick={() => window.open('https://pf.kakao.com/_ncKjG')}>
      <img src={kakaoChIcon} alt="카카오채널" />
      <p>카카오톡으로 문의</p>
    </figure>
  );
};

export default KaKaoButton;
