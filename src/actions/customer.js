import {
  SET_CUSTOMER_DESTINATION,
  SET_USER_BOOK_STATE,
  SET_CUSTOMER_ORIGIN,
  SET_ROUTE_INFO,
  CUSTOMER_SEARCH_DRIVER,
  CUSTOMER_SET_DRIVER_DATA,
  TOGGLE_SELECT_VIA_MAP,
  CUSTOMER_GET_ADDRESS_SUCCESS,
  CUSTOMER_GET_ADDRESS_START,
  CUSTOMER_SET_DRIVER_ARRIVE,
} from './constant/customer';
import { getAddressByCoords } from '../utils/NearbyPlace';

export const setCustomerDestination = location => ({
  type: SET_CUSTOMER_DESTINATION,
  payload: location,
});

export const setCustomerOrigin = location => ({
  type: SET_CUSTOMER_ORIGIN,
  payload: location,
});

export const toggleBookState = () => ({
  type: SET_USER_BOOK_STATE,
});

export const setRouteInfo = (data) => {
  const { distance, duration } = data;
  const fare = (distance * 8000).toFixed(0);
  return {
    type: SET_ROUTE_INFO,
    payload: {
      fare: Math.round(fare / 1000) * 1000,
      distance: distance.toFixed(2),
      duration: duration.toFixed(2),
    },
  };
};

export const searchDriver = () => ({
  type: CUSTOMER_SEARCH_DRIVER,
});

export const setDriverData = data => ({
  type: CUSTOMER_SET_DRIVER_DATA,
  payload: data,
});

export const toggleSelectViaMap = data => ({
  type: TOGGLE_SELECT_VIA_MAP,
  payload: data,
});

export const getAddressStart = () => ({
  type: CUSTOMER_GET_ADDRESS_START,
});

const setMapsLocation = (data) => {
  const { geometry } = data;
  const { location } = geometry;
  const fullAddress = data.formatted_address;
  const arr = fullAddress.split(',');
  const address = arr[0];
  return {
    type: CUSTOMER_GET_ADDRESS_SUCCESS,
    payload: { location, fullAddress, address },
  };
};

export const getAddressFromLocation = ({ latitude, longitude }) => (dispatch) => {
  getAddressByCoords({ latitude, longitude }).then((data) => {
    dispatch(setMapsLocation(data));
  });
};

export const setDriverArrive = () => ({
  type: CUSTOMER_SET_DRIVER_ARRIVE,
});
