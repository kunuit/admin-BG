const initState = {
  userToken: false,
  data: [],
  manufactureList: [],
  orders: [],
  account: {
    userInfo: {
      name: 'Vũ Xuân Cường',
      email: 'tetnaydichchanvl1102@gmail.com',
      avatar:
        'https://s3-hcm-r1.longvan.net/doanweb/371c88d4-6f48-4259-be8d-9ebe6262ca31202034231238IMG_20191208_225516_770.jpg',
      gender: 0,
      birthDate: '2000-12-25T00:00:00',
      roles: [],
      address: 'KTX khu B',
      phone: '0961010875',
    },
  },
};

import * as actionTypes from '../constants/auth.constants';

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return {
        ...state,
        userToken: !state.userToken,
      };
    case actionTypes.GET_PROD:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.GET_MANUFACTORY:
      return {
        ...state,
        manufactureList: action.payload,
      };
    default:
      return state;
  }
};
