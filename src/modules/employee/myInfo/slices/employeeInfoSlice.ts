import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../interfaces/employees.interface";

export interface EmployeesState {
  employee: Employee | null;
  employeeInfoModalOpen: boolean;
}

const initialState: EmployeesState = {
  employee: null,
  employeeInfoModalOpen: false,
};

export const employeeInfoSlice = createSlice({
  name: "employeeInfo",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<Employee>) => {
      state.employee = action.payload;
    },
    setEmployeeInfoModalOpen: (state, action: PayloadAction<boolean>) => {
      state.employeeInfoModalOpen = action.payload;
    },
  },
});

export const { setEmployee, setEmployeeInfoModalOpen } =
  employeeInfoSlice.actions;

export default employeeInfoSlice.reducer;
