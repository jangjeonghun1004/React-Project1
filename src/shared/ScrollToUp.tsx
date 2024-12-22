import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지를 상단으로 스크롤
        window.scrollTo({
            top: 0, // 원하는 y 좌표
            behavior: "auto", // 부드럽게 스크롤
        });
    }, [pathname]); // pathname이 변경될 때 실행

    return null; // UI를 렌더링하지 않음
}

export default ScrollToTop;
