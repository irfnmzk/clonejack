import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';
import location from './locationReducer';

const root = combineReducers({
  auth,
  loading,
  location,
});

export default root;
