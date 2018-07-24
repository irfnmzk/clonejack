import { LOGIN_PROCESS_SUCCESS } from '../actions/constant/auth';

const initialState = {
  isLogin: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: {
          ...action.payload.user,
        },
      };
    default:
      return state;
  }
};
