import { combineReducers } from 'redux';
import auth from './authReducer';

const root = combineReducers({
  auth,
});

export default root;
