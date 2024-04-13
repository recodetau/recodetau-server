import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "../components/Header.jsx";
import { LANDING_PAGE } from "../constants/pages.js";

export function DashboardLayout() {
  const user = useSelector((state) => state.user.user);

  if (user) {
    return <Navigate to={LANDING_PAGE} />;
  }

  return (
    <div className="container">
      <Header />

      <main className="root-content">
        <Outlet />
      </main>
    </div>
  );
}
