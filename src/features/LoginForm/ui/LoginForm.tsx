import React, { useEffect } from "react";
import { Win95Input } from "../../../shared/ui/Win95Input/Win95Input";
import { Win95Button } from "../../../shared/ui/Win95Button/Win95Button";
import { Win95Label } from "../../../shared/ui/Win95Label/Win95Label";
import { Win95Error } from "../../../shared/ui/Win95Error/Win95Error";
import { useAuthStore } from "../../../entities/AuthUser/store/authStore";
import { useLoginFormStore } from "../store/loginFormStore";
import { useNotificationStore } from "../../../app/store/notificationStore";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import { Win95Modal } from "../../../shared/ui/Win95Modal/Win95Modal";

export const LoginForm: React.FC = () => {
  const {
    login,
    isLoading: authLoading,
    error: authError,
    clearError: clearAuthError,
  } = useAuthStore();
  const {
    username,
    password,
    isLoading: formLoading,
    error: formError,
    setUsername,
    setPassword,
    setLoading: setFormLoading,
    setError: setFormError,
    clearForm,
    clearError: clearFormError,
  } = useLoginFormStore();
  const { showMessage } = useNotificationStore();
  const navigate = useNavigate();

  // Очищаем ошибки при изменении полей
  useEffect(() => {
    if (authError) {
      clearAuthError();
    }
    if (formError) {
      clearFormError();
    }
  }, [
    username,
    password,
    authError,
    formError,
    clearAuthError,
    clearFormError,
  ]);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setFormError("Пожалуйста, заполните все поля");
      return;
    }

    setFormLoading(true);
    try {
      await login(username, password);
      clearForm(); // Очищаем форму при успешном входе
      showMessage(`Добро пожаловать, ${username}!`, "success", 5000);
    } catch (error) {
      // Ошибка уже обрабатывается в authStore
    } finally {
      setFormLoading(false);
      navigate("/");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const isLoading = authLoading || formLoading;
  const error = formError || authError;

  return (
    <Win95Modal
      title="Вход в систему"
      description="Введите ваше имя пользователя и пароль"
      className={styles["login-form"]}
    >
      <div>
        <h1 className={styles["login-form__title"]}>Вход в систему</h1>

        <div className={styles["login-form__content"]}>
          <Win95Error message={error || ""} />

          <div className={styles["login-form__form-group"]}>
            <Win95Label htmlFor="username">Имя пользователя:</Win95Label>
            <Win95Input
              id="username"
              value={username}
              onChange={(value) => setUsername(value)}
              placeholder="Введите имя пользователя"
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className={styles["login-form__form-group"]}>
            <Win95Label htmlFor="password">Пароль:</Win95Label>
            <Win95Input
              id="password"
              type="password"
              value={password}
              onChange={(value) => setPassword(value)}
              placeholder="Введите пароль"
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className={styles["login-form__actions"]}>
            <Win95Button onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Вход..." : "Войти"}
            </Win95Button>
            <Win95Button onClick={() => console.log("Cancel clicked")}>
              Отмена
            </Win95Button>
          </div>

          <div className={styles["login-form__footer"]}>
            Для демонстрации используйте: admin / admin
          </div>
        </div>
      </div>
    </Win95Modal>
  );
};
