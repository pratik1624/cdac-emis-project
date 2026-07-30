import {
    FaBookOpen,
    FaCheckCircle,
    FaTimesCircle,
    FaPercentage
} from "react-icons/fa";

export default function ResultSummary() {

    return (

        <div className="attendance-overview">

            <h4 className="attendance-card-title">

                Result Summary

            </h4>

            <div className="result-summary-list">

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaBookOpen className="summary-icon" />

                        <span>Total Subjects</span>

                    </div>

                    <strong>6</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaCheckCircle className="summary-icon text-success" />

                        <span>Passed</span>

                    </div>

                    <strong>6</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaTimesCircle className="summary-icon text-danger" />

                        <span>Failed</span>

                    </div>

                    <strong>0</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaBookOpen className="summary-icon" />

                        <span>Credits Earned</span>

                    </div>

                    <strong>24</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaPercentage className="summary-icon" />

                        <span>Percentage</span>

                    </div>

                    <strong>89%</strong>

                </div>

            </div>

        </div>

    );

}