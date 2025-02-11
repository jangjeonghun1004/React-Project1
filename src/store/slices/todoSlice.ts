import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoType } from '../../types/TodoType';
import axiosClient from '../axiosClient';

// 보안을 위해 API URL은 환경변수로 관리하는 것이 좋습니다.
// 예를 들어, .env 파일에 REACT_APP_API_URL='https://newallsoft.shop/api/todo'와 같이 설정 후 사용합니다.
// const API_URL = process.env.REACT_APP_API_URL || 'https://newallsoft.shop/api/todo';
const API_URL = 'https://newallsoft.shop/api/todo';

// Todo 상태 인터페이스 정의
interface TodoState {
  todos: TodoType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// 초기 상태 설정
const initialState: TodoState = {
  todos: [],
  status: 'idle',
  error: null,
};

/*
  각 createAsyncThunk 함수는 API 호출을 수행합니다.
  제네릭 타입을 사용하여 반환되는 데이터, 인자, 그리고 에러 메시지 타입을 명시합니다.
*/

// 1. 모든 Todo 항목 가져오기
export const fetchTodos = createAsyncThunk<TodoType[], void, { rejectValue: string }>(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get(`todo/fetch`);
      // API 응답 데이터 형식에 따라 필요한 데이터를 반환하세요.
      return response.data;
    } catch (error) {
      let message = 'Todo 목록을 불러오는데 실패했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        // 서버에서 제공하는 에러 메시지가 있다면 해당 메시지를 사용
        message = error.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 2. 새로운 Todo 추가
export const addTodo = createAsyncThunk<TodoType, TodoType, { rejectValue: string }>(
  'todos/addTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, todo);
      // 응답 데이터가 { contents: TodoType } 형태라고 가정합니다.
      return response.data.contents;
    } catch (error) {
      let message = 'Todo 추가에 실패했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 3. 기존 Todo 업데이트
export const updateTodo = createAsyncThunk<TodoType, TodoType, { rejectValue: string }>(
  'todos/updateTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await axios.patch(API_URL, {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      });
      // 응답 데이터가 { contents: TodoType } 형태라고 가정합니다.
      return response.data.contents;
    } catch (error) {
      let message = 'Todo 업데이트에 실패했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 4. Todo 삭제
export const deleteTodo = createAsyncThunk<number, number, { rejectValue: string }>(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // 삭제된 Todo의 id를 반환합니다.
      return id;
    } catch (error) {
      let message = 'Todo 삭제에 실패했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Redux Slice 정의
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // 동기 액션이 필요한 경우 여기에 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      /* fetchTodos 처리 */
      // API 호출 시작 시 로딩 상태로 변경
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null; // 이전 에러 메시지 초기화
      })
      // API 호출 성공 시 상태 및 Todo 목록 업데이트
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      // API 호출 실패 시 에러 메시지 업데이트
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Todo 목록 불러오기 실패';
      })

      /* addTodo 처리 */
      // Todo 추가 성공 시 Todo 목록에 새 항목 추가
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<TodoType>) => {
        state.todos.push(action.payload);
      })
      // Todo 추가 실패 시 에러 메시지 업데이트
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo 추가 실패';
      })

      /* updateTodo 처리 */
      // Todo 업데이트 성공 시 기존 항목을 새 데이터로 교체
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<TodoType>) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      // Todo 업데이트 실패 시 에러 메시지 업데이트
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo 업데이트 실패';
      })

      /* deleteTodo 처리 */
      // Todo 삭제 성공 시 해당 항목 제거
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      // Todo 삭제 실패 시 에러 메시지 업데이트
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo 삭제 실패';
      });
  },
});

// 리듀서 내보내기
export default todoSlice.reducer;
