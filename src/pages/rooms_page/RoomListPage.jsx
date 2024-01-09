import React from 'react';
import classes from '@pages/rooms_page/RoomPage.module.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { roomData } from '../../datas/roomData.js';
import useLink from '../../hooks/useLink.jsx';

const RoomList = ({ data, id }) => {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`detail/${data.id}`)}>
      <div className={classes['img-box']}>
        <img src={`/images/room_img/${id}/${data.id}/main_img.jpg`} alt={data.enName} />
        <div className={classes['hover-box']}>
          <div>
            <p>객실 자세히보기</p>
          </div>
        </div>
      </div>
      <h5>{data.enName.toUpperCase()}</h5>
      <h2>{data.korName}</h2>
      <p>{data.desc}</p>
    </li>
  );
};

const RoomListPage = () => {
  const { id } = useParams();
  const linkTo = useLink();
  return (
    <section className={classes['room-section']}>
      <div className="bread-crumb-wrap inner">
        <ul className="bread-crumb">
          <li>HOME</li>
          <li>ROOMS</li>
          <li>{roomData[id].enName.toUpperCase()}</li>
        </ul>
        {/*<p className="small-line-button" onClick={linkTo}>*/}
        {/*  객실 예약하러 가기*/}
        {/*</p>*/}
      </div>
      <ul className={`${classes['room-lists']} inner`}>
        {roomData[id].rooms.map((room) => (
          <RoomList data={room} id={id} key={room.id} />
        ))}
      </ul>
    </section>
  );
};

export default RoomListPage;
