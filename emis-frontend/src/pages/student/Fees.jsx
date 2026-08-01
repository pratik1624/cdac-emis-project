import FeeSummaryCards from "../../components/studentComponent/fees/FeeSummaryCards";
import FeeDetailsTable from "../../components/studentComponent/fees/FeeDetailsTable";
import TransactionHistory from "../../components/studentComponent/fees/TransactionHistory";
import PaymentSummary from "../../components/studentComponent/fees/PaymentSummary";
import FeeInstructions from "../../components/studentComponent/fees/FeeInstructions";

import "../../styles/fees.css";

export default function Fees() {
  return (
    <div className="container-fluid">
      {/* Page Header */}

      <div className="fees-header">
        <h2 className="page-title">Fees</h2>

        <p className="page-subtitle">
          View your fee details and payment history.
        </p>
      </div>

      {/* Summary Cards */}

      <FeeSummaryCards />

      <ul className="nav nav-tabs fees-tabs mb-3" id="feesTabs" role="tablist">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#fee-details"
            type="button"
          >
            Fee Details
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#transactions"
            type="button"
          >
            Transaction History
          </button>
        </li>
      </ul>

      <div className="tab-content mb-4">
        <div className="tab-pane fade show active" id="fee-details">
          <FeeDetailsTable />
        </div>

        <div className="tab-pane fade" id="transactions">
          <TransactionHistory />
        </div>
      </div>

      {/* Bottom Cards */}

      <div className="fees-bottom">
        <PaymentSummary />

        <FeeInstructions />
      </div>
    </div>
  );
}
