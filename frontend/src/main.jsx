import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/scss/index.scss";

import { store } from "./store";

import { IndexPage } from "./pages/IndexPage.jsx";
import { DashboardLayout } from "./layouts/DashboardLayout.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { INDEX_PAGE, LANDING_PAGE } from "./constants/pages.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />
          <Route element={<DashboardLayout />}>
            <Route index path={INDEX_PAGE} element={<IndexPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </Provider>
);
