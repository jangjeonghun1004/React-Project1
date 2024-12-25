import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import { useRef, useState } from "react";

export default function UseRef() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    };

    const renderCount = useRef<number>(0);
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };
    renderCount.current += 1;

    const timerRef = useRef<number | null>(null);
    const [timerCount, setTimerCount] = useState<number>(0);
    const startTimer = () => {
        if(timerRef.current) { return; }

        timerRef.current = window.setInterval(()=>{
            setTimerCount((n) => n + 1);
        }, 1000);
    };
    const stopTimer = () => {
        if(timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    const handleTimerCount = () => {
        setTimerCount(timerCount + 1);
    };

    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>useRef</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="useState" /></span>

                        {/* contents */}
                        <h2 id="content">useRef란?</h2>
                        <p>
                            useRef는 React의 Hook 중 하나로, 
                            DOM 조작이나 값 저장에 유용하며, 렌더링을 발생시키지 않고 값을 유지할 때 자주 사용됩니다.
                        </p>

                        <h2 id="content">주요 특징</h2>
                        <ol>
                            <li>DOM 요소 접근: 특정 DOM 요소를 직접 조작하거나 참조하고자 할 때 사용됩니다.</li>
                            <li>값 저장 (Mutable State): 값이 변경되어도 컴포넌트를 리렌더링하지 않으면서 상태를 유지하고 싶을 때 사용됩니다.</li>
                            <li>컴포넌트 생명주기 동안 데이터 보존: 컴포넌트가 다시 렌더링될 때도 데이터가 초기화되지 않습니다.</li>
                            <li>변경된 값은 컴포넌트를 다시 렌더링하지 않습니다.</li>
                            <li>useRef로 생성된 객체의 속성은 {`{ current: <value> }`} 형태입니다.</li>
                        </ol>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(DOM 요소 접근)</h3>
                                <pre>
                            <code>
                                {`
import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default FocusInput;
                                `}
                            </code>
                        </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>예제 코드 테스트</h3>
                                <div className="box">
                                    <input ref={inputRef} type="text" placeholder="Click the button to focus" />
                                    <br />
                                    <button onClick={handleFocus}>Focus Input</button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(값 저장)</h3>
                                <pre>
                            <code>
                                {`
import { useRef, useState } from "react";

function Counter() {
    const renderCount = useRef(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    renderCount.current += 1; // 렌더링 횟수 추적

    return (
        <div>
            <p>Count: {count}</p>
            <p>Component rendered {renderCount.current} times</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
                                `}
                            </code>
                        </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>예제 코드 테스트</h3>
                                <div className="box">
                                    <h1>Count: {count}</h1>
                                    <p>Component rendered {renderCount.current} times</p>
                                    <br />
                                    <button onClick={increment}>증가</button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(상태 기억)</h3>
                                <pre>
                            <code>
                                {`
import { useRef } from "react";

function Timer() {
    const timerRef = useRef<number | null>(null);
    const [timerCount, setTimerCount] = useState<number>(0);

    const startTimer = () => {
        if (timerRef.current) return;

        timerRef.current = window.setInterval(() => {
            setTimerCount((n) => n + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleTimerCount = () => {
        setTimerCount(timerCount + 1);
    };

    return (
        <div>
            <h1>Timer Count: {timerCount}</h1>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
}

export default Timer;
                                `}
                            </code>
                        </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>예제 코드 테스트</h3>
                                <div className="box">
                                    <h1>Timer Count: {timerCount}</h1>
                                    <button onClick={startTimer}>Start Timer</button> &nbsp;
                                    <button onClick={stopTimer}>Stop Timer</button> <br/><br/>
                                    <button onClick={handleTimerCount}>강제 리렌터링 실행(리렌더링 시에도 상태 값은 기억된다.)</button>
                                </div>
                            </div>
                        </div>

                        <h2 id="content">추가 활용 사례</h2>
                        <ul>
                            <li>스크롤 이동: scrollIntoView로 부드러운 스크롤 이동을 제어합니다.</li>
                            <li>크기 측정: offsetWidth, offsetHeight로 요소 크기를 계산합니다.</li>
                            <li>CSS 클래스 조작: classList.toggle로 동적 스타일 변경을 처리합니다.</li>
                            <li>미디어 제어: 비디오/오디오의 play, pause 같은 동작을 관리합니다.</li>
                            <li>텍스트 변경: DOM 요소의 textContent를 조작합니다.</li>
                        </ul>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}