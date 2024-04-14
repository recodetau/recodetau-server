import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/scss/index.scss";

import { store } from "./store";

import { DashboardLayout } from "./layouts/DashboardLayout.jsx";
import { IndexPage } from "./pages/dashboard/IndexPage.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { LoginPage } from "./pages/auth/LoginPage.jsx";
import { RegistrationPage } from "./pages/auth/RegistrationPage.jsx";

import {
  CREDIT_PAGE,
  INDEX_PAGE,
  LANDING_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
} from "./constants/pages.js";
import { CreditPage } from "./pages/dashboard/CreditPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />

          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={REGISTER_PAGE} element={<RegistrationPage />} />

          <Route element={<DashboardLayout />}>
            <Route index path={INDEX_PAGE} element={<IndexPage />} />
            <Route path={CREDIT_PAGE} element={<CreditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </Provider>
);
