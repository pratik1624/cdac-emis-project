export default function AttendanceRow({

    student,

    index,

    students,

    setStudents

}) {

    const handleStatus = (status) => {

        const updated = [...students];

        updated[index].present = status;

        setStudents(updated);

    };

    return (

        <tr>

            <td>

                {student.rollNo}

            </td>

            <td>

                {student.firstName} {student.lastName}

            </td>

            <td>

                <div className="d-flex gap-4">

                    <div className="form-check">

                        <input
                            type="radio"
                            className="form-check-input"
                            name={`attendance-${student.studentId}`}
                            checked={student.present === true}
                            onChange={() => handleStatus(true)}
                        />

                        <label className="form-check-label">

                            Present

                        </label>

                    </div>

                    <div className="form-check">

                        <input
                            type="radio"
                            className="form-check-input"
                            name={`attendance-${student.studentId}`}
                            checked={student.present === false}
                            onChange={() => handleStatus(false)}
                        />

                        <label className="form-check-label">

                            Absent

                        </label>

                    </div>

                </div>

            </td>

        </tr>

    );

}