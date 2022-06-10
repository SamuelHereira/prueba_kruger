export interface AuthState {
  user: User | null;
  isAuth: boolean;
  isLoggingIn: boolean;
  role: Role | null;
}

export interface User {
  id: number;
  email: string;
  password: string;
  employee_id?: number;
}

export interface Role {
  role_id: number;
  user_id: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
