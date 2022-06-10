import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { CustomAddButton } from "../../../../shared/Buttons";
import { CustomTextField } from "../../../../shared/Inputs";
import { useUpdateEmployeeInfoMutation } from "../../slices/employeeInfoApiSlice";
import { employeesInfoFormSchema } from "../../validations/employeesInfo.validation";

const UpdateInfoForm = () => {
  const { employee } = useAppSelector((state) => state.employeeInfo);

  const [
    updateEmployee,
    {
      data: uData,
      error: uError,
      isLoading: uIsLoading,
      isError: uIsError,
      isSuccess: uIsSuccess,
    },
  ] = useUpdateEmployeeInfoMutation();

  const { getFieldProps, errors, touched, values, setValues, handleSubmit } =
    useFormik({
      initialValues: {
        dni: employee?.dni || "",
        name: employee?.name || "",
        lastname: employee?.lastname || "",
        email: employee?.email || "",
        phone: employee?.phone || "",
        birthdate: employee?.birthdate || "",
        address: employee?.address || "",
        vaccination_status: employee?.vaccination_status || "Not Vaccinated",
        vaccinate_type: employee?.vaccinate_type || "0",
        vaccination_date: employee?.vaccination_date || "",
        dose_number: employee?.dose_number || "",
      },
      validationSchema: employeesInfoFormSchema,
      onSubmit: async (values) => {
        await updateEmployee({
          ...values,
          employee_id: employee?.id!,
        });
      },
    });

  useEffect(() => {
    setValues({
      dni: employee?.dni || "",
      name: employee?.name || "",
      lastname: employee?.lastname || "",
      email: employee?.email || "",
      phone: employee?.phone || "",
      birthdate: employee?.birthdate || "",
      address: employee?.address || "",
      vaccination_status: employee?.vaccination_status || "Not Vaccinated",
      vaccinate_type: employee?.vaccinate_type || "0",
      vaccination_date: employee?.vaccination_date || "Not Vaccinated",
      dose_number: employee?.dose_number || "",
    });
  }, [employee]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {(uIsError || uIsSuccess) && (
            <Grid container>
              <Alert severity={uIsError ? "error" : "success"}>
                {uIsError
                  ? "Info cannot be updated"
                  : "Info updated successfully"}
              </Alert>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>DNI</InputLabel>
          <CustomTextField
            placeholder="Enter your DNI"
            {...getFieldProps("dni")}
            error={Boolean(errors.dni && touched.dni)}
            fullWidth
          />
          {errors.dni && touched.dni && (
            <FormHelperText error>{errors.dni}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Name</InputLabel>
          <CustomTextField
            placeholder="Enter your name"
            {...getFieldProps("name")}
            error={Boolean(errors.name && touched.name)}
            fullWidth
          />
          {errors.name && touched.name && (
            <FormHelperText error>{errors.name}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Lastname</InputLabel>
          <CustomTextField
            placeholder="Enter your lastname"
            {...getFieldProps("lastname")}
            error={Boolean(errors.lastname && touched.lastname)}
            fullWidth
          />
          {errors.lastname && touched.lastname && (
            <FormHelperText error>{errors.lastname}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Birth date</InputLabel>
          <CustomTextField
            type="date"
            placeholder="Enter your birth date"
            {...getFieldProps("birthdate")}
            error={Boolean(errors.birthdate && touched.birthdate)}
            fullWidth
          />
          {errors.birthdate && touched.birthdate && (
            <FormHelperText error>{errors.birthdate}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Email</InputLabel>
          <CustomTextField
            placeholder="Enter your email"
            {...getFieldProps("email")}
            error={Boolean(errors.email && touched.email)}
            fullWidth
          />
          {errors.email && touched.email && (
            <FormHelperText error>{errors.email}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Phone</InputLabel>
          <CustomTextField
            placeholder="Enter your phone"
            {...getFieldProps("phone")}
            error={Boolean(errors.phone && touched.phone)}
            fullWidth
          />
          {errors.phone && touched.phone && (
            <FormHelperText error>{errors.phone}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Address</InputLabel>
          <CustomTextField
            placeholder="Enter your address"
            {...getFieldProps("address")}
            error={Boolean(errors.address && touched.address)}
            fullWidth
          />
          {errors.address && touched.address && (
            <FormHelperText error>{errors.address}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Vaccination status</InputLabel>
          <CustomTextField
            select
            placeholder="Enter your vaccination status"
            {...getFieldProps("vaccination_status")}
            error={Boolean(
              errors.vaccination_status && touched.vaccination_status
            )}
            fullWidth
          >
            <MenuItem value="0" disabled>
              Select
            </MenuItem>
            <MenuItem value="Vaccinated">Vaccinated</MenuItem>
            <MenuItem value="Not Vaccinated">Not vaccinated</MenuItem>
          </CustomTextField>
          {errors.vaccination_status && touched.vaccination_status && (
            <FormHelperText error>{errors.vaccination_status}</FormHelperText>
          )}
        </Grid>
        {values.vaccination_status === "Vaccinated" && (
          <>
            <Grid item xs={12}>
              <InputLabel>Vaccinate type</InputLabel>
              <CustomTextField
                select
                placeholder="Enter your vaccinate type"
                {...getFieldProps("vaccinate_type")}
                error={Boolean(errors.vaccinate_type && touched.vaccinate_type)}
                fullWidth
              >
                <MenuItem value="0" disabled>
                  Select one
                </MenuItem>
                <MenuItem value="Sputnik">Sputnik</MenuItem>
                <MenuItem value="AstraZeneca">AstraZeneca</MenuItem>
                <MenuItem value="Pfizer">Pfizer</MenuItem>
                <MenuItem value="Jhonson&Jhonson">Jhonson&Jhonson</MenuItem>
              </CustomTextField>
              {errors.vaccinate_type && touched.vaccinate_type && (
                <FormHelperText error>{errors.vaccinate_type}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Vaccination date</InputLabel>
              <CustomTextField
                type="date"
                placeholder="Enter your vaccination date"
                {...getFieldProps("vaccination_date")}
                error={Boolean(
                  errors.vaccination_date && touched.vaccination_date
                )}
                fullWidth
              />
              {errors.vaccination_date && touched.vaccination_date && (
                <FormHelperText error>{errors.vaccination_date}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Dose number</InputLabel>
              <CustomTextField
                placeholder="Enter your dose number"
                {...getFieldProps("dose_number")}
                error={Boolean(errors.dose_number && touched.dose_number)}
                fullWidth
              />
              {errors.dose_number && touched.dose_number && (
                <FormHelperText error>{errors.dose_number}</FormHelperText>
              )}
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <CustomAddButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={uIsLoading}
            startIcon={<AddCircleOutline />}
            endIcon={uIsLoading && <CircularProgress size={12} />}
            fullWidth
          >
            Update
          </CustomAddButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdateInfoForm;
