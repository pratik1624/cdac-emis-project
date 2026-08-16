import AccountantSidebar from "../components/layout/AccountantSidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function AccountantLayout() {
  return (
    <div className="layout">
      <AccountantSidebar />

      <div className="main-content">
        <Navbar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
