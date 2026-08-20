import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
  FaUserTie,
  FaBullhorn,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function AdminSidebar() {
  const { logout } = useAuth();
  return (
    <div className="student-sidebar">
      <div className="sidebar-logo">
        <h3>
          <FaGraduationCap className="me-2" />
          EMIS
        </h3>

        <p>Admin Portal</p>
      </div>

      <div className="sidebar-menu">
        <NavLink to="/admin/dashboard" className="sidebar-link">
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink to="/admin/students" className="sidebar-link">
          <FaUserGraduate />
          Students
        </NavLink>

        <NavLink to="/admin/faculties" className="sidebar-link">
          <FaChalkboardTeacher />
          Faculty
        </NavLink>

        <NavLink to="/admin/departments" className="sidebar-link">
          <FaBuilding />
          Departments
        </NavLink>

        <NavLink to="/admin/subjects" className="sidebar-link">
          <FaBook />
          Subjects
        </NavLink>

        <NavLink to="/admin/notices" className="sidebar-link">
          <FaBullhorn />
          Notices
        </NavLink>

        <NavLink to="/admin/settings" className="sidebar-link">
          <FaCog />
          Settings
        </NavLink>
      </div>

      <div className="sidebar-footer">
        <button className="btn btn-light w-100" onClick={logout}>
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </div>
  );
}
