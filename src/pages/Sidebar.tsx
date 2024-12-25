import { useState, useEffect } from "react";
import AnteInterdum from "../widgets/anteInterdum/AnteInterdum";
import CopyRight from "../widgets/copyRight/CopyRight";
import GetInTouch from "../widgets/getInTouch/GetInTouch";
import Menu from "../widgets/menu/Menu";
import Search from "../widgets/search/Search";
import { useScreenSize } from "../app/ScreenSizeProvider";

function Sidebar() {
     const screenType = useScreenSize();
     const [isMenuOpen, setIsMenuOpen] = useState(screenType === 'pc' ? true : false);

    useEffect(() => {
        setIsMenuOpen(screenType === 'pc' ? true : false);
    }, [screenType]);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div id="sidebar" className={isMenuOpen ? "active" : "inactive"}>
            <div className="inner">
                <Search />
                <Menu />
                <AnteInterdum />
                <GetInTouch />
                <CopyRight />
            </div>
            <a href="#sidebar" className="toggle" onClick={handleToggleMenu}>Toggle</a>
        </div>
    );
}

export default Sidebar;
