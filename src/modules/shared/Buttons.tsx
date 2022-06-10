import { Button, ButtonProps, styled } from "@mui/material";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  fontSize: "1em",
  fontWeight: "bold",
  backgroundColor: "#B7C0EE",
  borderColor: "#B7C0EE",
  borderRadius: "12px",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: ".7em 2em",
  margin: "5px",
  color: "#7067CF",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#B7C0EE",
    borderColor: "#B7C0EE",
    color: "white",
    borderWidth: "1px",
  },
}));

export const CustomAddButton = styled(Button)<ButtonProps>(() => ({
  fontSize: "1em",
  fontWeight: "bold",
  backgroundColor: "#7067CF",
  borderColor: "#7067CF",
  borderRadius: "12px",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: ".7em 2em",
  margin: "5px",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#49419e",
    borderColor: "#49419e",
    color: "white",
    borderWidth: "1px",
  },
}));

export const CustomTextButton = styled(Button)<ButtonProps>(() => ({
  fontSize: "1em",
  fontWeight: "bold",
  backgroundColor: "#7067CF",
  borderColor: "#7067CF",
  borderRadius: "12px",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: ".7em 2em",
  margin: "5px",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#49419e",
    borderColor: "#49419e",
    color: "white",
    borderWidth: "1px",
  },
}));
