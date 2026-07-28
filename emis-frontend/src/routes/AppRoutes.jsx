import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import PublicRoute from "./PublicRoute";
import AdminDashboard from "../pages/admin/Dashboard";
import FacultyDashboard from "../pages/faculty/Dashboard";

import StudentDashboard from "../pages/student/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/student/Profile";
import Attendance from "../pages/student/Attendance";
import Results from "../pages/student/Results";
import Fees from "../pages/student/Fees";
import Notices from "../pages/student/Notices";

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
<Route path="/student" element={<MainLayout />}>
    <Route
      path="dashboard"
      element={<StudentDashboard />}
    />

    <Route
      path="profile"
      element={<Profile />}
    />

    <Route
      path="attendance"
      element={<Attendance />}
    />

    <Route
      path="results"
      element={<Results />}
    />

    <Route
      path="fees"
      element={<Fees />}
    />

    <Route
      path="notices"
      element={<Notices />}
    />

  </Route>
</Route>

      </Route>

    </Routes>
  );
}