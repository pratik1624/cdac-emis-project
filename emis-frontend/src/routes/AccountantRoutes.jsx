import { Routes, Route, Navigate } from "react-router-dom";

import AccountantLayout from "../layouts/AccountantLayout";

import Dashboard from "../pages/accountant/Dashboard";
import Fees from "../pages/accountant/Fees";

export default function AccountantRoutes() {
  return (
    <Routes>
      <Route element={<AccountantLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="fees" element={<Fees />} />

        <Route path="profile" element={<div>Accountant Profile</div>} />

        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}
