import { Link } from "react-router-dom";

import {
    FaEye
} from "react-icons/fa";

export default function StudentTable({ students }) {

    if (students.length === 0) {

        return (

            <div className="empty-state">

                No students found.

            </div>

        );

    }

    return (

        <div className="student-table-card">

            <div className="table-responsive">

                <table className="table student-table align-middle">

                    <thead>

                        <tr>

                            <th>

                                Roll Number

                            </th>

                            <th>

                                Student Name

                            </th>

                            <th>

                                Semester

                            </th>

                            <th>

                                Email

                            </th>

                            <th className="text-center">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            students.map((student) => (

                                <tr key={student.studentId}>

                                    <td>

                                        {student.rollNumber}

                                    </td>

                                    <td>

                                        {student.studentName}

                                    </td>

                                    <td>

                                        Semester {student.semester}

                                    </td>

                                    <td>

                                        {student.email}

                                    </td>

                                    <td className="text-center">

                                        <Link

                                            to={`/faculty/students/${student.studentId}`}

                                            className="btn btn-success btn-sm"

                                        >

                                            <FaEye className="me-2" />

                                            View

                                        </Link>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}