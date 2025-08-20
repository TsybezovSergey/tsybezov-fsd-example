import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage/ui/LoginPage";
import { HomePage } from "../../pages/HomePage/ui/HomePage";
import { useAuthStore } from "../../entities/AuthUser/store/authStore";
import { PageTemplate } from "../template/PageTemplate";

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      {isAuthenticated ? (
        <Route
          path="/"
          element={
            <PageTemplate>
              <HomePage />
            </PageTemplate>
          }
        />
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};
