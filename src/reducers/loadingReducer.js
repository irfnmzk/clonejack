import { TOGGLE_LOGIN_LOADING } from '../actions/constant/auth';

const initialState = {
  loginLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: !state.loginLoading,
      };
    default:
      return state;
  }
};
