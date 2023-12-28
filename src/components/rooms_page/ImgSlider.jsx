import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classes from './ImgSlider.module.scss';
import { ArrowIcon } from '@components/common/BaseIcon.jsx';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Viewer from 'react-viewer';
const ImgSlider = ({ imgNum }) => {
  const [currentNum, setCurrentNum] = useState(0);
  const [viewImgs, setViewImgs] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef(null);

  const { id, sub } = useParams();

  const moveItem = (type) => {
    if (type === 'plus' && currentNum < imgs.length - 1) {
      setCurrentNum(currentNum + 1);
    }

    if (type === 'minus' && currentNum > 0) {
      setCurrentNum(currentNum - 1);
    }
  };

  useEffect(() => {
    if (!imgNum) return;
    let arr = [];
    // eslint-disable-next-line for-direction
    for (let i = 1; i <= imgNum; i++) {
      let url = `/images/room_img/${id}/${sub}/img_${i}.png`;
      arr.push(url);
    }
    setImgs(() => [...arr]);
    let viewImg = [];
    arr.forEach((item) => {
      let obj = {};
      obj.src = item;
      viewImg.push(obj);
    });
    setViewImgs(() => [...viewImg]);
  }, [imgNum]);

  useLayoutEffect(() => {
    if (sliderRef.current && sliderRef.current.firstChild) {
      sliderRef.current.style.left = `${
        sliderRef.current.firstChild.clientWidth * -currentNum -
        currentNum * parseFloat(window.getComputedStyle(sliderRef.current).gap)
      }px`;
    }
  }, [currentNum]);

  return (
    <>
      {createPortal(
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          noToolbar
          disableMouseZoom
          images={viewImgs}
        />,
        document.getElementById('modal')
      )}
      <figure className="inner">
        <div className={classes['slider-wrapper']}>
          <ul ref={sliderRef}>
            {imgs.map((item, index) => (
              <li key={index} onClick={() => setVisible(true)}>
                <img src={item} alt={`img_${index}`} />
                <div
                  className={classes['bg-img']}
                  style={{ backgroundImage: `url(${item})` }}></div>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes['slider-indicator']}>
          <div className={classes['indicator-bar']}>
            <div
              style={{
                width: `${(100 / imgs.length) * (currentNum + 1)}%`,
              }}></div>
          </div>
          <div className={classes['arrow-group']}>
            <span
              className={currentNum <= 0 ? classes.disabled : ''}
              onClick={() => moveItem('minus')}>
              <ArrowIcon size={16} />
            </span>
            <span
              className={currentNum >= imgs.length - 1 ? classes.disabled : ''}
              onClick={() => moveItem('plus')}>
              <ArrowIcon size={16} />
            </span>
          </div>
        </div>
      </figure>
    </>
  );
};

export default ImgSlider;
