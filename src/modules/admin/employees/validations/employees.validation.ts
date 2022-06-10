import * as yup from "yup";

export const employeesFormSchema = yup.object().shape({
  dni: yup
    .string()
    .matches(/^[0-9]{10}$/, "The dni is not valid")
    .required("DNI is required")
    .min(10, "DNI must be 10 characters")
    .max(10, "DNI must be 10 characters"),
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name must be only letters"),
  lastname: yup
    .string()
    .required("Lastname is required")
    .matches(/^[a-zA-Z\s]+$/, "Lastname must be only letters"),
  email: yup
    .string()
    .email("The email is not valid")
    .required("Email is required"),
});
