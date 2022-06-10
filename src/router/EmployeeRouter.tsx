import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeInfoScreen from "../modules/employee/myInfo/screens/EmployeeInfoScreen";

const EmployeeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeInfoScreen />} />
    </Routes>
  );
};

export default EmployeeRouter;
