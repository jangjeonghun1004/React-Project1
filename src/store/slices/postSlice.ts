import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // 공통 설정(인터셉터, 기본 URL 등)이 적용된 axios 인스턴스
import { Todo } from '../../models/TodoModel';
import { PaginatedPostResponse, Post, PostRequest } from '../../models/PostModel';

/* ============================================================================
   Post 상태 인터페이스 정의
   ----------------------------------------------------------------------------
   - status: 현재 API 호출 상태 ('idle' | 'loading' | 'succeeded' | 'failed')
   - error: 에러 메시지 (없을 경우 null)
   - paginatedPostResponse: PaginatedPostResponse 객체 배열
============================================================================ */
interface PostState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  paginatedPostResponse: PaginatedPostResponse;
}

/* ============================================================================
   초기 상태 설정
============================================================================ */
const initialState: PostState = {
  status: 'idle',
  error: null,
  paginatedPostResponse: { posts: [], sizePages: 0, totalPages: 0, currentPageNumber: 0 }
};

/* ============================================================================
   비동기 액션: getAllPosts (Post 목록 조회)
   ----------------------------------------------------------------------------
   - 서버에서 Post 목록을 불러옵니다.
   - API 응답의 result 필드가 true이면 contents를 반환,
     그렇지 않으면 서버의 에러 메시지를 rejectWithValue로 반환합니다.
============================================================================ */
export const getAllPosts = createAsyncThunk<PaginatedPostResponse, number, { rejectValue: string }>(
  'posts/getAllPosts',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axiosClient.get(`posts?pageNumber=${pageNumber}`);
      if (response.data.result) {
        // 성공: contents (Post 배열) 반환
        return response.data.contents;
      } else {
        // 실패: 서버에서 전달받은 에러 메시지를 반환
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      // 기본 에러 메시지 정의
      let message = 'Post 목록을 불러오는데 실패했습니다.';
      // axios 에러일 경우, 서버 응답 메시지 사용 (optional chaining 활용)
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ============================================================================
   비동기 액션: createPost (Post 추가)
   ----------------------------------------------------------------------------
   - PostRequest를 인자로 받아 Post 추가 API를 호출합니다.
   - 서버 응답의 result가 true이면 contents (추가된 Post)를 반환,
     실패 시 에러 메시지를 rejectWithValue로 반환합니다.
============================================================================ */
export const createPost = createAsyncThunk<Post, PostRequest, { rejectValue: string }>(
  'posts/createPost',
  async (postRequest, thunkAPI) => {
    try {
      console.log("called");
      const response = await axiosClient.post('posts', postRequest);
      if (response.data.result) {
        return response.data.contents;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      let message = 'Post 추가에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ============================================================================
   비동기 액션: updateTodoTitle (Todo 제목 업데이트)
   ----------------------------------------------------------------------------
   - Todo 객체를 인자로 받아 제목 및 상태를 업데이트합니다.
   - 서버 응답의 contents를 반환하며,
     실패 시 에러 메시지를 rejectWithValue로 반환합니다.
============================================================================ */
export const updateTodoTitle = createAsyncThunk<Todo, Todo, { rejectValue: string }>(
  'todo/updateTitle',
  async (todo, thunkAPI) => {
    try {
      const response = await axiosClient.patch('todo/updateTitle', {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      });
      // API 응답에 result 체크를 추가할 수 있다면 아래와 같이 적용 가능
      // if (response.data.result) { return response.data.contents; } else { ... }
      return response.data.contents;
    } catch (ex) {
      let message = 'Todo 업데이트에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ============================================================================
   비동기 액션: deleteTodo (Todo 삭제)
   ----------------------------------------------------------------------------
   - Todo id를 인자로 받아 해당 Todo를 삭제합니다.
   - 삭제 성공 시 id를 반환하며,
     실패 시 에러 메시지를 rejectWithValue로 반환합니다.
============================================================================ */
export const deleteTodo = createAsyncThunk<number, number, { rejectValue: string }>(
  'todo/delete',
  async (id, thunkAPI) => {
    try {
      await axiosClient.delete(`todo/delete/${id}`);
      // 삭제 성공 시 삭제된 Todo의 id 반환
      return id;
    } catch (ex) {
      let message = 'Todo 삭제에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/* ============================================================================
   비동기 액션: updateTodoCompleted (Todo 완료 상태 업데이트)
   ----------------------------------------------------------------------------
   - Todo id와 completed 상태를 인자로 받아 해당 Todo의 완료 상태를 업데이트합니다.
   - 성공 시 서버의 응답 데이터를 반환하며,
     실패 시 에러 메시지를 rejectWithValue로 반환합니다.
============================================================================ */
export const updateTodoCompleted = createAsyncThunk<
  Todo,
  { id: number; completed: boolean },
  { rejectValue: string }
>(
  'todo/updateCompleted',
  async (todo, thunkAPI) => {
    try {
      const response = await axiosClient.patch('todo/updateCompleted', {
        id: todo.id,
        completed: todo.completed,
      });
      return response.data.contents;
    } catch (ex) {
      let message = 'Todo 업데이트에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const toggleLike = createAsyncThunk<void, number,{ rejectValue: string }>(
  'posts/like',
  async (id, thunkAPI) => {
    try {
      await axiosClient.post(`/posts/${id}/like`);
    } catch (ex) {
      let message = 'Like 업데이트에 실패했습니다.';
      if (axios.isAxiosError(ex) && ex.response) {
        message = ex.response.data?.message || message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);


/* ============================================================================
   Redux Slice: postSlice
   ----------------------------------------------------------------------------
   - Post 관련 상태 및 액션을 관리합니다.
   - 각 비동기 액션의 pending, fulfilled, rejected 상태에 따라 상태를 업데이트합니다.
============================================================================ */
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // 필요에 따라 동기 액션(예: Todo 상태 초기화 등)을 여기에 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      /* ===== fetchTodo ===== */
      .addCase(getAllPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null; // 이전 에러 메시지 초기화
      })
      .addCase(getAllPosts.fulfilled, (state, action: PayloadAction<PaginatedPostResponse>) => {
        state.status = 'succeeded';
        state.paginatedPostResponse = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = 'failed';
        // action.payload 우선, 없으면 action.error.message 사용
        state.error = action.payload || action.error.message || 'Post 목록 불러오기 실패';
      })

      /* ===== createPost ===== */
      .addCase(createPost.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Post 추가 실패';
      })

      /* ===== toglleLike ===== */
      .addCase(toggleLike.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'toggleLike 업데이트 실패';
      })

    // /* ===== updateTodoTitle ===== */
    // .addCase(updateTodoTitle.fulfilled, (state, action: PayloadAction<Todo>) => {
    //   state.status = 'succeeded';
    //   // 업데이트된 Todo 객체를 기존 배열에서 찾아 교체합니다.
    //   const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
    //   if (index !== -1) {
    //     state.todos[index] = action.payload;
    //   }
    // })
    // .addCase(updateTodoTitle.rejected, (state, action) => {
    //   state.error = action.payload || action.error.message || 'Todo 업데이트 실패';
    // })

    // /* ===== updateTodoCompleted ===== */
    // .addCase(updateTodoCompleted.fulfilled, (state, action: PayloadAction<Todo>) => {
    //   state.status = 'succeeded';
    //   // 완료 상태가 업데이트된 Todo를 배열에서 찾아 교체합니다.
    //   const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
    //   if (index !== -1) {
    //     state.todos[index] = action.payload;
    //   }
    // })
    // .addCase(updateTodoCompleted.rejected, (state, action) => {
    //   state.error =
    //     action.payload || action.error.message || 'Todo Completed 업데이트 실패';
    // })

    // /* ===== deleteTodo ===== */
    // .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
    //   state.status = 'succeeded';
    //   // 삭제된 Todo의 id를 기준으로 배열에서 제거합니다.
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // })
    // .addCase(deleteTodo.rejected, (state, action) => {
    //   state.error = action.payload || action.error.message || 'Todo 삭제 실패';
    // });
  },
});

// slice의 reducer를 export하여 store에 등록합니다.
export default postSlice.reducer;
