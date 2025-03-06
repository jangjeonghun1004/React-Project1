import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const GithubManagementMap = () => {
    const [positions, setPositions] = useState({
        map1: { top: "22%", left: "6%", width: "24%", height: "9%" },
        map2: { top: "45%", left: "6%", width: "20%", height: "9%" },
        map3: { top: "67%", left: "6%", width: "25%", height: "9%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    map1: { top: "22%", left: "6%", width: "24%", height: "9%" },
                    map2: { top: "45%", left: "6%", width: "20%", height: "9%" },
                    map3: { top: "67%", left: "6%", width: "25%", height: "9%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    map1: { top: "22%", left: "6%", width: "24%", height: "9%" },
                    map2: { top: "45%", left: "6%", width: "20%", height: "9%" },
                    map3: { top: "67%", left: "6%", width: "25%", height: "9%" },
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
                src={`${import.meta.env.BASE_URL}images/github.svg`}
                alt=""
                style={{ width: "100%", height: "auto" }}
            />

            <Link to="gitHub"
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

            <Link to="gitHubActions"
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

            <Link to="/"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.map3.top,
                    left: positions.map3.left,
                    width: positions.map3.width,
                    height: positions.map3.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "yellow"
                }}
            />
        </div>
    );
};