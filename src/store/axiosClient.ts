import axios from 'axios';
import { STORAGE_KEYS } from '../app/storageKeys';

// 환경변수를 사용하여 민감 정보가 코드에 노출되지 않도록 관리합니다.
// 예: .env 파일에 REACT_APP_AUTH_URL='https://newallsoft.shop/api/auth' 설정
const axiosClient = axios.create({
  baseURL: STORAGE_KEYS.AXIOS_BASE_URL_SERVICE,
});

axiosClient.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem(STORAGE_KEYS.JWT_TOKEN);
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
