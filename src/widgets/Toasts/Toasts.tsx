import React from "react";
import { Win95Toast } from "../../shared/ui/Win95Toast/Win95Toast";
import { useNotificationStore } from "../../app/store/notificationStore";

export const Toasts: React.FC = () => {
  const { messages, removeMessage } = useNotificationStore();

  if (messages.length === 0) {
    return null;
  }

  return (
    <>
      {messages.map((message) => (
        <Win95Toast
          key={message.id}
          message={message}
          onClose={removeMessage}
        />
      ))}
    </>
  );
};
