import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./components/loader/Loader";
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Error404 = lazy(() => import("./pages/error-pages/Error404"));
const Error500 = lazy(() => import("./pages/error-pages/Error500"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register-user/RegisterUser"));
const CreateUser = lazy(() => import("./pages/create-user/CreateUser"));
const RegisterUser = lazy(() => import("./pages/register-user/RegisterUser"));
const TenantList = lazy(() => import("./pages/tenant-list/TenantList"));
function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/registertenant" element={<RegisterUser />} />
        <Route path="/tenantlist" element={<TenantList />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/registration-page" element={<Register />} />
        <Route path="/error-pages/error-404" element={<Error404 />} />
        <Route path="/error-pages/error-500" element={<Error500 />} />
        <Route path="*" element={<Navigate to="/login-page" />} />
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;
