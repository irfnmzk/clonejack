import {
  SET_CUSTOMER_DESTINATION,
  SET_USER_BOOK_STATE,
  SET_CUSTOMER_ORIGIN,
  SET_ROUTE_INFO,
  CUSTOMER_SEARCH_DRIVER,
} from '../actions/constant/customer';

const initialState = {
  hasRide: false,
  searchingDriver: false,
  ride: {
    origin: {},
    destination: {},
    rider: {},
    status: null,
    routeInfo: {
      distance: null,
      duration: null,
      fare: 0,
    },
  },
  customerUi: {
    destinationSelected: false,
    isBooked: false,
    hasDirection: false,
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
    case SET_CUSTOMER_ORIGIN:
      return {
        ...state,
        ride: {
          ...state.ride,
          origin: {
            ...state.ride.origin,
            description: action.payload.description,
            location: action.payload.location,
          },
        },
      };
    case SET_USER_BOOK_STATE:
      return {
        ...state,
        customerUi: {
          ...state.customerUi,
          isBooked: true,
          hasDirection: true,
        },
      };
    case SET_ROUTE_INFO:
      return {
        ...state,
        ride: {
          ...state.ride,
          routeInfo: action.payload,
        },
      };
    case CUSTOMER_SEARCH_DRIVER:
      return {
        ...state,
        searchingDriver: true,
      };
    default:
      return state;
  }
};
