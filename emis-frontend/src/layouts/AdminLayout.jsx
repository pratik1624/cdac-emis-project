import AdminSidebar from "../components/layout/AdminSidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Navbar />

        <div
          style={{
            flex: 1,
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );

  
}
