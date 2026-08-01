import {
    FaWallet,
    FaCheckCircle,
    FaClock,
    FaCalendarAlt
} from "react-icons/fa";

export default function PaymentSummary() {

    return (

        <div className="attendance-overview">

            <h4 className="attendance-card-title">

                Payment Summary

            </h4>

            <div className="result-summary-list">

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaWallet className="summary-icon" />

                        <span>Total Fees</span>

                    </div>

                    <strong>₹1,20,000</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaCheckCircle className="summary-icon text-success" />

                        <span>Paid Amount</span>

                    </div>

                    <strong>₹90,000</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaClock className="summary-icon text-warning" />

                        <span>Pending Amount</span>

                    </div>

                    <strong>₹30,000</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaCalendarAlt className="summary-icon" />

                        <span>Next Due Date</span>

                    </div>

                    <strong>15 Aug 2026</strong>

                </div>

            </div>

        </div>

    );

}