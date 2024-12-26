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

                <button onClick={() => {setUserName('james')}} className="primary">Component C에 데이터 전달 하기</button>
            </div>
        </>
    );
}
export default ComponentA
export const UserNameContext = createContext<string>('');