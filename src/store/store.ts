import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import authReducer, { AuthState } from './slices/authSlice';
import { STORAGE_KEYS } from '../app/storageKeys';
import postReducer from './slices/postSlice'

/**
 * 앱 초기화 시 localStorage에 저장된 JWT 토큰을 불러와 preloadedState에 반영합니다.
 * 이를 통해 새로고침 후에도 Redux store에 토큰이 남아 인증 상태가 유지됩니다.
 *
 * 주의: authSlice의 AuthState 인터페이스에 jwtToken 속성이 포함되어 있어야 합니다.
 */
const preloadedState: { auth: AuthState } = {
  auth: {
    status: 'idle',                         // 초기 상태는 'idle'
    error: null,                            // 에러 메시지 초기값 null
    jwtToken: localStorage.getItem(STORAGE_KEYS.JWT_TOKEN), // localStorage에서 JWT 토큰 불러오기
    signUpResponse: null,                   // 회원가입 응답 초기값 null
    signInResponse: null,                   // 로그인 응답 초기값 null
  },
};

/**
 * Redux Store 구성
 * - configureStore를 통해 store를 생성하며, 각 슬라이스(auth, todos)를 등록합니다.
 * - preloadedState를 통해 초기 상태를 주입합니다.
 */
export const store = configureStore({
  reducer: {
    todos: todoReducer, // Todo 관련 상태 관리
    auth: authReducer,  // 인증 관련 상태 관리
    post: postReducer, // Post 관련 상태 관리
  },
  preloadedState,       // 앱 시작 시 preloadedState로 초기 상태 반영
});

// RootState와 AppDispatch 타입을 추출하여 앱 전역에서 사용하면, 
// 타입 안정성이 향상되고 자동완성 지원을 받을 수 있습니다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
