import React, { useState } from 'react';
import classes from './HomePage.module.scss';
import Reservation from '@components/home_page/Reservation.jsx';
import { createPortal } from 'react-dom';
import ModalComponent, { ModalOverlay } from '@components/ui/ModalComponent.jsx';
import popImg from '@assets/images/bg/popup_img.png';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [isPop, setIsPop] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/*    <section className={`${classes.visual} inner`}>
        <article>
          <h2 className={classes['main-text']}>
            <p>오션, 비치, 아트, 설악산</p>
            낙산의 모든 가치를 담다.
          </h2>
          <Reservation />
        </article>
      </section>*/}

      <section className={`${classes.visual} inner`}>
        <article>
          <h2 className={`${classes['main-text']} ${classes.temp}`}>COMING SOON</h2>
        </article>
      </section>
      {isPop &&
        createPortal(
          <ModalOverlay>
            <ModalComponent
              img={popImg}
              onClick={() => navigate('/rooms/0')}
              onClose={() => setIsPop(false)}
            />
          </ModalOverlay>,
          document.getElementById('modal')
        )}
    </>
  );
};

export default HomePage;
