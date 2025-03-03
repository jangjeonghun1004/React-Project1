import { useState } from "react";
import { Post, PostComment } from "../models/PostModel";
import LikeToggle from "../shared/toggle/LikeToggle";
import { FormEvent } from "react";

export default function PostItemPage({
    post,
    onDeletePost,
    onDeletePostComment,
    onToggleLike,
    onCreateComment,
}: {
    post: Post;
    onDeletePost: (id: number) => void;
    onDeletePostComment: (id: number) => void;
    onToggleLike: () => void;
    onCreateComment: (formData: FormData) => void;
}) {
    // 각 게시글마다 댓글 표시 여부를 로컬 상태로 관리
    const [showComments, setShowComments] = useState(false);

    return (
        <div key={post.id} className="box">
            <h3>{post.title}</h3>
            <h5 style={{ color: "silver" }}>
                Nicname(
                <span style={{ fontSize: "10px" }}>
                    {new Date(post.createdAt).toLocaleString()}
                </span>
                )
                <a
                    onClick={() => onDeletePost(post.id)}
                    style={{
                        marginLeft: "10px",
                        display: post.isEnabledDelete ? "inline" : "none",
                    }}
                >
                    삭제
                </a>
            </h5>
            <p>{post.content}</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <ul className="actions">
                    <li>
                        <LikeToggle
                            initialLiked={post.likedByUser}
                            initialCount={post.likeCount}
                            onToggle={onToggleLike}
                        />
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setShowComments(!showComments)}
                            className="icon solid fa-spell-check small"
                        >
                            comment({post.postComments.length})
                        </button>
                    </li>
                </ul>
            </div>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    onCreateComment(formData);
                    setShowComments(true);
                    e.currentTarget.reset();
                }}
            >
                <input type="hidden" name="postId" value={post.id} />
                <div className="row">
                    <div className="col-10 col-12-xsmall" style={{ marginBottom: "10px" }}>
                        <input type="text" name="comment" placeholder="댓글을 작성해 주세요." />
                    </div>
                    <div className="col-2 col-12-xsmall">
                        <button type="submit" className="icon fa-pen solid fit">
                            save
                        </button>
                    </div>
                </div>
            </form>
            <div style={{ display: showComments ? "block" : "none" }}>
                {post.postComments.map((postComment: PostComment) => (
                    <div key={postComment.id}>
                        <hr className="major" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h4 style={{ display: "inline-block", paddingRight: "10px" }}>
                                {postComment.memberEmail}
                            </h4>
                            <span>{new Date(postComment.createdAt).toLocaleString()}</span>
                            <a
                                onClick={() => onDeletePostComment(postComment.id)}
                                style={{
                                    marginLeft: "10px",
                                    display: postComment.isEnabledDelete ? "inline" : "none",
                                }}
                            >
                                삭제
                            </a>
                            <p>{postComment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}