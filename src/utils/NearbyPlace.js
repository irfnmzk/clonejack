import axios from 'axios';

const API_KEY = 'AIzaSyDc63AZDDPycmk1Vc9hmskLZvu1AbWIAbk';
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

export const getAddress = coords => new Promise((resolve) => {
  axios
    .get(`${BASE_URL}?latlng=${coords.latitude},${coords.longitude}&key=${API_KEY}`)
    .then((res) => {
      const result = res.data.results;
      resolve(result[0].formatted_address);
    })
    .catch(err => console.log(err));
});

export const getAddressByCoords = coords => new Promise((resolve) => {
  axios
    .get(`${BASE_URL}?latlng=${coords.latitude},${coords.longitude}&key=${API_KEY}`)
    .then((res) => {
      const result = res.data.results;
      resolve(result[0]);
    })
    .catch(err => console.log(err));
});
