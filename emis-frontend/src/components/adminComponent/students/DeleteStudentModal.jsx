export default function DeleteStudentModal({
  student,

  onDelete,

  onClose,
}) {
  if (!student) {
    return null;
  }

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",

        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Student</h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <p>
              Are you sure you want to delete
              <strong>
                {" "}
                {student.firstName} {student.lastName}
              </strong>
              ?
            </p>

            <p className="text-danger mb-0">This action cannot be undone.</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
