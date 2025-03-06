import React, { useState } from "react";

interface Props {
    title: string,
    icon: string,
    children: React.ReactNode
}

function SubMenu({title, icon, children}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <label  className={`icon solid ${icon}`} style={{position:"absolute", marginTop: "7px"}} />
            <span className={isOpen ? "opener active" : "opener"} onClick={toggleSubMenu} style={{paddingLeft: "18px"}}>
                {title}
            </span>
            <ul>{children}</ul>
        </li>
    );
}

export default SubMenu