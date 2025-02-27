import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // 공통 설정(인터셉터, 기본 URL 등)이 적용된 axios 인스턴스
import { Todo } from '../../models/TodoModel';
import { PostWithPaging, Post, CreatePostRequest, PostComment } from '../../models/PostModel';

/* ============================================================================
   유틸리티 함수: Axios 에러 메시지 추출
============================================================================ */
const getErrorMessage = (ex: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(ex) && ex.response) {
    return ex.response.data?.message || defaultMessage;
  }
  return defaultMessage;
};

/* ============================================================================
   Post 상태 인터페이스 정의
============================================================================ */
interface PostState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  postWithPaging: PostWithPaging;
}

/* ============================================================================
   초기 상태 설정
============================================================================ */
const initialState: PostState = {
  status: 'idle',
  error: null,
  postWithPaging: { posts: [], sizePages: 0, totalPages: 0, currentPageNumber: 0 },
};

/* ============================================================================
   [Post 관련 Async Actions]
============================================================================ */

/**
 * Post 목록 조회
 * @param pageNumber - 요청할 페이지 번호
 * @returns Paginated Post 데이터
 */
export const findAllPosts = createAsyncThunk<PostWithPaging, number, { rejectValue: string }>(
  'post/findAllPosts',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axiosClient.get(`post?pageNumber=${pageNumber}`);
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post 목록을 불러오는데 실패했습니다.'));
    }
  }
);

/**
 * Post 추가
 * @param createPostRequest - 생성할 Post 데이터
 * @returns 생성된 Post 객체
 */
export const createPost = createAsyncThunk<Post, CreatePostRequest, { rejectValue: string }>(
  'post/createPost',
  async (createPostRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post('post', createPostRequest);
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post 추가에 실패했습니다.'));
    }
  }
);

/**
 * Post 삭제
 * @param id - 삭제할 Post의 id
 * @returns 삭제 성공 시 true 반환
 */
export const deletePost = createAsyncThunk<boolean, number, { rejectValue: string }>(
  'post/deletePost',
  async (id, thunkAPI) => {
    try {
      await axiosClient.delete(`post/${id}`);
      return true;
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post 삭제에 실패했습니다.'));
    }
  }
);

/**
 * Post Comment 추가
 * @param request - { postId, content } 형식의 요청 데이터
 * @returns 생성된 Post Comment 객체
 */
export const createPostComment = createAsyncThunk<PostComment, { postId: number; content: string }, { rejectValue: string }>(
  'postComment/createPostComment',
  async (request, thunkAPI) => {
    try {
      const response = await axiosClient.post('postComment', request);
      if (response.data.result) {
        return response.data.contents;
      }
      return thunkAPI.rejectWithValue(response.data.message);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post Comment 추가에 실패했습니다.'));
    }
  }
);

/**
 * Post Comment 삭제
 * @param id - 삭제할 Post Comment의 id
 * @returns 삭제 성공 시 true 반환
 */
export const deletePostComment = createAsyncThunk<boolean, number, { rejectValue: string }>(
  'postComment/deletePostComment',
  async (id, thunkAPI) => {
    try {
      await axiosClient.delete(`postComment/${id}`);
      return true;
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post Comment 삭제에 실패했습니다.'));
    }
  }
);

/**
 * Post 좋아요 토글
 * @param id - 좋아요 토글할 Post의 id
 */
export const toggleLike = createAsyncThunk<void, number, { rejectValue: string }>(
  'post/toggleLike',
  async (id, thunkAPI) => {
    try {
      await axiosClient.post(`post/${id}/like`);
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Like 업데이트에 실패했습니다.'));
    }
  }
);

/* ============================================================================
   [Todo 관련 Async Actions]
   (Post Slice에서 사용하지 않는다면 별도 Slice로 분리하는 것을 고려)
============================================================================ */

/**
 * Todo 제목 업데이트
 * @param todo - 업데이트할 Todo 객체
 * @returns 업데이트된 Todo 객체
 */
export const updateTodoTitle = createAsyncThunk<Todo, Todo, { rejectValue: string }>(
  'todo/updateTitle',
  async (todo, thunkAPI) => {
    try {
      const response = await axiosClient.patch('todo/updateTitle', {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      });
      return response.data.contents;
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Todo 업데이트에 실패했습니다.'));
    }
  }
);

/**
 * Todo 삭제
 * @param id - 삭제할 Todo의 id
 * @returns 삭제된 Todo의 id
 */
export const deleteTodo = createAsyncThunk<number, number, { rejectValue: string }>(
  'todo/delete',
  async (id, thunkAPI) => {
    try {
      await axiosClient.delete(`todo/delete/${id}`);
      return id;
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Todo 삭제에 실패했습니다.'));
    }
  }
);

/**
 * Todo 완료 상태 업데이트
 * @param param0 - { id, completed } 형식의 요청 데이터
 * @returns 업데이트된 Todo 객체
 */
export const updateTodoCompleted = createAsyncThunk<Todo, { id: number; completed: boolean }, { rejectValue: string }>(
  'todo/updateCompleted',
  async ({ id, completed }, thunkAPI) => {
    try {
      const response = await axiosClient.patch('todo/updateCompleted', { id, completed });
      return response.data.contents;
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Todo 업데이트에 실패했습니다.'));
    }
  }
);

/* ============================================================================
   Redux Slice: postSlice
============================================================================ */
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // 필요한 동기 액션 추가 가능 (예: 상태 초기화 등)
  },
  extraReducers: (builder) => {
    builder
      // findAllPosts
      .addCase(findAllPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(findAllPosts.fulfilled, (state, action: PayloadAction<PostWithPaging>) => {
        state.status = 'succeeded';
        state.postWithPaging = action.payload;
      })
      .addCase(findAllPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Post 목록 불러오기 실패';
      })

      // createPost
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Post 추가 실패';
      })

        /* ===== createPostComment ===== */
      // pending 단계: 임시 댓글을 추가하여 UI에 즉시 반영
      .addCase(createPostComment.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // fulfilled 단계: 서버에서 반환한 실제 댓글 객체로 임시 댓글 대체
      .addCase(createPostComment.fulfilled, (state, action: PayloadAction<PostComment>) => {
        state.status = 'succeeded';
        state.error = null;
        let actualComment = action.payload;
        // 실제 댓글이 추가될 Post를 찾습니다.
        const post = state.postWithPaging.posts.find((p) => p.id === actualComment.postId);
        if (post && post.postComments) {
          // 임시 댓글(음수 id)을 제거하고, 실제 댓글을 추가합니다.
          post.postComments = [
            ...post.postComments.filter((comment) => comment.id > 0),
            actualComment,
          ];
        }
      })
      // rejected 단계: 삭제한 임시 댓글을 복구하는 등 추가 복구 로직 구현 가능
      .addCase(createPostComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload || action.error.message || 'Post Comment 추가 실패';
        // 삭제 실패 시, 임시 댓글 제거 혹은 전체 댓글 재조회 로직을 추가할 수 있습니다.
        // 예시로 현재 페이지를 재조회하도록 처리할 수 있습니다.
      })

      // toggleLike
      .addCase(toggleLike.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(toggleLike.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.error = action.payload || action.error.message || 'Like 업데이트 실패';
      })


      // deletePost (이미 낙관적 UI 적용)
      .addCase(deletePost.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.postWithPaging.posts = state.postWithPaging.posts.filter(
          (post) => post.id !== action.meta.arg
        );
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Post 삭제 실패';
        // 삭제 실패 시, 현재 페이지를 재조회하여 UI 복구를 고려할 수 있음
      })

      // deletePostComment: 낙관적 UI 구현
      .addCase(deletePostComment.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        const commentId = action.meta.arg;
        // 각 게시글에서 해당 댓글을 제거합니다.
        state.postWithPaging.posts.forEach((post) => {
          if (post.postComments) {
            post.postComments = post.postComments.filter(
              (comment) => comment.id !== commentId
            );
          }
        });
      })
      .addCase(deletePostComment.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deletePostComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload || action.error.message || 'Post Comment 삭제 실패';
        // 삭제 실패 시, 현재 페이지를 재조회하여 UI 복구를 고려할 수 있음
      });



  },
});

export default postSlice.reducer;
