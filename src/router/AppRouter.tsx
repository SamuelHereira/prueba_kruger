import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import LoginScreen from "../modules/auth/screens/LoginScreen";
import Layout from "../modules/layout";
import AdminRouter from "./AdminRouter";
import AuthRouter from "./AuthRouter";
import EmployeeRouter from "./EmployeeRouter";

const AppRouter = () => {
  const { isAuth, role } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {!isAuth ? (
        <AuthRouter />
      ) : (
        <Layout>
          {role?.role_id == 1 ? <AdminRouter /> : <EmployeeRouter />}
        </Layout>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
