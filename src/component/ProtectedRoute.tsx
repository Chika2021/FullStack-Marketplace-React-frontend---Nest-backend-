import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // 🚫 No token → redirect to login
    return <Navigate to="/" replace />;
  }

  // ✅ Token exists → show page
  return <>{children}</>;
};

export default ProtectedRoute;
