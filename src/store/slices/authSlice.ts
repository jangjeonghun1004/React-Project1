import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient';


/* 
  인증 관련 타입 정의  
  - AuthUser: 로그인한 사용자의 정보
  - AuthResponse: 서버로부터 받은 사용자 정보와 토큰
  - SignInRequest: 로그인 시 필요한 자격 증명 (예: 이메일, 비밀번호)
  - SignUpRequest: 회원가입 시 필요한 데이터 (예: 이메일, 비밀번호 등)
*/
interface AuthUser {
  id: number;
  email: string;
  username: string;
}

// interface AuthResponse {
//   user: AuthUser;
//   token: string;
// }

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
}

interface SignUpRequest {
  email: string;
  password: string;
}

interface SignUpResponse {
  id: number
  email: string;
}

/*
  인증 상태 인터페이스 정의  
  - user: 인증된 사용자 정보 (없으면 null)
  - token: 인증 토큰 (없으면 null)
  - status: 현재 요청 상태 ('idle' | 'loading' | 'succeeded' | 'failed')
  - error: 에러 메시지 (없으면 null)
*/
interface AuthState {
  user: AuthUser | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  signUpResponse: SignUpResponse | null;
  signInResponse: SignInResponse | null;
}

// 초기 상태 설정
const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
  signUpResponse: null,
  signInResponse: null,
};

// 인증 API 엔드포인트
// 환경변수를 사용하여 민감 정보가 코드에 노출되지 않도록 관리합니다.
// 예: .env 파일에 REACT_APP_AUTH_URL='https://newallsoft.shop/api/auth' 설정
// const AUTH_URL = process.env.REACT_APP_AUTH_URL || 'https://newallsoft.shop/api/auth';
//const AUTH_URL = 'https://newallsoft.shop/api/auth';


/* 
  signIn: 로그인 요청
  - 인자로 SignInRequest({ email, password })를 받고,
  - 성공 시 SignInResponse({ token }) 데이터를 반환합니다.
*/
export const signIn = createAsyncThunk<SignInResponse, SignInRequest, { rejectValue: string }>(
  'auth/signIn',
  async (signInRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post(`auth/signIn`, signInRequest);
      if (response.data.result) {
        return response.data.contents;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      let message = '로그인에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* 
  signUp: 회원가입 요청
  - 인자로 SignUpRequest({ email, password })를 받고,
  - 성공 시 SignUpResponse({ email }) 데이터를 반환합니다.
*/
export const signUp = createAsyncThunk<SignUpResponse, SignUpRequest, { rejectValue: string }>(
  'auth/signUp',
  async (signUpRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post(`auth/signUp`, signUpRequest);
      if (response.data.result) {
        // 성공 시, contents를 반환 (SignUpResponse 형태여야 합니다)
        return response.data.contents;
      } else {
        // 실패 시, 서버에서 전달받은 메시지를 rejectWithValue로 전달합니다.
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      let message = '회원가입에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* 
  signOut: 로그아웃 요청
  - 백엔드 로그아웃 API가 있다면 호출할 수 있습니다.
  - 이 예제에서는 서버 호출 후 인증 상태를 초기화하는 방식으로 구현했습니다.
*/
export const signOut = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/signOut',
  async (_, thunkAPI) => {
    try {
      // 로그아웃 API 호출 예시 (백엔드 구현에 따라 필요 시 활성화)
       await axiosClient.post(`auth/signOut`);
      return;
    } catch (error) {
      let message = '로그아웃에 실패했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/*
  authSlice: 인증 관련 상태 및 리듀서 정의
  - signIn, signUp, signOut 각 비동기 작업에 대해 pending, fulfilled, rejected 케이스를 처리합니다.
*/
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 추가로 동기 액션(예: 토큰 재설정 등)이 필요하면 여기에 작성합니다.
  },
  extraReducers: (builder) => {
    builder
      /* signIn 처리 */
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<SignInResponse>) => {
        state.status = 'succeeded';
        state.error = null;
        state.signInResponse = {
          token: action.payload.token
        };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그인 실패';
      })

      /* signUp 처리 */
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<SignUpResponse>) => {
        state.status = 'succeeded';
        state.error = null;
        state.signUpResponse = {
          id: action.payload.id,
          email: action.payload.email
        };
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '회원가입 실패';
      })

      /* signOut 처리 */
      .addCase(signOut.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = 'succeeded';
        // 로그아웃 성공 시 사용자 정보와 토큰을 초기화합니다.
        state.user = null;
        state.token = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그아웃 실패';
      });
  },
});

// 필요한 경우 동기 액션들을 export할 수 있습니다.
// export const { someAction } = authSlice.actions;

// 리듀서 내보내기
export default authSlice.reducer;
