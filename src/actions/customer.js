import { SET_CUSTOMER_DESTINATION, DEL_CUSTOMER_DESTINATION } from './constant/customer';

export const setCustomerDestination = location => ({
  type: SET_CUSTOMER_DESTINATION,
  payload: location,
});

export const tes = () => ({
  type: DEL_CUSTOMER_DESTINATION,
});
