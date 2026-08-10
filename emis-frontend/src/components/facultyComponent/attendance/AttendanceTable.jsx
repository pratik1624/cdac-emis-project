import { FaUpload } from "react-icons/fa";
import { uploadAttendance } from "../../../api/facultyApi";

export default function AttendanceTable({

    students,

    setStudents

}) {

    const handleStatusChange = (studentId, status) => {

        const updatedStudents = students.map(student =>

            student.studentId === studentId

                ? { ...student, status }

                : student

        );

        setStudents(updatedStudents);

    };

const handleUpload = async () => {

    try {

        const request = {

            semester: Number(
                localStorage.getItem("attendanceSemester")
            ),

            subjectId: Number(
                localStorage.getItem("attendanceSubjectId")
            ),

            students: students.map(student => ({

                studentId: student.studentId,

                present: student.status === "Present"

            }))

        };

        await uploadAttendance(request);

        alert("Attendance uploaded successfully.");

    }

    catch (err) {

        console.log(err);

        alert("Failed to upload attendance.");

    }

};


    if (students.length === 0) {

        return (

            <div className="empty-state">

                No students loaded.

            </div>

        );

    }

    return (

        <div className="attendance-table-card">

            <div className="table-responsive">

                <table className="table attendance-table align-middle">

                    <thead>

                        <tr>

                            <th>Roll Number</th>

                            <th>Student Name</th>

                            <th className="text-center">

                                Attendance

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            students.map(student => (

                                <tr key={student.studentId}>

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
                                                    handleStatusChange(
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
                                                    handleStatusChange(
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

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="text-end mt-4">

                <button

                    className="btn btn-success"

                    onClick={handleUpload}

                >

                    <FaUpload className="me-2" />

                    Upload Attendance

                </button>

            </div>

        </div>

    );

}