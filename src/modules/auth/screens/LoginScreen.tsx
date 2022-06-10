import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useLoginMutation, useRegisterMutation } from "../slices/authApiSlice";

const LoginScreen = () => {
  const [register] = useRegisterMutation();
  useEffect(() => {
    register({
      email: "admin@gmail.com",
      password: "admin",
    });
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B7C0EE",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "500px",
          width: "90%",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "#7067CF",
        }}
      >
        <Grid item xs={12} textAlign="center" mb={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
