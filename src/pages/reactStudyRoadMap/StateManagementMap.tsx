import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StateManagementMap = () => {
    const [positions, setPositions] = useState({
        useState: { top: "30%", left: "1%", width: "37%", height: "25%" },
        useReducer: { top: "32%", left: "70%", width: "20%", height: "15%" },
        useRef: { top: "66%", left: "61%", width: "37%", height: "27%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    useState: { top: "33%", left: "1%", width: "37%", height: "20%" },
                    useReducer: { top: "50%", left: "60%", width: "30%", height: "12%" },
                    useRef: { top: "66%", left: "61%", width: "37%", height: "27%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    useState: { top: "33%", left: "1%", width: "37%", height: "20%" },
                    useReducer: { top: "40%", left: "70%", width: "20%", height: "15%" },
                    useRef: { top: "66%", left: "61%", width: "37%", height: "27%" },
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
                src="/images/react-state.png"
                alt="React 상태 관리 훅"
                style={{ width: "100%", height: "auto" }}
            />

            {/* useState 클릭 영역 */}
            <Link to="useState"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useState.top,
                    left: positions.useState.left,
                    width: positions.useState.width,
                    height: positions.useState.height,
                    cursor: "pointer",
                    backgroundColor: "rgba(255, 0, 0, 0.2)" // 테스트용 배경 (확인 후 제거 가능)
                }}
            />

            {/* useReducer 클릭 영역 */}
            <a
                href="https://react.dev/reference/react/useReducer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useReducer.top,
                    left: positions.useReducer.left,
                    width: positions.useReducer.width,
                    height: positions.useReducer.height,
                    cursor: "pointer",
                    backgroundColor: "rgba(0, 255, 0, 0.2)"
                }}
            />

            {/* useRef 클릭 영역 */}
            <a
                href="https://react.dev/reference/react/useRef"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.useRef.top,
                    left: positions.useRef.left,
                    width: positions.useRef.width,
                    height: positions.useRef.height,
                    cursor: "pointer",
                    backgroundColor: "rgba(0, 0, 255, 0.2)"
                }}
            />
        </div>
    );
};

export default StateManagementMap;
