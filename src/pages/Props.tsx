import ComponentD from "../shared/useContextExample/ComponentD";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

export default function Props() {
    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>Props</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                    {/* contents */}
                    <h2 id="content">Props란?</h2>
                    <p>
                        Props는 React에서 속성(properties)의 약자로, 컴포넌트 간에 데이터를 전달하는 데 사용됩니다.<br/> 
                        부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 활용되며, 읽기 전용으로 사용됩니다. 즉, 자식 컴포넌트에서는 props를 수정할 수 없습니다.
                    </p>

                    <h2 id="content">주요 특징</h2>
                    <ol>
                        <li>부모 컴포넌트에서 자식 컴포넌트로 단방향 데이터 흐름을 따릅니다.</li>
                        <li>자식 컴포넌트는 전달받은 props를 사용하여 화면을 렌더링하거나 동작을 정의할 수 있습니다.</li>
                        <li>기본값을 설정할 수 있으며, TypeScript를 사용하면 명확한 타입 정의가 가능합니다.</li>
                    </ol>

                    <div className="row">
                        <div className="col-6 col-12-small">
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import ComponentE from "./ComponentE";

function ComponentD() {
    return (
        <ComponentE userName="james" userID="myID" />
    );
}

export default ComponentD
`}
                                </code>
                                <code>
{`
interface Props {
    userName: string,
    userID: string
}

function ComponentE({ userName, userID }: Props) {
    return (
        <span>
            <p>userName: {userName}</p>
            <p>userID: {userID}</p>
        </span>
    );
}

export default ComponentE
`}
                                </code>
                            </pre>
                        </div>
                        <div className="col-6 col-12-small">
                            <h3>예제 코드 테스트</h3>
                            <div className="box">
                                <ComponentD />
                            </div>
                        </div>
                    </div>

                    <h2>추가 정보</h2>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">
                        구조 분해(Destructuring Assignment)
                    </a>
                    
                </section>
            </div>
        </div>

        <Sidebar />
    </div>
    );
}