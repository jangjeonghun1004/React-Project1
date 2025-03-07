import { useEffect, useState } from "react";
import PageTemplate from "./PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  findAllPosts,
  createPost,
  toggleLike,
  createPostComment,
  deletePostComment,
  deletePost,
} from "../store/slices/postSlice";
import { Post } from "../models/PostModel";
import PostItemPage from "./PostItmPage";

/**
 * 페이지네이션 아이템 생성 함수
 */
const getPaginationItems = (totalPages: number, currentPage: number): (number | "ellipsis")[] => {
  const items: (number | "ellipsis")[] = [];
  if (totalPages <= 7) {
    for (let i = 0; i < totalPages; i++) {
      items.push(i);
    }
  } else if (currentPage <= 3) {
    for (let i = 0; i < 5; i++) items.push(i);
    items.push("ellipsis");
    items.push(totalPages - 1);
  } else if (currentPage >= totalPages - 4) {
    items.push(0);
    items.push("ellipsis");
    for (let i = totalPages - 5; i < totalPages; i++) items.push(i);
  } else {
    items.push(0);
    items.push("ellipsis");
    items.push(currentPage - 1, currentPage, currentPage + 1);
    items.push("ellipsis");
    items.push(totalPages - 1);
  }
  return items;
};

export default function PostPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { postWithPaging } = useSelector((state: RootState) => state.post);
  const [isNewPostShow, setIsNewPostShow] = useState(true);

  useEffect(() => {
    dispatch(findAllPosts(0));
  }, [dispatch]);

  /* [게시글 추가 및 폼 토글] */
  const handlePostFormToggle = () => setIsNewPostShow(!isNewPostShow);
  const handleCancel = () => setIsNewPostShow(!isNewPostShow);
  const handleCreatePost = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("contents") as string;

    const resultAction = await dispatch(createPost({ title, content }));
    if (createPost.fulfilled.match(resultAction)) {
      dispatch(findAllPosts(0));
      setIsNewPostShow(true);
    }
  };

  /* [댓글 작성 핸들러] */
  const handleCreateComment = async (formData: FormData) => {
    const postId = Number(formData.get("postId"));
    const content = formData.get("comment") as string;
    try {
      await dispatch(createPostComment({ postId, content })).unwrap();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  /* [삭제 핸들러 - 낙관적 UI 구현] */
  const handleDeletePost = async (postId: number) => {
    try {
        await dispatch(deletePost({postId})).unwrap();

        // 현재 페이지 번호와 게시글 수를 가져옵니다.
        let currentPage = postWithPaging.currentPageNumber;
        const postsOnPage = postWithPaging.posts.length;

        // 만약 현재 페이지의 게시글이 삭제되어 0개가 된다면(즉, 삭제한 게시글이 유일한 항목)
        // 그리고 현재 페이지가 0보다 크다면, 이전 페이지로 이동합니다.
        if (postsOnPage === 1 && currentPage > 0) {
          currentPage = currentPage - 1;
        }

        // 삭제 후 해당 페이지를 재조회하여 paginationItems도 업데이트되도록 합니다.
        await dispatch(findAllPosts(currentPage));
      } catch (rejectValue) {
        alert(rejectValue);
        // 삭제 실패 시 현재 페이지를 재조회하여 UI를 복구합니다.
        dispatch(findAllPosts(postWithPaging.currentPageNumber));
      }
  };

  const handleDeletePostComment = async (postCommentId: number) => {
    // Redux slice의 pending 단계에서 댓글 제거 로직(구현 가능)이 있다면 해당 부분이 실행됩니다.
    try {
      await dispatch(deletePostComment({postCommentId})).unwrap();
    } catch (error) {
      alert(error);
      // 삭제 실패 시, 현재 페이지를 재조회하여 UI를 복구할 수 있습니다.
      dispatch(findAllPosts(postWithPaging.currentPageNumber));
    }
  };

  /* [좋아요 및 토글 핸들러] */
  const handleToggleLike = async (postId: number) => {
    try {
      const response = await dispatch(toggleLike({postId}));
      if (!toggleLike.fulfilled.match(response)) {
        throw new Error("Toggle like failed");
      }
    } catch (error) {
      console.error("Error in onToggle:", error);
    }
  };

  /* [페이지네이션 처리] */
  const totalPages = postWithPaging.totalPages;
  const currentPage = postWithPaging.currentPageNumber;
  const paginationItems = getPaginationItems(totalPages, currentPage);

  return (
    <PageTemplate>
      <div style={{ textAlign: "right", display: isNewPostShow ? "block" : "none" }}>
        <button type="button" onClick={handlePostFormToggle} className="primary icon solid fa-pen">
          new post
        </button>
      </div>
      <br />
      <div style={{ display: isNewPostShow ? "none" : "inline" }}>
        <div className="box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleCreatePost(formData);
              e.currentTarget.reset();
            }}
          >
            <h2>새 글 작성</h2>
            <h3>제목</h3>
            <input type="text" name="title" placeholder="제목을 입력하세요." />
            <br />
            <h3>내용</h3>
            <textarea name="contents" placeholder="내용을 입력하세요." rows={6}></textarea>
            <br />
            <div style={{ textAlign: "right" }}>
              <button type="button" onClick={handleCancel} className="icon solid fa-remove-format">
                cancel
              </button>
              &nbsp;
              <button type="submit" className="primary icon solid fa-pen">
                save
              </button>
            </div>
          </form>
        </div>
      </div>

      {postWithPaging.posts.length === 0 && <div style={{ textAlign: "center" }}>등록된 글이 없습니다.</div>}
      {postWithPaging.posts.map((post: Post) => (
        <PostItemPage
          key={post.id}
          post={post}
          onDeletePost={handleDeletePost}
          onDeletePostComment={handleDeletePostComment}
          onToggleLike={() => handleToggleLike(post.id)}
          onCreateComment={handleCreateComment}
        />
      ))}

      <div className="row" style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-6 col-12-medium" style={{ maxWidth: 500, width: "100%", padding: 20, textAlign: "center" }}>
          <ul className="pagination">
            <li>
              <button
                type="button"
                disabled={currentPage === 0}
                onClick={() => dispatch(findAllPosts(currentPage - 1))}
              >
                Prev
              </button>
            </li>
            {paginationItems.map((item, index) =>
              item === "ellipsis" ? (
                <li key={`ellipsis-${index}`}>
                  <span>…</span>
                </li>
              ) : (
                <li key={item}>
                  <button
                    type="button"
                    className={`page ${currentPage === item ? "active" : ""}`}
                    onClick={() => dispatch(findAllPosts(item))}
                  >
                    {item + 1}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                type="button"
                disabled={currentPage === totalPages - 1}
                onClick={() => dispatch(findAllPosts(currentPage + 1))}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
