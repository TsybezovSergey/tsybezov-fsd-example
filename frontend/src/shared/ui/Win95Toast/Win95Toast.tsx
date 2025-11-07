"use client";

import React, { useEffect, useState } from "react";
import styles from "./Win95Toast.module.scss";

type ToastMessage = {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
};

type Win95ToastProps = {
  message: ToastMessage;
  onClose: (id: string) => void;
};

export const Win95Toast: React.FC<Win95ToastProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose(message.id);
      }, 300); // Задержка для анимации исчезновения
    }, message.duration || 5000);

    return () => clearTimeout(timer);
  }, [message.id, message.duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(message.id), 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${styles.toast} ${styles[message.type]} ${styles.visible}`}
    >
      <div className={styles.content}>
        <span className={styles.message}>{message.message}</span>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};
