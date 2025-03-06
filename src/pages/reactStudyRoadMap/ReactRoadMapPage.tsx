import PageTemplate from "../PageTemplate";
import CardStyle3 from "../../shared/card/CardStyle3";

export default function ReactPage() {
    return (
        <PageTemplate title="React-학습 로드 맵" subTitle="" imageSrc="">
            <section>
                <dl>
                    <dt>React Hook-리액트 훅</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon fa-gem"
                                title="useState"
                                text="useState는 React에서 함수형 컴포넌트의 상태 관리를 간단하고 직관적으로 처리하기 위한 Hook입니다."
                                linkPath='useState'
                            />
                            <CardStyle3
                                icon="icon solid fa-paper-plane"
                                title="useReducer"
                                text="useReducer는 React의 상태 관리 훅으로, 복잡한 상태 변경 로직을 관리할 때 유용합니다."
                                linkPath="useReducer"
                            />
                            <CardStyle3
                                icon="icon solid fa-ghost"
                                title="useRef"
                                text="useRef는 DOM 조작이나 값 저장에 유용하며, 렌더링을 발생시키지 않고 값을 유지할 때 자주 사용됩니다."
                                linkPath="useRef"
                            />
                            <CardStyle3
                                icon="icon solid fa-smile-wink"
                                title="useContext"
                                text="useContext는 React에서 **컨텍스트(Context)**를 사용하기 위해 제공되는 훅(Hook)입니다."
                                linkPath="useContext"
                            />
                            <CardStyle3
                                icon="icon solid fa-sink"
                                title="useEffect"
                                text="useEffect는 React의 Hook으로, 컴포넌트가 렌더링된 후에 실행되어 부수효과(side effects)를 처리합니다."
                                linkPath="useEffect"
                            />
                            <CardStyle3
                                icon="icon solid fa-gavel"
                                title="Optimization"
                                text="React의 useMemo는 컴포넌트의 렌더링 성능을 최적화하기 위해 사용되는 훅입니다."
                                linkPath="useMemo"
                            />
                        </div>
                    </dd>
                    <dt>others</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-rocket"
                                title="Props"
                                text="Props는 React에서 속성(properties)의 약자로, 컴포넌트 간에 데이터를 전달하는 데 사용됩니다."
                                linkPath="props"
                            />
                            <CardStyle3
                                icon="icon solid fa-skating"
                                title="BrowserRouter"
                                text="BrowserRouter는 React Router에서 제공하는 컴포넌트로, HTML5의 History API를 활용하여 클라이언트 측 라우팅을 처리합니다."
                                linkPath="browserRouter"
                            />
                            <CardStyle3
                                icon="icon solid fa-signal"
                                title="Redux ToolKit"
                                text="Redux Toolkit은 Redux를 사용하여 상태 관리를 효율적으로 처리하기 위한 라이브러리입니다."
                                linkPath="reduxToolKit"
                            />
                            <CardStyle3
                                icon="icon solid fa-lock"
                                title="Axios"
                                text="axios는 JavaScript 기반의 HTTP 클라이언트 라이브러리로, 프론트엔드/백엔드 환경에서 API 통신을 간편하게 처리하는 도구입니다."
                                linkPath="axios"
                            />
                        </div>
                    </dd>
                </dl>
            </section>
        </PageTemplate>
    );
}