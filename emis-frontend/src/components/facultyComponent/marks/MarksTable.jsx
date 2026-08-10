import { FaSave } from "react-icons/fa";

export default function MarksTable({

    marks,

    setMarks,

    onSave

}) {

    const handleMarksChange = (studentId, value) => {

        const updatedMarks = marks.map(student =>

            student.studentId === studentId

                ? {
                    ...student,
                    obtainedMarks: value
                }

                : student

        );

        setMarks(updatedMarks);

    };

    if (marks.length === 0) {

        return (

            <div className="empty-state">

                No student marks found.

            </div>

        );

    }

    return (

        <div className="marks-table-card">

            <div className="table-responsive">

                <table className="table marks-table align-middle">

                    <thead>

                        <tr>

                            <th>

                                Roll Number

                            </th>

                            <th>

                                Student Name

                            </th>

                            <th>

                                Obtained Marks

                            </th>

                            <th>

                                Total Marks

                            </th>

                            <th>

                                Grade

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            marks.map(student => (

                                <tr key={student.resultId}>

                                    <td>

                                        {student.rollNumber}

                                    </td>

                                    <td>

                                        {student.studentName}

                                    </td>

                                    <td>

                                        <input

                                            type="number"

                                            className="form-control"

                                            value={student.obtainedMarks}

                                            min="0"

                                            max={student.totalMarks}

                                            onChange={(e) =>

                                                handleMarksChange(

                                                    student.studentId,

                                                    e.target.value

                                                )

                                            }

                                        />

                                    </td>

                                    <td>

                                        {student.totalMarks}

                                    </td>

                                    <td>

                                        <span
                                            className={`grade-badge ${student.grade.toLowerCase()}`}
                                        >

                                            {student.grade}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="text-end mt-4">

                <button

                    className="btn btn-success"

                    onClick={onSave}

                >

                    <FaSave className="me-2" />

                    Save Marks

                </button>

            </div>

        </div>

    );

}