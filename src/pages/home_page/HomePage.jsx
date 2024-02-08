import { useState } from 'react';
import classes from './HomePage.module.scss';
import Reservation from '@components/home_page/Reservation.jsx';
import { createPortal } from 'react-dom';
import ModalComponent, { ModalOverlay } from '@components/ui/ModalComponent.jsx';
import leftPop from '@assets/images/bg/center_pop.png';
import centerPop from '@assets/images/bg/main_pop.jpg';
import rightPop from '@assets/images/bg/right_pop.png';
const HomePage = () => {
  const [isLeftPop, setIsLeftPop] = useState(true);
  const [isCenterPop, setIsCenterPop] = useState(true);
  const [isRightPop, setIsRightPop] = useState(true);

  const moveTo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section className={`${classes.visual} inner`}>
        <article>
          <h2 className={classes['main-text']}>
            <p>오션, 비치, 아트, 설악산</p>
            낙산의 모든 가치를 담다.
          </h2>
          <Reservation />
        </article>
      </section>

      {/*     <section className={`${classes.visual} inner`}>
        <article>
          <h2 className={`${classes['main-text']} ${classes.temp}`}>COMING SOON</h2>
        </article>
      </section>*/}
      {(isLeftPop || isCenterPop || isRightPop) &&
        createPortal(
          <ModalOverlay>
            {isLeftPop && (
              <ModalComponent
                position="left"
                img={leftPop}
                onClick={() =>
                  moveTo(
                    'https://docs.google.com/forms/d/e/1FAIpQLScBU2aTPm60OIcpgce00J3XBtCcRijKAx3M9bY0sJqaNQXB8w/viewform'
                  )
                }
                onClose={() => setIsLeftPop(false)}
              />
            )}
            {isRightPop && (
              <ModalComponent
                img={rightPop}
                onClick={() =>
                  moveTo(
                    'https://docs.google.com/forms/d/e/1FAIpQLSdEkUr1efN4v2uwSQuHgVImFMGkoNLyv85IYBvHSIvY_HAKMQ/viewform'
                  )
                }
                onClose={() => setIsRightPop(false)}
              />
            )}
            {isCenterPop && (
              <ModalComponent
                position="right"
                img={centerPop}
                onClick={() => moveTo('https://booking.dowhat.co.kr/web/12')}
                onClose={() => setIsCenterPop(false)}
              />
            )}
          </ModalOverlay>,
          document.getElementById('modal')
        )}
    </>
  );
};

export default HomePage;
