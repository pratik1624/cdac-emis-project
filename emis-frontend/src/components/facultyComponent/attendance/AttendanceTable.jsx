import AttendanceRow from "./AttendanceRow";

export default function AttendanceTable({

    students,

    setStudents,

    onUpload

}) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <table className="table table-hover align-middle">

                    <thead>

                        <tr>

                            <th>Roll No.</th>

                            <th>Student Name</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {students.map((student, index) => (

                            <AttendanceRow

                                key={student.studentId}
                                 student={student}

                                index={index}

                                students={students}

                                setStudents={setStudents}

                            />

                        ))}

                    </tbody>

                </table>

                <div className="text-end mt-4">

                    <button

                        className="btn btn-success"

                        onClick={onUpload}

                    >

                        Upload Attendance

                    </button>

                </div>

            </div>

        </div>

    );

}