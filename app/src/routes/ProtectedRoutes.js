import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { PROTECTED_ROUTES } from "./AppRoutes";

import { ROUTES } from "../utils/routes";

const ProtectedRoutes = () => (
  <Routes>
    {PROTECTED_ROUTES.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
    <Route
      path={ROUTES.AUTH_ROUTES.login}
      element={<Navigate to={ROUTES.PROTECTED_ROUTES_NAMES.root} replace />}
    />
    <Route
      path="*"
      element={<div>Page not Found 404 </div>}
    />
  </Routes>
);

export default ProtectedRoutes;
