import { useReservationStore } from '../store/ReservationStore.js';
import dayjs from 'dayjs';

const UseLink = () => {
  const { startDate, endDate, resvInfo } = useReservationStore();

  const params = {
    startDate: dayjs(startDate).format('YYYY-MM-DD'),
    endDate: dayjs(endDate).format('YYYY-MM-DD'),
    resvInfo: JSON.stringify(resvInfo),
  };

  // URL 생성
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  const destinationSite = 'https://booking.dowhat.co.kr/web/12'; // 대상 사이트 URL

  // 최종 URL 생성
  return () => {
    window.open(`${destinationSite}?${queryString}`);
  };
};

export default UseLink;
