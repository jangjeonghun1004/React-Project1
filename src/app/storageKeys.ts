/**
 * localStorage나 sessionStorage에 저장할 때 사용하는 키들을 중앙에서 관리합니다.
 * 'as const'를 사용하여 각 키의 값이 변경되지 않도록 고정합니다.
 */
export const STORAGE_KEYS = {
    JWT_TOKEN: "jwtToken", // JWT 토큰 저장 키
    AXIOS_BASE_URL_LOCAL: "http://localhost:8080/api/",
    AXIOS_BASE_URL_SERVICE: "https://newallsoft.shop/api/",
  } as const;
  