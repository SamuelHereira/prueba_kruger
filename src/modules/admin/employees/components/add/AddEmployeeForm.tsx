import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { CustomAddButton } from "../../../../shared/Buttons";
import { CustomTextField } from "../../../../shared/Inputs";
import {
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
} from "../../slices/employeesApiSlice";
import { employeesFormSchema } from "../../validations/employees.validation";

const AddEmployeeForm = () => {
  const { employeeSelectedId, employeesList } = useAppSelector(
    (state) => state.employees
  );

  const [addEmployee, { data, error, isLoading, isError, isSuccess }] =
    useAddEmployeeMutation();

  const [
    updateEmployee,
    {
      data: uData,
      error: uError,
      isLoading: uIsLoading,
      isError: uIsError,
      isSuccess: uIsSuccess,
    },
  ] = useUpdateEmployeeMutation();

  const employeeSelected = employeesList?.find(
    (employee) => employee.id === employeeSelectedId
  );

  const { getFieldProps, errors, touched, values, setValues, handleSubmit } =
    useFormik({
      initialValues: {
        dni: employeeSelected?.dni || "",
        name: employeeSelected?.name || "",
        lastname: employeeSelected?.lastname || "",
        email: employeeSelected?.email || "",
        phone: employeeSelected?.phone || "",
        birthdate: employeeSelected?.birthdate || "",
        address: employeeSelected?.address || "",
      },
      validationSchema: employeesFormSchema,
      onSubmit: async (values) => {
        if (!employeeSelectedId) {
          await addEmployee({
            ...values,
          });
        } else {
          await updateEmployee({
            ...values,
            employee_id: employeeSelectedId,
          });
        }
      },
    });

  useEffect(() => {
    setValues({
      dni: employeeSelected?.dni || "",
      name: employeeSelected?.name || "",
      lastname: employeeSelected?.lastname || "",
      email: employeeSelected?.email || "",
      phone: employeeSelected?.phone || "",
      birthdate: employeeSelected?.birthdate || "",
      address: employeeSelected?.address || "",
    });
  }, [employeeSelected]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {(isError || uIsError || isSuccess || uIsSuccess) && (
            <Grid container>
              <Alert severity={isError || uIsError ? "error" : "success"}>
                {isError || uIsError
                  ? isError
                    ? "An error occurred"
                    : "Employee cannot be updated"
                  : isSuccess
                  ? "Employee added successfully"
                  : "Employee updated successfully"}
              </Alert>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>DNI</InputLabel>
          <CustomTextField
            placeholder="Enter the employee's DNI"
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
            placeholder="Enter the employee's name"
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
            placeholder="Enter the employee's lastname"
            {...getFieldProps("lastname")}
            error={Boolean(errors.lastname && touched.lastname)}
            fullWidth
          />
          {errors.lastname && touched.lastname && (
            <FormHelperText error>{errors.lastname}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Email</InputLabel>
          <CustomTextField
            placeholder="Enter the employee's email"
            {...getFieldProps("email")}
            error={Boolean(errors.email && touched.email)}
            fullWidth
          />
          {errors.email && touched.email && (
            <FormHelperText error>{errors.email}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <CustomAddButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading || uIsLoading}
            startIcon={<AddCircleOutline />}
            endIcon={
              isLoading || (uIsLoading && <CircularProgress size={12} />)
            }
            fullWidth
          >
            {employeeSelectedId ? "Update" : "Add"}
          </CustomAddButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddEmployeeForm;
