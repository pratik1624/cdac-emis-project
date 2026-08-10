import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaExclamationCircle,
  FaReceipt,
} from "react-icons/fa";

export default function FeeSummaryCards() {
  return (
    <div className="dashboard-grid fees-summary">
      <DashboardCard
        title="Total Fees"
        value="₹75,000"
        subtitle="Academic Fees"
        icon={<FaMoneyBillWave />}
      />

      <DashboardCard
        title="Paid"
        value="₹50,000"
        subtitle="Fees Paid"
        icon={<FaCheckCircle />}
      />

      <DashboardCard
        title="Pending"
        value="₹25,000"
        subtitle="Outstanding"
        icon={<FaExclamationCircle />}
      />

      <DashboardCard
        title="Transactions"
        value="4"
        subtitle="Payment Records"
        icon={<FaReceipt />}
      />
    </div>
  );
}
