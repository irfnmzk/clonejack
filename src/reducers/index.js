import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';
import location from './locationReducer';
import customer from './customerReducer';
import driver from './driverReducer';
import { LOGOUT } from '../actions/constant/auth';

const appReducer = combineReducers({
  auth,
  loading,
  location,
  customer,
  driver,
});

const root = (state, action) => {
  let states = state;
  if (action.type === LOGOUT) {
    states = undefined;
  }

  return appReducer(states, action);
};

export default root;
