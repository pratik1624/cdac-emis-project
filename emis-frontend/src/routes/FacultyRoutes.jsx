import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/faculty/Dashboard";
import Attendance from "../pages/faculty/Attendance";
import Results from "../pages/faculty/Results";
import Profile from "../pages/faculty/Profile";

export default function FacultyRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRole="FACULTY" />}>
      <Route path="/faculty/dashboard" element={<Dashboard />} />
      <Route path="/faculty/attendance" element={<Attendance />} />
      <Route path="/faculty/results" element={<Results />} />
      <Route path="/faculty/profile" element={<Profile />} />
    </Route>
  );
}