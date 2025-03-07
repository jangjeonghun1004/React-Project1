import PageTemplate from "../PageTemplate";
import { useState } from "react";

export default function UseStatePage() {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <PageTemplate>
            <h2>useState</h2>
            <p className="box">
                useState는 React의 Hook 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리할 때 사용됩니다. 
                useState는 초기 상태를 설정하고, 그 상태를 변경하는 함수를 제공합니다.
            </p>

            <h2>useState 주요 특징</h2>
            <ul>
                <li>초기값: useState는 초기 상태 값을 인수로 받아옵니다.</li>
                <li>상태값과 상태 변경 함수 제공: [state, setState] 형태의 배열을 반환합니다.</li>
                <li>재렌더링: 상태 변경 함수(setState)를 호출하면 컴포넌트가 다시 렌더링됩니다.</li>
            </ul>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h2>useState 예제 코드</h2>
                    <pre>
                        <code>
                            {`
import { useState } from "react";

function Counter() {
    // 상태 변수와 상태 변경 함수 정의
    const [count, setCount] = useState(0);

    // 상태를 변경하는 함수
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
`}
                        </code>
                    </pre>
                </div>
                <div className="col-6 col-12-small">
                    <h2>실행 결과</h2>
                    <div className="box">
                        <h1>Count: {count}</h1>

                        <button onClick={increment}>증가</button>
                        &nbsp;
                        <button onClick={decrement}>감소</button>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}