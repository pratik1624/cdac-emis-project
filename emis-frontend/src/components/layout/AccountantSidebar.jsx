import "../../styles/accountantStyles/accountantSidebar.css";

import { FaHome, FaUser, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AccountantSidebar() {
  const { logout } = useAuth();

  const menu = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/accountant/dashboard",
    },

    {
      title: "Profile",
      icon: <FaUser />,
      path: "/accountant/profile",
    },

    {
      title: "Fees",
      icon: <FaMoneyBillWave />,
      path: "/accountant/fees",
    },
  ];

  return (
    <aside className="accountant-sidebar">
      <div className="sidebar-logo">
        <h3>🎓 EMIS</h3>

        <p>Accountant Portal</p>
      </div>

      <div className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.icon}

            {item.title}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="btn btn-light w-100 rounded-3" onClick={logout}>
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </aside>
  );
}
