import { roomData } from '../datas/roomData.js';

let roomList = [];
roomData.forEach((item) => {
  let obj = {};
  obj.title = item.enName.toUpperCase();
  obj.path = `/rooms/${item.id}`;
  roomList.push(obj);
});

export const navList = [
  {
    title: 'BRAND',
    children: [
      { title: 'LE BLEU NAKSAN STORY', path: 'about', state: null },
      { title: 'LOCATION', path: 'about', state: { location: true } },
    ],
  },
  {
    title: 'ROOMS',
    children: roomList,
  },
];
