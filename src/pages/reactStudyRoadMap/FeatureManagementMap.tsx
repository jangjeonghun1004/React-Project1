import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeatureManagementMap = () => {
    const [positions, setPositions] = useState({
        useMemo: { top: "25%", left: "9%", width: "21%", height: "20%" },
        useProps: { top: "23%", left: "69%", width: "21%", height: "20%" },
        useEffect: { top: "74%", left: "9%", width: "21%", height: "20%" },
        useContext: { top: "74%", left: "69%", width: "21%", height: "20%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    useMemo: { top: "25%", left: "9%", width: "21%", height: "20%" },
                    useProps: { top: "23%", left: "69%", width: "21%", height: "20%" },
                    useEffect: { top: "74%", left: "9%", width: "21%", height: "20%" },
                    useContext: { top: "74%", left: "69%", width: "21%", height: "20%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    useMemo: { top: "25%", left: "9%", width: "21%", height: "20%" },
                    useProps: { top: "23%", left: "69%", width: "21%", height: "20%" },
                    useEffect: { top: "74%", left: "9%", width: "21%", height: "20%" },
                    useContext: { top: "74%", left: "69%", width: "21%", height: "20%" },
                });
            }
        };

        // 초기 실행 & 이벤트 리스너 등록
        updatePositions();
        window.addEventListener("resize", updatePositions);

        // ✅ 컴포넌트 언마운트 시 리스너 제거 (메모리 누수 방지)
        return () => window.removeEventListener("resize", updatePositions);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
            {/* 배경 이미지 */}
            <img
                src={`${import.meta.env.BASE_URL}images/react-feature.png`}
                alt="React 상태 관리 훅"
                style={{ width: "100%", height: "auto" }}
            />

            {/* useMemo 클릭 영역 */}
            <Link to="useMemo"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useMemo.top,
                    left: positions.useMemo.left,
                    width: positions.useMemo.width,
                    height: positions.useMemo.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(255, 0, 0, 0.2)" // 테스트용 배경 (확인 후 제거 가능)
                }}
            />

            {/* useProps 클릭 영역 */}
            <Link to="props"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useProps.top,
                    left: positions.useProps.left,
                    width: positions.useProps.width,
                    height: positions.useProps.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(0, 255, 0, 0.2)"
                }}
            />

            {/* useEffect 클릭 영역 */}
            <Link to="useEffect"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useEffect.top,
                    left: positions.useEffect.left,
                    width: positions.useEffect.width,
                    height: positions.useEffect.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(0, 0, 255, 0.2)"
                }}
            />

            {/* useContext 클릭 영역 */}
            <Link to="useContext"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useContext.top,
                    left: positions.useContext.left,
                    width: positions.useContext.width,
                    height: positions.useContext.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(217, 255, 0, 0.2)"
                }}
            />
        </div>
    );
};

export default FeatureManagementMap;
