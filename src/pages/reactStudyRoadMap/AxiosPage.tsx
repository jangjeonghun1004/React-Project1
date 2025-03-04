import PageTemplate from "../PageTemplate";

export default function AxiosPage() {
    return (
        <PageTemplate title="React" subTitle="Axios" imageSrc="img01.jpeg">
            <h2>Axios란?</h2>
            <div className="box">
                axios는 JavaScript 기반의 HTTP 클라이언트 라이브러리로, 프론트엔드/백엔드 환경에서 API 통신을 간편하게 처리하는 도구입니다.
                axios는 Promise 기반으로 작동하며, 요청과 응답 데이터를 JSON 형태로 자동 변환해줍니다.
            </div>

            <h2>Axios 기능</h2>
            <ul>
                <li>HTTP 요청을 보내는 기능</li>
                <li>HTTP 요청을 취소하는 기능</li>
                <li>HTTP 요청과 응답을 JSON 형태로 자동 변환하는 기능</li>
                <li>HTTP 요청과 응답을 Promise 기반으로 처리하는 기능</li>
            </ul>

            <h2>axios 특징 1. Restful 프로토콜이 잘 정의 되어 있다. 2. 인터셉터 기능을 통해 프로토콜 통신시 일관된 설정을 할 수 있다. 3. 응답 타입을 지정할 수 있다.</h2>
            <dl>
                <dt>범용성</dt>
                <blockquote>
                    <dd>브라우저 & Node.js 환경 모두 지원</dd>
                    <dd>React, Vue, Angular 등 모든 프론트엔드 프레임워크 호환</dd>
                </blockquote>

                <dt>편의성</dt>
                <blockquote>
                    <dd>GET, POST, PUT, DELETE 등 HTTP 메서드 간편 구현</dd>
                    <dd>자동 JSON 변환 (요청/응답 데이터 변환 불필요)</dd>
                    <dd>인터셉터 기능으로 전역 에러/로깅 처리 가능</dd>
                </blockquote>

                <dt>고급 기능</dt>
                <blockquote>
                    <dd>동시 요청 처리 (axios.all + axios.spread)</dd>
                    <dd>CancelToken으로 요청 취소 제어</dd>
                    <dd>withCredentials로 CORS 쿠키 전송 지원</dd>
                </blockquote>
            </dl>

            <h2>Axios 설치</h2>
            <pre>
                <code>{`$ npm install axios`}</code>
            </pre>

            <h2>axios 예제</h2>
            <pre>
                <code>{`
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController로 비동기 요청 취소 처리
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          signal: controller.signal,
          params: {
            _limit: 5 // 처음 5개 포스트만 가져오기
          }
        });
        
        setPosts(response.data);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) { // 취소된 요청은 에러로 처리하지 않음
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // 컴포넌트 언마운트 시 요청 취소
    return () => controller.abort();
  }, []); // 빈 의존성 배열: 컴포넌트 마운트 시 1회만 실행

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="post-list">
      <h2>Recent Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
                `}</code>
            </pre>
        </PageTemplate>
    );
}



