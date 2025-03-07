import ComponentD from "../../shared/useContextExample/ComponentD";
import PageTemplate from "../PageTemplate";

export default function PropsPage() {
    return (
        <PageTemplate>
            <h2>Props</h2>
            <p className="box">
                Props는 React에서 속성(properties)의 약자로, 컴포넌트 간에 데이터를 전달하는 데 사용됩니다.<br />
                부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 활용되며, 읽기 전용으로 사용됩니다. 즉, 자식 컴포넌트에서는 Props를 수정할 수 없습니다.
            </p>

            <h2>Props 주요 특징</h2>
            <ul>
                <li>부모 컴포넌트에서 자식 컴포넌트로 단방향 데이터 흐름을 따릅니다.</li>
                <li>자식 컴포넌트는 전달받은 Props를 사용하여 화면을 렌더링하거나 동작을 정의할 수 있습니다.</li>
                <li>기본값을 설정할 수 있으며, TypeScript를 사용하면 명확한 타입 정의가 가능합니다.</li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">
                        javascript 구조 분해(Destructuring Assignment)를 지원한다.
                    </a>
                </li>
            </ul>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h2>Props 예제 코드</h2>
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
                        <br />

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
                    <h2>실행 결과</h2>
                    <div className="box">
                        <ComponentD />
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}