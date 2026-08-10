import { Link } from "react-router-dom";

import { FaClipboardList } from "react-icons/fa";

export default function SubjectTable({ subjects }) {

    if (subjects.length === 0) {

        return (

            <div className="empty-state">

                No subjects found.

            </div>

        );

    }

    return (

        <div className="subject-table-card">

            <div className="table-responsive">

                <table className="table subject-table align-middle">

                    <thead>

                        <tr>

                            <th>Subject Code</th>

                            <th>Subject Name</th>

                            <th>Semester</th>

                            <th className="text-center">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            subjects.map((subject) => (

                                <tr key={subject.subjectId}>

                                    <td>

                                        {subject.subjectCode}

                                    </td>

                                    <td>

                                        {subject.subjectName}

                                    </td>

                                    <td>

                                        Semester {subject.semester}

                                    </td>

                                    <td className="text-center">

                                        <Link

                                            to={`/faculty/subjects/${subject.subjectId}/marks`}

                                            className="btn btn-success btn-sm"

                                        >

                                            <FaClipboardList className="me-2" />

                                            Manage Marks

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