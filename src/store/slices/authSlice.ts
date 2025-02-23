import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // axios 인스턴스 (공통 설정, 인터셉터 등 포함)

/* ======================================================================
   인증 관련 타입 정의
====================================================================== */
interface SignInRequest {
  email: string;
  password: string;
}

interface SignUpRequest {
  email: string;
  password: string;
}

interface SignUpResponse {
  id: number;
  email: string;
}

export interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string | null;
  signUpResponse: SignUpResponse | null;
}

/* ======================================================================
   초기 상태 설정
====================================================================== */
const initialState: AuthState = {
  status: 'idle',
  error: null,
  token: null,
  signUpResponse: null,
};

/* ======================================================================
   유틸리티: axios 에러 메시지 추출 함수
====================================================================== */
const getErrorMessage = (ex: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(ex) && ex.response) {
    return ex.response.data?.message || defaultMessage;
  }
  return defaultMessage;
};

/* ======================================================================
   비동기 액션: signIn (로그인)
====================================================================== */
/**
 * 로그인 API 호출 thunk
 * @param signInRequest - 로그인 요청 데이터 (이메일, 비밀번호)
 * @returns 로그인 성공 시 토큰 반환
 */
export const signIn = createAsyncThunk<
  { token: string },
  SignInRequest,
  { rejectValue: string }
>('auth/signIn', async (signInRequest, thunkAPI) => {
  try {
    const response = await axiosClient.post('auth/signIn', signInRequest);
    if (response.data.result) {
      return response.data.contents;
    }
    return thunkAPI.rejectWithValue(response.data.message);
  } catch (ex) {
    return thunkAPI.rejectWithValue(getErrorMessage(ex, '로그인에 실패했습니다.'));
  }
});

/* ======================================================================
   비동기 액션: signUp (회원가입)
====================================================================== */
/**
 * 회원가입 API 호출 thunk
 * @param signUpRequest - 회원가입 요청 데이터 (이메일, 비밀번호)
 */
export const signUp = createAsyncThunk<
  void,
  SignUpRequest,
  { rejectValue: string }
>('auth/signUp', async (signUpRequest, thunkAPI) => {
  try {
    const response = await axiosClient.post('auth/signUp', signUpRequest);
    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  } catch (ex) {
    return thunkAPI.rejectWithValue(getErrorMessage(ex, '회원가입에 실패했습니다.'));
  }
});

/* ======================================================================
   비동기 액션: signOut (로그아웃)
====================================================================== */
/**
 * 로그아웃 API 호출 thunk
 * 서버에 로그아웃 요청 후 클라이언트 인증 상태 초기화
 */
export const signOut = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('auth/signOut', async (_, thunkAPI) => {
  try {
    const response = await axiosClient.get('auth/signOut');
    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  } catch (ex) {
    return thunkAPI.rejectWithValue(getErrorMessage(ex, '로그아웃에 실패했습니다.'));
  }
});

/* ======================================================================
   Redux Slice: authSlice
   인증 관련 상태 관리 및 액션 처리
====================================================================== */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 에러 상태 초기화 액션
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn 처리
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.status = 'succeeded';
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.token = null;
        state.error = action.payload || action.error.message || '로그인 실패';
      })
      // signUp 처리
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '회원가입 실패';
      })
      // signOut 처리
      .addCase(signOut.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.token = null;
        state.signUpResponse = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그아웃 실패';
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
