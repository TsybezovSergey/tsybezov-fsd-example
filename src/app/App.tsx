import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.vars.scss";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
