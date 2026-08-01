import React, { useState } from "react";
import FeeList from "./FeeList";
import AddFee from "./AddFee";

function AccountantDashboard() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Accountant Dashboard</h1>

      <AddFee setRefresh={setRefresh} />

      <FeeList refresh={refresh} />
    </div>
  );
}

export default AccountantDashboard;
