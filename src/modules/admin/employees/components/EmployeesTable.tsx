import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  CustomTableCell,
  CustomTableHeaderCell,
} from "../../../shared/TableComponents";

import {
  setEmployeesDeleteModalOpen,
  setEmployeeSelectedId,
  setEmployeesModalOpen,
  setEmployeeToDeleteId,
} from "../slices/employeesSlice";

const VehiclesTable = () => {
  const { employeesList, filters } = useAppSelector((state) => state.employees);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    dispatch(setEmployeeSelectedId(id));
    dispatch(setEmployeesModalOpen(true));
  };

  const handleDelete = (id: number) => {
    dispatch(setEmployeeToDeleteId(id));
    dispatch(setEmployeesDeleteModalOpen(true));
  };

  const dataFiltered = employeesList.filter((employee) => {
    let flagVS = true;
    let flagVT = true;
    let flagSD = true;
    let flagED = true;

    filters.vaccination_status === employee.vaccination_status ||
    (employee.vaccination_status === "Not Vaccinated" &&
      !employee.vaccination_status) ||
    filters.vaccination_status === "all"
      ? (flagVS = true)
      : (flagVS = false);

    filters.vaccinate_type === "all" ||
    filters.vaccinate_type === employee.vaccinate_type
      ? (flagVT = true)
      : (flagVT = false);

    filters.start_date === "" || filters.start_date <= employee.vaccination_date
      ? (flagSD = true)
      : (flagSD = false);

    filters.end_date === "" || filters.end_date >= employee.vaccination_date
      ? (flagED = true)
      : (flagED = false);

    return flagVS && flagVT && flagSD && flagED;
  });

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableHeaderCell>Name</CustomTableHeaderCell>
              <CustomTableHeaderCell>DNI</CustomTableHeaderCell>
              <CustomTableHeaderCell>Phone</CustomTableHeaderCell>
              <CustomTableHeaderCell>Email</CustomTableHeaderCell>
              <CustomTableHeaderCell>Birth date</CustomTableHeaderCell>
              <CustomTableHeaderCell>Vaccination Status</CustomTableHeaderCell>
              <CustomTableHeaderCell>Vaccinate Type</CustomTableHeaderCell>
              <CustomTableHeaderCell>Vaccinate Doses</CustomTableHeaderCell>
              <CustomTableHeaderCell>Vaccination Date</CustomTableHeaderCell>
              <CustomTableHeaderCell>Actions</CustomTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.length > 0 ? (
              <>
                {dataFiltered?.map((employee) => (
                  <TableRow key={employee.id}>
                    <CustomTableCell>
                      {employee.name} {employee.lastname}
                    </CustomTableCell>
                    <CustomTableCell>{employee.dni}</CustomTableCell>
                    <CustomTableCell>{employee.phone || "N/A"}</CustomTableCell>
                    <CustomTableCell>{employee.email}</CustomTableCell>
                    <CustomTableCell>
                      {employee.birthdate || "N/A"}
                    </CustomTableCell>
                    <CustomTableCell>
                      {employee.vaccination_status || "Not Vaccinated"}
                    </CustomTableCell>
                    <CustomTableCell>
                      {employee.vaccinate_type || "N/A"}
                    </CustomTableCell>
                    <CustomTableCell>
                      {employee.dose_number || "N/A"}
                    </CustomTableCell>
                    <CustomTableCell>
                      {employee.vaccination_date || "N/A"}
                    </CustomTableCell>
                    <CustomTableCell>
                      <IconButton onClick={() => handleEdit(employee.id)}>
                        <Tooltip title="Edit">
                          <Edit />
                        </Tooltip>
                      </IconButton>
                      <IconButton onClick={() => handleDelete(employee.id)}>
                        <Tooltip title="Delete">
                          <Delete />
                        </Tooltip>
                      </IconButton>
                    </CustomTableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Alert severity="info">No employees found</Alert>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VehiclesTable;
