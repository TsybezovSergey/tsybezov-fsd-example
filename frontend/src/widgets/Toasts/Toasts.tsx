"use client"

import React from "react";
import { Win95Toast } from "../../shared/ui/Win95Toast/Win95Toast";
import { useNotificationStore } from "../../entities/Notification/model/notificationStore";
import styles from "./Toasts.module.scss";

export const Toasts: React.FC = () => {
  const { messages, removeMessage } = useNotificationStore();

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className={styles.toasts}>
      {messages.map((message) => (
        <Win95Toast
          key={message.id}
          message={message}
          onClose={removeMessage}
        />
      ))}
    </div>
  );
};
