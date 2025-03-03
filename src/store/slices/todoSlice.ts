import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // 공통 설정(인터셉터, 기본 URL 등)이 적용된 axios 인스턴스
import { Todo } from '../../models/TodoModel';
import { ApiResult } from '../../models/ApiResultModel';

/* ============================================================================
   Todo 상태 인터페이스 정의
============================================================================ */
interface ToDoState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  todos: Todo[];
}

/* ============================================================================
   초기 상태 설정
============================================================================ */
const initialState: ToDoState = {
  status: 'idle',
  error: null,
  todos: [],
};

/* ============================================================================
   유틸리티 함수: Axios 에러 메시지 추출
============================================================================ */
/**
 * Axios 에러 객체에서 메시지를 추출합니다.
 * @param ex - 에러 객체
 * @param defaultMessage - 기본 메시지
 * @returns 에러 메시지 문자열
 */
const getErrorMessage = (ex: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(ex) && ex.response) {
    return ex.response.data?.message || defaultMessage;
  }
  return defaultMessage;
};

/* ============================================================================
   비동기 액션: Todo 목록 조회 (findAllTodos)
============================================================================ */
/**
 * Todo 목록을 조회하는 API 호출 thunk
 * @returns 조회된 Todo 배열을 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const findAllTodos = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  'todo/findAllTodos',
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get<ApiResult<Todo[]>>('todo');
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(
        getErrorMessage(ex, 'Todo 목록을 불러오는데 실패했습니다.')
      );
    }
  }
);

/* ============================================================================
   비동기 액션: Todo 추가 (createTodo)
============================================================================ */
/**
 * Todo를 추가하는 API 호출 thunk
 * @param createTodoRequest - 추가할 Todo의 title을 포함한 객체
 * @returns 생성된 Todo 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const createTodo = createAsyncThunk<Todo, { title: string }, { rejectValue: string }>(
  'todo/createTodo',
  async (createTodoRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<Todo>>('todo', createTodoRequest);
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(
        getErrorMessage(ex, 'Todo 추가에 실패했습니다.')
      );
    }
  }
);

/* ============================================================================
   비동기 액션: Todo 삭제 (deleteTodo)
============================================================================ */
/**
 * Todo를 삭제하는 API 호출 thunk
 * @param deleteTodoRequest - 삭제할 Todo의 id를 포함한 객체
 * @returns 삭제된 Todo의 id를 포함한 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const deleteTodo = createAsyncThunk<number, { id: number }, { rejectValue: string }>(
  'todo/deleteTodo',
  async (deleteTodoRequest, thunkAPI) => {
    try {
      const response = await axiosClient.delete<ApiResult<number>>(
        `todo/deleteTodo/${deleteTodoRequest.id}`
      );
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(
        getErrorMessage(ex, 'Todo 삭제에 실패했습니다.')
      );
    }
  }
);

/* ============================================================================
   비동기 액션: Todo 완료 상태 업데이트 (updateTodoCompleted)
============================================================================ */
/**
 * Todo의 완료 상태를 업데이트하는 API 호출 thunk
 * @param updateTodoCompletedRequest - 업데이트할 Todo의 id와 completed 상태를 포함한 객체
 * @returns 업데이트된 Todo 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const updateTodoCompleted = createAsyncThunk<
  Todo,
  { id: number; completed: boolean },
  { rejectValue: string }
>(
  'todo/updateTodoCompleted',
  async (updateTodoCompletedRequest, thunkAPI) => {
    try {
      const response = await axiosClient.patch<ApiResult<Todo>>(
        'todo/updateTodoCompleted',
        updateTodoCompletedRequest
      );
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(
        getErrorMessage(ex, 'Todo 업데이트에 실패했습니다.')
      );
    }
  }
);

/* ============================================================================
   비동기 액션: Todo 제목 업데이트 (updateTodoTitle)
============================================================================ */
/**
 * Todo의 제목을 업데이트하는 API 호출 thunk
 * @param updateTodoTitleRequest - 업데이트할 Todo의 id와 새로운 title을 포함한 객체
 * @returns 업데이트된 Todo 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const updateTodoTitle = createAsyncThunk<
  Todo,
  { id: number; title: string },
  { rejectValue: string }
>(
  'todo/updateTodoTitle',
  async (updateTodoTitleRequest, thunkAPI) => {
    try {
      const response = await axiosClient.patch<ApiResult<Todo>>(
        'todo/updateTodoTitle',
        updateTodoTitleRequest
      );
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(
        getErrorMessage(ex, 'Todo 업데이트에 실패했습니다.')
      );
    }
  }
);

/* ============================================================================
   Redux Slice: todoSlice
============================================================================ */
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // 필요에 따라 동기 액션(예: Todo 상태 초기화 등)을 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      /* ===== findAllTodos ===== */
      .addCase(findAllTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(findAllTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(findAllTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Todo 목록 불러오기 실패';
      })

      /* ===== createTodo ===== */
      .addCase(createTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.status = 'succeeded';
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo 추가 실패';
      })

      /* ===== updateTodoTitle ===== */
      .addCase(updateTodoTitle.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.status = 'succeeded';
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodoTitle.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo Title 업데이트 실패';
      })

      /* ===== updateTodoCompleted ===== */
      .addCase(updateTodoCompleted.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.status = 'succeeded';
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodoCompleted.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo Completed 업데이트 실패';
      })

      /* ===== deleteTodo ===== */
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        console.log("deleteTodo=", action.payload);
        state.status = 'succeeded';
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Todo 삭제 실패';
      });
  },
});

export default todoSlice.reducer;
