import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import FacultyDashboard from "../pages/faculty/Dashboard";
import StudentDashboard from "../pages/student/Dashboard";

export default function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* Login */}

      if(!isAuthenticated) {
      <Route path="/" element={<Login />} />
}

      {/* Admin */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* Faculty */}
      <Route
        path="/faculty/dashboard"
        element={<FacultyDashboard />}
      />

      {/* Student */}
      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />
    </Routes>
  );
}
