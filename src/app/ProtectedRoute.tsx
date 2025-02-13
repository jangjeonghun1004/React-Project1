import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = Boolean(localStorage.getItem('jwtToken'));

    if (!isAuthenticated) {
        // 인증되지 않은 경우 경고창을 띄운 후 로그인 페이지로 리다이렉트
        //alert("로그인이 필요합니다.");
        return <Navigate to="/signIn" replace />;
    }

    return children;
};

export { ProtectedRoute };
