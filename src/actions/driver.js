import store from '../store';
import {
  SET_DRIVER_PASSENGER_DATA,
  START_DRIVER_RIDE,
  DRIVER_CALCULATE_REGION,
} from './constant/driver';
import GetRegionFromCoods from '../utils/GetRegionFromCoods';

export const setPassenger = data => ({
  type: SET_DRIVER_PASSENGER_DATA,
  payload: data,
});

export const startRide = () => ({
  type: START_DRIVER_RIDE,
});

export const calculateRegion = () => {
  const storeData = store.getState();
  const { driver, location } = storeData;
  const coords = [driver.ride.origin.location, location.userLocation];
  const data = GetRegionFromCoods(coords);
  return {
    type: DRIVER_CALCULATE_REGION,
    payload: data,
  };
};
