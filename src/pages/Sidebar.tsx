import { useState, useCallback, useLayoutEffect } from "react";
import AnteInterdum from "../widgets/anteInterdum/AnteInterdum";
import CopyRight from "../widgets/copyRight/CopyRight";
import GetInTouch from "../widgets/getInTouch/GetInTouch";
import Menu from "../widgets/menu/Menu";
import Search from "../widgets/search/Search";

function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 1280);

    // 화면 크기 변화에 따라 메뉴 상태 변경
    const handleResize = useCallback(() => {
        setIsMenuOpen(window.innerWidth >= 1280);
    }, []);

    // 메뉴 토글 핸들러
    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    // 초기 렌더링 및 resize 이벤트 처리
    useLayoutEffect(() => {
        handleResize(); // 초기 상태 설정

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <div id="sidebar" className={isMenuOpen ? "active" : "inactive"}>
            <div className="inner">
                <Search />
                <Menu />
                <AnteInterdum />
                <GetInTouch />
                <CopyRight />
            </div>
            <a href="#sidebar" className="toggle" onClick={handleToggleMenu}>
                Toggle
            </a>
        </div>
    );
}

export default Sidebar;
