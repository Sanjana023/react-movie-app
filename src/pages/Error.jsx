import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        color: "#333"
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        Oops! Page not found.
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#ff4c4c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default ErrorPage;
