import React from "react";
import { Win95Button } from "../../../shared/ui/Win95Button/Win95Button";
import { useAuthStore } from "../../../entities/AuthUser/store/authStore";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className={styles["home-page"]}>
      <h1 className={styles["home-page__title"]}>
        Добро пожаловать в приложение!
      </h1>

      <div className={styles["home-page__content"]}>
        <p className={styles["home-page__description"]}>
          Это главная страница вашего приложения, построенного с использованием
          FSD архитектуры.
        </p>

        <div className={styles["home-page__info-block"]}>
          <h3 className={styles["home-page__info-title"]}>
            Информация о системе:
          </h3>
          <div className={styles["home-page__info-list"]}>
            <p className={styles["home-page__info-item"]}>
              <strong>Архитектура:</strong> Feature-Sliced Design (FSD)
            </p>
            <p className={styles["home-page__info-item"]}>
              <strong>Стиль:</strong> Windows 95
            </p>
            <p className={styles["home-page__info-item"]}>
              <strong>Состояние:</strong> Zustand
            </p>
            <p className={styles["home-page__info-item"]}>
              <strong>Роутинг:</strong> React Router
            </p>
            <p className={styles["home-page__info-item"]}>
              <strong>Стили:</strong> SCSS Modules
            </p>
          </div>
        </div>

        <div className={styles["home-page__auth-block"]}>
          <h4 className={styles["home-page__auth-title"]}>
            Статус авторизации:
          </h4>
          <p className={styles["home-page__auth-info"]}>
            <strong>Пользователь:</strong> {user?.username}
          </p>
          <p className={styles["home-page__auth-email"]}>
            <strong>Email:</strong> {user?.email}
          </p>
          <Win95Button onClick={logout}>Выйти из системы</Win95Button>
        </div>

        <div className={styles["home-page__navigation-info"]}>
          <p className={styles["home-page__navigation-text"]}>
            <strong>Навигация:</strong> Используйте меню или кнопки для перехода
            между страницами
          </p>
        </div>
      </div>
    </div>
  );
};
