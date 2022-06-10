import {
  Alert,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { CustomButton } from "../../shared/Buttons";
import { CustomInputLabel, CustomTextField } from "../../shared/Inputs";
import { useLoginMutation } from "../slices/authApiSlice";
import { login } from "../slices/authSlice";
import { loginSchema } from "../validations/auth.validation";

const LoginForm = () => {
  const [signin, { isLoading, isError, error }] = useLoginMutation();

  const { values, touched, errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signin({
        ...values,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {isError && (
            <Alert severity="error">
              Error: {(error as any).response.data}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <CustomInputLabel>Email</CustomInputLabel>
          <CustomTextField
            fullWidth
            error={Boolean(errors.email && touched.email)}
            {...getFieldProps("email")}
          />
          {errors.email && touched.email && (
            <FormHelperText
              sx={{
                color: "white !important",
              }}
              error
            >
              {errors.email}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <CustomInputLabel>Password</CustomInputLabel>
          <CustomTextField
            type="password"
            error={Boolean(errors.password && touched.password)}
            fullWidth
            {...getFieldProps("password")}
          />
          {errors.password && touched.password && (
            <FormHelperText
              sx={{
                color: "white !important",
              }}
              error
            >
              {errors.password}
            </FormHelperText>
          )}
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <CustomButton
            variant="contained"
            type="submit"
            disabled={isLoading}
            endIcon={isLoading && <CircularProgress size={12} />}
          >
            Sign in
          </CustomButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
