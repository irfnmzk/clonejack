import { SET_USER_LOCATION_REGION } from '../actions/constant/location';

const initialState = {
  userLocation: {},
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION_REGION:
      return {
        ...state,
        region: action.payload,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};
