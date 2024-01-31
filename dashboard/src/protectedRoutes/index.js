import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ token }) => {
  if (token == '') {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
