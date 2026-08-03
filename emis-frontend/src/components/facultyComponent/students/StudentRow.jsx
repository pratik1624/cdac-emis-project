import { Link } from "react-router-dom";

export default function StudentRow({ student }) {

    return (

        <tr>

            <td>

                {student.rollNumber}

            </td>

            <td>

                {student.studentName}

            </td>

            <td>

                {student.semester}

            </td>

            <td>

                {student.email}

            </td>

            <td>

                <Link

                    to={`/faculty/students/${student.studentId}`}

                    className="btn btn-primary btn-sm"

                >

                    View

                </Link>

            </td>

        </tr>

    );

}