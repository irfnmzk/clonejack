import { SET_DRIVER_PASSENGER_DATA, START_DRIVER_RIDE } from './constant/driver';

export const setPassenger = data => ({
  type: SET_DRIVER_PASSENGER_DATA,
  payload: data,
});

export const startRide = () => ({
  type: START_DRIVER_RIDE,
});
