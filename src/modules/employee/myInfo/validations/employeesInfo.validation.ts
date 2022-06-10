import * as yup from "yup";

export const employeesInfoFormSchema = yup.object().shape({
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
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/[0-9]$/, "Phone must be only numbers"),
  birthdate: yup.string().required("Birthdate is required"),
  vaccination_status: yup.string().required("Vaccination status is required"),
  vaccinate_type: yup.string().when("vaccination_status", {
    is: "Vaccinated",
    then: yup
      .string()
      .notOneOf(["0", ""], "Vaccinate type is required")
      .required("Vaccinate type is required"),
  }),
  vaccination_date: yup.string().when("vaccination_status", {
    is: "Vaccinated",
    then: yup.string().required("Vaccination date is required"),
  }),
  dose_number: yup.string().when("vaccination_status", {
    is: "Vaccinated",
    then: yup.string().required("Dose number is required"),
  }),
});
