import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";

import { Header } from "../components/Header.jsx";
import { CREDIT_PAGE, LANDING_PAGE, LEASING_PAGE } from "../constants/pages.js";

export function DashboardLayout() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to={LANDING_PAGE} />;
  }

  const navigationItems = [
    { text: "Лендинг", url: LANDING_PAGE },
    { text: "Лизинг", url: LEASING_PAGE },
    { text: "Кредиты", url: CREDIT_PAGE },
  ];

  const startContent = (
    <div className="icon">
      <img src="/ticon.png" alt="logo" />
      <h1>SoftHand</h1>
    </div>
  );

  const centerContent = (
    <div className="flex">
      {navigationItems.map((item) => (
        <div
          key={item.text}
          className="font-bold mr-2 cursor-pointer"
          onClick={() => navigate(item.url)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );

  const endContent = (
    <>
      <div className="flex align-items-center gap-2">
        <Avatar icon="pi pi-user" shape="circle" />
        <span className="font-bold">
          {user.firstName} {user.lastName}
        </span>
      </div>
    </>
  );

  return (
    <div className="dashboard">
      <div className="container">
        <Header />

        <main className="root-content">
          <Toolbar
            start={startContent}
            center={centerContent}
            end={endContent}
            className="border-round-3xl my-3"
          />

          <Outlet />
        </main>
      </div>
    </div>
  );
}
