import {
  SET_DRIVER_PASSENGER_DATA,
  START_DRIVER_RIDE,
  DRIVER_ARRIVE_TO_LOCATION,
} from '../actions/constant/driver';

const initialState = {
  hasPassenger: false,
  ride: {
    driverArrive: false,
    status: 'PICKUP',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER_PASSENGER_DATA:
      return {
        ...state,
        ride: {
          ...state.ride,
          ...action.payload,
        },
      };
    case START_DRIVER_RIDE:
      return {
        ...state,
        hasPassenger: true,
      };
    case DRIVER_ARRIVE_TO_LOCATION:
      return {
        ...state,
        ride: {
          ...state.ride,
          driverArrive: true,
        },
      };
    default:
      return state;
  }
};
