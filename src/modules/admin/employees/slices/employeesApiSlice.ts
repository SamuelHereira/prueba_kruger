import { mainApi } from "../../../../api/mainApi";
import { middlewareApi } from "../../../../api/middleware";
import { Employee } from "../interfaces/employees.interface";
import { setEmployeesList } from "./employeesSlice";

export const employeesTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["EMPLOYEES"],
});

export const employeesApi = employeesTags.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], {}>({
      queryFn: async ({}, { dispatch }) => {
        try {
          const { data } = await mainApi.get<Employee[]>(`/employees`);

          dispatch(setEmployeesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                (vehicle) =>
                  ({
                    type: "EMPLOYEES",
                    id: vehicle.id,
                  } as const)
              ),
              { type: "EMPLOYEES", id: "LIST" },
            ]
          : [{ type: "EMPLOYEES", id: "LIST" }],
    }),

    addEmployee: builder.mutation<
      Employee[],
      {
        dni: string;
        name: string;
        lastname: string;
        email: string;
      }
    >({
      queryFn: async ({ dni, name, lastname, email }, { dispatch }) => {
        try {
          const { data } = await mainApi.post<Employee>(`/employees`, {
            dni,
            name,
            lastname,
            email,
          });

          if (data.id) {
            const { data: user } = await mainApi.post<Employee>(`/register`, {
              email,
              password: dni,
              employee_id: data.id,
            });
          }

          // dispatch(setVehiclesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "EMPLOYEES", id: "LIST" }],
    }),

    updateEmployee: builder.mutation<
      Employee[],
      {
        employee_id: number;
        dni: string;
        name: string;
        lastname: string;
        email: string;
        phone: string;
      }
    >({
      queryFn: async (
        { employee_id, dni, name, lastname, email, phone },
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
            }
          );

          // const vehiclesList
          // dispatch(setVehiclesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "EMPLOYEES", id: "LIST" }],
    }),

    deleteEmployee: builder.mutation<
      Employee[],
      {
        employee_id: number;
      }
    >({
      queryFn: async ({ employee_id }, { dispatch }) => {
        try {
          const { data } = await mainApi.delete<Employee[]>(
            `/employees/${employee_id}`
          );

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "EMPLOYEES", id: "LIST" }],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi;
