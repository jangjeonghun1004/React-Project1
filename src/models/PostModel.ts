/**
 * 게시글 정보를 나타내는 인터페이스
 */
export interface Post {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  likedByUser: boolean;
  postComments: PostComment[];
  isEnabledDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostComment {
  id: number;
  content: string;
  memberId: number;
  memberEmail: string;
  postId: number;
  isEnabledDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 페이지네이션 처리가 포함된 게시글 목록 응답 객체를 나타내는 인터페이스
 */
export interface PostWithPaging {
  posts: Post[];           // 현재 페이지의 게시글 목록
  totalPages: number;      // 전체 페이지 수
  sizePages: number;       // 페이지 당 게시글 수 (또는 페이지 크기)
  currentPageNumber: number; // 현재 페이지 번호
}

