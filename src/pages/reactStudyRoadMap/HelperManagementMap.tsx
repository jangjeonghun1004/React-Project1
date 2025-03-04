import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HelperManagementMap = () => {
    const [positions, setPositions] = useState({
        helperAxios: { top: "18%", left: "12%", width: "19%", height: "20%" },
        helperBrowserRouter: { top: "17%", left: "69%", width: "18%", height: "20%" },
        helperReduxToolKit: { top: "76%", left: "41%", width: "18%", height: "20%" },
    });

    // ✅ 화면 크기 변경 시 클릭 영역 크기 & 위치 조정
    useEffect(() => {
        const updatePositions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // 📌 모바일 화면 (작은 화면)
                setPositions({
                    helperAxios: { top: "18%", left: "12%", width: "19%", height: "20%" },
                    helperBrowserRouter: { top: "17%", left: "69%", width: "18%", height: "20%" },
                    helperReduxToolKit: { top: "76%", left: "41%", width: "18%", height: "20%" },
                });
            } else {
                // 📌 기본 (데스크톱 화면)
                setPositions({
                    helperAxios: { top: "18%", left: "12%", width: "19%", height: "20%" },
                    helperBrowserRouter: { top: "17%", left: "69%", width: "18%", height: "20%" },
                    helperReduxToolKit: { top: "76%", left: "41%", width: "18%", height: "20%" },
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
                src={`${import.meta.env.BASE_URL}images/react-helper.png`}
                alt="React 상태 관리 훅"
                style={{ width: "100%", height: "auto" }}
            />

            {/* helperAxios 클릭 영역 */}
            <Link to="axios"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.helperAxios.top,
                    left: positions.helperAxios.left,
                    width: positions.helperAxios.width,
                    height: positions.helperAxios.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(255, 0, 0, 0.2)" // 테스트용 배경 (확인 후 제거 가능)
                }}
            />

            {/* helperBrowserRouter 클릭 영역 */}
            <Link to="browserRouter"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.helperBrowserRouter.top,
                    left: positions.helperBrowserRouter.left,
                    width: positions.helperBrowserRouter.width,
                    height: positions.helperBrowserRouter.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(0, 255, 0, 0.2)"
                }}
            />

            {/* helperReduxToolKit 클릭 영역 */}
            <Link to="reduxToolkit"
                rel="noopener noreferrer"
                style={{
                    position: "absolute",
                    top: positions.helperReduxToolKit.top,
                    left: positions.helperReduxToolKit.left,
                    width: positions.helperReduxToolKit.width,
                    height: positions.helperReduxToolKit.height,
                    cursor: "pointer",
                    borderBottom: "0px",
                    // backgroundColor: "rgba(0, 0, 255, 0.2)"
                }}
            />
        </div>
    );
};

export default HelperManagementMap;
