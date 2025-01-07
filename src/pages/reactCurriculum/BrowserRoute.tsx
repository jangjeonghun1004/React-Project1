import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function BrowserRoute() {
    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>BrowserRouter</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                    {/* contents */}
                    <h2 id="content">BrowserRouter란?</h2>
                    <p>
                        BrowserRouter는 React Router에서 제공하는 컴포넌트로, HTML5의 History API를 활용하여 클라이언트 측 라우팅을 처리합니다. 
                        이를 통해 사용자는 페이지를 새로고침하지 않고도 URL을 변경하거나, URL에 따라 다른 컴포넌트를 렌더링할 수 있습니다.
                    </p>

                    <h2 id="content">BrowserRouter 설치</h2>
                    <p><code>npm install react-router-dom</code></p>


                    <h2 id="content">주요 코드 설명</h2>
                    <ul>
                        <li>BrowserRouter: 루트 컴포넌트를 감싸서 클라이언트 측 라우팅을 활성화 합니다.</li>
                        <li>Routes: 여러 Route를 그룹화하고 현재 URL에 일치하는 Route를 렌더링 합니다.</li>
                        <li>Route: URL 경로와 해당 경로에서 렌더링할 컴포넌트를 정의 합니다.</li>
                        <li>Link: React Router의 내장 컴포넌트로, a 태그 대신 사용하여 라우팅을 처리합니다.</li>
                    </ul>

                    <div className="row">
                        <div className="col-12">
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const NotFound = () => <h1>404: Page Not Found</h1>;

function App() {
  return (
    <BrowserRouter>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <Sidebar />
    </div>
    );
}