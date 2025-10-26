export interface AuthResponse {
  accessToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthState {
  access_token: string | null;
  isLoading: boolean;
  error: string | null;
}
