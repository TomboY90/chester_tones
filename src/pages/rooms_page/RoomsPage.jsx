import React, { useEffect, useState } from 'react';

import VisualSection from '@components/ui/VisualSection.jsx';
import { Outlet, useParams } from 'react-router-dom';
import { roomData } from '../../datas/roomData.js';

const RoomsPage = () => {
  const [imgUrl, setImgUrl] = useState();
  const { id, sub } = useParams();

  useEffect(() => {
    if (sub) {
      setImgUrl(`/images/room_img/${id}/${sub}/main_img.jpg`);
    } else {
      setImgUrl(`/images/room_img/${id}/0/main_img.jpg`);
    }
  }, [sub, id]);

  return (
    <>
      <VisualSection className="rooms" img={imgUrl}>
        <div className={`main-title inner`}>
          <h4>ROOMS</h4>
          <h2>
            {sub ? roomData[id].rooms[sub].enName.toUpperCase() : roomData[id].enName.toUpperCase()}
          </h2>
        </div>
      </VisualSection>
      <Outlet />
    </>
  );
};

export default RoomsPage;
