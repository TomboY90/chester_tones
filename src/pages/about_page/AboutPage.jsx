import React, { useEffect, useState } from 'react';
import classes from './AboutPage.module.scss';

import visualImg from '@assets/images/bg/bg_img2.png';

import aboutImg1 from '@assets/images/bg/about_img1.png';
import aboutImg2 from '@assets/images/bg/about_img2.png';
import LocationMap from '@components/about_page/LocationMap.jsx';
import IntersectLayout from '@components/about_page/IntersectLayout.jsx';
import useIntersect from '../../hooks/useIntersect.jsx';
import VisualSection from '@components/ui/VisualSection.jsx';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const [targetRef, setTargetRef] = useState({});
  const [isView, setIsView] = useState(null);

  const location = useLocation();
  const [target] = useIntersect(
    () => {
      setIsView(null);
    },
    { rootMargin: '2px', threshold: 0.5 }
  );
  const setOffset = (id, value) => {
    const obj = {};
    obj[id] = value;
    setTargetRef((prev) => ({ ...prev, ...obj }));
  };

  const move = (id) => {
    const top = targetRef[id].current.offsetTop;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!location.state) return;

    if (location.state.location && Object.keys(targetRef).length !== 0) {
      move('location');
    }
  }, [location, targetRef]);
  return (
    <>
      <VisualSection ref={target} className="about" img={visualImg}>
        <div className={`main-title inner`}>
          <h4>ABOUT BRAND</h4>
          <h2>
            Welcome to
            <br /> Le Bleu Naksan
          </h2>
        </div>
      </VisualSection>
      <IntersectLayout
        id={'story'}
        targetRef={setOffset}
        isView={setIsView}
        className={classes.description}>
        <div className={`${classes['description-text']} inner`}>
          <img src={aboutImg1} alt="" />
          <div>
            <h5>STORY</h5>
            <h2>LE BLEU NAKSAN</h2>
            <h6>
              자연과 예술이 만나는 곳,
              <br />
              그곳에서 하나의 풍경이 되는 르부르 낙산을 만나다.
            </h6>
            <p>
              의상대 바위, 낙산사의 흔들리는 대나무 <br />
              대나무 결에서 흩날리는 꽃잎들, <br />
              풍경 속에 꽃잎들은 침대 위로 날리고 <br />
              풍경 속의 대나무들은 주방을 품어주고 <br />
              풍경 속의 강물은 욕실에서 묘한 파문을 일고 <br />
              풍격 속의 바위는 거실의 또 다른 풍경이 됩다. <br />
              그리고 풍경 속, 동구리의 미소는 <br />
              누군가에게 위안을 주려는 듯 <br />
              어느 듯 내 곁에 다가와 서 있습니다. <br />
              <br />
              예술과 하나 되는 풍경 속에 오래도록 머물고 싶습니다.
            </p>
          </div>
        </div>
      </IntersectLayout>
      <IntersectLayout
        id={'operators'}
        targetRef={setOffset}
        isView={setIsView}
        className={classes.description}>
        <div className={`${classes['description-text']} ${classes['operator']} inner`}>
          <div>
            <h5>OPERATORS</h5>
            <h2>CHESTERTONS</h2>
            <h6>글로벌 부동산 전문기업 체스터톤스가 낙산과 함께합니다.</h6>
            <p>
              체스터톤스는 ' 머물면 힐링이 되고, 비우면 관리가 되는' <br />
              새로운 개념의 생활숙박시설 전문 운영사입니다.
            </p>
            <img src="" alt="" className={classes['add-img']} />
          </div>
          <img src={aboutImg2} alt="" />
        </div>
      </IntersectLayout>
      <IntersectLayout
        id={'location'}
        targetRef={setOffset}
        isView={setIsView}
        className={classes.description}>
        <div className="inner">
          <LocationMap className={classes['map-component']} />
          <div>
            <h5>LOCATION</h5>
            <h2>DIRECTIONS</h2>
            <h6>르부르 낙산에 오시는 방법을 안내해 드립니다.</h6>
            <div className={classes.address}>
              <div>
                <p>주소</p>
                <p>강원도 양양군 강현면 일출로 47</p>
              </div>
              <div>
                <p>전화번호</p>
                <p>033-673-7000</p>
              </div>
            </div>
          </div>
        </div>
      </IntersectLayout>
      <article className={classes.indicator}>
        <ul>
          <li onClick={() => move('story')} className={isView === 'story' ? classes.active : ''}>
            STORY
          </li>
          <li
            onClick={() => move('operators')}
            className={isView === 'operators' ? classes.active : ''}>
            OPERATORS
          </li>
          <li
            onClick={() => move('location')}
            className={isView === 'location' ? classes.active : ''}>
            LOCATION
          </li>
        </ul>
      </article>
    </>
  );
};

export default AboutPage;
