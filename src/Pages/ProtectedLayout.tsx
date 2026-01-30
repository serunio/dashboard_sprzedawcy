import {useContext} from "react";
import {ctxAuth} from "../utils/CtxAuth.tsx";
import {Navigate, Outlet} from "react-router";

export function ProtectedLayout() {
  const {auth} = useContext(ctxAuth);

  if (auth?.login == null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}