import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate state={{from: location}} to={`/login`} replace></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
