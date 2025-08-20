import { create } from "zustand";
import { AuthState } from "../model";
import { api } from "../api";

interface AuthActions {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Actions
  login: async (username: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      // Имитация API запроса
      const response = await api.methods.login({ username, password });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Произошла ошибка",
        isLoading: false,
      });
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));
