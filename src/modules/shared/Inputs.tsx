import {
  InputLabel,
  InputLabelProps,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";

export const CustomTextField = styled(TextField)<TextFieldProps>(() => ({
  fontSize: "1em",
  borderRadius: "12px",
  borderWidth: "1px",
  backgroundColor: "#F5F5F5",

  ".MuiOutlinedInput-root": {
    borderRadius: "12px !important",
    borderWidth: "1px",
    "&.Mui-focused": {
      outline: "none",
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#8D94BA",
      },
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#8D94BA",
  },
}));

export const CustomInputLabel = styled(InputLabel)<InputLabelProps>(() => ({
  fontSize: "1em",
  color: "white",
  textAlign: "center",
}));
