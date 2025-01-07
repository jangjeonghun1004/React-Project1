import { useEffect, useState } from "react";
import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function UseEffect() {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [recall, setRecall] = useState(false);
console.log(recall);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();

            setData(result.slice(0, 5).map((item: { title: string }) => item.title)); // Top 5 titles
            setLoading(false);
        };

        fetchData();
    }, [recall]);

    const handleRecall = () => {
        setLoading(true);
        setRecall(!recall);
    };

    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>useEffect</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                    {/* contents */}
                    <h2 id="content">useEffect란?</h2>
                    <p>
                        useEffect는 React의 Hook으로, 컴포넌트가 렌더링된 후에 실행되어 부수효과(side effects)를 처리합니다.
                    </p>

                    <h2 id="content">부수효과(side effects)</h2>
                    <ol>
                        <li>데이터 가져오기 (API 호출)</li>
                        <li>DOM 수정</li>
                        <li>구독 설정/해제</li>
                        <li>타이머 설정 등</li>
                        <li>컴포넌트의 라이프사이클에 따라 동작: 마운트, 업데이트, 언마운트.</li>
                    </ol>

                    <h2>핵심 개념</h2>
                    <ul>
                        <li>useEffect의 두 번째 인자인 배열([])에 의존성을 지정할 수 있습니다.</li>
                        <li>빈 배열 []: 처음 마운트될 때 한 번만 실행.</li>
                        <li>특정 값 배열 [value]: value가 변경될 때 실행.</li>
                        <li>의존성 미지정: 매 렌더링마다 실행.</li>
                    </ul>

                    <div className="row">
                        <div className="col-6 col-12-small">
                            <h3>예제 코드(데이터 가져오기 (API 호출))</h3>
                            <pre>
                                <code>
{`
import { useEffect, useState } from "react";

function FetchData() {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();

            setData(result.slice(0, 5).map((item: { title: string }) => item.title)); // Top 5 titles
            setLoading(false);
        };

        fetchData();
    }, []); // 마운트될 때 한 번만 실행

    return (
        <div>
            {loading ? <p>Loading...</p> : <ul>{data.map((title, i) => <li key={i}>{title}</li>)}</ul>}
        </div>
    );
}

export default FetchData;
`}
                                </code>
                            </pre>
                        </div>
                        <div className="col-6 col-12-small">
                            <h3>예제 코드 테스트</h3>
                            <div className="box">
                                {loading ? <p>Loading...</p> : <ul>{data.map((title, i) => <li key={i}>{title}</li>)}</ul>}
                                <button onClick={handleRecall}>재호출</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-12-small">
                            <h3>예제 코드(클린업(clean-up))</h3>
                            <pre>
                                <code>
{`
useEffect(() => {
    const timer = setInterval(() => console.log("Timer running"), 1000);

    return () => {
        clearInterval(timer); // 컴포넌트 언마운트 시 실행
        console.log("Timer cleared");
    };
}, []);
`}
                                </code>
                            </pre>
                        </div>
                        <div className="col-6 col-12-small">
                            <h3>예제 코드 테스트</h3>
                            <div className="box"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <Sidebar />
    </div>
    );
}