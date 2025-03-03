import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // axios 인스턴스 (공통 설정, 인터셉터 등 포함)
import { ApiResult } from '../../models/ApiResultModel';

export interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string | null;
}

/* ======================================================================
   초기 상태 설정
====================================================================== */
const initialState: AuthState = {
  status: 'idle',
  error: null,
  token: null,
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
 * @param email - 이메일
 * @param password - 비밀번호
 * @returns 로그인 성공 시 토큰 반환(token)
 */
export const signIn = createAsyncThunk<{ token: string }, { email: string, password: string }, { rejectValue: string }>('auth/signIn',
  async (signInRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<{ token: string }>>('auth/signIn', signInRequest);
      if (response.data.result) {
        return response.data.contents;
      }

      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, '로그인에 실패했습니다.'));
    }
  }
);

/* ======================================================================
   비동기 액션: signUp (회원가입)
====================================================================== */
/**
 * 회원가입 API 호출 thunk
 * @param email - 이메일
 * @param password - 비밀번호
 * @returns 회원가입 성공 여부(boolean)
 */
export const signUp = createAsyncThunk<boolean, { email: string, password: string }, { rejectValue: string }>('auth/signUp',
  async (signUpRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<{ id: number, email: string }>>('auth/signUp', signUpRequest);
      if (response.data.result) {
        return response.data.result;
      }

      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, '회원가입에 실패했습니다.'));
    }
  }
);

/* ======================================================================
   비동기 액션: signOut (로그아웃)
====================================================================== */
/**
 * 로그아웃 API 호출 thunk
 * 서버에 로그아웃 요청 후 클라이언트 인증 상태 초기화
 */
export const signOut = createAsyncThunk<void, void, { rejectValue: string }>('auth/signOut',
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get<ApiResult<null>>('auth/signOut');
      if (!response.data.result) {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, '로그아웃에 실패했습니다.'));
    }
  }
);

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
      /* ===== signIn ===== */
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.token = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.status = 'succeeded';
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그인 실패';
        state.token = null;
      })

      /* ===== signUp ===== */
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.token = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.token = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '회원가입 실패';
        state.token = null;
      })

      /* ===== signOut ===== */
      .addCase(signOut.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.token = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.token = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그아웃 실패';
        state.token = null;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
