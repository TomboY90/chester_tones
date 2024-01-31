import React from 'react';
import classes from '@pages/rooms_page/RoomPage.module.scss';

import tvIcon from '@assets/images/icons/icn_tv.svg';
import wifiIcon from '@assets/images/icons/icn_wifi.svg';
import portIcon from '@assets/images/icons/icn_port.svg';
import refrigeratorIcon from '@assets/images/icons/icn_refrigerator.svg';
import bidetIcon from '@assets/images/icons/icn_bidet.svg';
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
          {/*<p className="small-line-button" onClick={linkTo}>*/}
          {/*  객실 예약하러 가기*/}
          {/*</p>*/}
        </div>

        <ImgSlider imgNum={room.imgNum} />

        <article className={`${classes['title-box']} inner`}>
          <h2>{room.korName}</h2>

          <p>{room.desc}</p>
          {room.korName.includes('노뷰') && <em>* 3-6층 / 전망없음</em>}
        </article>

        <article className={`inner`}>
          <div className={classes['line-title-box']}>
            <h2>Basic Info</h2>
            <hr />
          </div>
          <ul className={classes['room-basic-info']}>
            <li>
              <span>체크 인</span>
              <p>15:00</p>
            </li>
            <li>
              <span>체크 아웃</span>
              <p>11:00</p>
            </li>
            <li>
              <span>기준 인원</span>
              <p>{room.default}인</p>
            </li>
            <li>
              <span>최대 인원</span>
              <p>{room.max}인</p>
            </li>
            <li>
              <span>룸 구성</span>
              <p>{room.roomType}</p>
            </li>
            <li>
              <span>베드 타입</span>
              <p>{room.bedType}</p>
            </li>
            <li>
              <span>객실 크기</span>
              <div>
                <p>전용 면적 {room.exSize} </p>
                <p>분양 면적 {room.saSize} </p>
              </div>
            </li>
            <li>
              <span>이용 문의</span>
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
                <p>냉장고, 커피포트</p>
                <div>
                  <img src={refrigeratorIcon} alt="refrigerator" />
                  <img src={portIcon} alt="port" />
                </div>
              </li>
              <li>
                <p>바스&페이스 타올, 헤어드라이기, 샴푸, 트리트먼트, 바디워시, 핸드워시</p>
                <div>
                  <img src={towelIcon} alt="towel" />
                  <img src={dryerIcon} alt="dryer" />
                  <img src={shampooIcon} alt="shampoo" />
                </div>
              </li>
              <li>
                <p>비데</p>
                <div>
                  <img src={bidetIcon} alt="bidet" />
                </div>
              </li>
            </ul>
          </div>
        </article>

        <article className={`${classes['use-info']} inner`}>
          <div>
            <h4>이용안내</h4>
            <h6>
              체크인은 15:00 , 체크아웃은 11:00 입니다.
              <br />
              기준 시간 외 사용 (Early Check In & Late Check Out) 은 시간 당 20,000원 (VAT 포함) 이
              부과되며
              <br /> 15시 이후는 당일 1박 요금이 부과됩니다.
              <br /> 성수기, 연휴기간 Early Check In & Late Check Out 시간은 탄력적으로 운영됩니다.
              (문의 사항은 프론트 데스크로 부탁 드립니다.)
            </h6>
            <h6>
              전 객실과 업장 내에서는 '금연' 입니다. (객실 내 흡연시 별도 20만원의 청소 비용이
              부과됩니다.)
            </h6>
            <h6>
              기준 인원 외 추가는 별도의 금액이 부과됩니다. (1박당 성인10,000원, 소인 5,000원)
            </h6>
            <h6>침구 추가시 20,000원의 비용이 부과됩니다.</h6>
            <h6>
              그린 캠페인에 동참하고자 객실 정비 서비스 (침구류 교체 포함)는 3박부터 무료로
              제공되며,
            </h6>
            <h6>
              환경부 일회용품 무상제공 금지 정책에 따라 객실 내에 면도기, 칫솔 등이 비치되어 있지
              않습니다.
              <br /> 별도 요청시에는 요금이 부과되니 프론트 데스크로 문의 바랍니다. (원룸 20,000원,
              투룸 40,000원, 쓰리룸 60,000원)
            </h6>
            <h6>
              안내견을 제외한 애완 동물의 동반 투숙은 금지되어 있습니다. <br />
              애완동물은 공용구역 또는 객실 내 입장이 불가 하며, 적발 시 특수 청소비 (20만원)가
              발생됩니다.
            </h6>
            <h6>외부 배달 음식은 로비에서 수령하시기 바랍니다.</h6>
            <h6>객실 내에서의 취사는 불가합니다.</h6>
            <h6>
              쾌적한 객실 환경을 위해 객실 내에서 회, 게찜류 음식물을 섭취하는 것은 자제해 주시기
              바랍니다.
              <br /> 냄새로 인하여 다음 고객님에게 불편을 줄 수 있습니다.
            </h6>
            <h6>
              쓰레기는 일반, 재활용, 그리고 음식물 쓰레기로 구분하여 1층 주차장 출입구에 배출하여
              주시기 바랍니다.
              <br /> (심각한 오염 및 쓰레기 미분리 시에는 특수 청소 비용이 부과됩니다.)
            </h6>
          </div>
          <div>
            <h4>환불 및 취소규정</h4>
            <ul className={classes['refund-list']}>
              <li>
                <h5>비수기, 주중(일~금)</h5>
                <h6>입실일 기준 2일전 30% 위약금 발생</h6>
                <h6>1일전 및 당일 100% 위약금 발생</h6>
              </li>
              <li>
                <h5>주말(토) 및 연휴 / 성수기</h5>
                <h6>입실일 기준 5일전 50% 위약금 발생</h6>
                <h6>3일전부터 당일 100% 위약금 발생</h6>
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
