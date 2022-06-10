import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { middlewareApi } from "../api/middleware";
import { employeesApi } from "../modules/admin/employees/slices/employeesApiSlice";
import { employeesSlice } from "../modules/admin/employees/slices/employeesSlice";
import { authApi } from "../modules/auth/slices/authApiSlice";
import { authSlice } from "../modules/auth/slices/authSlice";
import { employeeInfoApi } from "../modules/employee/myInfo/slices/employeeInfoApiSlice";
import { employeeInfoSlice } from "../modules/employee/myInfo/slices/employeeInfoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    employees: employeesSlice.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    employeeInfo: employeeInfoSlice.reducer,
    [employeeInfoApi.reducerPath]: employeeInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
