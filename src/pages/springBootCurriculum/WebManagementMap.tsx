import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const WebManagementMap = () => {
    const [positions, setPositions] = useState({
        map1: { top: "32%", left: "46%", width: "41%", height: "20%" },
        map2: { top: "60%", left: "46%", width: "41%", height: "24%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    map1: { top: "32%", left: "46%", width: "41%", height: "20%" },
                    map2: { top: "60%", left: "46%", width: "41%", height: "24%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    map1: { top: "32%", left: "46%", width: "41%", height: "20%" },
                    map2: { top: "60%", left: "46%", width: "41%", height: "24%" },
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
                src={`${import.meta.env.BASE_URL}images/web.svg`}
                alt=""
                style={{ width: "100%", height: "auto" }}
            />

            <Link to="springMvc"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.map1.top,
                    left: positions.map1.left,
                    width: positions.map1.width,
                    height: positions.map1.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "red" // 테스트용 배경 (확인 후 제거 가능)
                }}
            />

            <Link to="springRest"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.map2.top,
                    left: positions.map2.left,
                    width: positions.map2.width,
                    height: positions.map2.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "blue"
                }}
            />
        </div>
    );
};

// export default FeatureManagementMap;
