import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/student/Dashboard";
import Attendance from "../pages/student/Attendance";
import Results from "../pages/student/Results";
import Profile from "../pages/student/Profile";

export default function StudentRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRole="STUDENT" />}>
      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/student/attendance" element={<Attendance />} />
      <Route path="/student/results" element={<Results />} />
      <Route path="/student/profile" element={<Profile />} />
    </Route>
  );
}
