import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import PublicRoute from "./PublicRoute";
import AdminDashboard from "../pages/admin/Dashboard";
import FacultyDashboard from "../pages/faculty/Dashboard";
import StudentDashboard from "../pages/student/Dashboard";

import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Route */}
      <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
       </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>

        {/* Admin */}
        <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Faculty */}
        <Route element={<RoleRoute allowedRoles={["FACULTY"]} />}>
          <Route
            path="/faculty/dashboard"
            element={<FacultyDashboard />}
          />
        </Route>

        {/* Student */}
        <Route element={<RoleRoute allowedRoles={["STUDENT"]} />}>
          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          />
        </Route>

      </Route>

    </Routes>
  );
}