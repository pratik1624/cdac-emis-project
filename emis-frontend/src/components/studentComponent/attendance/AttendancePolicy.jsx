import {
    FaCheckCircle,
    FaExclamationTriangle
} from "react-icons/fa";

export default function AttendancePolicy({ overallAttendance }) {

    const eligible = overallAttendance >= 75;

    return (

        <div className="attendance-policy">

            <h4 className="attendance-card-title">

                Attendance Policy

            </h4>

            <ul className="attendance-policy-list">

                <li>

                    <FaCheckCircle className="policy-icon success" />

                    <span>

                        Minimum Required : <strong>75%</strong>

                    </span>

                </li>

                <li>

                    <FaCheckCircle className="policy-icon success" />

                    <span>

                        Current Attendance : <strong>{overallAttendance}%</strong>

                    </span>

                </li>

                <li>

                    <FaCheckCircle
                        className={`policy-icon ${
                            eligible ? "success" : "warning"
                        }`}
                    />

                    <span>

                        {eligible
                            ? "Eligible to appear in examinations"
                            : "Not eligible to appear in examinations"}

                    </span>

                </li>

                <li>

                    <FaExclamationTriangle className="policy-icon warning" />

                    <span>

                        Continue maintaining attendance above <strong>75%</strong>

                    </span>

                </li>

            </ul>

        </div>

    );

}