/**
 * 게시글 정보를 나타내는 인터페이스
 */
export interface Post {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  likedByUser: boolean;

  createdAt: Date;
  updatedAt: Date;
}

/**
 * 페이지네이션 처리가 포함된 게시글 목록 응답 객체를 나타내는 인터페이스
 */
export interface PaginatedPostResponse {
  posts: Post[];           // 현재 페이지의 게시글 목록
  totalPages: number;      // 전체 페이지 수
  sizePages: number;       // 페이지 당 게시글 수 (또는 페이지 크기)
  currentPageNumber: number; // 현재 페이지 번호
}

export interface PostRequest {
  title: string;
  content: string;
}

