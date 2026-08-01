export default function AttendanceOverview({
    overallAttendance,
    totalClasses,
    presentClasses,
    absentClasses
}) {

    const eligible = overallAttendance >= 75;

    return (

        <div className="attendance-overview">

            <h4 className="attendance-card-title">
                Attendance Overview
            </h4>

            <div className="attendance-overall">
                {overallAttendance}%
            </div>

            <h5 className="attendance-status">
                {overallAttendance >= 90
                    ? "Excellent Attendance"
                    : overallAttendance >= 75
                    ? "Good Attendance"
                    : "Low Attendance"}
            </h5>

            <div className="attendance-summary-list">

                <div className="attendance-summary-item">
                    <span>Present Classes</span>
                    <strong>{presentClasses}</strong>
                </div>

                <div className="attendance-summary-item">
                    <span>Absent Classes</span>
                    <strong>{absentClasses}</strong>
                </div>

                <div className="attendance-summary-item">
                    <span>Total Classes</span>
                    <strong>{totalClasses}</strong>
                </div>

                <div className="attendance-summary-item">
                    <span>Minimum Required</span>
                    <strong>75%</strong>
                </div>

            </div>

            <div
                className={`attendance-message ${
                    eligible ? "success" : "warning"
                }`}
            >
                {eligible
                    ? "✔ You are eligible to appear for examinations."
                    : "⚠ Your attendance is below the required limit."}
            </div>

        </div>

    );

}