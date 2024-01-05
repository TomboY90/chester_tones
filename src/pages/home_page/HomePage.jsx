import React from 'react';
import classes from './HomePage.module.scss';
import Reservation from '@components/home_page/Reservation.jsx';

const HomePage = () => {
  return (
    /* <section className={`${classes.visual} inner`}>
      <article>
        <h2 className={classes['main-text']}>
          <p>오션, 비치, 아트, 설악산</p>
          낙산의 모든 가치를 담다.
        </h2>
        <Reservation />
      </article>
    </section>*/
    <section className={`${classes.visual} inner`}>
      <article>
        <h2 className={`${classes['main-text']} ${classes.temp}`}>COMING SOON</h2>
      </article>
    </section>
  );
};

export default HomePage;
