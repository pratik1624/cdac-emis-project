import { FaClipboardCheck } from "react-icons/fa";

export default function AttendanceDetails({ attendance }) {

    return (

        <div className="details-card">

            <div className="details-card-body">

                <h5 className="details-card-title">

                    <FaClipboardCheck className="details-title-icon" />

                    Attendance Summary

                </h5>

                <div className="table-responsive">

                    <table className="table details-table align-middle">

                        <thead>

                            <tr>

                                <th>

                                    Subject

                                </th>

                                <th>

                                    Attended

                                </th>

                                <th>

                                    Total Classes

                                </th>

                                <th>

                                    Percentage

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                attendance.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center"
                                        >

                                            No attendance available.

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    attendance.map((item, index) => (

                                        <tr key={index}>

                                            <td>

                                                {item.subjectName}

                                            </td>

                                            <td>

                                                {item.attendedClasses}

                                            </td>

                                            <td>

                                                {item.totalClasses}

                                            </td>

                                            <td>

                                                {item.percentage}%

                                            </td>

                                        </tr>

                                    ))

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}