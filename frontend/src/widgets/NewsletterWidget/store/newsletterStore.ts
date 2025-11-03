import { create } from "zustand";

interface NewsletterState {
  isVisible: boolean;
  isSubscribed: boolean;
  email: string;
  isLoading: boolean;
  error: string | null;
}

interface NewsletterActions {
  showWidget: () => void;
  hideWidget: () => void;
  setEmail: (email: string) => void;
  subscribe: (email: string) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

type NewsletterStore = NewsletterState & NewsletterActions;

export const useNewsletterStore = create<NewsletterStore>((set, get) => ({
  // Initial state
  isVisible: true,
  isSubscribed: false,
  email: "",
  isLoading: false,
  error: null,

  // Actions
  showWidget: () => set({ isVisible: true }),

  hideWidget: () => set({ isVisible: false }),

  setEmail: (email: string) => set({ email }),

  subscribe: async (email: string) => {
    if (!email.trim()) {
      set({ error: "Пожалуйста, введите email" });
      return;
    }

    if (!email.includes("@")) {
      set({ error: "Пожалуйста, введите корректный email" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      // Имитация API запроса
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // В реальном приложении здесь был бы API запрос
      set({
        isSubscribed: true,
        isLoading: false,
        error: null,
      });

      // Скрываем виджет через 3 секунды после успешной подписки
      setTimeout(() => {
        get().hideWidget();
      }, 3000);
    } catch (error) {
      set({
        error: "Произошла ошибка при подписке. Попробуйте позже.",
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),

  reset: () =>
    set({
      isVisible: true,
      isSubscribed: false,
      email: "",
      isLoading: false,
      error: null,
    }),
}));
