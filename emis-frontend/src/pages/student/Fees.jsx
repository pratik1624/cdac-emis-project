import FeeSummaryCards from "../../components/studentComponent/fees/FeeSummaryCards";
import FeeDetailsTable from "../../components/studentComponent/fees/FeeDetailsTable";
import TransactionHistory from "../../components/studentComponent/fees/TransactionHistory";
import PaymentSummary from "../../components/studentComponent/fees/PaymentSummary";
import FeeInstructions from "../../components/studentComponent/fees/FeeInstructions";

import "../../styles/studentStyles/fees.css";

export default function Fees() {
  return (
    <div className="container-fluid fees-page">
      {/* Header */}

      <div className="fees-header">
        <h2 className="page-title">Fees</h2>

        <p className="page-subtitle">
          View your fee details and payment history.
        </p>
      </div>

      {/* Summary Cards */}

      <FeeSummaryCards />

      {/* Fee Details */}

      <div className="fees-section">
        <FeeDetailsTable />
      </div>

      {/* Transaction History */}

      <div className="fees-section">
        <TransactionHistory />
      </div>

      {/* Bottom */}

      <div className="fees-bottom">
        <PaymentSummary />

        <FeeInstructions />
      </div>
    </div>
  );
}