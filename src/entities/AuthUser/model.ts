export interface AutUser {
  id: string;
  username: string;
  email?: string;
}

export interface AuthState {
  user: AutUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
