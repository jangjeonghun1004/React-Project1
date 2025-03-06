import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PortfolioManagementMap = () => {
    const [positions, setPositions] = useState({
        todoMap: { top: "41%", left: "8%", width: "24%", height: "46%" },
        authMap: { top: "41%", left: "38%", width: "24%", height: "46%" },
        postMap: { top: "41%", left: "68%", width: "24%", height: "46%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    todoMap: { top: "41%", left: "8%", width: "24%", height: "46%" },
                    authMap: { top: "41%", left: "38%", width: "24%", height: "46%" },
                    postMap: { top: "41%", left: "68%", width: "24%", height: "46%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    todoMap: { top: "41%", left: "8%", width: "24%", height: "46%" },
                    authMap: { top: "41%", left: "38%", width: "24%", height: "46%" },
                    postMap: { top: "41%", left: "68%", width: "24%", height: "46%" },
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
                src={`${import.meta.env.BASE_URL}images/portfolio.png`}
                alt=""
                style={{ width: "100%", height: "auto" }}
            />

            {/* todoMap 클릭 영역 */}
            <Link to="toDo"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.todoMap.top,
                    left: positions.todoMap.left,
                    width: positions.todoMap.width,
                    height: positions.todoMap.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "red" // 테스트용 배경 (확인 후 제거 가능)
                }}
            />

            {/* authMap 클릭 영역 */}
            <Link to="signIn"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.authMap.top,
                    left: positions.authMap.left,
                    width: positions.authMap.width,
                    height: positions.authMap.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "blue"
                }}
            />

            {/* postMap 클릭 영역 */}
            <Link to="post"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.postMap.top,
                    left: positions.postMap.left,
                    width: positions.postMap.width,
                    height: positions.postMap.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "yellow"
                }}
            />
        </div>
    );
};

// export default FeatureManagementMap;
