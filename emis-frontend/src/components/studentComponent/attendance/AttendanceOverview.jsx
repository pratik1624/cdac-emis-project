import {
    FaCheckCircle,
    FaTimesCircle,
    FaCalendarAlt,
    FaPercentage
} from "react-icons/fa";

export default function AttendanceOverview({

    overallAttendance,

    totalClasses,

    presentClasses,

    absentClasses

}) {

    const percentage = Number(overallAttendance);

    const eligible = percentage >= 75;

    const status =

        percentage >= 90

            ? "Excellent Attendance"

            : percentage >= 75

            ? "Good Attendance"

            : "Low Attendance";

    return (

        <div className="attendance-overview">

            <div className="attendance-overview-header">

                <h4 className="attendance-card-title">

                    Attendance Overview

                </h4>

                <div className="attendance-overall">

                    {overallAttendance}%

                </div>

                <p className="attendance-status">

                    {status}

                </p>

            </div>

            <div className="attendance-summary-list">

                <div className="attendance-summary-item">

                    <div className="summary-left">

                        <FaCheckCircle className="summary-icon success" />

                        <span>Present Classes</span>

                    </div>

                    <strong>

                        {presentClasses}

                    </strong>

                </div>

                <div className="attendance-summary-item">

                    <div className="summary-left">

                        <FaTimesCircle className="summary-icon danger" />

                        <span>Absent Classes</span>

                    </div>

                    <strong>

                        {absentClasses}

                    </strong>

                </div>

                <div className="attendance-summary-item">

                    <div className="summary-left">

                        <FaCalendarAlt className="summary-icon primary" />

                        <span>Total Classes</span>

                    </div>

                    <strong>

                        {totalClasses}

                    </strong>

                </div>

                <div className="attendance-summary-item">

                    <div className="summary-left">

                        <FaPercentage className="summary-icon warning" />

                        <span>Required Attendance</span>

                    </div>

                    <strong>

                        75%

                    </strong>

                </div>

            </div>

            <div
                className={`attendance-message ${
                    eligible
                        ? "message-success"
                        : "message-warning"
                }`}
            >

                {

                    eligible

                        ? "You have maintained the required attendance and are eligible for examinations."

                        : "Your attendance is below the required limit. Attend upcoming classes to become eligible."

                }

            </div>

        </div>

    );

}