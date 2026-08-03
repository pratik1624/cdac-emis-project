export default function AttendanceSummary({ attendance }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    Attendance Summary

                </h5>

                <table className="table">

                    <thead>

                        <tr>

                            <th>Subject</th>

                            <th>Classes</th>

                            <th>%</th>

                        </tr>

                    </thead>

                    <tbody>

                        {attendance.map((item, index) => (

                            <tr key={index}>

                                <td>

                                    {item.subjectName}

                                </td>

                                <td>

                                    {item.attendedClasses}/{item.totalClasses}

                                </td>

                                <td>

                                    {item.percentage}%

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}