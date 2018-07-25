import { SET_DRIVER_PASSENGER_DATA, START_DRIVER_RIDE } from '../actions/constant/driver';

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
    case START_DRIVER_RIDE:
      return {
        ...state,
        hasPassenger: true,
      };
    default:
      return state;
  }
};
