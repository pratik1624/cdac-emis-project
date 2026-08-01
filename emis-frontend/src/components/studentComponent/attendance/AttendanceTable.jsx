export default function AttendanceTable({ attendance }) {

    const getStatus = (percentage) => {

        if (percentage >= 90)
            return "Excellent";

        if (percentage >= 75)
            return "Good";

        return "Low";

    };

    return (

        <div className="attendance-table">

            <div className="attendance-table-header">

                <div>Subject</div>

                <div>Attendance</div>

                <div>%</div>

                <div>Status</div>

            </div>

            {

                attendance.map((item, index) => (

                    <div
                        key={index}
                        className="attendance-row"
                    >

                        <div className="attendance-subject">

                            {item.subjectName}

                        </div>

                        <div className="attendance-progress">

                            <div className="progress">

                                <div
                                    className="progress-bar bg-success"
                                    style={{
                                        width: `${item.attendancePercentage}%`
                                    }}
                                />

                            </div>

                        </div>

                        <div className="attendance-percent">

                            {item.attendancePercentage.toFixed(1)}%

                        </div>

                        <div>

                            <span
                                className={
                                    item.attendancePercentage >= 90
                                        ? "status-pill excellent"
                                        : item.attendancePercentage >= 75
                                        ? "status-pill good"
                                        : "status-pill low"
                                }
                            >

                                {getStatus(item.attendancePercentage)}

                            </span>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}