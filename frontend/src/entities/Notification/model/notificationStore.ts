import { create } from "zustand";

interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
}

interface NotificationState {
  messages: ToastMessage[];
}

interface NotificationActions {
  showMessage: (
    message: string,
    type: ToastMessage["type"],
    duration?: number
  ) => void;
  removeMessage: (id: string) => void;
  clearAll: () => void;
}

type NotificationStore = NotificationState & NotificationActions;

export const useNotificationStore = create<NotificationStore>((set) => ({
  messages: [],
  showMessage: (
    message: string,
    type: ToastMessage["type"],
    duration?: number
  ) => {
    const id = Date.now().toString();
    const newMessage: ToastMessage = {
      id,
      message,
      type,
      duration,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },
  removeMessage: (id: string) => {
    set((state) => ({
      messages: state.messages.filter((msg) => msg.id !== id),
    }));
  },
  clearAll: () => {
    set({ messages: [] });
  },
}));
