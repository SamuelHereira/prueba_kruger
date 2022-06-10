import { AddCircleOutline, ArrowBack } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { CustomAddButton, CustomButton } from "../../../shared/Buttons";
import EmployeeSideDialog from "../components/update/UpdateEmployeeInfoDialog";
import EmployeeInfoCard from "../components/EmployeeInfoCard";
import { useGetEmployeeInfoQuery } from "../slices/employeeInfoApiSlice";
import { setEmployeeInfoModalOpen } from "../slices/employeeInfoSlice";

const EmployeeInfoScreen = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const { employeeInfoModalOpen } = useAppSelector(
    (state) => state.employeeInfo
  );

  const { data = [], isLoading } = useGetEmployeeInfoQuery(
    { employee_id: user?.employee_id! },
    {
      refetchOnMountOrArgChange: 1,
    }
  );

  const dispatch = useAppDispatch();

  const handleAddEmployee = () => {
    dispatch(setEmployeeInfoModalOpen(true));
  };

  const handleCloseDialog = () => {
    dispatch(setEmployeeInfoModalOpen(false));
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <Grid container flexDirection="row" gap={2}>
          <Grid item>
            <Typography variant="h4">My Information</Typography>
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
          Update Information
        </CustomAddButton>
      </Grid>
      <Grid item xs={12} mt={2}>
        {isLoading ? <Typography>Loading...</Typography> : <EmployeeInfoCard />}
      </Grid>

      <EmployeeSideDialog
        open={employeeInfoModalOpen}
        handleCloseDialog={handleCloseDialog}
      />
    </Grid>
  );
};

export default EmployeeInfoScreen;
