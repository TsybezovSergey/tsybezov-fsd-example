import React from "react";
import { Win95Button } from "../../../shared/ui/Win95Button/Win95Button";
import { useAuthStore } from "../../../entities/AuthUser/store/authStore";
import styles from "./NavigationPanel.module.scss";
import { useNavigate } from "react-router-dom";

export const NavigationPanel: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className={styles.navigationPanel}>
      <div className={styles.leftSection}>
        <h2 className={styles.appTitle}>FSD App</h2>
        <nav className={styles.navigation}>
          <button onClick={() => navigate("/")} className={styles.navLink}>
            Главная
          </button>
          <button onClick={() => navigate("/login")} className={styles.navLink}>
            Авторизация
          </button>
        </nav>
      </div>

      <div className={styles.rightSection}>
        {isAuthenticated ? (
          <div className={styles.userInfo}>
            <span className={styles.username}>{user?.username}</span>
            <Win95Button onClick={logout} className={styles.logoutButton}>
              Выйти
            </Win95Button>
          </div>
        ) : (
          <div className={styles.authStatus}>
            <span className={styles.statusText}>Не авторизован</span>
            <Win95Button
              onClick={() => navigate("/login")}
              className={styles.loginButton}
            >
              Войти
            </Win95Button>
          </div>
        )}
      </div>
    </div>
  );
};
