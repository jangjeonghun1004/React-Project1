import axios from 'axios';
import { STORAGE_KEYS } from '../app/storageKeys';
import { jwtDecode } from 'jwt-decode'; // jwt-decode 라이브러리 설치 필요: npm install jwt-decode

// 환경변수를 사용하여 민감 정보가 코드에 노출되지 않도록 관리합니다.
// 예: .env 파일에 REACT_APP_AUTH_URL='https://newallsoft.shop/api/auth' 설정
const axiosClient = axios.create({
  baseURL: STORAGE_KEYS.AXIOS_BASE_URL_SERVICE, // 실제 API base URL로 변경
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * JWT 토큰의 만료 여부를 확인하는 함수
 * @param {string} token JWT 토큰
 * @returns {boolean} 토큰이 만료되었는지 여부 (만료되었으면 true, 유효하면 false)
 */
export const isTokenExpired = (token: string | null): boolean => {
  if (!token) {
    return true; // 토큰이 없으면 만료된 것으로 간주
  }

  try {
    const decodedToken: any = jwtDecode(token); // jwt-decode를 사용하여 토큰 디코딩
    const expirationTime = decodedToken.exp * 1000; // exp는 초 단위이므로 밀리초로 변환
    const currentTime = Date.now();

    return currentTime > expirationTime; // 현재 시간이 만료 시간보다 크면 만료됨
  } catch (error) {
    console.error('토큰 디코딩 에러:', error);
    return true; // 토큰 디코딩 실패 시 만료된 것으로 간주 (보안상의 이유)
  }
};

// 요청 인터셉터: 모든 요청 전에 실행
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.JWT_TOKEN);
    if (token) {
      if (isTokenExpired(token)) {
        // 토큰이 만료되었으면 localStorage에서 삭제하고, 필요한 경우 로그아웃 처리
        localStorage.removeItem(STORAGE_KEYS.JWT_TOKEN);
        console.warn('토큰이 만료되어 localStorage에서 삭제되었습니다.');

        // 강제 로그아웃 또는 토큰 갱신 로직 추가 (예: dispatch(logoutAction()))
        alert('토큰이 만료되었습니다. 다시 로그인해주세요.'); // 사용자에게 알림 (선택 사항)
        window.location.hash = `${import.meta.env.BASE_URL}signIn`; // 로그인 페이지로 리다이렉트 (선택 사항)

        // return Promise.reject({ // 요청 거부 (선택 사항)
        //     response: {
        //         status: 401, // Unauthorized 상태 코드
        //         data: { message: '토큰 만료' }
        //     }
        // });
      } else {
        // 토큰이 유효하면 Authorization 헤더에 토큰 추가
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 응답 후에 실행 (에러 핸들링)
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) { // 401 Unauthorized 에러 발생 시 (예: 만료된 토큰, 유효하지 않은 토큰)
      localStorage.removeItem(STORAGE_KEYS.JWT_TOKEN); // localStorage에서 토큰 삭제
      console.error('401 에러 발생: 토큰 만료 또는 유효하지 않음');

      // 강제 로그아웃 또는 로그인 페이지 리다이렉트 처리 (예: dispatch(logoutAction()))
      alert('사용자 인증이 필요합니다. 다시 로그인해주세요.'); // 사용자에게 알림 (선택 사항)
      window.location.hash = `${import.meta.env.BASE_URL}signIn`; // 로그인 페이지로 리다이렉트 (선택 사항)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
