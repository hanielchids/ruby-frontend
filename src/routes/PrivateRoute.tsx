import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children?: JSX.Element;
  userId: number | null;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
  userId,
}) => {
  if (!isAuthenticated && !userId) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PrivateRoute;
