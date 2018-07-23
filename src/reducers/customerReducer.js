import { SET_CUSTOMER_DESTINATION, SET_USER_BOOK_STATE } from '../actions/constant/customer';

const initialState = {
  hasRide: false,
  ride: {
    origin: {},
    destination: {},
    rider: {},
    status: null,
  },
  customerUi: {
    destinationSelected: false,
    isBooked: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER_DESTINATION:
      return {
        ...state,
        ride: {
          ...state.ride,
          destination: action.payload,
        },
        customerUi: {
          ...state.customerUi,
          destinationSelected: true,
        },
      };
    case SET_USER_BOOK_STATE:
      return {
        ...state,
        customerUi: {
          ...state.customerUi,
          isBooked: true,
        },
      };
    default:
      return state;
  }
};
