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
    // const lastWindowWidth = useRef(window.innerWidth); // 이전 창 크기 저장
    // const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    // // 화면 크기 변화에 따라 메뉴 상태 변경
    // const handleResize = useCallback(() => {
    //     const currentWidth = window.innerWidth;

    //     // 실제로 창 너비가 변경되었는지 확인
    //     if (lastWindowWidth.current === currentWidth) {
    //         return;
    //     }

    //     lastWindowWidth.current = currentWidth;

    //     // 메뉴 상태 업데이트
    //     setIsMenuOpen(screenType === 'pc');
    // }, []);

    // // 디바운스 처리된 resize 핸들러
    // const debouncedResizeHandler = useCallback(() => {
    //     if (debounceTimeout.current) {
    //         clearTimeout(debounceTimeout.current);
    //     }

    //     debounceTimeout.current = setTimeout(handleResize, 200);
    // }, [handleResize]);

    // useEffect(() => {
    //     // 초기 상태 설정
    //     handleResize();

    //     // resize 이벤트 리스너 등록
    //     window.addEventListener("resize", debouncedResizeHandler);

    //     return () => {
    //         // 리스너 및 타이머 정리
    //         window.removeEventListener("resize", debouncedResizeHandler);
    //         if (debounceTimeout.current) {
    //             clearTimeout(debounceTimeout.current);
    //         }
    //     };
    // }, [debouncedResizeHandler, handleResize]);

    useEffect(() => {
        setIsMenuOpen(screenType === 'pc' ? true : false);
    }, [screenType]);

    // 메뉴 토글 핸들러
    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div id="sidebar" className={isMenuOpen ? "active" : "inactive"}>
            <div className="inner">
                <Search />
                <Menu />
                {screenType}
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
