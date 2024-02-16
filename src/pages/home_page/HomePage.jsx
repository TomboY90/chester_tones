import { useState } from 'react';
import classes from './HomePage.module.scss';
import Reservation from '@components/home_page/Reservation.jsx';
import { createPortal } from 'react-dom';
import ModalComponent, { ModalOverlay } from '@components/ui/ModalComponent.jsx';
import leftPop from '@assets/images/bg/center_pop.png';
import mainPop from '@assets/images/bg/main_pop.jpg';
import packagePop from '@assets/images/bg/package_pop.jpg';
const HomePage = () => {
  const [popList, setPopList] = useState([
    {
      visible: true,
      img: leftPop,
      action: () =>
        moveTo(
          'https://docs.google.com/forms/d/e/1FAIpQLScBU2aTPm60OIcpgce00J3XBtCcRijKAx3M9bY0sJqaNQXB8w/viewform'
        ),
    },
    {
      visible: true,
      img: mainPop,
      action: () => moveTo('https://booking.dowhat.co.kr/web/12'),
    },
    {
      visible: true,
      img: packagePop,
      action: () => {
        document.location.href = 'tel:033-673-7000';
      },
    },
  ]);

  const moveTo = (url) => {
    window.open(url, '_blank');
  };

  const popClose = (index) => {
    const newPop = [...popList];
    newPop[index].visible = false;
    setPopList(newPop);
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
      {popList.filter((item) => item.visible).length > 0 &&
        createPortal(
          <ModalOverlay>
            {popList.map((pop, index) => (
              <ModalComponent
                visible={pop.visible}
                key={index}
                num={index}
                img={pop.img}
                expire={pop.expire}
                onClick={pop.action}
                onClose={() => popClose(index)}
              />
            ))}
          </ModalOverlay>,
          document.getElementById('modal')
        )}
    </>
  );
};

export default HomePage;
