import axios from 'axios';

const axiosClient = axios.create({
  //baseURL: 'http://localhost:8080/api/', 
  baseURL:'https://newallsoft.shop/api/'
});

axiosClient.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
