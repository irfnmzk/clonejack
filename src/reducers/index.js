import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';
import location from './locationReducer';
import customer from './customerReducer';

const root = combineReducers({
  auth,
  loading,
  location,
  customer,
});

export default root;
