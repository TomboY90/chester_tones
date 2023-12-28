import { useState } from 'react';
import classes from './InfoPicker.module.scss';
import { useReservationStore } from '../../store/ReservationStore.js';
import plusIcon from '@assets/images/icons/icn_plus.svg';
import minusIcon from '@assets/images/icons/icn_minus.svg';
import deleteIcon from '@assets/images/icons/icn_delete.svg';
import closeIcon from '@assets/images/icons/icn_close.svg';

const InfoPicker = ({ onClose }) => {
  const { resvInfo, setInfo } = useReservationStore();
  const [infoData, setInfoData] = useState(JSON.parse(JSON.stringify(resvInfo)));

  const changeValue = (index, key, value) => {
    const arr = [...infoData];
    const newNum = arr[index][key] + value;
    if ((key === 'adult' && newNum < 1) || newNum < 0) {
    } else {
      arr[index][key] = newNum;
      setInfoData(() => [...arr]);
    }
  };

  const addInfo = () => {
    if (infoData.length >= 3) {
    } else {
      setInfoData((prev) => [...prev, { adult: 1, kid: 0, pet: 0 }]);
    }
  };

  const deleteInfo = (index) => {
    const arr = [...infoData];
    arr.splice(index, 1);
    setInfoData(() => [...arr]);
  };

  const confirmInfo = () => {
    setInfo(infoData);
    onClose();
  };

  return (
    <div className={classes['info-modal']}>
      <span className="close-icon" onClick={onClose}>
        <img src={closeIcon} alt="" />
      </span>
      <div className={classes['info-data']}>
        <ul>
          {infoData.map((item, index) => (
            <li key={index}>
              <h4>객실 {index + 1}</h4>
              <div className={classes['count-comp']}>
                <h6>성인</h6>
                <div>
                  <span onClick={() => changeValue(index, 'adult', -1)}>
                    <img src={minusIcon} alt="" />
                  </span>
                  <span>{item.adult}</span>
                  <span onClick={() => changeValue(index, 'adult', +1)}>
                    <img src={plusIcon} alt="" />
                  </span>
                </div>
              </div>
              <div className={classes['count-comp']}>
                <h6>어린이</h6>
                <div>
                  <span onClick={() => changeValue(index, 'kid', -1)}>
                    <img src={minusIcon} alt="" />
                  </span>
                  <span>{item.kid}</span>
                  <span onClick={() => changeValue(index, 'kid', +1)}>
                    <img src={plusIcon} alt="" />
                  </span>
                </div>
              </div>

              {index !== 0 && (
                <span className={classes['delete-icon']} onClick={() => deleteInfo(index)}>
                  <img src={deleteIcon} alt="" />
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className={classes['add-button']}>
          <button disabled={infoData.length >= 3} onClick={addInfo}>
            객실 추가
          </button>
        </div>
      </div>

      <div className={classes['info-footer']}>
        <div>
          <p>*최대 3개 객실 예약 가능</p>
          <p>*어린이 : 37개월 ~ 12세</p>
        </div>
        <button className="reservation-button" onClick={confirmInfo}>
          확인
        </button>
      </div>
    </div>
  );
};

export default InfoPicker;
