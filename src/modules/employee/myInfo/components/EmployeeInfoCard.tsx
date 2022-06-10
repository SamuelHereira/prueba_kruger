import { Delete, Edit } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";

const EmployeeInfoCard = () => {
  const { employee } = useAppSelector((state) => state.employeeInfo);

  return (
    <>
      <Card
        sx={{
          padding: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>DNI:</strong> {employee?.dni}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Name:</strong> {employee?.name} {employee?.lastname}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Email:</strong> {employee?.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Phone:</strong> {employee?.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Address:</strong> {employee?.address}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Birth:</strong> {employee?.birthdate}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Vaccination Status:</strong>{" "}
              {employee?.vaccination_status === "Vaccinated"
                ? "Vaccinated"
                : "Not Vaccinated"}
            </Typography>
          </Grid>
          {employee?.vaccination_status === "Vaccinated" && (
            <>
              <Grid item xs={12}>
                <Typography variant="h5">
                  <strong>Vaccinate Type:</strong> {employee?.vaccinate_type}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  <strong>Vaccination Date:</strong>{" "}
                  {employee?.vaccination_date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  <strong>Dose Number:</strong> {employee?.dose_number}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </>
  );
};

export default EmployeeInfoCard;
