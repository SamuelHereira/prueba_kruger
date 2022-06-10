import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeesScreen from "../modules/admin/employees/screens/EmployeesScreen";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeesScreen />} />
    </Routes>
  );
};

export default AdminRouter;
