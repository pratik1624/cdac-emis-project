import { FaEdit, FaTrash, FaBullhorn, FaCalendarAlt } from "react-icons/fa";

export default function NoticeTable({
  notices,

  onEdit,

  onDelete,
}) {
  if (notices.length === 0) {
    return (
      <div className="notice-empty-state">
        <FaBullhorn className="empty-icon" />

        <h4>No Notices Found</h4>

        <p>Publish your first notice to inform students and faculty.</p>
      </div>
    );
  }

  return (
    <div className="notice-table-card">
      <div className="table-responsive">
        <table className="table table-hover align-middle notice-table">
          <thead>
            <tr>
              <th width="30%">Notice</th>

              <th width="45%">Description</th>

              <th width="15%">Publish Date</th>

              <th width="10%" className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>
                  <div className="notice-title">
                    <FaBullhorn className="notice-icon" />

                    <span>{notice.title}</span>
                  </div>
                </td>

                <td>
                  <div className="notice-description">{notice.description}</div>
                </td>

                <td>
                  <span className="publish-date">
                    <FaCalendarAlt className="me-2" />

                    {new Date(notice.publishDate).toLocaleDateString()}
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(notice)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(notice)}
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
