import {
    FaInfoCircle,
    FaExclamationCircle,
    FaDownload,
    FaUniversity
} from "react-icons/fa";

export default function FeeInstructions() {

    return (

        <div className="attendance-policy">

            <h4 className="attendance-card-title">

                Important Instructions

            </h4>

            <div className="result-summary-list">

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaInfoCircle className="summary-icon" />

                        <span>

                            Pay fees before the due date.

                        </span>

                    </div>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaDownload className="summary-icon" />

                        <span>

                            Download and keep payment receipts.

                        </span>

                    </div>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaUniversity className="summary-icon" />

                        <span>

                            Contact the Accounts Office for any fee-related queries.

                        </span>

                    </div>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaExclamationCircle className="summary-icon text-warning" />

                        <span>

                            Late payments may attract additional penalties.

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}