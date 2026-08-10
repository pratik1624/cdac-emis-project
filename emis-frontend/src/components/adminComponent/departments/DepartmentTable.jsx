import { FaEdit, FaTrash } from "react-icons/fa";

export default function DepartmentTable({
  departments,

  onEdit,

  onDelete,
}) {
  if (departments.length === 0) {
    return <div className="empty-state">No departments found.</div>;
  }

  return (
    <div className="department-table-card">
      <div className="table-responsive">
        <table className="table table-hover align-middle department-table">
          <thead>
            <tr>
              <th>Department Code</th>

              <th>Department Name</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.departmentCode}</td>

                <td>{department.deptName}</td>

                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(department)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(department)}
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
