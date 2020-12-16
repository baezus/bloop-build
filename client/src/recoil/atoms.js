import { atom } from 'recoil';

function userState () {
  const userState = atom({
    key: 'userState',
    default: [],
  });
  return userState;
}
