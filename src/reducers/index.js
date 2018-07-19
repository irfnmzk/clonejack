import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';

const root = combineReducers({
  auth,
  loading,
});

export default root;
