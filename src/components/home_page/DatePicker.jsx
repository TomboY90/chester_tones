import React, { useState } from 'react';
import classes from './DatePicker.module.scss';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './customDatePicker.scss';
import underbarArrow from '@assets/images/icons/icn_underbar_arrow.svg';

import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useReservationStore } from '../../store/ReservationStore.js';
import closeIcon from '@assets/images/icons/icn_close.svg';

const CalendarComponent = ({ state, setState }) => {
  return (
    <DateRangePicker
      className="date-range-picker"
      locale={ko}
      staticRanges={[]}
      inputRanges={[]}
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={false}
      showMonthAndYearPickers={false}
      moveRangeOnFirstSelection={false}
      showDateDisplay={false}
      months={2}
      ranges={state}
      minDate={new Date()}
      direction="horizontal"
    />
  );
};

const DatePicker = ({ onClose }) => {
  const { startDate, endDate, setDates } = useReservationStore();

  const [state, setState] = useState([
    {
      startDate,
      endDate,
      key: 'selection',
    },
  ]);

  const confirmDate = () => {
    setDates({ startDate: state[0].startDate, endDate: state[0].endDate });
    onClose();
  };

  return (
    <div className={classes['date-modal']}>
      <span className="close-icon" onClick={onClose}>
        <img src={closeIcon} alt="" />
      </span>
      <div className={classes['date-picker']}>
        <CalendarComponent state={state} setState={setState} />
      </div>
      <div className={classes['modal-footer']}>
        <div className={classes['check-in-out']}>
          <div>
            <span>CHECKIN</span>
            <p>{state[0] && dayjs(state[0].startDate).format('YYYY.MM.DD')}</p>
          </div>
          <div>
            <img src={underbarArrow} alt="" />
          </div>
          <div>
            <span>CHECKOUT</span>
            <p>{state[0] && dayjs(state[0].endDate).format('YYYY.MM.DD')}</p>
          </div>
        </div>
        <button className={`reservation-button ${classes.button}`} onClick={confirmDate}>
          확인
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
