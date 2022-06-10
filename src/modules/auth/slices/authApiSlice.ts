import { mainApi } from "../../../api/mainApi";
import { middlewareApi } from "../../../api/middleware";
import { LoginResponse, User } from "../interfaces/auth.interfaces";
import { login } from "./authSlice";

export const authTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["AUTH"],
});

export const authApi = authTags.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      any,
      {
        email: string;
        password: string;
      }
    >({
      queryFn: async ({ email, password }, { dispatch }) => {
        try {
          const { data } = await mainApi.post<any>(`/signin`, {
            email,
            password,
          });

          if (data.user) {
            const { data: roles } = await mainApi.get<any>(`/user_roles`, {
              params: {
                user_id: data.user.id,
              },
            });
            dispatch(login({ user: data.user, role: roles[0] }));
          }

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
    }),

    register: builder.mutation<
      any,
      {
        email: string;
        password: string;
      }
    >({
      queryFn: async ({ email, password }, { dispatch }) => {
        try {
          const { data: users } = await mainApi.get<User[]>(`/users`);

          const isAdmin = users.find(
            (user) => user.email === "admin@gmail.com"
          );

          if (isAdmin) {
            return { error: "Admin already exists" };
          }

          const { data } = await mainApi.post<LoginResponse>(`/register`, {
            email,
            password,
          });

          return { data };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
