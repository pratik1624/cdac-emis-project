import {
  FaWallet,
  FaCheckCircle,
  FaExclamationCircle,
  FaPercentage
} from "react-icons/fa";

export default function PaymentSummary() {

  const totalFees = 75000;
  const paidFees = 50000;
  const pendingFees = totalFees - paidFees;
  const progress = (paidFees / totalFees) * 100;

  return (

    <div className="custom-card payment-summary-card">

      <div className="card-header-custom">

        <h4>

          Payment Summary

        </h4>

        <p>

          Current payment overview

        </p>

      </div>

      <div className="payment-progress">

        <div className="progress">

          <div
            className="progress-bar bg-success"
            style={{ width: `${progress}%` }}
          />

        </div>

        <span>

          {progress.toFixed(1)}% Paid

        </span>

      </div>

      <div className="payment-summary-list">

        <div className="payment-summary-item">

          <div className="summary-left">

            <FaWallet className="summary-icon primary" />

            <span>Total Fees</span>

          </div>

          <strong>

            ₹{totalFees.toLocaleString()}

          </strong>

        </div>

        <div className="payment-summary-item">

          <div className="summary-left">

            <FaCheckCircle className="summary-icon success" />

            <span>Paid Amount</span>

          </div>

          <strong>

            ₹{paidFees.toLocaleString()}

          </strong>

        </div>

        <div className="payment-summary-item">

          <div className="summary-left">

            <FaExclamationCircle className="summary-icon warning" />

            <span>Pending Amount</span>

          </div>

          <strong>

            ₹{pendingFees.toLocaleString()}

          </strong>

        </div>

        <div className="payment-summary-item">

          <div className="summary-left">

            <FaPercentage className="summary-icon success" />

            <span>Completion</span>

          </div>

          <strong>

            {progress.toFixed(1)}%

          </strong>

        </div>

      </div>

    </div>

  );

}