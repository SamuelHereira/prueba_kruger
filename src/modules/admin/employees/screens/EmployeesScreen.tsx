import { AddCircleOutline, ArrowBack } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { CustomAddButton, CustomButton } from "../../../shared/Buttons";
import { CustomTextField } from "../../../shared/Inputs";
import EmployeeSideDialog from "../components/add/AddEmployeeDialog";
import DeleteEmployeeDialog from "../components/delete/DeleteEmployeeDialog";
import EmployeesTable from "../components/EmployeesTable";
import { useGetEmployeesQuery } from "../slices/employeesApiSlice";
import {
  resetEmployeeSelectedId,
  setEmployeesDeleteModalOpen,
  setEmployeesModalOpen,
  setFilters,
} from "../slices/employeesSlice";

const EmployeesScreen = () => {
  const navigate = useNavigate();

  const { employeesModalOpen, employeesDeleteModalOpen, filters } =
    useAppSelector((state) => state.employees);

  const { data = [], isLoading } = useGetEmployeesQuery(
    {},
    {
      refetchOnMountOrArgChange: 1,
    }
  );

  const dispatch = useAppDispatch();

  const handleAddEmployee = () => {
    dispatch(setEmployeesModalOpen(true));
  };

  const handleCloseDialog = () => {
    dispatch(setEmployeesModalOpen(false));
    dispatch(resetEmployeeSelectedId());
  };

  const handleCloseDeleteDialog = () => {
    dispatch(resetEmployeeSelectedId());
    dispatch(setEmployeesDeleteModalOpen(false));
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <Grid container flexDirection="row" gap={2}>
          <Grid item>
            <Typography variant="h4">Employees</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <CustomAddButton
          startIcon={<AddCircleOutline />}
          variant="contained"
          fullWidth
          onClick={handleAddEmployee}
        >
          Add Employee
        </CustomAddButton>
      </Grid>
      <Grid item container spacing={1} xs={12} mt={2}>
        <Grid item xs={3}>
          <InputLabel>Vaccination Status</InputLabel>

          <CustomTextField
            select
            fullWidth
            value={filters.vaccination_status}
            onChange={(e) =>
              dispatch(setFilters({ vaccination_status: e.target.value }))
            }
          >
            <MenuItem value="all" selected>
              All
            </MenuItem>
            <MenuItem value="Vaccinated">Vaccinated</MenuItem>
            <MenuItem value="Not Vaccinated">Not vaccinated</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Vaccinate Type</InputLabel>
          <CustomTextField
            select
            fullWidth
            value={filters.vaccinate_type}
            onChange={(e) =>
              dispatch(setFilters({ vaccinate_type: e.target.value }))
            }
          >
            <MenuItem value="all" selected>
              All
            </MenuItem>
            <MenuItem value="Sputnik">Sputnik</MenuItem>
            <MenuItem value="AstraZeneca">AstraZeneca</MenuItem>
            <MenuItem value="Pfizer">Pfizer</MenuItem>
            <MenuItem value="Jhonson&Jhonson">Jhonson&Jhonson</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Start Date</InputLabel>
          <CustomTextField
            type="date"
            fullWidth
            value={filters.start_date}
            onChange={(e) => {
              dispatch(setFilters({ start_date: e.target.value }));
            }}
          ></CustomTextField>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>End Date</InputLabel>
          <CustomTextField
            type="date"
            fullWidth
            value={filters.end_date}
            onChange={(e) => {
              dispatch(setFilters({ end_date: e.target.value }));
            }}
          ></CustomTextField>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <Typography>Loading...</Typography> : <EmployeesTable />}
      </Grid>

      <EmployeeSideDialog
        open={employeesModalOpen}
        handleCloseDialog={handleCloseDialog}
      />

      {employeesDeleteModalOpen && (
        <DeleteEmployeeDialog
          open={employeesDeleteModalOpen}
          handleCloseDialog={handleCloseDeleteDialog}
        />
      )}
    </Grid>
  );
};

export default EmployeesScreen;
