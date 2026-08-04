export default function AttendanceTable({ attendance }) {

    const getStatus = (percentage) => {

        if (percentage >= 90) return "Excellent";

        if (percentage >= 75) return "Good";

        return "Low";

    };

    const getStatusClass = (percentage) => {

        if (percentage >= 90) return "excellent";

        if (percentage >= 75) return "good";

        return "low";

    };

    return (

        <div className="attendance-table">

            <div className="attendance-table-header">

                <div>Subject</div>

                <div>Attendance</div>

                <div>Percentage</div>

                <div>Status</div>

            </div>

            {

                attendance.length === 0 ?

                    (

                        <div className="attendance-empty">

                            No attendance records available.

                        </div>

                    )

                    :

                    (

                        attendance.map((item, index) => (

                            <div
                                key={index}
                                className="attendance-row"
                            >

                                {/* Subject */}

                                <div className="attendance-subject">

                                    <div className="subject-name">

                                        {item.subjectName}

                                    </div>

                                    <small>

                                        {item.attendedClasses} / {item.totalClasses} Classes

                                    </small>

                                </div>

                                {/* Progress */}

                                <div className="attendance-progress">

                                    <div className="progress">

                                        <div
                                            className={`progress-bar ${
                                                item.attendancePercentage >= 90
                                                    ? "bg-success"
                                                    : item.attendancePercentage >= 75
                                                    ? "bg-primary"
                                                    : "bg-danger"
                                            }`}
                                            style={{
                                                width: `${item.attendancePercentage}%`
                                            }}
                                        />

                                    </div>

                                </div>

                                {/* Percentage */}

                                <div className="attendance-percent">

                                    {item.attendancePercentage.toFixed(1)}%

                                </div>

                                {/* Status */}

                                <div className="attendance-status-cell">

                                    <span
                                        className={`status-pill ${getStatusClass(
                                            item.attendancePercentage
                                        )}`}
                                    >

                                        {getStatus(item.attendancePercentage)}

                                    </span>

                                </div>

                            </div>

                        ))

                    )

            }

        </div>

    );

}