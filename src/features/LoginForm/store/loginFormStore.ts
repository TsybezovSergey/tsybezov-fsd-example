import { create } from "zustand";

interface LoginFormState {
  username: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

interface LoginFormActions {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearForm: () => void;
  clearError: () => void;
}

type LoginFormStore = LoginFormState & LoginFormActions;

export const useLoginFormStore = create<LoginFormStore>((set) => ({
  // Initial state
  username: "",
  password: "",
  isLoading: false,
  error: null,

  // Actions
  setUsername: (username: string) => set({ username }),
  
  setPassword: (password: string) => set({ password }),
  
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  
  setError: (error: string | null) => set({ error }),
  
  clearForm: () => set({ 
    username: "", 
    password: "", 
    error: null 
  }),
  
  clearError: () => set({ error: null }),
}));
