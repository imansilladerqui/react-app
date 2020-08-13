import axios from 'axios';


// const prodUrl = '';
// const devUrl = '';

export const axiosInstance = axios.create({
  baseURL: "https://raw.githubusercontent.com/rrafols/mobile_test/master/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})