import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

function PrivateRouter() {
  const location = useLocation();
  const { isConnected }: any = useAuthContext();

  if (!isConnected) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default PrivateRouter;
