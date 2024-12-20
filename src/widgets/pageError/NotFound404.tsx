import { Link } from "react-router-dom";
import { CSSProperties } from "react";

function NotFound404() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={linkStyle}>
        Go Back to Home
      </Link>
    </div>
  );
}

// 스타일 정의
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "#f4f4f9",
  color: "#333",
  padding: "20px",
};

const titleStyle: CSSProperties = {
  fontSize: "5rem",
  fontWeight: "bold",
  marginBottom: "20px",
};

const messageStyle: CSSProperties = {
  fontSize: "1.5rem",
  marginBottom: "20px",
};

const linkStyle: CSSProperties = {
  fontSize: "1rem",
  color: "#007bff",
  textDecoration: "none",
  border: "1px solid #007bff",
  padding: "10px 20px",
  borderRadius: "5px",
};

export default NotFound404;
