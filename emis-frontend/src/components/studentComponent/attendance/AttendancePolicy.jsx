import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaPercentage,
    FaUserCheck
} from "react-icons/fa";

export default function AttendancePolicy({ overallAttendance }) {

    const percentage = Number(overallAttendance);

    const eligible = percentage >= 75;

    return (

        <div className="attendance-policy">

            <div className="attendance-policy-header">

                <h4 className="attendance-card-title">

                    Attendance Policy

                </h4>

                <p className="attendance-policy-subtitle">

                    College attendance rules and your current eligibility.

                </p>

            </div>

            <div className="attendance-policy-list">

                <div className="attendance-policy-item">

                    <div className="policy-icon-wrapper">

                        <FaPercentage className="policy-icon primary" />

                    </div>

                    <div className="policy-content">

                        <h6>

                            Minimum Attendance

                        </h6>

                        <p>

                            Students must maintain at least <strong>75%</strong> attendance during the semester.

                        </p>

                    </div>

                </div>

                <div className="attendance-policy-item">

                    <div className="policy-icon-wrapper">

                        <FaCheckCircle className="policy-icon success" />

                    </div>

                    <div className="policy-content">

                        <h6>

                            Current Attendance

                        </h6>

                        <p>

                            Your attendance is currently <strong>{overallAttendance}%</strong>.

                        </p>

                    </div>

                </div>

                <div className="attendance-policy-item">

                    <div className="policy-icon-wrapper">

                        <FaUserCheck
                            className={`policy-icon ${
                                eligible ? "success" : "danger"
                            }`}
                        />

                    </div>

                    <div className="policy-content">

                        <h6>

                            Examination Eligibility

                        </h6>

                        <p>

                            {

                                eligible

                                    ? "You are eligible to appear for examinations."

                                    : "Your attendance is below the required limit."

                            }

                        </p>

                    </div>

                </div>

                <div className="attendance-policy-item">

                    <div className="policy-icon-wrapper">

                        <FaExclamationTriangle className="policy-icon warning" />

                    </div>

                    <div className="policy-content">

                        <h6>

                            Recommendation

                        </h6>

                        <p>

                            Attend all upcoming lectures to maintain attendance above <strong>75%</strong>.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}