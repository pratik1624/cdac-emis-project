import { FaEdit, FaTrash, FaBookOpen } from "react-icons/fa";

export default function SubjectTable({
  subjects,

  onEdit,

  onDelete,
}) {
  if (subjects.length === 0) {
    return (
      <div className="subject-empty-state">
        <FaBookOpen className="empty-icon" />

        <h4>No Subjects Found</h4>

        <p>Click the "Add Subject" button to create your first subject.</p>
      </div>
    );
  }

  return (
    <div className="subject-table-card">
      <div className="table-responsive">
        <table className="table table-hover align-middle subject-table">
          <thead>
            <tr>
              <th>Subject Code</th>

              <th>Subject Name</th>

              <th>Department</th>

              <th>Semester</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.Id}>
                <td>
                  <span className="subject-code">{subject.subjectCode}</span>
                </td>

                <td>
                  <strong>{subject.subjectName}</strong>
                </td>

                <td>
                  <span className="badge bg-success">{subject.department}</span>
                </td>

                <td >Semester {subject.semester}</td>

                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(subject)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(subject)}
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
