import { mainApi } from "../../../../api/mainApi";
import { middlewareApi } from "../../../../api/middleware";
import { Employee } from "../interfaces/employees.interface";
import { setEmployee } from "./employeeInfoSlice";

export const employeeInfoTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["EMPLOYEE_INFO"],
});

export const employeeInfoApi = employeeInfoTags.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeInfo: builder.query<
      Employee,
      {
        employee_id: number;
      }
    >({
      queryFn: async ({ employee_id }, { dispatch }) => {
        try {
          const { data } = await mainApi.get<Employee>(
            `/employees/${employee_id}`
          );

          dispatch(setEmployee(data));

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result) => [{ type: "EMPLOYEE_INFO", id: "LIST" }],
    }),

    updateEmployeeInfo: builder.mutation<
      Employee,
      {
        employee_id: number;
        dni: string;
        name: string;
        lastname: string;
        email: string;
        phone: string;
        address: string;
        birthdate: string;
        vaccination_status: string;
        vaccinate_type: string;
        dose_number: string;
        vaccination_date: string;
      }
    >({
      queryFn: async (
        {
          employee_id,
          dni,
          name,
          lastname,
          email,
          phone,
          address,
          birthdate,
          vaccination_status,
          vaccinate_type,
          vaccination_date,
          dose_number,
        },
        { dispatch, getState }
      ) => {
        try {
          const { data } = await mainApi.put<Employee>(
            `/employees/${employee_id}`,
            {
              dni,
              name,
              lastname,
              email,
              phone,
              address,
              birthdate,
              vaccination_status,
              vaccinate_type,
              vaccination_date,
              dose_number,
            }
          );

          // const vehiclesList
          // dispatch(setVehiclesList(data));

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "EMPLOYEE_INFO", id: "LIST" }],
    }),
  }),
});

export const { useGetEmployeeInfoQuery, useUpdateEmployeeInfoMutation } =
  employeeInfoApi;
