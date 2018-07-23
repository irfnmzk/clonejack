import { SET_CUSTOMER_DESTINATION, SET_USER_BOOK_STATE } from './constant/customer';

export const setCustomerDestination = location => ({
  type: SET_CUSTOMER_DESTINATION,
  payload: location,
});

export const toggleBookState = () => ({
  type: SET_USER_BOOK_STATE,
});
