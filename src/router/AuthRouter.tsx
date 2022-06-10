import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../modules/auth/screens/LoginScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
};

export default AuthRouter;
