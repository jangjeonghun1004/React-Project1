import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // axios 인스턴스 (공통 설정, 인터셉터 등 포함)

/* ======================================================================
   인증 관련 타입 정의
   ====================================================================== */

/**
 * 로그인 요청에 필요한 자격 증명 타입
 */
interface SignInRequest {
  email: string;
  password: string;
}

/**
 * 로그인 응답 데이터 타입
 */
interface SignInResponse {
  token: string;
}

/**
 * 회원가입 요청에 필요한 데이터 타입
 */
interface SignUpRequest {
  email: string;
  password: string;
}

/**
 * 회원가입 응답 데이터 타입
 */
interface SignUpResponse {
  id: number;
  email: string;
}

/**
 * 인증 상태 인터페이스
 * - status: API 호출 상태 ('idle' | 'loading' | 'succeeded' | 'failed')
 * - error: 에러 메시지 (없으면 null)
 * - signUpResponse: 회원가입 응답 데이터 (없으면 null)
 * - signInResponse: 로그인 응답 데이터 (없으면 null)
 */
interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  signUpResponse: SignUpResponse | null;
  signInResponse: SignInResponse | null;
}

/* ======================================================================
   초기 상태 설정
   ====================================================================== */
const initialState: AuthState = {
  status: 'idle',
  error: null,
  signUpResponse: null,
  signInResponse: null,
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
  SignInResponse, // fulfilled 시 반환하는 타입
  SignInRequest,  // thunk 호출 시 인자 타입
  { rejectValue: string } // reject 시 전달하는 에러 메시지 타입
>(
  'auth/signIn',
  async (signInRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post('auth/signIn', signInRequest);
      // 서버 응답이 성공적일 경우 (response.data.result === true)
      if (response.data.result) {
        // contents 필드에 토큰 등 필요한 정보가 담겨있어야 합니다.
        return response.data.contents;
      } else {
        // 서버에서 전달받은 에러 메시지로 rejection 처리
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      // 기본 에러 메시지 설정
      let message = '로그인에 실패했습니다.';
      // axios 에러인지 확인 후, 서버 응답에서 에러 메시지를 추출합니다.
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ======================================================================
   비동기 액션: signUp (회원가입)
   ====================================================================== */
/**
 * 회원가입 API 호출 thunk
 * @param signUpRequest - 회원가입 요청 데이터 (이메일, 비밀번호)
 * @returns 회원가입 성공 시 회원 정보 반환
 */
export const signUp = createAsyncThunk<
  SignUpResponse, // fulfilled 시 반환하는 타입
  SignUpRequest,  // thunk 호출 시 인자 타입
  { rejectValue: string } // reject 시 전달하는 에러 메시지 타입
>(
  'auth/signUp',
  async (signUpRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post('auth/signUp', signUpRequest);
      if (response.data.result) {
        return response.data.contents;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      let message = '회원가입에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ======================================================================
   비동기 액션: signOut (로그아웃)
   ====================================================================== */
/**
 * 로그아웃 API 호출 thunk
 * 서버에 로그아웃 요청을 보내고, 클라이언트 인증 상태를 초기화합니다.
 */
export const signOut = createAsyncThunk<
  boolean, // fulfilled 시 true 반환
  void,    // thunk 호출 시 인자 없음
  { rejectValue: string } // reject 시 전달하는 에러 메시지 타입
>(
  'auth/signOut',
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get('auth/signOut');
      if (response.data.result) {
        return true;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      let message = '로그아웃에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
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
    // 필요 시 동기 액션 (예: 토큰 초기화, 사용자 정보 리셋 등)을 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      /* ----- 로그인(signIn) 처리 ----- */
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<SignInResponse>) => {
        state.status = 'succeeded';
        state.error = null;
        // 로그인 성공 시, 서버로부터 받은 토큰 저장
        state.signInResponse = { token: action.payload.token };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        // action.payload가 있을 경우 우선 사용, 없으면 action.error.message 사용
        state.error = action.payload || action.error.message || '로그인 실패';
      })

      /* ----- 회원가입(signUp) 처리 ----- */
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<SignUpResponse>) => {
        state.status = 'succeeded';
        state.error = null;
        // 회원가입 성공 시, 서버로부터 받은 회원 정보 저장
        state.signUpResponse = {
          id: action.payload.id,
          email: action.payload.email,
        };
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '회원가입 실패';
      })

      /* ----- 로그아웃(signOut) 처리 ----- */
      .addCase(signOut.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        // 로그아웃 성공 시, 인증 관련 상태를 초기화합니다.
        state.signInResponse = null;
        state.signUpResponse = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || '로그아웃 실패';
      });
  },
});

// 필요에 따라 동기 액션을 export 할 수 있습니다.
// export const { resetAuth } = authSlice.actions;

// slice의 reducer를 export하여 store에 포함시킵니다.
export default authSlice.reducer;
