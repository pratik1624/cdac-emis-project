import { FaEdit, FaTrash } from "react-icons/fa";

export default function StudentTable({
  students,

  onEdit,

  onDelete,
}) {
  if (students.length === 0) {
    return <div className="empty-state">No students found.</div>;
  }

  return (
    <div className="student-table-card">
      <div className="table-responsive">
        <table className="table table-hover align-middle student-table">
          <thead>
            <tr>
              <th>Roll No.</th>

              <th>Name</th>

              <th>Department</th>

              <th>Semester</th>

              <th>Email</th>

              <th>Phone</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.Id}>
                <td>{student.rollNumber}</td>

                <td>
                  {student.firstName} {student.lastName}
                </td>

                <td style={{ width: "260px" }}>{student.department}</td>

                <td style={{ width: "100px" }}>{student.semester}</td>

                <td>{student.email}</td>

                <td>{student.phone}</td>

                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(student)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(student)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
