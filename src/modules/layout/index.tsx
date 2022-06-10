import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Menu from "./Menu";
import { Logout } from "@mui/icons-material";
import { CustomTextButton } from "../shared/Buttons";
import { logout } from "../auth/slices/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#B7C0EE",
        }}
      >
        <Box
          p={2}
          sx={{
            backgroundColor: "#7067CF",
            color: "white",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Prueba Kruger - Samuel Hereira</Typography>
          <CustomTextButton onClick={handleLogout} endIcon={<Logout />}>
            Logout
          </CustomTextButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2em",
          }}
        >
          <Box
            p={2}
            sx={{
              width: "30vw",
              display: "flex",
              flexDirection: "column",
              gap: "2em",
            }}
          >
            <Menu />
          </Box>
          <Box
            p={2}
            sx={{
              width: "70vw",
              height: "80vh",
              overflow: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
