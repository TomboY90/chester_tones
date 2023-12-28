import React from 'react';
import classes from '@pages/rooms_page/RoomPage.module.scss';

import tvIcon from '@assets/images/icons/icn_tv.svg';
import wifiIcon from '@assets/images/icons/icn_wifi.svg';
import portIcon from '@assets/images/icons/icn_port.svg';
import phoneIcon from '@assets/images/icons/icn_phone.svg';
import refrigeratorIcon from '@assets/images/icons/icn_refrigerator.svg';
import washerIcon from '@assets/images/icons/icn_washer.svg';
import towelIcon from '@assets/images/icons/icn_towel.svg';
import shampooIcon from '@assets/images/icons/icn_shampoo.svg';
import dryerIcon from '@assets/images/icons/icn_dryer.svg';
import amenityImg from '@assets/images/bg/amenity_img.png';
import ImgSlider from '@components/rooms_page/ImgSlider.jsx';
import { roomData } from '../../datas/roomData.js';
import { useNavigate, useParams } from 'react-router-dom';
import useLink from '../../hooks/useLink.jsx';

const RoomDetailPage = () => {
  const { id, sub } = useParams();
  const navigate = useNavigate();
  const room = roomData[id].rooms[sub];

  const linkTo = useLink();

  return (
    <>
      <section className={classes['room-section']}>
        <div className="bread-crumb-wrap inner">
          <ul className="bread-crumb">
            <li onClick={() => navigate(`/`)}>HOME</li>
            <li onClick={() => navigate(`/rooms/${id}`)}>ROOMS</li>
            <li onClick={() => navigate(`/rooms/${id}`)}>{roomData[id].enName.toUpperCase()}</li>
            <li>{roomData[id].rooms[sub].enName.toUpperCase()}</li>
          </ul>
          <p className="small-line-button" onClick={linkTo}>
            객실 예약하러 가기
          </p>
        </div>

        <ImgSlider imgNum={room.imgNum} />

        <article className={`${classes['title-box']} inner`}>
          <h2>{room.korName}</h2>
          <p>{room.desc}</p>
        </article>

        <article className={`inner`}>
          <div className={classes['line-title-box']}>
            <h2>Basic Info</h2>
            <hr />
          </div>
          <ul className={classes['room-basic-info']}>
            <li>
              <span>객실 크기</span>
              <p>{room.size}</p>
            </li>
            <li>
              <span>객실 체크인</span>
              <p>15:00</p>
            </li>
            <li>
              <span>객실 기준인원</span>
              <p>{room.default}인</p>
            </li>
            <li>
              <span>룸 구성</span>
              <p>{room.roomType}</p>
            </li>
            <li>
              <span>체크 아웃</span>
              <p>11:00</p>
            </li>
            <li>
              <span>최대인원</span>
              <p>{room.max}인</p>
            </li>
            <li>
              <span>베드타입</span>
              <p>{room.bedType}</p>
            </li>
            <li>
              <span>이용문의</span>
              <div>
                <p>Tel. 033.673.7000</p>
                <p>Mail. rsvn@chestertons.co.kr</p>
              </div>
            </li>
          </ul>
        </article>

        <article className={`${classes['amenity-article']} inner`}>
          <div className={classes['img-box']}>
            <img src={amenityImg} alt="" />
          </div>
          <div className={classes['amenity-info']}>
            <div className={classes['line-title-box']}>
              <div className="flex-between">
                <h2>Amenity</h2>
                <p>*별도의 식기류는 제공하지 않습니다.</p>
              </div>
              <hr />
            </div>
            <ul>
              <li>
                <p>IPTV-채널215개, 인터넷(초고속 WIFI)</p>
                <div>
                  <img src={tvIcon} alt="tv" />
                  <img src={wifiIcon} alt="wifi" />
                </div>
              </li>
              <li>
                <p>전화기, 냉장고, 세탁기, 커피포트</p>
                <div>
                  <img src={portIcon} alt="port" />
                  <img src={phoneIcon} alt="phone" />
                  <img src={refrigeratorIcon} alt="refrigerator" />
                  <img src={washerIcon} alt="washer" />
                </div>
              </li>
              <li>
                <p>바스&페이스 타올, 헤어드라이기, 샴푸, 트리트먼트, 바디워시, 핸드워시</p>
                <div>
                  <img src={towelIcon} alt="towel" />
                  <img src={shampooIcon} alt="shampoo" />
                  <img src={dryerIcon} alt="dryer" />
                </div>
              </li>
            </ul>
          </div>
        </article>

        <article className={`${classes['use-info']} inner`}>
          <div>
            <h4>이용안내</h4>
            <h6>
              - 체크인은 15시, 체크아웃은 11시 기준입니다. 기준 시간외 사용(Early Check in & Late
              Check out)은 시간당 20,000원(VAT 포함)이 부과되며,
              <br />
              15시이후에는 당일 1박의 요금이 부과됩니다. 성수기 7~8월달에는 레이트 체크아웃 시간이
              탄력적으로 운영되고 있어 프론트 문의 부탁드립니다.
              <br /> - 전 객실과 업장에서는 금연입니다. 객실 내 흡연 시 별도의 20만원의 청소 비용이
              부과됩니다.
              <br /> - 기준인원 외 인원추가는 별도의 금액이 부과되며, 성인은 10,000원, 아동은
              5,000원이 박 당 부과됩니다.
              <br /> - 침구 추가 시 20,000원이 부과됩니다.
              <br /> - 린캠페인에 동참하고자 객실 정비 서비스(침구류 교체 포함)는 3박부터 무료로
              제공되며, 별도 요청시에는 요금이 부과되니 프론트로 문의 바랍니다. (1룸 20,000원, 2룸
              40,000원, 3룸 60,000원)
              <br /> - 안내견을 제외한 애완동물의 동반 투숙은 금지되어 있습니다. 애완동물은 공용지역
              또는 입장이 불가합니다. 적발 시 특수청소비(20만원)이 발생됩니다.
              <br /> - 외부 배달음식은 규정 상 로비에서 수령을 해 주시기 바랍니다.
              <br /> - 환경부 일회용품 무상제공 금지에 의거하여 객실 내 면도기, 칫솔 등 일회용품은
              비치되어 있지 않습니다.
              <br /> - 객실내 취사는 안 되오니 양해 바랍니다.
              <br /> - 쾌적한 객실환경을 위하여 객실 내 에서 회나 게 찜 종류의 음식물 섭취는
              삼가하여 주시기 바랍니다. 냄새로 인하여 다음 손님에게 피해를 줄 수 있습니다.
              <br /> - 일반쓰레기와 재활용쓰레기 및 음식물쓰레기는 지상 1층 주차장 출입구
              분리수거장에 배출 부탁드립니다. <br />
              (심각한 오염과 쓰레기 적발 시 특수청소를 위한 비용이 부과됩니다)
            </h6>
          </div>
          <div>
            <h4>환불 및 취소규정</h4>
            <ul className={classes['refund-list']}>
              <li>
                <h5>비수기, 주중(일~금)</h5>
                <h6>
                  - 입실일 기준 2일전 30% 위약금 발생 <br />- 1일전 및 당일 100% 위약금 발생
                </h6>
              </li>
              <li>
                <h5>주말(토) 및 연휴 / 성수기</h5>
                <h6>
                  - 입실일 기준 5일전 50% 위약금 발생 <br />- 3일전부터 당일 100% 위약금 발생
                </h6>
              </li>
            </ul>
          </div>
        </article>

        <div className="button-group">
          <button
            className="reservation-button large line"
            onClick={() => navigate(`/rooms/${id}`)}>
            다른 객실보기
          </button>
          <button className="reservation-button large" onClick={linkTo}>
            객실 예약하기
          </button>
        </div>
      </section>
    </>
  );
};

export default RoomDetailPage;
