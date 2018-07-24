import { SET_DRIVER_PASSENGER_DATA } from '../actions/constant/driver';

const initialState = {
  hasPassenger: false,
  ride: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER_PASSENGER_DATA:
      return {
        ...state,
        ride: action.payload,
      };
    default:
      return state;
  }
};
