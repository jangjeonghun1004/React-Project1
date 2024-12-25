import React, { createContext, useContext, useEffect, useState } from "react";

// Breakpoints 정의
const breakpoints = {
    mobile: 768,
    tablet: 1280,
};

// 타입 정의
type ScreenType = "mobile" | "tablet" | "pc";

// Context 생성
const ScreenSizeContext = createContext<ScreenType | null>(null);

// Provider 컴포넌트
export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [screenType, setScreenType] = useState<ScreenType>(() => getScreenType(window.innerWidth));

    // 화면 크기에 따른 screenType 업데이트
    useEffect(() => {
        const handleResize = () => {
            setScreenType(getScreenType(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ScreenSizeContext.Provider value={screenType}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

// 화면 크기 구분 함수
const getScreenType = (width: number): ScreenType => {
    if (width <= breakpoints.mobile) return "mobile";
    if (width <= breakpoints.tablet) return "tablet";
    return "pc";
};

// Custom Hook for Consumer
export const useScreenSize = () => {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error("useScreenSize must be used within a ScreenSizeProvider");
    }
    return context;
};
