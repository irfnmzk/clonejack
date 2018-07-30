import {
  SET_DRIVER_PASSENGER_DATA,
  START_DRIVER_RIDE,
  DRIVER_ARRIVE_TO_LOCATION,
  DRIVER_START_RIDE,
  DRIVER_FINISH_RIDE,
} from '../actions/constant/driver';

const initialState = {
  hasPassenger: false,
  ride: {
    isDone: false,
    onRide: false,
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
    case DRIVER_START_RIDE:
      return {
        ...state,
        ride: {
          ...state.ride,
          status: 'RIDE',
          onRide: true,
        },
      };
    case DRIVER_FINISH_RIDE:
      return {
        ...state,
        ride: {
          ...state.ride,
          isDone: true,
          status: 'complete',
        },
      };
    default:
      return state;
  }
};
