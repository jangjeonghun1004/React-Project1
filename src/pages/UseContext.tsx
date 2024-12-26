import ComponentA from "../shared/useContextExample/ComponentA";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

export default function UseContext() {
    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>useContext</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="useState" /></span>

                    {/* contents */}
                    <h2 id="content">useContext란?</h2>
                    <p>
                        useContext는 React에서 **컨텍스트(Context)**를 사용하기 위해 제공되는 훅(Hook)입니다.
                        컨텍스트는 컴포넌트 트리 전체에서 데이터를 공유할 때 사용됩니다.<br/> 
                        데이터를 자식 컴포넌트에 전달하기 위해 prop drilling(여러 단계를 거쳐 props를 전달하는 것)을 피하고,
                        간단하게 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 수 있습니다.
                    </p>

                    <h2 id="content">주요 특징</h2>
                    <ol>
                        <li>데이터를 전역적으로 관리할 수 있습니다.</li>
                        <li>컴포넌트의 재사용성을 높일 수 있습니다.</li>
                        <li>여러 단계의 props 전달을 피할 수 있습니다.</li>
                    </ol>

                    <h2 id="content">언제 사용하나요?</h2>
                    <ul>
                        <li>사용자 인증 정보</li>
                        <li>테마</li>
                        <li>언어 설정</li>
                    </ul>

                    <div className="row">
                        <div className="col-6 col-12-small">
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const [userName, setUserName] = useState<string>('');

    return (
        <>
            <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'red', padding: 10 }}>
                Component A
                <UserNameContext.Provider value={userName}>
                    <ComponentB />
                </UserNameContext.Provider>
                <br />

                <button onClick={() => {setUserName('james')}}>Component C에 데이터 전달</button>
            </div>
        </>
    );
}
export default ComponentA
export const UserNameContext = createContext<string>('');
`}
                                </code>
                                <code>
{`
import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'green', padding: 10 }}>
            Component B
            <ComponentC />
        </div>
    );
}

export default ComponentB
`}
                                </code>
                                <code>
{`
import { UserNameContext } from "./ComponentA";
import { useContext } from "react";

function ComponentC() {
    const userName = useContext(UserNameContext);

    return (
        <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'blue', padding: 10 }}>
            Component C<br />
            User Name: {userName}
        </div>
    );
}

export default ComponentC
`}
                                </code>
                            </pre>
                        </div>
                        <div className="col-6 col-12-small">
                            <h3>예제 코드 테스트</h3>
                            <div className="box">
                               <ComponentA />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <Sidebar />
    </div>
    );
}