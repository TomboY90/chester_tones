import React from 'react';
import classes from '@pages/terms_page/TermsPage.module.scss';

const EmailTerms = () => {
  return (
    <section className={`inner ${classes['terms-desc']}`}>
      <h6>
        르부르 낙산 바이 체스터톤스는 인터넷 서비스 이용 시 개인정보를 수집하는 장치를 운영하지
        않으며, 본 웹사이트에 기재된 개인정보도 이메일주소 수집 프로그램이나 그 밖의 기술적 장치를
        이용하여 수집되는 것을 거부합니다. 이를 위반 시 정보통신망법에 의해 형사처벌됨을 유념하시기
        바랍니다.
      </h6>
    </section>
  );
};

export default EmailTerms;
