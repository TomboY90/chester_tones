import { useState } from 'react';
import classes from './Reservation.module.scss';
import DatePicker from '@components/home_page/DatePicker.jsx';
import InfoPicker from '@components/home_page/InfoPicker.jsx';
import { useReservationStore } from '../../store/ReservationStore.js';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isBetween from 'dayjs/plugin/isBetween';

import useLink from '../../hooks/useLink.jsx';

dayjs.locale('ko');
dayjs.extend(isBetween);

const Reservation = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openInfoPicker, setOpenInfoPicker] = useState(false);
  const { startDate, endDate, resvInfo } = useReservationStore();
  const linkTo = useLink();
  const peopleNum = () => {
    let adult = 0;
    let kid = 0;
    resvInfo.forEach((item) => {
      adult += item.adult;
      kid += item.kid;
    });

    return { adult, kid };
  };

  const tempFunc = () => {
    // 현재 시간 가져오기
    const currentTime = dayjs();

    // 현재 시간이 12:00 ~ 13:00 사이에 있는지 확인
    const isBetween12And13 = currentTime.isBetween(
      dayjs().hour(12).minute(0),
      dayjs().hour(13).minute(0),
      null,
      '[]'
    );

    if (isBetween12And13) {
      alert('현재 점검중입니다.');
      return;
    }

    linkTo()
  }

  return (
    <figure className={`${classes['reservation-wrapper']} inner`}>
      {openDatePicker && <DatePicker onClose={() => setOpenDatePicker(false)} />}
      {openInfoPicker && <InfoPicker onClose={() => setOpenInfoPicker(false)} />}
      <div className={`${classes['reservation-group']}`}>
        <ul>
          <li>
            <h4>RESERVATION</h4>
            <h3>Room</h3>
          </li>
          <li onClick={() => setOpenDatePicker(!openDatePicker)}>
            <h4>CHECK IN / OUT</h4>
            <h3>
              {dayjs(startDate).format('YYYY. MM. DD dd')} -{' '}
              {dayjs(endDate).format('YYYY. MM. DD dd')}
            </h3>
          </li>
          <li
            className={classes['reservation-option']}
            onClick={() => setOpenInfoPicker(!openInfoPicker)}>
            <div>
              <h4>ROOM</h4>
              <h3>{resvInfo.length}</h3>
            </div>
            <div>
              <h4>ADULT</h4>
              <h3>{peopleNum().adult}</h3>
            </div>
            <div>
              <h4>CHILDREN</h4>
              <h3>{peopleNum().kid}</h3>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <button className="reservation-button large" onClick={tempFunc}>
              SEARCH
            </button>
          </li>
        </ul>
      </div>
    </figure>
  );
};

export default Reservation;
