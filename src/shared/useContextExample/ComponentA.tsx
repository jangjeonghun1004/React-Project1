import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const [userName, setUserName] = useState<string>('');

    return (
        <>
            <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'red', padding: 10, textAlign: 'center' }}>
                <button onClick={() => { setUserName('james') }} className="primary">A → C 데이터 전달 버튼</button>
                <br />

                Component A
                <UserNameContext.Provider value={userName}>
                    <ComponentB />
                </UserNameContext.Provider>
                <br />
            </div>
        </>
    );
}
export default ComponentA
export const UserNameContext = createContext<string>('');