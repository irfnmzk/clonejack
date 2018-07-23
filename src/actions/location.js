import { SET_USER_LOCATION, SET_USER_LOCATION_REGION } from './constant/location';

export const setUserRegion = data => ({
  type: SET_USER_LOCATION_REGION,
  payload: data,
});

export const setUserLocation = data => ({
  type: SET_USER_LOCATION,
  payload: data,
});
