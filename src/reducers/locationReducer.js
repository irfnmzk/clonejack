import { SET_USER_LOCATION_REGION } from '../actions/constant/location';

const initialState = {
  userLocation: {},
  region: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};
