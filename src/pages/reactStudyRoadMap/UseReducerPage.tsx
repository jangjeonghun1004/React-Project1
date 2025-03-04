import { useReducer } from "react";
import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function UseReducerPage() {
    const initialState = {count: 0};
    const [state, dispatch] = useReducer((state: typeof initialState, action: {type:string}) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            case 'reset':
                return initialState;
            default:
                throw new Error('Unknow action type');
        }
    }, initialState);

    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>useReducer</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="main image" /></span>

                    {/* contents */}
                    <h2 id="content">useReducer란?</h2>
                    <p>
                        useReducer는 React의 상태 관리 훅으로, 복잡한 상태 변경 로직을 관리할 때 유용합니다.<br/>
                        상태를 관리한다는 기능적인 측면에서는 useState와 매우 유사하지만, 
                        useReducer의 경우 <u>여러 상태를 함께 관리하거나</u>, <u>상태 업데이트 로직이 복잡해질 경우</u> useState보다 효율적이고 가독성이 좋습니다.
                    </p>

                    <h2 id="content">기본 구조</h2>
                    <ol>
                        <li>const [state, dispatch] = useReducer(reducer, initialState);</li>
                        <li>{`reducer: 상태 변경 로직을 정의한 함수 (state, action) => newState.`}</li>
                        <li>initialState: 상태의 초기값.</li>
                        <li>dispatch: 상태 업데이트를 트리거하는 함수.</li>
                    </ol>

                    <div className="row">
                        <div className="col-6 col-12-small">
                            <h3>예제 코드</h3>
                            <pre>
                        <code>
{`
import { useReducer } from 'react';

// 1. 초기 상태 정의
const initialState = { count: 0 };

// 2. 리듀서 함수 정의
function reducer(state: typeof initialState, action: { type: string }) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action type');
    }
}

function Counter() {
    // 3. useReducer 사용
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
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
                                <h1>Count: {state.count}</h1>

                                <button onClick={() => dispatch({type:'increment'})}>증가</button>
                                &nbsp;
                                <button onClick={() => dispatch({type:'decrement'})}>감소</button>
                                &nbsp;
                                <button onClick={() => dispatch({type:'reset'})}>초기화</button>
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