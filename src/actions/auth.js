import axios from 'axios';
import { LOGIN_PROCESS_SUCCESS, TOGGLE_LOGIN_LOADING } from './constant/auth';

const toggleLoading = data => ({
  type: TOGGLE_LOGIN_LOADING,
  success: data,
});

export const loginSuccess = data => ({
  type: LOGIN_PROCESS_SUCCESS,
  payload: data,
});

export const processLogin = data => (dispatch) => {
  dispatch(toggleLoading());
  return new Promise((resolve, reject) => axios
    .post('https://us-central1-react-native-project-cfd3e.cloudfunctions.net/login', data)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      dispatch(toggleLoading(true));
      resolve();
    })
    .catch((err) => {
      dispatch(toggleLoading(false));
      reject(err.response.data.message);
    }));
};
