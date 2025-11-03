import React from "react";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageTitle}>Добро пожаловать в приложение!</h1>

      <div className={styles.homePageContent}>
        <p className={styles.homePageInfoDescription}>
          Это главная страница вашего приложения, построенного с использованием
          FSD архитектуры.
        </p>

        <div className={styles.homePageInfoBlock}>
          <h3 className={styles.homePageInfoTitle}>Информация о системе:</h3>
          <div className={styles.homePageInfoList}>
            <p className={styles.homePageInfoItem}>
              <strong>Архитектура:</strong> Feature-Sliced Design (FSD)
            </p>
            <p className={styles.homePageInfoItem}>
              <strong>Стиль:</strong> Windows 95
            </p>
            <p className={styles.homePageInfoItem}>
              <strong>Состояние:</strong> Zustand
            </p>
            <p className={styles.homePageInfoItem}>
              <strong>Роутинг:</strong> React Router
            </p>
            <p className={styles.homePageInfoItem}>
              <strong>Стили:</strong> SCSS Modules
            </p>
          </div>
        </div>

        <div className={styles.homePageNavigationInfo}>
          <p className={styles.homePageNavigationText}>
            <strong>Навигация:</strong> Используйте меню или кнопки для перехода
            между страницами
          </p>
        </div>
      </div>
    </div>
  );
};
