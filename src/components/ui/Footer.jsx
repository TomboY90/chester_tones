import React from 'react';
import classes from './Footer.module.scss';

import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={classes.footer}>
      <div className={`${classes['footer-top']} inner`}>
        <h1></h1>
        <ul className={classes['terms-list']}>
          <li onClick={() => navigate('terms/0')}>이용약관</li>
          <li onClick={() => navigate('terms/1')}>개인정보처리방침</li>
          <li onClick={() => navigate('terms/2')}>영상정보처리방침</li>
          <li onClick={() => navigate('terms/3')}>이메일무단수집금지</li>
        </ul>
        <div className={classes.address}>
          <address>
            25009 강원도 양양군 강현면 일출로 47 Tel. 033.673-7000 Fax. 033.632.0235 E-mail.
            admin_naksan@chestertons.co.kr
            <br /> 체스터톤스르부르낙산 주식회사 158-81-02460
          </address>

          <ul className={classes['sns-list']}>
            <li
              className={classes.kakao}
              onClick={() => window.open('https://pf.kakao.com/_ncKjG')}></li>
            <li
              className={classes.youtube}
              onClick={() => window.open('https://www.youtube.com/@user-cz5xe9kx9g')}></li>
            <li
              className={classes.facebook}
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=61552201414083&mibextid=LQQJ4d'
                )
              }></li>
            <li
              className={classes.insta}
              onClick={() => window.open('https://www.instagram.com/lebleu_naksan_official/')}></li>
          </ul>
        </div>
      </div>
      <div className={classes['footer-bottom']}>
        <p className="inner">COPYRIGHT(c) 2023 DOWHAT ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
