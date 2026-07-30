import {
    FaMoneyBillWave,
    FaCheckCircle,
    FaClock,
    FaWallet
} from "react-icons/fa";

export default function FeeSummaryCards() {

    return (

        <div className="row mb-4">

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaWallet />

                    </div>

                    <h2 className="dashboard-value">

                        ₹1,20,000

                    </h2>

                    <h6 className="dashboard-title">

                        Total Fees

                    </h6>

                    <small className="dashboard-subtitle">

                        Academic Year Fees

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaCheckCircle />

                    </div>

                    <h2 className="dashboard-value">

                        ₹90,000

                    </h2>

                    <h6 className="dashboard-title">

                        Paid Amount

                    </h6>

                    <small className="dashboard-subtitle">

                        Fees Paid

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaClock />

                    </div>

                    <h2 className="dashboard-value">

                        ₹30,000

                    </h2>

                    <h6 className="dashboard-title">

                        Pending

                    </h6>

                    <small className="dashboard-subtitle">

                        Remaining Balance

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaMoneyBillWave />

                    </div>

                    <h2 className="dashboard-value">

                        Partial

                    </h2>

                    <h6 className="dashboard-title">

                        Status

                    </h6>

                    <small className="dashboard-subtitle">

                        Payment Status

                    </small>

                </div>

            </div>

        </div>

    );

}