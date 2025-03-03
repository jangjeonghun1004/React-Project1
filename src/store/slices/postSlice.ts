import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../axiosClient'; // 공통 설정(인터셉터, 기본 URL 등)이 적용된 axios 인스턴스
import { PostWithPaging, Post, PostComment } from '../../models/PostModel';
import { ApiResult } from '../../models/ApiResultModel';

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
 * @returns Paginated Post 데이터를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const findAllPosts = createAsyncThunk<PostWithPaging, number, { rejectValue: string }>(
  'post/findAllPosts',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axiosClient.get<ApiResult<PostWithPaging>>(`post?pageNumber=${pageNumber}`);
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
 * @param createPostRequest - 생성할 Post 데이터 ({ title, content })
 * @returns 생성된 Post 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const createPost = createAsyncThunk<Post, { title: string; content: string }, { rejectValue: string }>(
  'post/createPost',
  async (createPostRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<Post>>('post', createPostRequest);
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
 * @param deletePostRequest - 삭제할 Post의 id를 포함한 객체 ({ postId: number })
 * @returns 삭제 성공 시 void를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const deletePost = createAsyncThunk<void, { postId: number }, { rejectValue: string }>(
  'post/deletePost',
  async (deletePostRequest, thunkAPI) => {
    try {
      const response = await axiosClient.delete<ApiResult<number>>(`post/${deletePostRequest.postId}`);
      if (!response.data.result) {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post 삭제에 실패했습니다.'));
    }
  }
);

/**
 * Post Comment 추가 (낙관적 UI 적용)
 * @param createPostCommentRequest - { postId, content } 형식의 요청 데이터
 * @returns 생성된 Post Comment 객체를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const createPostComment = createAsyncThunk<PostComment, { postId: number; content: string }, { rejectValue: string }>(
  'postComment/createPostComment',
  async (createPostCommentRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<PostComment>>('postComment', createPostCommentRequest);
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
 * Post Comment 삭제 (낙관적 UI 적용)
 * @param deletePostCommentRequest - 삭제할 Post Comment의 id를 포함한 객체 ({ postCommentId: number })
 * @returns 삭제 성공 시 void를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const deletePostComment = createAsyncThunk<void, { postCommentId: number }, { rejectValue: string }>(
  'postComment/deletePostComment',
  async (deletePostCommentRequest, thunkAPI) => {
    try {
      const response = await axiosClient.delete<ApiResult<number>>(`postComment/${deletePostCommentRequest.postCommentId}`);
      if (!response.data.result) {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Post Comment 삭제에 실패했습니다.'));
    }
  }
);

/**
 * Post 좋아요 토글
 * @param toggleLikeRequest - 좋아요 토글할 Post의 id를 포함한 객체 ({ postId: number })
 * @returns void를 반환합니다.
 * @throws API 호출 실패 시 rejectValue로 에러 메시지를 반환합니다.
 */
export const toggleLike = createAsyncThunk<void, { postId: number }, { rejectValue: string }>(
  'post/toggleLike',
  async (toggleLikeRequest, thunkAPI) => {
    try {
      const response = await axiosClient.post<ApiResult<null>>(`post/${toggleLikeRequest.postId}/like`);
      if (!response.data.result) {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (ex) {
      return thunkAPI.rejectWithValue(getErrorMessage(ex, 'Like 업데이트에 실패했습니다.'));
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
    // 필요에 따라 동기 액션(예: 상태 초기화 등)을 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      /* ===== findAllPosts ===== */
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

      /* ===== createPost ===== */
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
      // pending 단계: 임시 댓글을 추가하여 UI에 즉시 반영 (낙관적 업데이트)
      .addCase(createPostComment.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // fulfilled 단계: 서버에서 반환한 실제 댓글 객체로 임시 댓글 대체
      .addCase(createPostComment.fulfilled, (state, action: PayloadAction<PostComment>) => {
        state.status = 'succeeded';
        state.error = null;
        const actualComment = action.payload;
        const post = state.postWithPaging.posts.find((p) => p.id === actualComment.postId);
        if (post && post.postComments) {
          // 임시 댓글(음수 id)을 제거하고, 실제 댓글을 추가합니다.
          post.postComments = [
            ...post.postComments.filter((comment) => comment.id > 0),
            actualComment,
          ];
        }
      })
      .addCase(createPostComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Post Comment 추가 실패';
        // 실패 시, 필요에 따라 임시 댓글을 제거하거나 전체 댓글 재조회 로직 추가 가능
      })

      /* ===== toggleLike ===== */
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

      /* ===== deletePost ===== */
      .addCase(deletePost.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        // 낙관적 UI: 삭제 요청이 pending 상태일 때, 해당 Post를 미리 제거합니다.
        const { postId } = action.meta.arg;
        state.postWithPaging.posts = state.postWithPaging.posts.filter(
          (post) => post.id !== postId
        );
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Post 삭제 실패';
        // 실패 시, 현재 페이지를 재조회하여 UI 복구를 고려할 수 있음
      })

      /* ===== deletePostComment ===== */
      .addCase(deletePostComment.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        // 낙관적 UI: 해당 댓글을 미리 제거합니다.
        const { postCommentId } = action.meta.arg;
        state.postWithPaging.posts.forEach((post) => {
          if (post.postComments) {
            post.postComments = post.postComments.filter(
              (comment) => comment.id !== postCommentId
            );
          }
        });
      })
      .addCase(deletePostComment.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deletePostComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Post Comment 삭제 실패';
        // 실패 시, 현재 페이지를 재조회하여 UI 복구를 고려할 수 있음
      });
  },
});

export default postSlice.reducer;
