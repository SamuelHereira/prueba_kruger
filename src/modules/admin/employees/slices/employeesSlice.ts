import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../interfaces/employees.interface";

export interface EmployeesState {
  employeesList: Employee[];
  employeeSelectedId: number | null;
  employeeToDeleteId: number | null;
  employeesModalOpen: boolean;
  employeesDeleteModalOpen: boolean;
  filters: {
    vaccinate_type: string;
    vaccination_status: string;
    start_date: string;
    end_date: string;
  };
}

const initialState: EmployeesState = {
  employeesList: [],
  employeeSelectedId: null,
  employeeToDeleteId: null,
  employeesModalOpen: false,
  employeesDeleteModalOpen: false,
  filters: {
    vaccinate_type: "all",
    vaccination_status: "all",
    start_date: "",
    end_date: "",
  },
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployeesList: (state, action: PayloadAction<Employee[]>) => {
      state.employeesList = action.payload;
    },
    setEmployeeSelectedId: (state, action: PayloadAction<number>) => {
      state.employeeSelectedId = action.payload;
    },
    resetEmployeeSelectedId: (state) => {
      state.employeeSelectedId = null;
    },
    setEmployeeToDeleteId: (state, action: PayloadAction<number>) => {
      state.employeeToDeleteId = action.payload;
    },
    resetEmployeeToDeleteId: (state) => {
      state.employeeToDeleteId = null;
    },
    setEmployeesModalOpen: (state, action: PayloadAction<boolean>) => {
      state.employeesModalOpen = action.payload;
    },
    setEmployeesDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.employeesDeleteModalOpen = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        vaccinate_type?: string;
        vaccination_status?: string;
        start_date?: string;
        end_date?: string;
      }>
    ) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const {
  setEmployeesList,
  setEmployeeSelectedId,
  resetEmployeeSelectedId,
  setEmployeeToDeleteId,
  resetEmployeeToDeleteId,
  setEmployeesModalOpen,
  setEmployeesDeleteModalOpen,
  setFilters,
} = employeesSlice.actions;

export default employeesSlice.reducer;
