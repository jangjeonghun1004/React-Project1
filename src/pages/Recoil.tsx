import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

export default function Recoil() {
    return (
        <div id="wrapper">
        <div id="main">
            <div className="inner">
                <Header />

                <section>
                    <header className="main">
                        <h1>Recoil</h1>
                    </header>

                    <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                    {/* contents */}
                    <h2 id="content">Recoil란?</h2>
                    <p>
                        Recoil은 Facebook에서 개발한 상태 관리 라이브러리로, React 애플리케이션에서 전역 상태를 효율적으로 관리할 수 있게 해줍니다. 
                        간단한 API로 직관적인 사용이 가능하며, React의 동기화 상태와 잘 통합됩니다.
                    </p>

                    <h2>Recoil 설치</h2>
                    <p><code>npm install recoil</code></p>

                    <h2 id="content">주요 개념</h2>
                    <ol>
                        <li>Atom: 상태의 최소 단위로, 어떤 컴포넌트에서든 읽고 쓸 수 있습니다.</li>
                        <li>Selector: Derived state(파생 상태)를 계산하는 데 사용됩니다.</li>
                        <li>RecoilRoot: Recoil 상태를 사용하는 컴포넌트 트리를 감싸는 컨텍스트입니다.</li>
                    </ol>


                    <div className="row">
                        <div className="col-12">
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// 1. Atom: 상태의 기본 단위
const textState = atom({
  key: 'textState', // 고유한 ID
  default: '',      // 기본값
});

// 2. Selector: 파생 상태 계산
const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

// 3. 컴포넌트: Atom 사용
function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <p>Echo: {text}</p>
        </div>
    );
}

// 4. 컴포넌트: Selector 사용
function CharacterCount() {
    const count = useRecoilValue(charCountState);
    return <p>Character Count: {count}</p>;
}

// 5. App Component
function App() {
    return (
        <RecoilRoot>
            <h1>Recoil Example</h1>
            <TextInput />
            <CharacterCount />
        </RecoilRoot>
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