import React, { useState } from "react";

interface Props {
    title: string,
    children: React.ReactNode
}

function SubMenu({title, children}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <span className={isOpen ? "opener active" : "opener"} onClick={toggleSubMenu}>
                {title}
            </span>
            <ul>{children}</ul>
        </li>
    );
}

export default SubMenu