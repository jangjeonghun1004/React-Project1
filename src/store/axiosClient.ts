import axios from 'axios';

// 인증 API 엔드포인트
// 환경변수를 사용하여 민감 정보가 코드에 노출되지 않도록 관리합니다.
// 예: .env 파일에 REACT_APP_AUTH_URL='https://newallsoft.shop/api/auth' 설정
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
