import {
  SET_CUSTOMER_DESTINATION,
  SET_USER_BOOK_STATE,
  SET_CUSTOMER_ORIGIN,
  SET_ROUTE_INFO,
  CUSTOMER_SEARCH_DRIVER,
  CUSTOMER_SET_DRIVER_DATA,
  TOGGLE_SELECT_VIA_MAP,
  CUSTOMER_GET_ADDRESS_START,
  CUSTOMER_GET_ADDRESS_SUCCESS,
  CUSTOMER_SET_DRIVER_ARRIVE,
  CUSTOMER_START_DRIVE,
  CUSTOMER_FINISH_DRIVE,
  CUSTOMER_CLEAR_RIDE,
} from '../actions/constant/customer';

const initialState = {
  hasRide: false,
  searchingDriver: false,
  ride: {
    origin: {},
    destination: {},
    driver: {},
    isDone: false,
    onRide: false,
    status: 'PICKUP',
    driverArrive: false,
    routeInfo: {
      distance: null,
      duration: null,
      fare: 0,
    },
  },
  selectedLocation: {
    isFetch: false,
    location: {},
    fullAddress: '',
    address: '',
  },
  customerUi: {
    destinationSelected: false,
    isBooked: false,
    hasDirection: false,
    selectViaMap: false,
    selectViaMapType: '',
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
    case CUSTOMER_SET_DRIVER_DATA:
      return {
        ...state,
        ride: {
          ...state.ride,
          driver: action.payload,
        },
        hasRide: true,
      };
    case TOGGLE_SELECT_VIA_MAP:
      return {
        ...state,
        customerUi: {
          ...state.customerUi,
          selectViaMap: !state.customerUi.selectViaMap,
          selectViaMapType: action.payload || '',
        },
      };
    case CUSTOMER_GET_ADDRESS_START:
      return {
        ...state,
        selectedLocation: {
          ...state.selectedLocation,
          isFetch: true,
        },
      };
    case CUSTOMER_GET_ADDRESS_SUCCESS:
      return {
        ...state,
        selectedLocation: {
          isFetch: false,
          ...action.payload,
        },
      };
    case CUSTOMER_SET_DRIVER_ARRIVE:
      return {
        ...state,
        ride: {
          ...state.ride,
          driverArrive: true,
        },
      };
    case CUSTOMER_START_DRIVE:
      return {
        ...state,
        ride: {
          ...state.ride,
          status: 'RIDE',
          onRide: true,
        },
      };
    case CUSTOMER_FINISH_DRIVE:
      return {
        ...state,
        ride: {
          ...state.ride,
          status: 'finish',
          isDone: true,
        },
      };
    case CUSTOMER_CLEAR_RIDE:
      return initialState;
    default:
      return state;
  }
};
