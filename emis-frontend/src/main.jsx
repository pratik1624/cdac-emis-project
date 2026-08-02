import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/theme.css";
import "./styles/sidebar.css";
import "./styles/studentStyles/navbar.css";
import "./styles/studentStyles/layout.css";
import "./styles/studentStyles/dashboard.css";
import "./styles/global.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>

          <App />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />

        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
