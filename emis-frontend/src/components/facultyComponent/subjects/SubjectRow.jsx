import { Link } from "react-router-dom";

export default function SubjectRow({ subject }) {

    return (

        <tr>

            <td>

                {subject.subjectCode}

            </td>

            <td>

                {subject.subjectName}

            </td>

            <td>

                {subject.semester}

            </td>

            <td>

                <Link

                    to={`/faculty/subjects/${subject.subjectId}`}

                    className="btn btn-success btn-sm"

                >

                    Manage Marks

                </Link>

            </td>

        </tr>

    );

}