import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Role, User } from "../interfaces/auth.interfaces";

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoggingIn: false,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        user: User;
        role: Role;
      }>
    ) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoggingIn = false;
      state.role = action.payload.role;
    },
    setLoggingIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggingIn = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.isLoggingIn = false;
      state.role = null;
    },
  },
});

export const { login, setLoggingIn, logout } = authSlice.actions;

export default authSlice.reducer;
