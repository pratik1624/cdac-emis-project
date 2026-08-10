import { FaEdit, FaTrash } from "react-icons/fa";

export default function FacultyTable({
  faculty,

  onEdit,

  onDelete,
}) {
  if (faculty.length === 0) {
    return <div className="empty-state">No faculty found.</div>;
  }

  return (
    <div className="faculty-table-card">
      <div className="table-responsive">
        <table className="table table-hover align-middle faculty-table">
          <thead>
            <tr>
              <th>Employee Code</th>

              <th>Faculty Name</th>

              <th>Department</th>

              <th>Designation</th>

              <th>Email</th>

              <th>Phone</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((member) => (
              <tr key={member.Id}>
                <td>{member.employeeCode}</td>

                <td>
                  {member.firstName} {member.lastName}
                </td>

                <td>{member.department}</td>

                <td>{member.designation}</td>

                <td>{member.email}</td>

                <td>{member.phone}</td>

                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(member)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(member)}
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
