import { useEffect, useState } from "react";
import PageTemplate from "./PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getAllPosts, createPost } from "../store/slices/postSlice";
import { Post } from "../models/PostModel";

export default function PostPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { paginatedPostResponse } = useSelector((state: RootState) => state.post);
    const [isNewPostShow, setIsNewPostShow] = useState(true);
    const [isCommentShow, setIsCommentShow] = useState(false);

    // 게시글 목록을 불러오기 위한 초기 로딩
    useEffect(() => {
        // 0번째 페이지(첫 페이지)를 로드
        dispatch(getAllPosts(0));
    }, [dispatch]);

    // 새 글 작성 폼 표시 토글 함수
    const handlePostFormToggle = () => {
        setIsNewPostShow(!isNewPostShow);
    };

    // 작성 폼 취소 시 호출
    const handleCancel = () => {
        setIsNewPostShow(!isNewPostShow);
    };

    // 댓글 토글 함수
    const handleCommentToggle = () => {
        setIsCommentShow(!isCommentShow);
    };

    // 폼 제출 시 호출되는 이벤트 핸들러
    const handleNewPostSave = async (formData: FormData) => {
        // FormData 객체를 통해 폼 데이터 추출
        const title = formData.get("title") as string;
        const content = formData.get("contents") as string;

        // 게시글 추가 액션 디스패치
        const resultAction = await dispatch(createPost({ title, content }));

        // 추가 성공 시 전체 게시글 목록 다시 불러오기
        if (createPost.fulfilled.match(resultAction)) {
            dispatch(getAllPosts(0));
            // 게시글 추가 후 폼을 닫음 (필요에 따라 처리)
            setIsNewPostShow(true);
        }
    };

    // ----------------------------
    // 페이지네이션 영역 코드
    // ----------------------------

    // Redux 스토어에서 제공하는 페이징 정보
    const totalPages = paginatedPostResponse.totalPages;
    const currentPage = paginatedPostResponse.currentPageNumber;

    /**
     * 총 페이지 수와 현재 페이지를 기반으로 페이지네이션 아이템을 생성합니다.
     * - 전체 페이지가 7 이하이면 모든 페이지 번호를 출력합니다.
     * - 7개 초과인 경우, 시작/끝 페이지와 현재 페이지 주변을 표시하고 중간에 ellipsis(…)를 추가합니다.
     */
    const getPaginationItems = (
        totalPages: number,
        currentPage: number
    ): (number | "ellipsis")[] => {
        const items: (number | "ellipsis")[] = [];
        if (totalPages <= 7) {
            for (let i = 0; i < totalPages; i++) {
                items.push(i);
            }
        } else {
            // 전체 페이지가 7개 초과인 경우
            // 현재 페이지가 앞쪽에 가까운 경우: [0, 1, 2, 3, 4, ellipsis, last]
            if (currentPage <= 3) {
                for (let i = 0; i < 5; i++) {
                    items.push(i);
                }
                items.push("ellipsis");
                items.push(totalPages - 1);
            }
            // 현재 페이지가 뒤쪽에 가까운 경우: [0, ellipsis, totalPages-5, totalPages-4, totalPages-3, totalPages-2, last]
            else if (currentPage >= totalPages - 4) {
                items.push(0);
                items.push("ellipsis");
                for (let i = totalPages - 5; i < totalPages; i++) {
                    items.push(i);
                }
            }
            // 중간에 있는 경우: [0, ellipsis, currentPage-1, currentPage, currentPage+1, ellipsis, last]
            else {
                items.push(0);
                items.push("ellipsis");
                items.push(currentPage - 1, currentPage, currentPage + 1);
                items.push("ellipsis");
                items.push(totalPages - 1);
            }
        }
        return items;
    };

    const paginationItems = getPaginationItems(totalPages, currentPage);

    return (
        <PageTemplate title="포트포리오" subTitle="" imageSrc="">
            <div style={{ textAlign: "right", display: isNewPostShow ? "block" : "none" }}>
                <button type="button" onClick={handlePostFormToggle} className="primary icon solid fa-pen">
                    new post
                </button>
            </div>
            <br />

            {/* 새 글 작성 폼 영역 */}
            <div style={{ display: isNewPostShow ? "none" : "inline" }}>
                <div className="box">
                    {/* action 이벤트 핸들러를 사용하여 폼 제출 처리 */}
                    <form action={handleNewPostSave}>
                        <h2>새 글 작성</h2>
                        <h3>제목</h3>
                        <input type="text" name="title" placeholder="제목을 입력하세요." />
                        <br />

                        <h3>내용</h3>
                        <textarea
                            name="contents"
                            placeholder="내용을 입력하세요."
                            rows={6}
                        ></textarea>
                        <br />

                        <div style={{ textAlign: "right" }}>
                            <button type="button"
                                onClick={handleCancel}
                                className="icon solid fa-remove-format"
                            >
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

            {/* 게시글 목록 렌더링 */}
            {paginatedPostResponse.posts.map((post: Post) => {
                return (
                    <div key={post.id} className="box">
                        <h3>{post.title}</h3>
                        <h5 style={{ color: "silver" }}>
                            Nicname(
                            <span style={{ fontSize: "10px" }}>
                                {new Date(post.createdAt).toLocaleString()}
                            </span>
                            )
                        </h5>
                        <p>{post.content}</p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div></div>
                            <div>
                                <ul className="actions">
                                    <li>
                                        <a href="#" className="button icon fa-heart small">
                                            like(100)
                                        </a>
                                    </li>
                                    <li>
                                        <button type="button"
                                            onClick={handleCommentToggle}
                                            className="icon solid fa-spell-check small"
                                        >
                                            comment(1200)
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div
                                className="col-10 col-12-xsmall"
                                style={{ marginBottom: "10px" }}
                            >
                                <input
                                    type="text"
                                    name="demo-name"
                                    placeholder="댓글을 작성해 주세요."
                                />
                            </div>
                            <div className="col-2 col-12-xsmall">
                                <button type="button" className="icon fa-pen solid fit">save</button>
                            </div>
                        </div>

                        <div style={{ display: isCommentShow ? "inline" : "none" }}>
                            <hr className="major" />
                            <div style={{ paddingLeft: "20px" }}>
                                <h4 style={{ display: "inline-block", paddingRight: "10px" }}>
                                    Nicname
                                </h4>
                                <span>2025-02-14</span>
                                <p>누군가 작성한 댓글이 되겠습니다.</p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* ----------------------------페이지네이션 영역---------------------------- */}
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                <div
                    className="col-6 col-12-medium"
                    style={{ maxWidth: 500, width: "100%", padding: 20, textAlign: "center" }}
                >
                    <ul className="pagination">
                        {/* Prev 버튼 */}
                        <li>
                            <button type="button"
                                disabled={currentPage === 0}
                                onClick={() => dispatch(getAllPosts(currentPage - 1))}
                            >
                                Prev
                            </button>
                        </li>

                        {/* 동적으로 생성된 페이지 번호 버튼 */}
                        {paginationItems.map((item, index) => {
                            if (item === "ellipsis") {
                                return (
                                    <li key={`ellipsis-${index}`}>
                                        <span>…</span>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={item}>
                                        <button type="button"
                                            className={`page ${currentPage === item ? "active" : ""}`}
                                            onClick={() => dispatch(getAllPosts(item))}
                                        >
                                            {item + 1}
                                        </button>
                                    </li>
                                );
                            }
                        })}

                        {/* Next 버튼 */}
                        <li>
                            <button type="button"
                                disabled={currentPage === totalPages - 1}
                                onClick={() => dispatch(getAllPosts(currentPage + 1))}
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
