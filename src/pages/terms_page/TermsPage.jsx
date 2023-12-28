import React from 'react';

import classes from './TermsPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Terms from '@components/terms_page/Terms.jsx';
import Privacy from '@components/terms_page/Privacy.jsx';
import VideoProcessing from '@components/terms_page/VideoProcessing.jsx';
import EmailTerms from '@components/terms_page/EmailTerms.jsx';

const TermsPage = () => {
  const tabList = ['이용약관', '개인정보처리방침', '영상정보처리방침', '이메일무단수집금지'];
  const { type } = useParams();
  const navigate = useNavigate();

  let contents = () => {
    console.log(type);
    switch (type) {
      case '0':
        return <Terms />;
      case '1':
        return <Privacy />;
      case '2':
        return <VideoProcessing />;
      case '3':
        return <EmailTerms />;
    }
  };

  return (
    <>
      <section className={classes['terms-page']}>
        <ul className={`${classes['tab-list']} inner`}>
          {tabList.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(`/terms/${index}`)}
              className={Number(type) === index ? classes.active : ''}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      {contents()}
    </>
  );
};

export default TermsPage;
