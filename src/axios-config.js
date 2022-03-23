// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const axiosInstance = axios.create({
// .. where we make our configurations
    baseURL: process.env.REACT_APP_LINK,
});

export default axiosInstance;
