import { useMemo, useState } from "react";
import PageTemplate from "../PageTemplate";

export default function UseMemoPage() {
    const [items, _] = useState<string[]>(['Apple', 'Banana', 'Cherry', 'Date']);
    const [query, setQuery] = useState<string>('');

    const filteredItems = useMemo(() => {
        return (items.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
    }, [items, query]);

    return (
        <PageTemplate>
            <h2>useMemo</h2>
            <p className="box">
                React의 useMemo는 컴포넌트의 렌더링 성능을 최적화하기 위해 사용되는 훅입니다.
                주어진 값이나 계산이 특정 의존성 배열이 변경될 때만 다시 계산되도록 합니다.
            </p>

            <h2>useMemo 주요 특징</h2>
            <ul>
                <li>복잡한 계산 결과를 캐싱하여 불필요한 재연산을 방지합니다.</li>
                <li>값이 바뀌지 않았는데도 불구하고 재계산이 되는 것을 막고 싶을 때 사용합니다.</li>
                <li>계산량이 많은 작업(예: 필터링, 정렬)을 할때 사용합니다.</li>
            </ul>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h2>useMemo 예제 코드</h2>
                    <pre>
                        <code>
                            {`
import React, { useMemo, useState } from 'react';

function FilteredList() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
    const [query, setQuery] = useState('');

    const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    }, [items, query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilteredList;
`}
                        </code>
                    </pre>
                </div>
                <div className="col-6 col-12-small">
                    <h2>실행 결과</h2>
                    <div className="box">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                        />

                        <ul>
                            {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}