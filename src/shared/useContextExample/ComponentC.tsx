import { UserNameContext } from "./ComponentA";
import { useContext } from "react";

function ComponentC() {
    const userName = useContext(UserNameContext);

    return (
        <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'blue', padding: 10 }}>
            Component C<br />
            User Name: {userName && <span style={{fontWeight:'bold', color:'red'}}>{userName}</span>}
        </div>
    );
}

export default ComponentC