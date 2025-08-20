import React, { useEffect } from "react";
import { Win95Input } from "../../../shared/ui/Win95Input/Win95Input";
import { Win95Button } from "../../../shared/ui/Win95Button/Win95Button";
import { Win95Label } from "../../../shared/ui/Win95Label/Win95Label";
import { Win95Error } from "../../../shared/ui/Win95Error/Win95Error";
import { useNewsletterStore } from "../store/newsletterStore";
import styles from "./NewsletterWidget.module.scss";
import { Win95Modal } from "../../../shared/ui/Win95Modal/Win95Modal";

export const NewsletterWidget: React.FC = () => {
  const {
    isVisible,
    isSubscribed,
    email,
    isLoading,
    error,
    hideWidget,
    setEmail,
    subscribe,
    clearError,
  } = useNewsletterStore();

  // Очищаем ошибку при изменении email
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [email, error, clearError]);

  const handleSubscribe = async () => {
    await subscribe(email);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  if (!isVisible) {
    return null;
  }

  if (isSubscribed) {
    return (
      <Win95Modal
        className={styles.newsletterWidget}
        title="Подписка оформлена!"
        onClose={hideWidget}
        footer={<>Мы не будем спамить. Только важные новости!</>}
      >
        <>
          <div className={styles.content}>
            <p className={styles.successMessage}>
              Спасибо за подписку! Теперь вы будете получать новости от Windows
              95.
            </p>
            <p className={styles.emailInfo}>
              Email: <strong>{email}</strong>
            </p>
          </div>
        </>
      </Win95Modal>
    );
  }
  return (
    <Win95Modal
      className={styles.newsletterWidget}
      title="Подписка на рассылку"
      description="Подпишитесь на рассылку новостей от Windows 95 и будьте в курсе всех обновлений!"
      onClose={hideWidget}
      footer={<>Мы не будем спамить. Только важные новости!</>}
    >
      <>
        <Win95Error message={error || ""} />

        <div className={styles.formGroup}>
          <Win95Label htmlFor="newsletter-email">Email:</Win95Label>
          <Win95Input
            id="newsletter-email"
            value={email}
            onChange={(value) => setEmail(value)}
            placeholder="Введите ваш email"
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className={styles.actions}>
          <Win95Button
            onClick={handleSubscribe}
            disabled={isLoading}
            className={styles.subscribeButton}
          >
            {isLoading ? "Подписка..." : "Подписаться"}
          </Win95Button>
        </div>
      </>
    </Win95Modal>
  );
};
