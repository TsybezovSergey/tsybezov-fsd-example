import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.vars.scss";
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PageTemplate } from "./template/PageTemplate";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/Products";
import { ROUTES } from "../shared";

const CACHE_LIFE_TIME = 1000 * 60 * 1;

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    gcTime: CACHE_LIFE_TIME,
    staleTime: CACHE_LIFE_TIME,
  },
};

export const queryClient = new QueryClient({
  defaultOptions,
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.MAIN.path}
            element={
              <PageTemplate>
                <HomePage />
              </PageTemplate>
            }
          />
          <Route
            path={ROUTES.PRODUCTS.path}
            element={
              <PageTemplate>
                <ProductsPage />
              </PageTemplate>
            }
          />
          <Route element={<Navigate to={ROUTES.MAIN.path} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
