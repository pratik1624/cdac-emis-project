export default function AttendanceRow({

    student,

    onStatusChange

}) {

    return (

        <tr>

            <td>

                {student.rollNo}

            </td>

            <td>

                {student.firstName} {student.lastName}

            </td>

            <td className="text-center">

                <div className="btn-group">

                    <button

                        className={`btn btn-sm ${
                            student.status === "Present"
                                ? "btn-success"
                                : "btn-outline-success"
                        }`}

                        onClick={() =>
                            onStatusChange(
                                student.studentId,
                                "Present"
                            )
                        }

                    >

                        Present

                    </button>

                    <button

                        className={`btn btn-sm ${
                            student.status === "Absent"
                                ? "btn-danger"
                                : "btn-outline-danger"
                        }`}

                        onClick={() =>
                            onStatusChange(
                                student.studentId,
                                "Absent"
                            )
                        }

                    >

                        Absent

                    </button>

                </div>

            </td>

        </tr>

    );

}