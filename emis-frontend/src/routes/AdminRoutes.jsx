import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/admin/Dashboard";
import Students from "../pages/admin/Students";
import Faculty from "../pages/admin/Faculty";
import Courses from "../pages/admin/Courses";
import Notices from "../pages/admin/Notices";

export default function AdminRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRole="ADMIN" />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/faculty" element={<Faculty />} />
      <Route path="/admin/courses" element={<Courses />} />
      <Route path="/admin/notices" element={<Notices />} />
    </Route>
  );
}