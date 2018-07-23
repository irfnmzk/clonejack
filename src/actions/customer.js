import {
  SET_CUSTOMER_DESTINATION,
  SET_USER_BOOK_STATE,
  SET_CUSTOMER_ORIGIN,
  SET_ROUTE_INFO,
} from './constant/customer';

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
